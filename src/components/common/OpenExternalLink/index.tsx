import React from 'react'

import { Icon } from '@/components/common/Icon'
import { Box, Tooltip } from '@mui/material'

import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  url: string
  iconClass?: string
}

export default function OpenExternalLink({ children, url, iconClass }: Props) {
  return (
    <Box
      gap={2}
      display="flex"
      alignItems="center"
    >
      {children}
      <Tooltip
        placement="top"
        title="View on Solscan"
      >
        <span>
          <a
            href={url}
            target="_blank"
          >
            <Icon
              url="icons/external-link.svg"
              className={clsx('cursor-pointer text-blackWhiteNeutral-0', iconClass)}
              size={20}
              height={20}
            />
          </a>
        </span>
      </Tooltip>
    </Box>
  )
}
