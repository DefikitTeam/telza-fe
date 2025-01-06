'use client'

import { useEffect } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

function useSaveScrollPosition() {
  const pathname = usePathname()

  function saveScrollPosition(callback?: () => void) {
    sessionStorage.setItem(`scrollPosition-${pathname}`, JSON.stringify(window.scrollY))
    callback?.()
  }

  const searchParams = useSearchParams()

  useEffect(() => {
    const storedScrollY = sessionStorage.getItem(`scrollPosition-${pathname}`)
    if (storedScrollY) {
      window.scrollTo(0, JSON.parse(storedScrollY))
      sessionStorage.removeItem(`scrollPosition-${pathname}`)
    }
  }, [pathname, searchParams])

  return saveScrollPosition
}

export default useSaveScrollPosition
