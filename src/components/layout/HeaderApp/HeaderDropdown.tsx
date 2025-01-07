import React from 'react'

import BaseButton from '@/components/BaseButton'
import { BaseImage } from '@/components/common/BaseImage'
import { Icon } from '@/components/common/Icon'
import MenuCustom from '@/components/common/MenuCustom'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { appActions } from '@/stores/app.slice'
import { msSansSerifBoldFont } from '@/themes/fonts'
import abbreviateNumber from '@/utils/abbreviateNumber'
import { formatAmount } from '@/utils/bignumber.util'
import { getDefaultAvatarImage } from '@/utils/getBaseImgUrl'
import { shortenAddress } from '@/utils/shortenAddress'
import { deleteAccessToken } from '@/utils/tokenCookies'
import { Avatar, Box, MenuItem, Typography } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { useDisconnect } from 'wagmi'
import { useRouter } from 'next/navigation'
import { CHAIN_TYPE } from '@/constant/enum/chain'

const HeaderDropdown = () => {
  const typeChain = useAppSelector((state) => state?.appStore?.type)
  const wallet = useAppSelector((state) => state?.appStore?.wallet)
  // solana
  const { disconnect: disconnectSolana } = useWallet()
  // evm
  const { disconnect: disconnectEvm } = useDisconnect()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorElNav)
  const router = useRouter()
  const dispatch = useAppDispatch()


  const handleLogout = async () => {
    console.log('handleLogout')

    await disconnectSolana()
    await disconnectEvm()
    // deleteAccessToken()
    dispatch(appActions.updateWallet(null))
  }

  const menuItem = [
    {
      name: <span className="text-[#FF2626]">Disconnect</span>,
      icon: (
        <Icon
          url="icons/disconnect.svg"
          size={16}
          height={16}
          className="text-[#FF2626]"
        />
      ),
      onClick: () => handleLogout()
    }
  ]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box>
      <BaseButton
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        color="info"
        disableElevation
        onClick={handleOpenNavMenu}
        height={48}
        sxChild={{
          padding: '12px',
          textTransform: 'none'
        }}
        borderRadius="12px"
        className="!shadow-sm"
      >
        <div
          className="text-lg leading-6 text-blackWhiteNeutral-50 flex-center"
          style={{ fontFamily: msSansSerifBoldFont.style.fontFamily }}
        >
          <Typography
            variant="MsSanParagraphLargeNormal"
            className="text-blackWhiteNeutral-50"
          >
            {wallet ? shortenAddress(wallet, 20, 8) : 'Connect Wallet'}
          </Typography>
          <BaseImage
            url="icons/diamond-down-arrow.svg"
            width={24}
            height={24}
            alt="arrow-down"
            className="ml-3"
          />
        </div>
      </BaseButton>
      <MenuCustom
        anchorEl={anchorElNav}
        open={open}
        onClose={handleCloseNavMenu}
        sx={{
          '& .MuiPaper-root': {
            minWidth: 275,
            border: '2px solid'
          }
        }}
      >
        {menuItem.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              item.onClick()
              handleCloseNavMenu()
            }}
            disableRipple
          >
            <Typography variant="MsSanLabelMediumNormal">{item.name}</Typography>
            {item.icon}
          </MenuItem>
        ))}
      </MenuCustom>
    </Box>
  )
}

export default HeaderDropdown
