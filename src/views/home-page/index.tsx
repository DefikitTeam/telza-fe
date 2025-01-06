'use client'

import { useMemo, useState } from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import { Box } from '@mui/material'

import style from './style.module.scss'

import Link from 'next/link'


export default function HomePage() {
  const { isMobile } = useScreenSize()
  return (
    <Box>
      Hello World
    </Box>
  )
}
