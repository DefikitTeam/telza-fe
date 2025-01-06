import React from 'react'

import { Icon } from '@/components/common/Icon'
import { Box, Tooltip } from '@mui/material'

import clsx from 'clsx'

interface Props {
  content?: string | React.ReactNode
  iconClass?: string
}

export default function TooltipInfo({ content, iconClass }: Props) {
  return (
    <Tooltip
      title={content}
      placement="top"
    >
      <Box
        component="div"
        display="inherit"
      >
        <Icon
          url="icons/info.svg"
          size={20}
          height={20}
          className={clsx('text-blackWhiteNeutral-500', iconClass || '')}
        />
      </Box>
    </Tooltip>
  )
}
