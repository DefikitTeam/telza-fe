import React, { CSSProperties } from 'react'

import { Box, SxProps } from '@mui/material'
interface Props {
  className?: string
  url: string | undefined
  style?: CSSProperties
  width: number
  height: number
  alt?: string
  onClick?: () => void
  sx?: Omit<SxProps, 'src' | 'width' | 'height'>
}
export const BaseImageHtml = React.forwardRef<HTMLImageElement, Props>(
  ({ className, onClick, height, width, url, style, alt, sx }, ref) => (
    <Box
      component="img"
      ref={ref}
      className={className}
      onClick={onClick}
      src={`${process.env.NEXT_PUBLIC_ASSETS_URI}/images/gems-fun/${url}`}
      alt={alt || 'home'}
      width={width}
      height={height}
      style={style}
      {...sx}
    />
  )
)

BaseImageHtml.displayName = 'BaseImageHtml'
