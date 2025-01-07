'use client'
import { PropsWithChildren, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import HeaderApp from '@/components/layout/HeaderApp'
import store, { reduxPersistor } from '@/stores'
import { getDesignTokens } from '@/themes'
import { Container, GlobalStyles, PaletteMode } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import FooterApp from '../FooterApp'

import AppWalletProvider from './AppWalletProvider'
import LayoutMobile from './LayoutMobile'
import IntegrationNotistack from './NotificationProvider'
import ReactQueryProvider from './ReactQueryProvider'

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import { PersistGate } from 'redux-persist/integration/react'
import { createClient } from 'viem'
import { createConfig, deserialize, http, serialize, WagmiProvider } from 'wagmi'
import { arbitrum, avalanche, blast, bsc, bscTestnet, mainnet, polygon, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect, coinbaseWallet } from 'wagmi/connectors'

function ErrorFallback({ error, resetErrorBoundary }: any) {
  useEffect(() => {
    // Automatically reload the page on chunk load error
    console.log('%c Error Page: ', 'color: #ff0000;', { error })
    if (error?.name === 'ChunkLoadError' || error?.message?.includes('chunk')) {
      window.location.reload()
    }
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


const config = createConfig({
  chains: [mainnet, sepolia, bsc, bscTestnet, polygon, avalanche, arbitrum, blast],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
  ssr: true,
  multiInjectedProviderDiscovery: false,
  connectors: [
    metaMask(),
    coinbaseWallet(),
    walletConnect({
      projectId: String(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID),
      qrModalOptions: {
        themeVariables: {
          '--wcm-z-index': '9999'
        }
      }
    }),
    safe(),
  ]
})


export default function ReduxProvider({ children }: PropsWithChildren<any>) {
  const { theme: currentTheme } = useTheme()
  const customTheme = getDesignTokens(currentTheme as PaletteMode)
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WagmiProvider config={config}>
        <Provider store={store}>
          <PersistGate persistor={reduxPersistor}>
            <AppWalletProvider>
              <div className="app-background-cover" />
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
            </AppWalletProvider>
          </PersistGate>
        </Provider>
      </WagmiProvider>
    </ErrorBoundary>
  )
}
