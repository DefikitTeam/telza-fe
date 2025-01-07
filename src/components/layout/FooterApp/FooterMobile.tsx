import React, { useEffect, useState } from 'react'

import { BaseImage } from '@/components/common/BaseImage'
import { TELAZ_FEED_ROUTE, TELAZ_GEMS_ROUTE, TELAZ_HOME_ROUTE } from '@/constant/routes'
import { useModal } from '@/hooks/useModal'
import { Box, Typography } from '@mui/material'

import { usePathname, useRouter } from 'next/navigation'

export default function FooterMobile() {
  const router = useRouter()
  const [anchorElHamburgerMenu, setAnchorElHamburgerMenu] = useState<null | HTMLElement>(null)
  const [lastYPos, setLastYPos] = useState(0)

  const [isPlayClicked, setIsPlayClicked] = useState(false)

  const open = Boolean(anchorElHamburgerMenu)

  const handleCloseHamburgerMenu = () => {
    setAnchorElHamburgerMenu(null)
  }

  const { isOpen: isOpenSearch, close: closeSearch, open: openSearch } = useModal()


  useEffect(() => {
    const checkUserScroll = () => {
      const currentYPos = window.scrollY
      if (currentYPos !== lastYPos && open) {
        setAnchorElHamburgerMenu(null)
      }
      setLastYPos(currentYPos)
    }

    window.addEventListener('scroll', checkUserScroll)

    return () => {
      window.removeEventListener('scroll', checkUserScroll)
    }
  }, [lastYPos, open])

  const menus = [
    {
      label: 'Home',
      path: TELAZ_HOME_ROUTE
    },
    {
      label: 'Referral',
      path: '/referral'
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ]

  const pathname = usePathname()

  const isActive = (menuPath: string) => {
    if (menuPath === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(menuPath)
  }

  return (
    <Box
      className="grid grid-cols-5 border-t border-blackWhiteNeutral-700"
      mt={4}
      py={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        // background: 'rgba(0, 0, 0, 0.75)',
        bgcolor: 'blackWhiteNeutral.1000',
        height: 90,
        zIndex: 999
      }}
    >
      {menus.map((menu, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={3}
          className="cursor-pointer"
          position="relative"
          height="100%"
          justifyContent="center"
        >
          {isActive(menu.path) && (
            <Box
              sx={{
                position: 'absolute',
                background: 'linear-gradient(268deg, #A6FAFF 13.88%, #A7A6FF 89.53%)',
                width: 30,
                height: '1px',
                top: '-13px'
              }}
            />
          )}
          {isActive(menu.path) ? (
            <Box sx={{ height: 24, minWidth: 3, position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: -24,
                  width: 75,
                  height: 75,
                  left: -36
                }}
              >
              </Box>
            </Box>
          ) : null}
          <Typography
            variant="MsSanParagraphXSmallNormal"
            color="blackWhiteNeutral.0"
          >
            {menu.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )

}
