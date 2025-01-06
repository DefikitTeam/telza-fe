import type { Theme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material/styles'

export const TooltipOverride = (baseColors?: PaletteOptions): Theme['components'] => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: baseColors?.blackWhiteNeutral?.[900],
        borderWidth: 1,
        borderColor: baseColors?.blackWhiteNeutral?.[0],
        padding: '8px',
        boxShadow: '1px 1px 0px 0px #F5F5F5'
      }
    }
  }
})
