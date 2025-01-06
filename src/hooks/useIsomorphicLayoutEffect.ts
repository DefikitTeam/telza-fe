import { isClient } from '@/utils/getEnvironment'
import { useLayoutEffect, useEffect } from 'react'

export const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect
