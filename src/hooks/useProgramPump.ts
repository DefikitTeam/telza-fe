import { useCallback, useMemo } from 'react'

import { Pump } from '@/idl/pump'
import { useAppSelector } from '@/lib/hooks'
import { defaultEndpoint, MICRO_LAMPORTS_PER_LAMPORTS, MINIMUM_TRANSACTION_FEE_IN_SOL } from '@/stores/app.slice'
import { createTraderAPIMemoInstruction } from '@/utils/broxRoute'
import { isProd } from '@/utils/getEnvironment'
import { AnchorProvider, BN, Program } from '@coral-xyz/anchor'
import AmmImpl from '@mercurial-finance/dynamic-amm-sdk'
import { findMetadataPda } from '@metaplex-foundation/mpl-token-metadata'
import { publicKey } from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { BPF_UPGRADE_LOADER_ID } from '@solana/spl-governance'
import { createAssociatedTokenAccountInstruction, getAccount, getAssociatedTokenAddress } from '@solana/spl-token'
import { AnchorWallet, useAnchorWallet } from '@solana/wallet-adapter-react'
import {
  clusterApiUrl,
  ComputeBudgetProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction
} from '@solana/web3.js'

// import { getSimulationComputeUnits } from '@solana-developers/helpers';
import BigNumber from 'bignumber.js'
import { useSnackbar } from 'notistack'

export const WSOL_ADDRESS = 'So11111111111111111111111111111111111111112'
export const SOL = new PublicKey('So11111111111111111111111111111111111111112')
const TRADER_API_TIP_WALLET =
  process.env.NEXT_PUBLIC_TRADER_API_TIP_WALLET || '6UH3e8ZNGmrrT2UfRsMGTcbvedKirvimWtRuV4dtUfpH'
const METEORA_TELAZ_FEE_WALLET =
  process.env.NEXT_PUBLIC_METEORA_TELAZ_FEE_WALLET || 'DSLcVYTaZFiHf33KnjoDCcF9ecvhk9mLew6tHTSivkiu'
/**
 * Custom hook for interacting with the Pump program.
 * @returns {Object} An object containing various functions and properties for program interaction.
 */
