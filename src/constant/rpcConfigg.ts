export const RPC_CONFIG =
  process.env.NEXT_PUBLIC_ENV === 'dev'
    ? `https://api.devnet.solana.com`
    : `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_RPC_KEY_HELIUS}`

export const RPC_CONFIG_WS =
  process.env.NEXT_PUBLIC_ENV === 'dev'
    ? `wss://api.devnet.solana.com`
    : `wss://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_RPC_KEY_HELIUS}`