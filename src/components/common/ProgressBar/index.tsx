import { CSSProperties, useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { getBaseImgUrl } from '@/utils/getBaseImgUrl'
import { Box } from '@mui/material'
import { useTheme as useThemeMUI } from '@mui/material/styles'
import { SxProps } from '@mui/system'

import style from './style.module.scss'

export default function ProgressBar({ percentage = 1, sx }: { percentage?: number; sx?: SxProps }) {
  const { width: windowWidth } = useWindowSize()
  const { breakpoints } = useThemeMUI()
  const maxSize = useMemo(() => {
    if (windowWidth > breakpoints?.values?.xxl) {
      return 15
    }
    if (windowWidth <= breakpoints?.values?.sm) {
      return 13
    }
    if (windowWidth <= breakpoints?.values?.lg) {
      return 14
    }
    return 14
  }, [windowWidth, breakpoints])

  const numberOfHide = useMemo(() => {
    const _percent = Number(percentage)
    const p = Math.ceil((Number(_percent) * maxSize) / 100)
    const mX = _percent < 100 ? maxSize - 1 : maxSize
    return p >= maxSize ? mX : p
  }, [percentage, maxSize])

  return (
    <Box
      display="flex"
      gap={1}
      sx={sx}
      position="relative"
      className="items-center rounded-lg border-[2px] border-blackWhiteNeutral-0 p-2"
    >
      <img
        className={style.progressBar}
        alt=""
        src={getBaseImgUrl('/progress-gradient.jpg')}
        style={
          {
            '--mask-ImgUrl': `url(${getBaseImgUrl('/box-progress.png')})`,
            width: numberOfHide * 26.8,
            transform: 'translateY(-3px)'
          } as CSSProperties
        }
      />
      <Box
        sx={{
          // width: 26.8 * numberOfShow,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 8,
          height: 32,
          backgroundColor: 'blackWhiteNeutral.1000',
          zIndex: 10
        }}
      />
      {/* {new Array(numberOfShow || 1).fill('').map((_, index) => (
        <Box
          key={index}
          width={24}
          height={28}
          borderRadius={2}
          bgcolor="#ECE0FF"
        />
      ))} */}
    </Box>
  )
}
