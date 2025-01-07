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

  const [listInstalledWallets] = useMemo(() => {
    const installedWallets = wallets.filter((wallet) => wallet.readyState === 'Installed')

    return [installedWallets]
  }, [wallets])


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
              </Box>
            ))}
          </div>
        ) : (
          <Typography color="blackWhiteNeutral.100">
            No wallet found. Please download a supported Solana wallet
          </Typography>
        )}
      </div>
    </ModalApp>
  )
}

export default ConnectWalletModal
