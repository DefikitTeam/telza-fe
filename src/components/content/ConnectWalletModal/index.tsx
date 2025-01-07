import React, { useCallback, useMemo, useState } from 'react'

import { Icon } from '@/components/common/Icon'
import ModalApp from '@/components/common/ModalApp'
import SwitchCustom from '@/components/common/SwitchCustom'
import { msSansSerifBoldFont } from '@/themes/fonts'
import { Box, Tooltip, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { appActions } from '@/stores/app.slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
// solana
import { useWallet, Wallet } from '@solana/wallet-adapter-react'

// evm
import { Connector, useConnect } from 'wagmi'

import './styles.scss'

import clsx from 'clsx'
import Image from 'next/image'
import { CHAIN_TYPE } from '@/constant/enum/chain'

interface WalletIconMapping {
  [key: string]: string
}

const walletIconMapping: WalletIconMapping = {
  metaMaskSDK: 'data:image/png;base64,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',
  safe: 'https://app.safe.global/images/safe-logo-green.png',
  walletConnect: 'https://specs.walletconnect.com/img/walletconnect-logo-black.svg',
  coinbaseWalletSDK: 'https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg'
}

const ConnectWalletModal = ({
  isOpen,
  close
}: {
  isOpen: boolean
  close: () => void
}) => {
  const { wallets, select } = useWallet()
  const { connectors, connect, status } = useConnect()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useAppDispatch()

  const [listInstalledSolanaWallets] = useMemo(() => {
    const installedWallets = wallets.filter((wallet) => wallet.readyState === 'Installed')

    return [installedWallets]
  }, [wallets])

  const handleConnectSolanaWallet = useCallback((wallet: Wallet) => {
    dispatch(appActions.updateConnectSolana(true))
    select(wallet.adapter.name)
  }, [select, dispatch])


  const handleConnectWallet = async (c: Connector) => {
    const provider = await c.getProvider()
    if (!provider) {
      enqueueSnackbar('Extension not installed', { variant: 'error' })
    } else {
      try {
        connect({ connector: c }, {
          onSuccess: () => {
            close()
            dispatch(appActions.updateType(CHAIN_TYPE.EVM))
          }
        })
      } catch (error: any) {
        console.log("error LOL", error);
        if (error?.code === 4001) {
          enqueueSnackbar('User rejected the request', { variant: 'error' })
        } else {
          enqueueSnackbar('Error', { variant: 'error' })
        }
      }
    }
  }

  return (
    <ModalApp
      isOpen={isOpen}
      close={close}
      style={{
        padding: '40px 0',
        width: 676,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '2px solid #262626',
        boxShadow: 'none'
      }}
    >
      <Typography
        fontFamily={msSansSerifBoldFont.style.fontFamily}
        className="text-center !text-2xl"
      >
        Connect Wallet
      </Typography>
      <div className="wallet-list-container mt-6">
        <Typography
          className="mt-8 mb-3 font-semibold text-lg"
          color="blackWhiteNeutral.100"
        >
          Solana Wallets
        </Typography>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 mb-3">
          {listInstalledSolanaWallets.map((wallet) => (
            <Box
              key={wallet.adapter.name}
              display="flex"
              alignItems="center"
              gap={2}
              flexGrow={1}
              padding={3}
              borderRadius={3}
              onClick={() => handleConnectSolanaWallet(wallet)}
              className={clsx(
                'cursor-pointer border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900 hover:opacity-80 md:border-[1px]',
                {
                  'opacity-50': wallet.readyState !== 'Installed'
                }
              )}
            >
              <Image
                src={wallet.adapter.icon}
                alt={wallet.adapter.name}
                height={32}
                width={32}
              />
              <Typography
                variant="MsSanParagraphMediumBold"
                color="blackWhiteNeutral.100"
              >
                {wallet.adapter.name}
              </Typography>
            </Box>
          ))}
        </div>
        <Typography
          className="mt-20 mb-20 font-semibold text-lg"
          color="blackWhiteNeutral.100"
        >
          EVM Wallets
        </Typography>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {connectors.map((connector, index) => (
            <Box
              key={connector.id}
              display="flex"
              alignItems="center"
              gap={2}
              flexGrow={1}
              padding={3}
              borderRadius={3}
              onClick={() => handleConnectWallet(connector)}
              className={clsx(
                'cursor-pointer border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900 hover:opacity-80 md:border-[1px]',
                {
                  'opacity-50': false
                }
              )}
            >
              <Image
                src={walletIconMapping[connector.id]}
                alt={connector.name}
                height={32}
                width={32}
              />
              <Typography
                variant="MsSanParagraphMediumBold"
                color="blackWhiteNeutral.100"
              >
                {connector.name}
              </Typography>
            </Box>
          ))}
        </div>
      </div>
    </ModalApp>
  )
}

export default ConnectWalletModal
