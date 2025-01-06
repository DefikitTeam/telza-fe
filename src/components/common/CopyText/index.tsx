import React from 'react'

import { Icon } from '@/components/common/Icon'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { shortenAddress } from '@/utils/shortenAddress'
import { Box, SxProps, Tooltip, Typography } from '@mui/material'

interface Props {
  text?: string
  address?: string
  className?: string
  shorten?: boolean
  truncatedStart?: number
  truncatedEnd?: number
  classText?: string
  classIcon?: string
  typography?: string
  color?: string
  extraTextContent?: React.ReactNode
  sxBox?: SxProps
}
export default function CopyText({
  text = '',
  color,
  className,
  shorten,
  truncatedStart,
  truncatedEnd,
  classText,
  classIcon,
  typography,
  extraTextContent,
  sxBox
}: Props) {
  const [copiedValue, copy] = useCopyToClipboard()
  return (
    <Box
      className={`inline-flex items-center gap-1 ${className}`}
      sx={sxBox}
    >
      <Typography
        variant={(typography as any) || 'MontserratParagraphXSmallMedium'}
        color={color || 'blackWhiteNeutral.500'}
        className={classText}
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        {shorten ? shortenAddress(text, truncatedStart, truncatedEnd) : text}
        {extraTextContent}
      </Typography>
      <Tooltip
        open={!!copiedValue}
        title="Copied!"
        className="text-primary-400"
      >
        <span className="leading-3">
          <Icon
            onClick={() => copy(text || '')}
            className={`cursor-pointer text-blackWhiteNeutral-500 ${classIcon}`}
            url="icons/copy.svg"
          />
        </span>
      </Tooltip>
    </Box>
  )
}
