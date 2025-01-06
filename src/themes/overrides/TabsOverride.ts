import type { Theme } from '@mui/material/styles'

export const TabsOverride: Theme['components'] = {
  MuiTab: {
    styleOverrides: {
      root: {
        '&.MuiTabs-indicator': {
          background: 'red !important'
        }
      }
    }
  },
  MuiModal: {
    styleOverrides: {
      backdrop: 'vcddddd'
    }
  }
}
