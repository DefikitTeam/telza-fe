const { colors } = require('./src/themes/colors')

const { createThemes } = require('tw-colors')
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,jsx,ts,tsx}',
    './@/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '575px',

      md: '769px',

      lg: '900px',

      xl: '1200px',

      xxl: '1400px',

      '3xl': '1600px'
    },
    extend: {
      fontFamily: {
        GeomGraphic: '"GeomGraphic", sans-serif !important'
      },
      colors: {
        transparent: 'transparent',
        ...colors
      },
      boxShadow: {
        xs: '1px 1px 0px 0px #F5F5F5',
        sm: '2px 2px 0px 0px #F5F5F5',
        md: '3px 4px 0px 0px #fff',
        lg: '5px 6px 0px 0px #F5F5F5',
        hoverSm: '3px 3px 0px 0px #F5F5F5'
      }
    }
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.flex-center': {
          '@apply flex items-center': {}
        },
        '.flex-center-between': {
          '@apply flex items-center justify-between': {}
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    createThemes({
      ...colors
    })
  ]
}
export default config
