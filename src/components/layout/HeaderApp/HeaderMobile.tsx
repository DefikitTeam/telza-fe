import React from 'react'

import BaseButton from '@/components/BaseButton'
import { BaseImage } from '@/components/common/BaseImage'
import { Icon } from '@/components/common/Icon'
import ModalApp from '@/components/common/ModalApp'
import { TELAZ_GEMS_ROUTE, TELAZ_PROFILE_ROUTE } from '@/constant/routes'
import { useModal } from '@/hooks/useModal'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { getDefaultAvatarImage } from '@/utils/getBaseImgUrl'
import { Avatar, Box, Typography } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'

import { useRouter } from 'next/navigation'

const HeaderMobile = () => {
  const { disconnect } = useWallet()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isOpen, open, close: onClose } = useModal()

  const handleLogout = async () => {
    await disconnect()
  }

  return (
    <div>
      <BaseButton
        variant="contained"
        color="info"
        disableElevation
        height={38}
        sxChild={{
          padding: '8px 12px',
          gap: 3
        }}
        borderRadius="12px"
        className="!shadow-sm"
        onClick={open}
      >
        <BaseImage
          url="icons/diamond-down-arrow.svg"
          width={22}
          height={22}
          alt="arrow-down"
        />
      </BaseButton>
      <ModalApp
        isOpen={isOpen}
        close={onClose}
        drawerMobile={{
          hideHeader: true
        }}
      >
        <Box className="rounded-xl bg-blackWhiteNeutral-900">
          <Box
            className="p-4 flex-center-between"
            onClick={() => {
              router.push(TELAZ_PROFILE_ROUTE)
              onClose()
            }}
          >
            <Typography
              variant="MontserratLabelLargeRegular"
              color="blackWhiteNeutral.0"
            >
              Profile
            </Typography>
            <Icon
              url="icons/profile.svg"
              size={20}
              height={20}
              className="text-blackWhiteNeutral-0"
            />
          </Box>
        </Box>

        <Box
          className="mt-3 rounded-xl bg-blackWhiteNeutral-900 p-4 flex-center-between"
          onClick={() => {
            handleLogout()
            onClose()
          }}
        >
          <Typography
            variant="MontserratLabelLargeRegular"
            color="destructive.600"
          >
            Disconnect
          </Typography>
          <Icon
            url="icons/disconnect.svg"
            size={20}
            height={20}
            className="text-destructive-600"
          />
        </Box>
      </ModalApp>
    </div>
  )
}

export default HeaderMobile
