import { PaletteOptions } from '@mui/material/styles'
const colorTheme: PaletteOptions = {
  destructive: {
    50: '#fef3f2',
    100: '#fee4e2',
    200: '#fecdca',
    300: '#fda29b',
    400: '#f97066',
    500: '#f04438',
    600: '#d92d20',
    700: '#b42318',
    800: '#912018',
    900: '#682116'
  },
  blackWhiteNeutral: {
    0: '#f3f5f7',
    50: '#f6f6f6',
    100: '#f0f0f0',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#71717a',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    1000: '#030303'
  },
  purple: {
    50: '#f6f6ff',
    100: '#f2f2ff',
    200: '#e4e3ff',
    300: '#a8a6ff',
    400: '#9795e6',
    500: '#8685cc',
    600: '#7e7dbf',
    700: '#656499',
    800: '#4c4b73',
    900: '#3b3a59'
  },
  cyan: {
    50: '#f6ffff',
    100: '#f2feff',
    200: '#e3fdff',
    300: '#a6faff',
    400: '#95e1e6',
    500: '#85c8cc',
    600: '#7dbcbf',
    700: '#649699',
    800: '#4b7073',
    900: '#3a5859'
  },
  pink: {
    50: '#fff6fe',
    100: '#fff2fe',
    200: '#ffe3fc',
    300: '#ffa6f6',
    400: '#e695dd',
    500: '#cc85c5',
    600: '#bf7db9',
    700: '#996494',
    800: '#734b6f',
    900: '#593a56'
  },
  green: {
    50: '#f8fff5',
    100: '#f4fff1',
    200: '#e9ffe1',
    300: '#b8ff9f',
    400: '#a6e68f',
    500: '#93cc7f',
    600: '#8abf77',
    700: '#6e995f',
    800: '#537348',
    900: '#405938'
  },
  yellow: {
    50: '#fffef5',
    100: '#fffef1',
    200: '#fffce1',
    300: '#fff59f',
    400: '#e6dd8f',
    500: '#ccc47f',
    600: '#bfb877',
    700: '#99935f',
    800: '#736e48',
    900: '#595638'
  },
  orange: {
    50: '#fff9f5',
    100: '#fff6f1',
    200: '#ffece1',
    300: '#ffc29f',
    400: '#e6af8f',
    500: '#cc9b7f',
    600: '#bf9277',
    700: '#99745f',
    800: '#735748',
    900: '#594438'
  },
  red: {
    50: '#fff5f5',
    100: '#fff1f1',
    200: '#ffe1e1',
    300: '#ff9f9f',
    400: '#e68f8f',
    500: '#cc7f7f',
    600: '#bf7777',
    700: '#995f5f',
    800: '#734848',
    900: '#593838'
  }
}

export const colors: {
  dark: PaletteOptions
  light: PaletteOptions
} = {
  dark: colorTheme,
  light: colorTheme
}

export const getBaseColor = (mode: 'dark' | 'light') => {
  return colors[mode]
}
