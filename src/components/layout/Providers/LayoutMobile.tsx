import { useWindowSize } from 'react-use'

import { useTheme as useThemeMUI } from '@mui/material/styles'

import FooterMobile from '../FooterApp/FooterMobile'

export default function LayoutMobile() {
  const { width } = useWindowSize()
  const { breakpoints } = useThemeMUI()

  return <>{width <= breakpoints?.values?.sm && <FooterMobile />}</>
}
