import type { Theme } from '@mui/material/styles'

export const CardOverride: Theme['components'] = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        const { breakpoints, palette } = theme
        return {
          color: palette?.blackWhiteNeutral?.[1000],
          backgroundColor: palette?.blackWhiteNeutral?.[1000],
          boxShadow: '3px 3px 0px 0px #F5F5F5',
          border: `2px solid ${palette?.blackWhiteNeutral?.[500]}`,
          borderRadius: 20
        }
      }
    }
  }
}
