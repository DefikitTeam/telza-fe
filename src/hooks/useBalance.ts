import { useCallback, useMemo } from 'react'

import { defaultEndpoint } from '@/stores/app.slice'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection, PublicKey } from '@solana/web3.js'

import { getAssociatedTokenAddress } from '@solana/spl-token'
import { isValidPublicKey } from '@/utils/publicKey'

export const useBalance = (refresh?: boolean) => {
  const { publicKey, wallet, connected } = useWallet()
  const connection = useMemo(() => new Connection(defaultEndpoint, { commitment: 'confirmed' }), [wallet])
  const connectionSocket = useMemo(() => new Connection(defaultEndpoint, { wsEndpoint: defaultEndpoint }), [wallet])

  const balanceToken = useCallback(
    async (token: string) => {
      if (!publicKey) return 0
      try {
        const tokenAccount = await getAssociatedTokenAddress(new PublicKey(token), publicKey)
        const tokenBalance = await connection.getTokenAccountBalance(tokenAccount)
        return tokenBalance.value.uiAmount || 0
      } catch (error) {
        return 0
      }
    },
    [publicKey, refresh]
  )

  const getTokenAccount = (async (mint: string, owner: string, isBondingCurve?: boolean): Promise<string | null> => {
    if (!isValidPublicKey(mint) || !isValidPublicKey(owner)) return null
    try {
      const tokenAccount = await getAssociatedTokenAddress(new PublicKey(mint), new PublicKey(owner), isBondingCurve)
      return tokenAccount.toBase58()
    } catch (error) {
      console.log('error', error)
      return null
    }
  })

  return {
    publicKey,
    connection,
    connected,
    connectionSocket,
    balanceToken,
    getTokenAccount
  }
}