export const useProgramPump = () => {
  const { enqueueSnackbar } = useSnackbar()
  const wallet = useAnchorWallet()
  const connection = useMemo(() => new Connection(defaultEndpoint, { commitment: 'confirmed' }), [wallet])
  const { frontRunProtect } = useAppSelector((state) => state.appStore)

  /**
   * Memoized AnchorProvider instance.
   */
  const provider = useMemo(() => {
    if (!connection) return null
    if (!wallet) {
      const dummyWallet = {
        publicKey: Keypair.generate().publicKey,
        signTransaction: () => Promise.reject(),
        signAllTransactions: () => Promise.reject()
      }
      return new AnchorProvider(connection, dummyWallet, { commitment: 'confirmed' })
    }
    return new AnchorProvider(connection, wallet, { commitment: 'confirmed' })
  }, [connection, wallet])

  /**
   * Memoized Program instance.
   */
  const program = useMemo(() => {
    if (!provider) return null

    try {
      const IDL: Pump = require('../idl/pump.json')
      return new Program(IDL, provider)
    } catch (error) {
      console.error('Failed to create program:', error)
      return null
    }
  }, [provider])

  /**
   * Creates a new coin.
   * @param {string} name - The name of the coin.
   * @param {string} ticker - The ticker symbol of the coin.
   * @param {string} uri - The URI for the coin's metadata.
   * @param {number} marketCapIndex - The market cap index for the coin.
   * @param {boolean} aiGenerated - Whether the coin is AI-generated.
   */
  const createNewCoin = useCallback(
    async (name: string, ticker: string, uri: string, marketCapIndex: number, aiGenerated: boolean) => {
      if (!program || !wallet) {
        throw new Error('Program or wallet not initialized')
      }
      // eslint-disable-next-line no-useless-catch
      try {
        if (!validateParams(name, ticker, uri, marketCapIndex)) {
          throw new Error('Invalid params')
        }
        const mint = Keypair.generate()
        const umi = createUmi(defaultEndpoint)
        const [metadataString] = findMetadataPda(umi, { mint: publicKey(mint.publicKey.toBase58()) })
        const metadata = new PublicKey(metadataString)
        const tx = new Transaction().add(
          await program.methods
            .create(marketCapIndex, name, ticker, uri, aiGenerated)
            .accounts({
              user: wallet.publicKey,
              mint: mint.publicKey,
              metadata,
              program: program.programId
            })
            .instruction()
        )

        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey

        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        recoverTx.partialSign(mint)
        const signedTx = await wallet.signTransaction(recoverTx)

        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))

        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error: any) {
        throw error
      }
    },
    [program, wallet]
  )

  const createNewCoinAndBuy = useCallback(
    async (name: string, ticker: string, uri: string, marketCapIndex: number, aiGenerated: boolean, sol: number) => {
      if (!program || !wallet) {
        throw new Error('Program or wallet not initialized')
      }
      if (!validateParams(name, ticker, uri, marketCapIndex)) {
        throw new Error('Invalid params')
      }
      // eslint-disable-next-line no-useless-catch
      try {
        const mint = Keypair.generate()
        const [global, pump] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const [bondingCurve, _] = PublicKey.findProgramAddressSync(
          [Buffer.from('bonding_curve'), mint.publicKey.toBuffer()],
          program.programId
        )
        await getAssociatedTokenAddress(mint.publicKey, bondingCurve, true)
        const associatedUser = await getAssociatedTokenAddress(mint.publicKey, wallet.publicKey)
        const umi = createUmi(defaultEndpoint)
        const [metadataString] = findMetadataPda(umi, { mint: publicKey(mint.publicKey.toBase58()) })
        const metadata = new PublicKey(metadataString)
        const tx = new Transaction()
        tx.add(
          await program.methods
            .create(marketCapIndex, name, ticker, uri, aiGenerated)
            .accounts({
              user: wallet.publicKey,
              mint: mint.publicKey,
              metadata,
              program: program.programId
            })
            .instruction()
        )
        tx.add(
          createAssociatedTokenAccountInstruction(wallet.publicKey, associatedUser, wallet.publicKey, mint.publicKey)
        )
        const globalAccount = await program.account.global.fetch(global)
        const estAmountToken = await calcAmountOutBuy(marketCapIndex, sol.toString(), mint.publicKey.toBase58())
        const amountToken = new BN(new BigNumber(estAmountToken).times(10 ** 6).toNumber())
        tx.add(
          await program.methods
            .buy(marketCapIndex, amountToken, new BN(new BigNumber(sol).times(LAMPORTS_PER_SOL).toNumber()), globalAccount.referralFee)
            .accounts({
              user: wallet.publicKey,
              mint: mint.publicKey,
              referral: globalAccount.feeRecipient,
              program: program.programId
            })
            .instruction()
        )

        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        recoverTx.partialSign(mint)
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error: any) {
        throw error
      }
    },
    [program, wallet]
  )

  /**
   * Executes a buy transaction.
   * @param {number} marketCapIndex - The market cap index.
   * @param {number} amountToken - The amount of tokens to buy.
   * @param {number} amountMaxSol - The maximum amount of SOL to spend.
   * @param {string} token - The token address.
   * @param {number} priorityFee - The priority fee for the transaction.
   * @param {string} [referralAddress] - Optional referral address.
   * @param {number} [referralFee] - Optional referral fee.
   * @returns {Promise<string>} The transaction signature.
   */
  const buy = useCallback(
    async (
      marketCapIndex: number,
      amountToken: string,
      amountMaxSol: string,
      token: string,
      priorityFee: number,
      referralAddress?: string,
      referralFee?: number
    ) => {
      if (!program || !wallet || !token) {
        enqueueSnackbar({
          action: 'Buy failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return
      }
      try {
        const mint = new PublicKey(token)
        let referral: PublicKey
        let feeReferral: number = 10
        const [global, _] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const globalData = await program.account.global.fetch(global)
        if (referralAddress) {
          referral = new PublicKey(referralAddress)
          feeReferral = Number(referralFee || 10) * 100;
          const referralBalance = await connection.getBalance(referral)
          // Referral which has less than 0.00100224 SOL is not initialized, so we use the fee recipient as referral
          if (referralBalance < 100224) {
            referral = globalData.feeRecipient
          }
        } else {
          referral = globalData.feeRecipient // change to referral address
        }
        let tx = new Transaction()
        const associatedUser = await getAssociatedTokenAddress(mint, wallet.publicKey)
        try {
          await getAccount(connection, associatedUser)
        } catch (error) {
          tx.add(createAssociatedTokenAccountInstruction(wallet.publicKey, associatedUser, wallet.publicKey, mint))
        }
        console.log("feeReferral - ", feeReferral);
        console.log("referral - ", referral.toBase58());
        tx.add(
          await program.methods
            .buy(
              marketCapIndex,
              new BN(new BigNumber(amountToken).times(10 ** 6).toNumber()),
              new BN(new BigNumber(amountMaxSol).times(LAMPORTS_PER_SOL).toNumber()),
              feeReferral,
            )
            .accounts({
              user: wallet.publicKey,
              mint,
              referral,
              program: program.programId
            })
            .instruction()
        )
        // check priority fee
        if (priorityFee > MINIMUM_TRANSACTION_FEE_IN_SOL) {
          tx = await addPriorityFee(tx, wallet, priorityFee)
        }

        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        console.log('come in here3: ', signedTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        let latestBlockHash = await connection.getLatestBlockhash()
        console.log('🚀 ~ buy ~ txSignature:', txSignature)
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error: any) {
        console.log('🚀 ~ buy ~ error:', error)
        throw error
      }
    },
    [program, wallet, frontRunProtect]
  )

  const sell = useCallback(
    async (
      marketCapIndex: number,
      amountToken: string,
      token: string,
      minSolOut: string,
      priorityFee: number,
      referralAddress?: string,
      referralFee?: number
    ) => {
      if (!program || !wallet || !token) {
        enqueueSnackbar({
          action: 'Sell failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return
      }
      try {
        const mint = new PublicKey(token)
        let referral: PublicKey
        let feeReferral: number = 10
        const [global, _] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const globalData = await program.account.global.fetch(global)
        if (referralAddress) {
          referral = new PublicKey(referralAddress)
          feeReferral = Number(referralFee || 10) * 100;
          const referralBalance = await connection.getBalance(referral)
          // Referral which has less than 0.00100224 SOL is not initialized, so we use the fee recipient as referral
          if (referralBalance < 100224) {
            referral = globalData.feeRecipient
          }
        } else {
          referral = globalData.feeRecipient // change to referral address
        }
        let tx = new Transaction()
        const associatedUser = await getAssociatedTokenAddress(mint, wallet.publicKey)
        try {
          await getAccount(connection, associatedUser)
        } catch (error) {
          tx.add(createAssociatedTokenAccountInstruction(wallet.publicKey, associatedUser, wallet.publicKey, mint))
        }
        console.log("feeReferral - ", feeReferral);
        console.log("referral - ", referral.toBase58());
        tx.add(
          await program.methods
            .sell(
              marketCapIndex,
              new BN(new BigNumber(amountToken).times(10 ** 6).toNumber()),
              new BN(new BigNumber(minSolOut).times(LAMPORTS_PER_SOL).toNumber()),
              feeReferral,
            )
            .accounts({
              user: wallet.publicKey,
              mint,
              referral,
              program: program.programId
            })
            .instruction()
        )
        // check priority fee
        if (priorityFee > MINIMUM_TRANSACTION_FEE_IN_SOL) {
          tx = await addPriorityFee(tx, wallet, priorityFee)
        }
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        let latestBlockHash = await connection.getLatestBlockhash()
        console.log('🚀 ~ sell ~ txSignature:', txSignature)
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error) {
        console.log('🚀 ~ sell ~ error:', error)
        throw error
      }
    },
    [program, wallet, frontRunProtect]
  )

  // // admin function
  const getConfig = useCallback(async () => {
    if (!program || !wallet) {
      throw new Error('Program or wallet not initialized')
    }
    try {
      const [global, _] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
      const globalData = await program.account.global.fetch(global)
      return globalData
    } catch (error) {
      console.log('🚀 ~ getConfig ~ error:', error)
      throw error
    }
  }, [program, wallet])

  const updateConfig = useCallback(
    async (
      newAdmin?: string,
      newFee?: number,
      newReferralFee?: number,
      newFeeRecipient?: string,
      newRaydiumMigrator?: string,
      newDefaultTokenDecimals?: number
    ) => {
      if (!program || !wallet) {
        throw new Error('Program or wallet not initialized')
      }
      try {
        const [global, _] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const globalData = await program.account.global.fetch(global)
        const updateParams: any = {}
        if (newAdmin) updateParams.admin = new PublicKey(newAdmin)
        if (newFee) updateParams.fee = newFee
        if (newFeeRecipient) updateParams.feeRecipient = new PublicKey(newFeeRecipient)
        if (newReferralFee) updateParams.referralFee = new BN(newReferralFee)
        if (newRaydiumMigrator) updateParams.raydiumMigrator = new PublicKey(newRaydiumMigrator)
        if (newDefaultTokenDecimals) updateParams.defaultTokenDecimals = newDefaultTokenDecimals
        const updatedGlobalData = { ...globalData, ...updateParams }
        const tx = new Transaction().add(
          await program.methods
            .updateConfig(
              updatedGlobalData.admin,
              updateParams.fee,
              updateParams.referralFee,
              updateParams.feeRecipient,
              updateParams.raydiumMigrator,
              updateParams.defaultTokenDecimals
            )
            .accounts({
              admin: wallet.publicKey
            })
            .instruction()
        )

        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        console.log('🚀 ~ update-config ~ txSignature:', txSignature)
        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error) {
        console.log('🚀 ~ updateConfig ~ error:', error)
        throw error
      }
    },
    [program, wallet]
  )

  const updateAuthority = useCallback(
    async (newAuthority: string) => {
      if (!program || !wallet) {
        throw new Error('Program or wallet not initialized')
      }
      try {
        const newUpgradeAuthority = new PublicKey(newAuthority)
        const tx = new Transaction().add(
          await createSetUpgradeAuthority(program.programId, wallet.publicKey, newUpgradeAuthority)
        )

        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        console.log('🚀 ~ setUpgradeAuthority ~ txSignature:', txSignature)
        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error) {
        console.log('🚀 ~ updateAuthority ~ error:', error)
        throw error
      }
    },
    [program, wallet]
  )

  /**
   * Calculates the amount of tokens to receive when buying.
   * @param {number} marketCapIndex - The market cap index.
   * @param {string} amountSolIn - The amount of SOL to spend.
   * @param {string} tokenOutAddr - The address of the token to receive.
   * @returns {Promise<number>} The amount of tokens to receive.
   */
  const calcAmountOutBuy = useCallback(
    async (marketCapIndex: number, amountSolIn: string, tokenOutAddr: string): Promise<number> => {
      try {
        if (!program || !connection) {
          enqueueSnackbar({
            action: 'Calculate amount out failed',
            message: 'Program not initialized',
            variant: 'error'
          })
          return 0
        }
        marketCapIndex = marketCapIndex || 1
        const mint = new PublicKey(tokenOutAddr)
        const amountIn = new BN(new BigNumber(amountSolIn).times(10 ** 9).toNumber())
        const [marketCap] = PublicKey.findProgramAddressSync(
          [Buffer.from('market_cap'), new Uint8Array([marketCapIndex])],
          program.programId
        )
        const [bondingCurve, _] = PublicKey.findProgramAddressSync(
          [Buffer.from('bonding_curve'), mint.toBuffer()],
          program.programId
        )
        const marketCapInfo = await connection.getAccountInfo(marketCap)
        if (!marketCapInfo) {
          enqueueSnackbar({
            action: 'Calculate amount out failed',
            message: 'Market cap not found',
            variant: 'error'
          })
          return 0
        }
        const marketCapData = await program.account.marketCap.fetch(marketCap)
        let tokenLeft = new BN(0)
        let bondingCurveData: {
          bump: number
          marketCap: PublicKey
          reserveSol: BN
          reserveToken: BN
          completed: boolean
        }
        const bondingCurveInfo = await connection.getAccountInfo(bondingCurve)
        if (!bondingCurveInfo) {
          bondingCurveData = {
            bump: 0,
            marketCap: marketCap,
            reserveSol: marketCapData.defaultSolReserves,
            reserveToken: marketCapData.defaultTokenReserves,
            completed: false
          }
          tokenLeft = marketCapData.defaultTokenReserves.sub(
            marketCapData.defaultTokenReserves.sub(marketCapData.defaultTotalSupply) // tokenSold
          )
        } else {
          bondingCurveData = await program.account.bondingCurve.fetch(bondingCurve)
          tokenLeft = bondingCurveData.reserveToken.sub(
            marketCapData.defaultTokenReserves.sub(marketCapData.defaultTotalSupply) // tokenSold
          )
        }

        let amountOut: BN
        amountOut = bondingCurveData.reserveToken.mul(amountIn).div(bondingCurveData.reserveSol.add(amountIn))
        amountOut = new BigNumber(amountOut.toNumber()).gt(tokenLeft.toNumber()) ? tokenLeft : amountOut
        return new BigNumber(amountOut.toNumber()).div(10 ** 6).toNumber()
      } catch (e) {
        console.log('🚀 ~ calcAmountOutBuy ~ error:', e)
        return 0
      }
    },
    [program, connection]
  )

  /**
   * Calculates the amount of SOL to receive when selling tokens.
   * @param {number} marketCapIndex - The market cap index.
   * @param {string} tokenInAddr - The address of the token to sell.
   * @param {string} amountInNumber - The amount of tokens to sell.
   * @param {number} slippage - The slippage percentage.
   * @returns {Promise<number[]>} An array containing the amount of SOL to receive and the amount with slippage.
   */
  const calcAmountOutSell = useCallback(
    async (
      marketCapIndex: number,
      tokenInAddr: string,
      amountInNumber: string,
      slippage: number
    ): Promise<string[]> => {
      try {
        if (!program || !connection) {
          enqueueSnackbar({
            action: 'Calculate amount out failed',
            message: 'Program not initialized',
            variant: 'error'
          })
          return ['', '']
        }
        marketCapIndex = marketCapIndex || 1
        const mint = new PublicKey(tokenInAddr)
        const amountIn = new BN(new BigNumber(amountInNumber).times(10 ** 6).toNumber())

        const [marketCap] = PublicKey.findProgramAddressSync(
          [Buffer.from('market_cap'), new Uint8Array([marketCapIndex])],
          program.programId
        )
        const [bondingCurve, _] = PublicKey.findProgramAddressSync(
          [Buffer.from('bonding_curve'), mint.toBuffer()],
          program.programId
        )
        const marketCapInfo = await connection.getAccountInfo(marketCap)
        if (!marketCapInfo) {
          enqueueSnackbar({
            action: 'Calculate amount out failed',
            message: 'Market cap not found',
            variant: 'error'
          })
          return ['', '']
        }
        const marketCapData = await program.account.marketCap.fetch(marketCap)
        let tokenLeft = new BN(0)
        let bondingCurveData: {
          bump: number
          marketCap: PublicKey
          reserveSol: BN
          reserveToken: BN
          completed: boolean
        }
        const bondingCurveInfo = await connection.getAccountInfo(bondingCurve)
        if (!bondingCurveInfo) {
          bondingCurveData = {
            bump: 0,
            marketCap: marketCap,
            reserveSol: marketCapData.defaultSolReserves,
            reserveToken: marketCapData.defaultTokenReserves,
            completed: false
          }
          tokenLeft = marketCapData.defaultTokenReserves
        } else {
          bondingCurveData = await program.account.bondingCurve.fetch(bondingCurve)
          tokenLeft = bondingCurveData.reserveToken.sub(
            marketCapData.defaultTokenReserves.sub(marketCapData.defaultTotalSupply)
          )
        }
        let amountOut: BN
        amountOut = bondingCurveData.reserveSol.mul(amountIn).div(bondingCurveData.reserveToken.add(amountIn))

        const amountOutWithSlippage = slippage
          ? new BigNumber(amountOut.toNumber()).times(1 - slippage / 100).toNumber()
          : amountOut.toNumber()
        amountOut = amountOut
        return [
          new BigNumber(amountOut.toNumber()).div(10 ** 9).toString(),
          new BigNumber(amountOutWithSlippage).div(10 ** 9).toString()
        ]
      } catch (e) {
        console.log('🚀 ~ calcAmountOut ~ error:', e)
        return ['', '']
      }
    },
    [program, connection]
  )

  const getMeteoraLpRewards = useCallback(
    async (poolAddress: string) => {
      try {
        if (!connection) {
          enqueueSnackbar({
            action: 'Get meteora lp rewards failed',
            message: 'Program not initialized',
            variant: 'error'
          })
          return [0, 0]
        }
        let totalReward = 0
        let rewardUser = 0
        const pool = await AmmImpl.create(connection, new PublicKey(poolAddress))
        const tokenA = pool.tokenAMint.address.toBase58()
        let tokenAIsSol = false
        if (tokenA === WSOL_ADDRESS) {
          tokenAIsSol = true
        }
        const feeTakerAddress = new PublicKey(METEORA_TELAZ_FEE_WALLET)
        const feeTakerLockEscrow = await pool.getUserLockEscrow(feeTakerAddress)

        if (feeTakerLockEscrow) {
          if (tokenAIsSol) {
            const totalRewardClaimed = new BigNumber(feeTakerLockEscrow?.fee?.claimed?.tokenA?.toNumber() || 0)
            const totalRewardUnclaimed = new BigNumber(feeTakerLockEscrow?.fee?.unClaimed?.tokenA?.toNumber() || 0)
            totalReward = totalRewardClaimed
              .add(totalRewardUnclaimed)
              .mul(new BigNumber(10))
              .div(new BigNumber(LAMPORTS_PER_SOL))
              .toNumber()
          } else {
            const totalRewardClaimed = new BigNumber(feeTakerLockEscrow?.fee?.claimed?.tokenB?.toNumber() || 0)
            const totalRewardUnclaimed = new BigNumber(feeTakerLockEscrow?.fee?.unClaimed?.tokenB?.toNumber() || 0)
            totalReward = totalRewardClaimed
              .add(totalRewardUnclaimed)
              .mul(new BigNumber(10))
              .div(new BigNumber(LAMPORTS_PER_SOL))
              .toNumber()
          }
        }
        if (wallet && wallet.publicKey) {
          const userLockEscrow = await pool.getUserLockEscrow(wallet.publicKey)
          if (userLockEscrow) {
            if (tokenAIsSol) {
              const rewardUserUnclaimed = new BigNumber(userLockEscrow?.fee?.unClaimed?.tokenA?.toNumber() || 0)
              rewardUser = rewardUserUnclaimed.div(new BigNumber(LAMPORTS_PER_SOL)).toNumber()
            } else {
              const rewardUserUnclaimed = new BigNumber(userLockEscrow?.fee?.unClaimed?.tokenB?.toNumber() || 0)
              rewardUser = rewardUserUnclaimed.div(new BigNumber(LAMPORTS_PER_SOL)).toNumber()
            }
          }
        }
        return [totalReward, rewardUser]
      } catch (error) {
        console.log('🚀 ~ getMeteoraLpRewards ~ error:', error)
        return [0, 0]
      }
    },
    [connection, wallet]
  )
  /**
   * Adds a priority fee to a transaction.
   * @param {Transaction} tx - The transaction to add the priority fee to.
   * @param {AnchorWallet} wallet - The wallet to pay the fee.
   * @param {number} priorityFee - The priority fee amount.
   * @returns {Promise<Transaction>} The updated transaction with the priority fee.
   */
  const addPriorityFee = async (tx: Transaction, wallet: AnchorWallet, priorityFee: number): Promise<Transaction> => {
    let transactionFee = MINIMUM_TRANSACTION_FEE_IN_SOL
    tx.instructions.unshift(
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: MICRO_LAMPORTS_PER_LAMPORTS
      })
    )
    // const units = await getSimulationComputeUnits(connection, tx.instructions, keyPair.publicKey, []);
    const units = 200_000
    tx.instructions.shift() // remove fake setComputeUnitPrice
    let computeUnitPrice = 0
    if (units) {
      transactionFee = Number(priorityFee)
      if (transactionFee >= MINIMUM_TRANSACTION_FEE_IN_SOL) {
        const diffFee = transactionFee - MINIMUM_TRANSACTION_FEE_IN_SOL
        computeUnitPrice = Math.floor(((diffFee * LAMPORTS_PER_SOL) / units) * MICRO_LAMPORTS_PER_LAMPORTS)
        if (computeUnitPrice > 0) {
          tx.instructions.unshift(
            ComputeBudgetProgram.setComputeUnitPrice({
              microLamports: computeUnitPrice
            })
          )
          tx.instructions.unshift(
            ComputeBudgetProgram.setComputeUnitLimit({
              units
            })
          )
        }
      } else {
        enqueueSnackbar({
          action: 'Add priority fee failed',
          message: 'Fee must be greater than 5000 lamports (0.000005 SOL)',
          variant: 'error'
        })
        throw new Error('Fee must be greater than 5000 lamports (0.000005 SOL)')
      }
    }
    const balanceInSol = Number(((await connection.getBalance(wallet.publicKey)) / LAMPORTS_PER_SOL).toString())
    if (transactionFee > balanceInSol) {
      enqueueSnackbar({
        action: 'Add priority fee failed',
        message: 'Fee is greater than balance',
        variant: 'error'
      })
      throw new Error('Fee is greater than balance')
    }
    return tx
  }

  const validateParams = (name: string, ticker: string, uri: string, marketCapIndex: number) => {
    // validate params
    if (!name || !ticker || !uri) {
      enqueueSnackbar({
        action: 'Create new coin failed',
        message: 'Invalid params',
        variant: 'error'
      })
      return false
    }
    // validate uri
    if (!uri.startsWith('https://')) {
      enqueueSnackbar({
        action: 'Create new coin failed',
        message: 'Invalid uri',
        variant: 'error'
      })
      return false
    }

    // validate marketCapIndex
    if (marketCapIndex < 1 || marketCapIndex > 4) {
      enqueueSnackbar({
        action: 'Create new coin failed',
        message: 'Invalid marketCapIndex',
        variant: 'error'
      })
      return false
    }
    return true
  }

  async function createSetUpgradeAuthority(
    programId: PublicKey,
    upgradeAuthority: PublicKey,
    newUpgradeAuthority: PublicKey
  ) {
    const bpfUpgradableLoaderId = BPF_UPGRADE_LOADER_ID

    const [programDataAddress] = PublicKey.findProgramAddressSync([programId.toBuffer()], bpfUpgradableLoaderId)

    const keys = [
      {
        pubkey: programDataAddress,
        isWritable: true,
        isSigner: false
      },
      {
        pubkey: upgradeAuthority,
        isWritable: false,
        isSigner: true
      },
      {
        pubkey: newUpgradeAuthority,
        isWritable: false,
        isSigner: false
      }
    ]

    return new TransactionInstruction({
      keys,
      programId: bpfUpgradableLoaderId,
      data: Buffer.from([4, 0, 0, 0]) // SetAuthority instruction bincode
    })
  }

  return {
    createNewCoin,
    buy,
    sell,
    calcAmountOutBuy,
    calcAmountOutSell,
    createNewCoinAndBuy,
    getConfig,
    updateConfig,
    updateAuthority,
    getMeteoraLpRewards
  }
}
