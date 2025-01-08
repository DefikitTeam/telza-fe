import React, { useEffect } from 'react'

import BaseButton from '@/components/BaseButton'
import { BaseImage } from '@/components/common/BaseImage'
import ConnectWalletModal from '@/components/content/ConnectWalletModal'
import HowItWorkModal from '@/components/content/HowItWorkModal'
import {
  TELAZ_EARN_ROUTE,
  TELAZ_GEMS_ROUTE,
  TELAZ_HOME_ROUTE,
  TELAZ_REFERRAL_ROUTE
} from '@/constant/routes'
import { useBalance } from '@/hooks/useBalance'
import { useModal } from '@/hooks/useModal'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { appActions } from '@/stores/app.slice'
import { settingActions } from '@/stores/settings.slice'
import { msSansSerifBoldFont } from '@/themes/fonts'
import { isMobile } from '@/utils/deviceDetection'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

import { useWallet, Wallet } from '@solana/wallet-adapter-react'
import { useAccount, useDisconnect } from 'wagmi'
import BigNumber from 'bignumber.js'
import { useSnackbar } from 'notistack'
import HeaderMobile from './HeaderMobile'
import HeaderDropdown from './HeaderDropdown'
import { CHAIN_TYPE } from '@/constant/enum/chain'
import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react'

export default function HeaderApp() {
  // solana
  const { publicKey, connected: connectedSolana, connecting, signMessage, disconnect: disconnectSolana, select, wallet } = useWallet()
  // evm
  const { isConnected, address } = useAccount()
  const { disconnect: disconnectEvm } = useDisconnect()

  // ton
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();

  const { enqueueSnackbar } = useSnackbar()
  const { isOpen: isOpenHowItWork, open: openHowItWork, close: closeHowItWork } = useModal()

  const dispatch = useAppDispatch()

  function handleOpen() {
    dispatch(settingActions.toggleConnectModal(true))
  }
  function handleClose() {
    dispatch(settingActions.toggleConnectModal(false))
  }


  const isShowConnectModal = useAppSelector((state) => state?.settings?.isShowConnectModal)
  const walletAddress = useAppSelector((state) => state?.appStore?.wallet)
  const connectSolana = useAppSelector((state) => state?.appStore?.connectSolana)
  const connectEvm = useAppSelector((state) => state?.appStore?.connectEvm)
  const connectTon = useAppSelector((state) => state?.appStore?.connectTon)

  console.log("walletAddress", walletAddress);


  useEffect(() => {
    if (isMobile()) return
    if (wallet) {
      if (wallet.adapter.name === 'Phantom' && wallet.adapter.connecting && !wallet.adapter.connected) {
        sessionStorage.setItem('phantomReconnect', 'true')
        window.location.reload()
      }
    }
  }, [wallet, isShowConnectModal, enqueueSnackbar])

  useEffect(() => {
    if (isMobile()) return
    const phantomReconnect = sessionStorage.getItem('phantomReconnect')
    if (phantomReconnect === 'true') {
      enqueueSnackbar('Oops! Phantom wallet is taking a nap. Time to give it a wake-up call!', {
        variant: 'warning'
      })
      sessionStorage.removeItem('phantomReconnect')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enqueueSnackbar])

  useEffect(() => {
    if (connectSolana) {
      disconnectEvm()
      if (userFriendlyAddress) {
        tonConnectUI.disconnect()
      }
    }
    if (connectEvm) {
      disconnectSolana()
      if (userFriendlyAddress) {
        tonConnectUI.disconnect()
      }
    }
    if (connectTon) {
      disconnectEvm()
      disconnectSolana()
    }
  }, [connectSolana, connectEvm, connectTon, tonConnectUI, userFriendlyAddress])


  useEffect(() => {

    // solana
    if (publicKey) {
      dispatch(appActions.updateWallet(publicKey.toBase58()))
      handleClose()
      return
    }
    // evm
    if (address) {
      dispatch(appActions.updateWallet(address))
      return
    }

    // ton
    if (userFriendlyAddress) {
      dispatch(appActions.updateWallet(userFriendlyAddress))
      return
    }
  }, [dispatch, publicKey, isConnected, userFriendlyAddress])

  const pages: Array<{
    name: string
    href: string
    onClick?: () => void
    external?: boolean
  }> = [
      {
        name: 'Home',
        href: TELAZ_HOME_ROUTE
      },
      {
        name: 'Referral',
        href: TELAZ_REFERRAL_ROUTE
      },
      {
        name: 'How it works',
        href: '#how-it-works',
        onClick() {
          openHowItWork()
        }
      }
    ]

  return (
    <AppBar
      position="relative"
      className="header-bar px-3 py-3 sm:px-10"
    >
      <HowItWorkModal
        isOpen={isOpenHowItWork}
        close={closeHowItWork}
      />

      <Container
        maxWidth="xxl"
        className="!p-0"
      >
        <Toolbar
          disableGutters
          className="h-[48px] !min-h-[48px] flex-center-between"
        >
          <a
            className="cursor-pointer gap-3 no-underline flex-center-between"
            href={TELAZ_HOME_ROUTE}
            target="_self"
          >
            {/* <Box className="relative h-9 w-9">
              <BaseImage
                url="icons/logo.svg"
                width={70}
                height={70}
                className="absolute left-1/2 top-1/2 !max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </Box>
            <BaseImage
              url="logo-title.svg"
              width={128}
              height={43}
              className="hidden md:block"
            /> */}
          </a>

          <Box
            gap={{ xs: 3, sm: 4, md: 5, xl: 6, xxl: 12 }}
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            {pages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                target={page.external ? '_blank' : '_self'}
                className="flex gap-2 no-underline hover:opacity-80 transition-opacity"
                style={{ pointerEvents: 'auto' }}
              >
                <Typography
                  fontFamily={msSansSerifBoldFont.style.fontFamily}
                  textAlign="center"
                  color={'blackWhiteNeutral.0'}
                  className="cursor-pointer !text-base sm:!text-lg md:!text-xl lg:!text-2xl"
                  sx={{
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-1px)'
                    }
                  }}
                  onClick={() => {
                    if (page?.onClick) {
                      page?.onClick?.()
                    }
                  }}
                >
                  {page.name}
                </Typography>
              </a>
            ))}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={3}
          > {
              !walletAddress ? (
                <Box sx={{ flexGrow: 0 }}>
                  <BaseButton
                    color="secondary"
                    onClick={handleOpen}
                    sx={{
                      height: { xs: '38px', sm: '52px' }
                    }}
                    sxChild={{
                      paddingX: { xs: '12px', sm: '40px' }
                    }}
                  >
                    <Typography
                      variant="MsSanHeadingHeading5Bold"
                      color="blackWhiteNeutral.1000"
                      sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                      {connecting ? 'Connecting...' : 'Connect Wallet'}
                    </Typography>
                    <Typography
                      variant="MsSanParagraphMediumBold"
                      color="blackWhiteNeutral.1000"
                      sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                      {connecting ? 'Connecting...' : 'Connect'}
                    </Typography>
                  </BaseButton>
                </Box>
              )
                :
                (
                  <Box>
                    <Box
                      sx={{
                        display: {
                          xs: 'none',
                          sm: 'block'
                        }
                      }}
                    >
                      <HeaderDropdown />
                    </Box>
                    <Box
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'none'
                        }
                      }}
                    >
                      <HeaderMobile />
                    </Box>
                  </Box>
                )
            }
            <ConnectWalletModal
              isOpen={isShowConnectModal}
              close={handleClose}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
