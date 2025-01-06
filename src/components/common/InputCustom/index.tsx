import React from 'react'

import { styled, TextField, TextFieldProps } from '@mui/material'

const StyledTextField = styled(TextField)(({ theme }) => {
  return {
    width: '100%',
    border: 'none',
    padding: 0,

    '& .MuiInputBase-formControl': {
      width: '100%',
      height: '100%',
      color: theme.palette?.blackWhiteNeutral?.['0'],
      '&:hover': {
        '.MuiOutlinedInput-notchedOutline': {
          border: 'none'
        }
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        }
      },
      '&.Mui-error': {
        borderColor: '#F97066'
      }
    },

    '& .MuiInputBase-root': {
      padding: 0,
      '&:before': {
        display: 'none'
      },

      '&:after': {
        display: 'none'
      }
    },

    '&.Mui-error': {
      borderColor: theme.palette?.destructive?.['400']
    },

    '& .MuiInputBase-input': {
      ...theme?.typography?.MontserratParagraphMediumRegular,
      padding: 0,
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'])
    }
  }
})

const InputCustom = (props: TextFieldProps) => {
  return (
    <StyledTextField
      variant={props?.variant || 'standard'}
      {...props}
    />
  )
}

export default InputCustom
