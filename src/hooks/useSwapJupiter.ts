import { useCallback, useMemo } from 'react'

import { defaultEndpoint } from '@/stores/app.slice'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { Connection, PublicKey } from '@solana/web3.js'
import { JupiterSwapClient } from '@solmemes.lol/jupiter-swap-sdk'

import BigNumber from 'bignumber.js'
import { useSnackbar } from 'notistack'

/**
 * Custom hook for interacting with the Pump program.
 * @returns {Object} An object containing various functions and properties for program interaction.
 */
export const useSwapJupiter = () => {
  const { enqueueSnackbar } = useSnackbar()
  const wallet = useAnchorWallet()
  const connection = useMemo(() => new Connection(defaultEndpoint, { commitment: 'confirmed' }), [wallet])
  const client = new JupiterSwapClient(defaultEndpoint)
  const feeRecipient = new PublicKey(
    process.env.NEXT_PUBLIC_OWNER_FEE_SWAP_WALLET || 'GPZrMBvH1zbrdNW7Qobsj29mNxKeRJxTN4J4YBiLcea3'
  )

  const swap = useCallback(
    async (
      tokenIn: string,
      tokenOut: string,
      amountIn: string,
      slippage: string,
      priorityFee: string,
      ownerFeedAddress: string | null
    ) => {
      if (!wallet || !client || !connection) {
        enqueueSnackbar({
          message: 'Please connect your wallet',
          variant: 'error'
        })
        return
      }
      slippage = new BigNumber(slippage).times(100).toString()
      const tx = await client.swapExactIn(
        wallet.publicKey,
        tokenIn,
        tokenOut,
        amountIn,
        slippage,
        priorityFee,
        '0.01',
        feeRecipient,
        '0.3',
        ownerFeedAddress ? new PublicKey(ownerFeedAddress) : undefined
      )
      const signedTx = await wallet.signTransaction(tx)
      const txSignature = await connection.sendRawTransaction(signedTx.serialize(), {
        skipPreflight: false,
        maxRetries: 2
      })
      let latestBlockHash = await connection.getLatestBlockhash()
      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: txSignature
      })
      return txSignature
    },
    [connection, wallet, client]
  )

  const calcAmountOut = useCallback(
    async (tokenIn: string, tokenOut: string, amountIn: string, slippage: string) => {
      if (!client) {
        enqueueSnackbar({
          message: 'Client not initialized',
          variant: 'error'
        })
        return
      }
      slippage = new BigNumber(slippage).times(100).toString()
      return await client.calcAmountOut(tokenIn, tokenOut, amountIn, slippage)
    },
    [client]
  )

  return {
    swap,
    calcAmountOut
  }
}
