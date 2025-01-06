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

  const pages = [
    {
      name: 'Home',
      icon: 'icons/nav-home.svg',
      url: '/',
      onClick() {
        router.push(TELAZ_HOME_ROUTE)
      }
    },
    {
      name: 'Feed',
      icon: 'icons/nav-feed.png',
      url: '/',
      onClick() {
        router.push(TELAZ_FEED_ROUTE)
      }
    },
    {
      name: '',
      icon: 'icons/nav-cart.png',
      url: '/',
      content: (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={48}
          height={48}
          border="1px solid"
          borderColor="blackWhiteNeutral.0"
          borderRadius="14px"
          className="cursor-pointer"
          onClick={openSearch}
        >
          <BaseImage
            url="icons/nav-search.svg"
            width={20}
            height={20}
          />
        </Box>
      ),
      onClick() {
        //
      }
    },
    {
      name: 'Gems',
      icon: 'icons/nav-gems.svg',
      url: '/',
      onClick() {
        router.push(TELAZ_GEMS_ROUTE)
      }
    },
    {
      name: 'Socials',
      icon: 'icons/nav-socials.svg',
      url: '/',
      onClick(e: HTMLElement) {
        setAnchorElHamburgerMenu(e as any)
      }
    }
  ]

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
      icon: 'miniapp/icons/menu-mobile-coin.svg',
      iconActive: 'miniapp/icons/menu-mobile-coin-active.svg',
      label: 'Coins',
      path: TELAZ_HOME_ROUTE
    },
    {
      icon: 'miniapp/icons/menu-mobile-friend.svg',
      iconActive: 'miniapp/icons/menu-mobile-friend-active.svg',
      label: 'Friends',
      path: '/referral'
    },
    {
      icon: 'miniapp/icons/menu-mobile-play.svg',
      iconActive: 'miniapp/icons/menu-mobile-play-active.svg',
      label: !isPlayClicked ? 'App' : 'Play',
      path: '/play'
    },
    {
      icon: 'miniapp/icons/menu-mobile-gems.svg',
      iconActive: 'miniapp/icons/menu-mobile-gems-active.svg',
      label: 'Gems',
      path: '/gems'
    },
    {
      icon: 'miniapp/icons/menu-mobile-earn.svg',
      iconActive: 'miniapp/icons/menu-mobile-earn-active.svg',
      label: 'Earn',
      path: '/earn'
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
          onClick={() => {
            if (menu.path === '/play' && !isPlayClicked) {
              setIsPlayClicked(true)
              window.open('https://t.me/GemsFun_Bot/start', '_blank')
            }
            router.push(menu.path)
          }}
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
                <BaseImage
                  url={menu.iconActive}
                  width={75}
                  height={75}
                />
              </Box>
            </Box>
          ) : (
            <BaseImage
              url={menu.icon}
              width={24}
              height={24}
            />
          )}

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
