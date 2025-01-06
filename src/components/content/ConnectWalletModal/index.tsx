import React, { useMemo } from 'react'

import { Icon } from '@/components/common/Icon'
import ModalApp from '@/components/common/ModalApp'
import SwitchCustom from '@/components/common/SwitchCustom'
import { msSansSerifBoldFont } from '@/themes/fonts'
import { Box, Tooltip, Typography } from '@mui/material'
import { useWallet, Wallet } from '@solana/wallet-adapter-react'

import './styles.scss'

import clsx from 'clsx'
import Image from 'next/image'

const AdditionalContent = ({ title, tooltipTitle }: { title: string; tooltipTitle: string }) => {
  return (
    <div className="gap-1 rounded-lg bg-blackWhiteNeutral-800 px-2 py-1 flex-center">
      <Typography
        variant="MsSanParagraphSmallNormal"
        color="blackWhiteNeutral.400"
      >
        {title}
      </Typography>
      <Tooltip
        title={tooltipTitle}
        placement="top"
      >
        <div className="h-5">
          <Icon
            url="icons/question-mark.svg"
            size={20}
            height={20}
            className="text-blackWhiteNeutral-400"
          />
        </div>
      </Tooltip>
    </div>
  )
}

const ConnectWalletModal = ({
  isOpen,
  close,
  onSelect
}: {
  isOpen: boolean
  close: () => void
  onSelect: (wallet: Wallet) => void
}) => {
  const { wallets } = useWallet()
  const [isShowUninstalledWallets, setIsShowUninstalledWallets] = React.useState(false)

  const [listInstalledWallets, listUninstalledWallets] = useMemo(() => {
    const installedWallets = wallets.filter((wallet) => wallet.readyState === 'Installed')
    const uninstalledWallets = wallets.filter((wallet) => wallet.readyState !== 'Installed')

    return [installedWallets, uninstalledWallets]
  }, [wallets])

  const additionalContent = (adapterName: string) => {
    switch (adapterName) {
      case 'Phantom':
        return (
          <AdditionalContent
            title="Auto confirm"
            tooltipTitle="Auto-confirm is now available for all transactions on Telaz"
          />
        )
      case 'Solflare':
        return (
          <AdditionalContent
            title="Auto approve"
            tooltipTitle="Auto-approve is now available for all transactions on Telaz"
          />
        )
      default:
        return null
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
        {listInstalledWallets.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {listInstalledWallets.map((wallet) => (
              <Box
                key={wallet.adapter.name}
                display="flex"
                alignItems="center"
                gap={2}
                flexGrow={1}
                padding={3}
                borderRadius={3}
                onClick={() => onSelect(wallet)}
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
                {additionalContent(wallet.adapter.name)}
              </Box>
            ))}
          </div>
        ) : (
          <Typography color="blackWhiteNeutral.100">
            No wallet found. Please download a supported Solana wallet
          </Typography>
        )}

        {isShowUninstalledWallets && listUninstalledWallets.length > 0 && (
          <div className="mt-5">
            <Box textAlign="center">
              <Typography
                variant="MsSanParagraphMediumNormal"
                color="blackWhiteNeutral.0"
              >
                Uninstalled wallets
              </Typography>
            </Box>
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              {listUninstalledWallets.map((wallet) => (
                <Box
                  key={wallet.adapter.name}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  flexGrow={1}
                  padding={3}
                  borderRadius={3}
                  onClick={() => onSelect(wallet)}
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
          </div>
        )}
      </div>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop={6}
        paddingX="41px"
      >
        <Typography variant="MsSanParagraphMediumNormal">Show uninstalled wallets</Typography>
        <SwitchCustom
          checked={isShowUninstalledWallets}
          onChange={() => setIsShowUninstalledWallets(!isShowUninstalledWallets)}
        />
      </Box>
    </ModalApp>
  )
}

export default ConnectWalletModal
