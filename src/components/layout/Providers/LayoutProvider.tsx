'use client'
import React, { useEffect, useMemo } from 'react'

import HeaderApp from '@/components/layout/HeaderApp'
import ReactQueryProvider from '@/components/layout/Providers/ReactQueryProvider'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { defaultEndpoint } from '@/stores/app.slice'
import { getDesignTokens } from '@/themes'
import { registerMoonGateWallet } from '@moongate/moongate-adapter'
import { Container, GlobalStyles, PaletteMode } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
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
import { TipLinkWalletAdapter } from '@tiplink/wallet-adapter'

import FooterApp from '../FooterApp'

import LayoutMobile from './LayoutMobile'
import IntegrationNotistack from './NotificationProvider'

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'

initialize()

export default function LayoutProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { theme: currentTheme } = useTheme()

  const customTheme = getDesignTokens(currentTheme as PaletteMode)
  const rpcNodeUrl = useAppSelector((state) => state.appStore.rpcNodeUrl)
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
  registerMoonGateWallet({
    authMode: 'Apple',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })

  React.useEffect(() => {
    if (rpcNodeUrl) setEndpoint(rpcNodeUrl)
  }, [rpcNodeUrl])

  console.log('endpoint', endpoint)

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SlopeWalletAdapter({ endpoint }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new WalletConnectWalletAdapter({
        network: WalletAdapterNetwork.Mainnet,
        options: {
          relayUrl: 'wss://relay.walletconnect.com',
          projectId: String(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID)
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
      new ExodusWalletAdapter({ endpoint }),
      new TipLinkWalletAdapter({
        clientId: process.env.NEXT_PUBLIC_WALLET_TIP_WALLET_KEY ?? '',
        title: 'TelAz.net',
        theme: 'system'
      })
    ],
    [endpoint]
  )

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ disableRetryOnRateLimit: true }}
    >
      <WalletProvider
        wallets={wallets}
        autoConnect
      >
        <WalletModalProvider>
          <ReactQueryProvider>
            <AppRouterCacheProvider>
              <NextThemeProvider
                enableSystem
                attribute="class"
              >
                <IntegrationNotistack>
                  <MuiThemeProvider theme={customTheme}>
                    <HeaderApp />
                    <GlobalStyles
                      styles={{
                        '*': {
                          '&::-webkit-scrollbar': {
                            width: 4,
                            height: 4,
                            border: 'none'
                          },
                          '&::-webkit-scrollbar-thumb': {
                            borderRadius: 16,
                            backgroundColor: '#aeaeae'
                          }
                        }
                      }}
                    />
                    <Container
                      maxWidth="xxl"
                      className="relative z-[1] px-8 pt-5"
                      sx={{
                        pb: {
                          xs: '100px',
                          md: '50px'
                        },
                        minHeight: 'calc(100vh - 128px)'
                      }}
                    >
                      {children}
                    </Container>
                    <LayoutMobile />
                    <FooterApp />
                  </MuiThemeProvider>
                </IntegrationNotistack>
              </NextThemeProvider>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
