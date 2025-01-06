import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const montserratFont = Montserrat({
  variable: '--font-montserrat',
  fallback: ['Arial', 'sans-serif'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const msSansSerif1Font = localFont({
  variable: '--font-ms-san-serif1',
  fallback: ['Arial', 'sans-serif'],
  src: [{ path: '../../public/fonts/ms-sans-serif-1/ms-sans-serif-1.ttf', weight: '400', style: 'normal' }]
})

export const msSansSerifBoldFont = localFont({
  variable: '--font-ms-san-serif-bold',
  fallback: ['Arial', 'sans-serif'],
  src: [{ path: '../../public/fonts/ms-sans-serif-bold/ms-sans-serif-bold.ttf', weight: '400', style: 'normal' }]
})
