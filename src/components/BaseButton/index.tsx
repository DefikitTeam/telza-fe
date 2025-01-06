import React from 'react'

import { Box, Button, ButtonProps } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { SxProps } from '@mui/system'

import Spinner from '../common/Spinner'

interface Props extends Omit<ButtonProps, 'sx' | 'color' | 'children' | 'disabled'> {
  disabled?: boolean
  children: React.ReactNode
  width?: number | string
  height?: number | string
  sx?: SxProps
  color?: ButtonProps['color']
  typography?: TypographyOptions | string
  borderRadius?: string | number
  sxChild?: SxProps
  loading?: boolean
}

export default function BaseButton({
  children,
  color,
  sx,
  width,
  height,
  typography,
  disabled,
  borderRadius,
  sxChild,
  loading,
  ...props
}: Props) {
  
  return (
    <Button
      color={color || 'primary'}
      disabled={disabled || loading}
      sx={{
        width,
        height,
        borderRadius: borderRadius || '14px',
        ...sx
      }}
      {...props}
    >
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10
          }}
        >
          <Spinner />
        </Box>
      )}
      <Box
        className="Mui-wrap-child"
        sx={{
          width: '100%',
          height: '100%',
          padding: '6px 16px',
          borderRadius: borderRadius || '14px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          typography: typography || 'MsSanHeadingHeading5Bold',
          border: disabled ? '2px solid' : '',
          borderColor: disabled ? 'blackWhiteNeutral.800' : '',
          color: 'blackWhiteNeutral.1000',
          textTransform: 'capitalize',
          background: (sx as any)?.background,
          transition: '.3s all',
          ...sxChild
        }}
      >
        {children}
      </Box>
    </Button>
  )
}
