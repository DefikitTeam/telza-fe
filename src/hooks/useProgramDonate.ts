import { useMemo, useCallback } from 'react'
import { Connection, PublicKey, Keypair, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { AnchorProvider, BN, Program } from '@coral-xyz/anchor'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { defaultEndpoint } from '@/stores/app.slice'
import { Donate } from '@/idl/donate'
import { useSnackbar } from 'notistack'
import BigNumber from 'bignumber.js'
import {
  createAssociatedTokenAccountInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getMint
} from '@solana/spl-token'

/**
 * Custom hook for interacting with the Pump program.
 * @returns {Object} An object containing various functions and properties for program interaction.
 */
export const useProgramDonate = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { connected, connecting } = useWallet()
  const wallet = useAnchorWallet()
  const connection = useMemo(() => new Connection(defaultEndpoint, { commitment: 'confirmed' }), [wallet])

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
      const IDL: Donate = require('../idl/donate.json')
      return new Program(IDL, provider)
    } catch (error) {
      console.error('Failed to create program:', error)
      return null
    }
  }, [provider])

  const donateSol = useCallback(
    async (amount: number, message: string, recipientAddress: string) => {
      if (!program || !wallet) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return
      }
      // limit 779 words for message
      if (message.length > 779) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Message is too long',
          variant: 'error'
        })
        return
      }
      try {
        const amountSOl = new BN(new BigNumber(amount).times(LAMPORTS_PER_SOL).toNumber())
        const recipient = new PublicKey(recipientAddress)
        const tx = new Transaction()
        tx.add(
          await program.methods
            .donateSol(amountSOl, message)
            .accounts({
              user: wallet.publicKey,
              recipient: recipient,
              program: program.programId
            })
            .instruction()
        )
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        console.log('🚀 ~ donateSol ~ txSignature:', txSignature)
        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error) {
        console.error('Failed to create program:', error)
        throw error
      }
    },
    [program, wallet]
  )

  const donateToken = useCallback(
    async (amountString: number, tokenAddress: string, message: string, recipientAddress: string) => {
      if (!program || !wallet) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return
      }
      // limit 779 words for message
      if (message.length > 779) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Message is too long',
          variant: 'error'
        })
        return
      }
      try {
        const [global] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const globalData = await program.account.global.fetch(global)
        const mint = new PublicKey(tokenAddress)
        const amount = new BN(new BigNumber(amountString).times(1e6).toNumber())
        let recipient = new PublicKey(recipientAddress)
        const tx = new Transaction()
        const associatedRecipient = await getAssociatedTokenAddress(mint, recipient)
        const associatedFee = await getAssociatedTokenAddress(mint, globalData.feeRecipient)
        try {
          await getAccount(connection, associatedRecipient)
        } catch (error) {
          tx.add(createAssociatedTokenAccountInstruction(wallet.publicKey, associatedRecipient, recipient, mint))
        }
        try {
          await getAccount(connection, associatedFee)
        } catch (error) {
          tx.add(
            createAssociatedTokenAccountInstruction(wallet.publicKey, associatedFee, globalData.feeRecipient, mint)
          )
        }
        tx.add(
          await program.methods
            .donateSpl(amount, message)
            .accounts({
              user: wallet.publicKey,
              recipient,
              mint,
              program: program.programId
            })
            .instruction()
        )
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const recoverTx = Transaction.from(tx.serialize({ requireAllSignatures: false }))
        const signedTx = await wallet.signTransaction(recoverTx)
        const txSignature = await connection.sendRawTransaction(signedTx.serialize({ requireAllSignatures: true }))
        console.log('🚀 ~ donateSpl ~ txSignature:', txSignature)
        let latestBlockHash = await connection.getLatestBlockhash()
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: txSignature
        })
        return txSignature
      } catch (error) {
        console.error('Failed to create program:', error)
        throw error
      }
    },
    [program, wallet]
  )

  const getFeeDonateSol = useCallback(
    async (amount: number, message: string, recipientAddress: string): Promise<number> => {
      if (!program || !wallet) {
        enqueueSnackbar({
          action: 'Get fee failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return 0
      }
      // limit 779 words for message
      if (message.length > 779) {
        enqueueSnackbar({
          action: 'Get fee failed',
          message: 'Message is too long',
          variant: 'error'
        })
        return 0
      }
      try {
        const amountSOl = new BN(new BigNumber(amount).times(LAMPORTS_PER_SOL).toNumber())
        const recipient = new PublicKey(recipientAddress.toUpperCase())
        const tx = new Transaction()
        tx.add(
          await program.methods
            .donateSol(amountSOl, message)
            .accounts({
              user: wallet.publicKey,
              recipient: recipient,
              program: program.programId
            })
            .instruction()
        )
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const messageCompiled = tx.compileMessage()
        const response = await connection.getFeeForMessage(messageCompiled)
        if (response.value) {
          const feeInSol = Number(response.value) / LAMPORTS_PER_SOL
          return feeInSol
        }
        return 0
      } catch (error) {
        console.error('Failed to get fee:', error)
        enqueueSnackbar({
          action: 'Get fee failed',
          message: 'Get fee failed',
          variant: 'error'
        })
        return 0
      }
    },
    [program, wallet]
  )

  const getFeeDonateToken = useCallback(
    async (amountString: number, tokenAddress: string, message: string, recipientAddress: string): Promise<number> => {
      console.log('tokenAddress: ', tokenAddress)
      if (!program || !wallet) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Program or wallet not initialized',
          variant: 'error'
        })
        return 0
      }
      // limit 779 words for message
      if (message.length > 779) {
        enqueueSnackbar({
          action: 'Create new coin failed',
          message: 'Message is too long',
          variant: 'error'
        })
        return 0
      }
      try {
        const [global] = PublicKey.findProgramAddressSync([Buffer.from('global')], program.programId)
        const globalData = await program.account.global.fetch(global)
        const mint = new PublicKey(tokenAddress)
        const amount = new BN(new BigNumber(amountString).times(1e6).toNumber())
        const recipient = new PublicKey(recipientAddress)
        const tx = new Transaction()
        const associatedRecipient = await getAssociatedTokenAddress(mint, recipient)
        const associatedFee = await getAssociatedTokenAddress(mint, globalData.feeRecipient)
        try {
          await getAccount(connection, associatedRecipient)
        } catch (error) {
          tx.add(createAssociatedTokenAccountInstruction(wallet.publicKey, associatedRecipient, recipient, mint))
        }
        try {
          await getAccount(connection, associatedFee)
        } catch (error) {
          tx.add(
            createAssociatedTokenAccountInstruction(wallet.publicKey, associatedFee, globalData.feeRecipient, mint)
          )
        }
        tx.add(
          await program.methods
            .donateSpl(amount, message)
            .accounts({
              user: wallet.publicKey,
              recipient,
              mint,
              program: program.programId
            })
            .instruction()
        )
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        tx.feePayer = wallet.publicKey
        const messageCompiled = tx.compileMessage()
        const response = await connection.getFeeForMessage(messageCompiled)
        if (response.value) {
          const feeInSol = Number(response.value) / LAMPORTS_PER_SOL
          return feeInSol
        }
        return 0
      } catch (error) {
        console.error('Failed to get fee:', error)
        enqueueSnackbar({
          action: 'Get fee failed',
          message: 'Get fee failed',
          variant: 'error'
        })
        return 0
      }
    },
    [program, wallet]
  )

  return {
    donateSol,
    donateToken
    // getFeeDonateSol,
    // getFeeDonateToken
  }
}
