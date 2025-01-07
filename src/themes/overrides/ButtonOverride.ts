import { msSansSerifBoldFont } from '@/themes/fonts'
import { Theme } from '@mui/material/styles'

export const ButtonOverride: Theme['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },
    styleOverrides: {
      root: ({ theme }) => {
        const { breakpoints, palette } = theme
        return {
          // [breakpoints.not('md')]: {
          //      backgroundColor: 'red'
          // },
          [breakpoints.down('xxl')]: {
            //color: 'red'
          },
          padding: 0,
          fontFamily: msSansSerifBoldFont.style.fontFamily,
          borderRadius: 14,
          color: palette?.blackWhiteNeutral?.[1000],
          fontWeight: 400,
          border: '2px solid',
          borderColor: palette?.blackWhiteNeutral?.[1000],
          boxShadow: '1px 1px 0px 0px #F5F5F5',
          transition: '.15s all',
          '&.Mui-disabled': {
            backgroundColor: '#BDBDBD',
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          },
          '&:hover': {
            boxShadow: '2px 2px 0px 0px #F5F5F5',
            '&:not(:disabled)': {
              transform: 'translate(-1.8px, -1.8px)'
            }
          },
          '&:disabled': {
            border: 'none',
            backgroundColor: '#BDBDBD',
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          },
          '&:hover:disabled': {
            backgroundColor: '#BDBDBD',
            '&:after': {
              width: 'calc(100% + 3px)',
              height: 'calc(100% + 3px)'
            }
          }
        }
      }
    },

    variants: [
      {
        props: { color: 'inherit' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette?.blackWhiteNeutral?.[1000],
          border: '1px solid',
          borderColor: theme.palette?.blackWhiteNeutral?.[500],
          '.Mui-wrap-child': {
            color: theme.palette?.blackWhiteNeutral?.[300]
          }
        })
      },
      {
        props: { color: 'primary', variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette?.pink?.[400],
          '.Mui-wrap-child': {
            boxShadow: '-2px -2px 0px 0px #656499 inset, 2px 1px 0px 0px #E4E3FF inset'
          },
          ':disabled': {
            backgroundColor: theme.palette?.pink?.[800],
            border: 'none',
            '& .Mui-wrap-child': {
              background: theme.palette?.pink?.[800],
              boxShadow: '-2px -2px 0px 0px #3B3A59 inset, 2px 2px 0px 0px #585869 inset'
            }
          },
          ':disabled:after': {
            backgroundColor: theme.palette?.pink?.[800]
            // boxShadow: '-1px -1px 0px 0px #3B3A59 inset, 1px 1px 0px 0px #585869 inset'
          },
          '&:hover:disabled': {
            backgroundColor: theme.palette?.pink?.[800],
            boxShadow: 'none'
          },
          '& .Mui-wrap-child': {
            background: theme.palette?.pink?.[400]
          },
          '&:hover:not(:disabled) .Mui-wrap-child': {
            backgroundColor: theme.palette?.pink?.[300]
          }
        })
      },
      {
        props: { color: 'secondary', variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette?.cyan?.[400],
          '.Mui-wrap-child': {
            boxShadow: '-2px -2px 0px 0px #7DBCBF inset,2px 1px 0px 0px #E3FDFF inset'
          },
          ':disabled': {
            backgroundColor: theme.palette?.cyan?.[800],
            border: 'none',
            '& .Mui-wrap-child': {
              background: theme.palette?.cyan?.[800],
              boxShadow: '-2px -2px 0px 0px #5C8A8C inset, 2px 2px 0px 0px #6F7C7D inset'
            }
          },
          ':disabled:after': {
            backgroundColor: theme.palette?.cyan?.[800]
            // boxShadow: '-1px -1px 0px 0px #3B3A59 inset, 1px 1px 0px 0px #585869 inset'
          },
          '&:hover:disabled': {
            backgroundColor: theme.palette?.cyan?.[800],
            boxShadow: 'none'
          },
          '& .Mui-wrap-child': {
            background: theme.palette?.cyan?.[400]
          },
          '&:hover:not(:disabled) .Mui-wrap-child': {
            backgroundColor: theme.palette?.cyan?.[300]
          }
        })
      },
      {
        props: { color: 'error', variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette?.pink?.[400],
          '.Mui-wrap-child': {
            boxShadow: '-2px -2px 0px 0px #CC85C5 inset,2px 1px 0px 0px #FFE3FC inset'
          },
          ':disabled': {
            backgroundColor: theme.palette?.pink?.[800],
            border: 'none',
            '& .Mui-wrap-child': {
              background: theme.palette?.pink?.[800],
              boxShadow: '-2px -2px 0px 0px #84587F inset, 2px 2px 0px 0px #685E67 inset'
            }
          },
          ':disabled:after': {
            backgroundColor: theme.palette?.pink?.[800]
            // boxShadow: '-1px -1px 0px 0px #3B3A59 inset, 1px 1px 0px 0px #585869 inset'
          },
          '&:hover:disabled': {
            backgroundColor: theme.palette?.pink?.[800],
            boxShadow: 'none'
          },
          '& .Mui-wrap-child': {
            background: theme.palette?.pink?.[400]
          },
          '&:hover:not(:disabled) .Mui-wrap-child': {
            backgroundColor: theme.palette?.pink?.[300]
          }
        })
      },
      {
        props: { color: 'success', variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette?.green?.[400],
          '.Mui-wrap-child': {
            boxShadow: '-2px -2px 0px 0px #8ABF77 inset,2px 1px 0px 0px #E9FFE1 inset'
          },
          ':disabled': {
            backgroundColor: theme.palette?.green?.[800],
            border: 'none',
            '& .Mui-wrap-child': {
              background: theme.palette?.green?.[800],
              boxShadow: '-2px -2px 0px 0px #8ABF77 inset, 2px 2px 0px 0px #E9FFE1 inset'
            }
          },
          ':disabled:after': {
            backgroundColor: theme.palette?.green?.[800]
            // boxShadow: '-1px -1px 0px 0px #3B3A59 inset, 1px 1px 0px 0px #585869 inset'
          },
          '&:hover:disabled': {
            backgroundColor: theme.palette?.green?.[800],
            boxShadow: 'none'
          },
          '& .Mui-wrap-child': {
            background: theme.palette?.green?.[400]
          },
          '&:hover:not(:disabled) .Mui-wrap-child': {
            backgroundColor: theme.palette?.green?.[300]
          }
        })
      },
      {
        props: { color: 'info', variant: 'contained' },
        style: ({ theme }) => ({
          boxShadow: '-1px -1px 0px 0px #434343 inset, 1px 1px 0px 0px #909090 inset',
          backgroundColor: theme.palette?.blackWhiteNeutral?.[900],
          color: theme.palette?.blackWhiteNeutral?.[50],
          borderColor: theme.palette?.blackWhiteNeutral?.[50],
          ':disabled': {
            backgroundColor: theme.palette?.blackWhiteNeutral?.[500],
            color: theme.palette?.blackWhiteNeutral?.[50],
            boxShadow: '-1px -1px 0px 0px #434343 inset, 1px 1px 0px 0px #909090 inset'
          },
          '&:hover': {
            backgroundColor: theme.palette?.blackWhiteNeutral?.[900],
            boxShadow: '-1px -1px 0px 0px #434343 inset, 1px 1px 0px 0px #909090 inset'
          },
          '&:hover:disabled': {
            backgroundColor: theme.palette?.blackWhiteNeutral?.[500],
            boxShadow: '-1px -1px 0px 0px #434343 inset, 1px 1px 0px 0px #909090 inset'
          }
        })
      },
      {
        props: { color: 'warning', variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)',
          '.Mui-wrap-child': {
            boxShadow: '-2px -2px 0px 0px #996C64 inset, 2px 2px 0px 0px #FFF3E3 inset'
          },
          ':disabled': {
            opacity: 0.6,
            backgroundColor: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)',
            border: 'none',
            '& .Mui-wrap-child': {
              background: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)',
              boxShadow: '-2px -2px 0px 0px #996C64 inset, 2px 2px 0px 0px #FFF3E3 inset'
            }
          },
          ':disabled:after': {
            backgroundColor: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)'
          },
          '&:hover:disabled': {
            backgroundColor: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)',
            boxShadow: 'none'
          },
          '& .Mui-wrap-child': {
            background: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)'
          },
          '&:hover:not(:disabled) .Mui-wrap-child': {
            backgroundColor: 'linear-gradient(40deg, #FF2189 -29.98%, #FF9D00 102.85%)'
          }
        })
      }
    ]
  }
}
