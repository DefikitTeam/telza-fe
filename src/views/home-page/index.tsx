'use client'

import { Box } from '@mui/material'
import SwapCard from './components/SwapCard'
import ProvidersList from './components/ProvidersList'
import style from './style.module.scss'
import useScreenSize from '@/hooks/useScreenSize'

export default function HomePage() {
  const { isMobile } = useScreenSize()
  return (
    <Box className={style.container}>
      <SwapCard />
      <ProvidersList />
    </Box>
  )
}