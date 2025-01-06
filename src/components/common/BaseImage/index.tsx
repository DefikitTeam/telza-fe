import React, { CSSProperties } from 'react'

import Image from 'next/image'
interface Props {
  className?: string
  url: string | undefined
  style?: CSSProperties
  width: number
  height: number
  alt?: string
  onClick?: () => void
}
export const BaseImage = React.forwardRef<HTMLImageElement, Props>(
  ({ className, onClick, height, width, url, style, alt }, ref) => (
    <Image
      ref={ref}
      className={className}
      onClick={onClick}
      src={url?.startsWith('https') ? url : `${process.env.NEXT_PUBLIC_ASSETS_URI}/images/gems-fun/${url}`}
      alt={alt || 'home'}
      width={width}
      height={height}
      style={style}
      priority={false}
    />
  )
)

BaseImage.displayName = 'BaseImage'
