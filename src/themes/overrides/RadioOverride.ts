import { Theme } from '@mui/material'

export const RadioOverride: Theme['components'] = {
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme?.palette?.blackWhiteNeutral?.[0],
        '&.Mui-checked': {
          color: theme?.palette?.blackWhiteNeutral?.[0]
        }
      })
    }
  }
}
