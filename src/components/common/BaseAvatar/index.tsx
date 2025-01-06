import React from 'react'

import { getDefaultAvatarImage } from '@/utils/getBaseImgUrl'
import { Avatar, Box } from '@mui/material'

import clsx from 'clsx'

export default function BaseAvatar() {
  return (
    <Box className="cursor-pointer p-1">
      <Avatar
        sx={{ width: 35, height: 35 }}
        className={clsx('border border-blackWhiteNeutral-800 shadow-sm')}
        src={getDefaultAvatarImage()}
      />
    </Box>
  )
}
