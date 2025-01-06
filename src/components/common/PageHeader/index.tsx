import React from 'react'

import { Icon } from '@/components/common/Icon'
import { Box, Typography } from '@mui/material'

interface Props {
  previousPageName: string | React.ReactNode
  onBack?: () => void
  rightContent?: React.ReactNode
}

export default function PageHeader({ previousPageName, onBack, rightContent }: Props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box
        alignItems="center"
        gap={3}
        display="flex"
        className="cursor-pointer"
        onClick={onBack}
      >
        <Icon
          url="icons/back.svg"
          className="text-blackWhiteNeutral-0"
          size={20}
          height={20}
        />
        <Typography
          sx={{
            typography: {
              xs: 'MsSanParagraphLargeBold',
              md: 'MsSanHeadingHeading5Bold'
            }
          }}
        >
          {previousPageName}
        </Typography>
      </Box>

      {rightContent}
    </Box>
  )
}
