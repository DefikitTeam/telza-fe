'use client'

import { getBaseColor } from '@/themes/colors'
import { montserratFont } from '@/themes/fonts'
import overrides from '@/themes/overrides'
import typography from '@/themes/typography'
import { createTheme, type PaletteMode } from '@mui/material'

export const getDesignTokens = (_mode: PaletteMode) => {
  const mode = _mode !== 'dark' && _mode !== 'light' ? 'light' : _mode
  const baseColors = getBaseColor(mode)
  return createTheme({
    spacing: 4,
    palette: {
      mode,
      ...baseColors
    },
    components: overrides(mode, baseColors) as any,
    typography: typography(montserratFont.style.fontFamily, baseColors),
    breakpoints: {
      values: {
        xs: 350,
        sm2: 400,
        sm: 575,
        md: 769,
        lg: 900,
        xl: 1200,
        xxl: 1440
      }
    }
  })
}
