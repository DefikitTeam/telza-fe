import { FC, PropsWithChildren, useEffect } from 'react'
import React, { useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { defaultEndpoint } from '@/stores/app.slice'
import { registerMoonGateWallet } from '@moongate/moongate-adapter'
import { useTheme as useThemeMUI } from '@mui/material/styles'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ExodusWalletAdapter } from '@solana/wallet-adapter-exodus'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { SlopeWalletAdapter } from '@solana/wallet-adapter-slope'
import {
  BitgetWalletAdapter,
  BitpieWalletAdapter,
  Coin98WalletAdapter,
  CoinbaseWalletAdapter,
  LedgerWalletAdapter,
  MathWalletAdapter,
  PhantomWalletAdapter,
  SafePalWalletAdapter,
  SolongWalletAdapter,
  TokenPocketWalletAdapter,
  TorusWalletAdapter,
  TrustWalletAdapter,
  WalletConnectWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { initialize, SolflareWalletAdapter } from '@solflare-wallet/wallet-adapter'


initialize()

const App: FC<PropsWithChildren<any>> = ({ children }) => {
  const rpcNodeUrl = useAppSelector((state) => state.appStore.rpcNodeUrl)
  const wsNodeUrl = useAppSelector((state) => state.appStore.wsNodeUrl)
  const [endpoint, setEndpoint] = React.useState<string>(rpcNodeUrl || defaultEndpoint)


  registerMoonGateWallet({
    authMode: 'Ethereum',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })
  registerMoonGateWallet({
    authMode: 'Google',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })
  // registerMoonGateWallet({
  //   authMode: 'Twitter',
  //   position: 'top-right'
  //   // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
  //   // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  // })
  registerMoonGateWallet({
    authMode: 'Apple',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })

  const dispatch = useAppDispatch()


  const wallets = useMemo(() => {
    // Create the base array of wallets
    const baseWallets = [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SlopeWalletAdapter({ endpoint }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new WalletConnectWalletAdapter({
        network: WalletAdapterNetwork.Mainnet,
        options: {
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PJ_ID,
          metadata: {
            name: 'Raydium',
            description: 'Raydium',
            url: 'https://raydium.io/',
            icons: ['https://raydium.io/logo/logo-only-icon.svg']
          }
        }
      }),
      new GlowWalletAdapter(),
      new TrustWalletAdapter(),
      new MathWalletAdapter({ endpoint }),
      new TokenPocketWalletAdapter(),
      new CoinbaseWalletAdapter({ endpoint }),
      new SolongWalletAdapter({ endpoint }),
      new Coin98WalletAdapter({ endpoint }),
      new SafePalWalletAdapter({ endpoint }),
      new BitpieWalletAdapter({ endpoint }),
      new BitgetWalletAdapter({ endpoint }),
      new ExodusWalletAdapter({ endpoint })
    ]

    return baseWallets
  }, [endpoint])

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ disableRetryOnRateLimit: true, wsEndpoint: wsNodeUrl }}
    >
      <WalletProvider
        wallets={wallets}
        autoConnect
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
