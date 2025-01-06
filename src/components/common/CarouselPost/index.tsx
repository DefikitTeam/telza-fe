import React from 'react'

import { Box, SxProps } from '@mui/material'

// Import Swiper styles
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import 'swiper/css'
import style from './style.module.scss'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperClass, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react'

interface Props {
  items: Array<{
    content: React.ReactNode
  }>
  autoplay?: boolean
  bulletIcon?: string
  sx?: SxProps
  swiperProps?: SwiperProps
}

export default function CarouselPost({ items, autoplay = true, bulletIcon, sx, swiperProps }: Props) {
  return (
    <Box
      className={style.container}
      sx={sx}
    >
      <Swiper
        loop
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className}"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"> <path d="M2 1H6V7H2V1Z" fill="#71717A"/> <path d="M3 0H5V8H3V0Z" fill="#71717A"/> <path d="M1 2H7V6H1V4V2Z" fill="#71717A"/> <path d="M0 3H8V5H0V3Z" fill="#71717A"/> </svg></span>`
          }
        }}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: true,
                waitForTransition: true
              }
            : false
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        {...swiperProps}
      >
        {items?.map((item, index) => <SwiperSlide key={index}>{item?.content || ''}</SwiperSlide>)}
      </Swiper>
    </Box>
  )
}
