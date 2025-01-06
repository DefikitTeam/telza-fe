import instance from '@/api/instances'

import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { OptionsType } from 'cookies-next/lib/types'

const ACCESS_TOKEN_EXPIRED_DATE = 60 * 60 * 24 // 1 day
const REFRESH_TOKEN_EXPIRED_DATE = 60 * 60 * 24 * 30 // 30 days

export const ACCESS_TOKEN_KEY = 'accessToken'
export const REFRESH_ACCESS_TOKEN_KEY = 'refreshToken'

export const getAccessToken = (options?: OptionsType) => {
  return getCookie(ACCESS_TOKEN_KEY, { ...options }) as string
}

export const getRefreshToken = (options?: OptionsType) => {
  return getCookie(REFRESH_ACCESS_TOKEN_KEY, { ...options }) as string
}

export const setAccessToken = (accessToken: string, options?: OptionsType) => {
  instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`
  setCookie(ACCESS_TOKEN_KEY, accessToken, {
    secure: true,
    sameSite: 'strict',
    maxAge: ACCESS_TOKEN_EXPIRED_DATE,
    ...options
  })
}

export const setRefreshToken = (refreshToken: string, options?: OptionsType) => {
  setCookie(REFRESH_ACCESS_TOKEN_KEY, refreshToken, {
    secure: true,
    sameSite: 'strict',
    maxAge: REFRESH_TOKEN_EXPIRED_DATE,
    ...options
  })
}

export const deleteAccessToken = (options?: OptionsType) => {
  deleteCookie(ACCESS_TOKEN_KEY, { ...options })
}

export const deleteRefreshToken = (options?: OptionsType) => {
  deleteCookie(REFRESH_ACCESS_TOKEN_KEY, { ...options })
}
