import React from 'react'

import { Box, SxProps } from '@mui/material'

import './styles.scss'
interface Props {
  className?: string
  size?: number
  color?: string
  url: string
  sx?: SxProps
  height?: number
  onClick?: (e?: any) => void
}
export const Icon = React.forwardRef<HTMLSpanElement, Props>(
  ({ size = 14, className, onClick, height, color, url, sx }, ref) => (
    <Box
      component="span"
      onClick={onClick}
      ref={ref}
      className={`icon ${className}`}
      sx={{
        color,
        display: 'inline-block',
        maskImage: `url(${process.env.NEXT_PUBLIC_ASSETS_URI}/images/gems-fun/${url})`,
        WebkitMaskImage: `url(${process.env.NEXT_PUBLIC_ASSETS_URI}/images/gems-fun/${url})`,
        '--icon-size': `${size}px`,
        height,
        ...sx
      }}
    />
  )
)

Icon.displayName = 'Icon'
