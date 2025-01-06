import { useWindowSize } from 'react-use'

import { useTheme as useThemeMUI } from '@mui/material/styles'

export default function useScreenSize() {
  const { width: windowWidth } = useWindowSize()
  const { breakpoints } = useThemeMUI()

  const isMobile = windowWidth <= breakpoints?.values?.sm

  return {
    isMobile
  }
}
