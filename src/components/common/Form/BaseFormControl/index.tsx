import * as React from 'react'
import { FieldErrors } from 'react-hook-form'

import { FormControl, FormHelperText, InputAdornment, styled, TextField, Typography } from '@mui/material'
import { InputBaseProps } from '@mui/material/InputBase/InputBase'
import { SxProps } from '@mui/system'

const InputStyled = styled(TextField)(({ theme }) => {
  return {
    position: 'relative',
    fontSize: 16,
    width: 'auto',
    '& .MuiInputBase-formControl': {
      padding: '10px 12px',
      width: '100%',
      height: '100%',
      border: '2px solid #A3A3A3',
      borderRadius: 12,
      boxShadow: '2px 2px 0px 0px #F5F5F5',
      backgroundColor: theme.palette?.blackWhiteNeutral?.['1000'],
      color: theme.palette?.blackWhiteNeutral?.['50'],
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

    '&.Mui-error': {
      borderColor: theme.palette?.destructive?.['400']
    },
    'label + &': {
      marginTop: 25
    },
    '& .MuiInputBase-input': {
      ...theme?.typography?.MontserratParagraphMediumRegular,
      padding: 0,
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:focus': {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        // borderColor: theme.palette.primary.main
      }
    }
  }
})

interface Props {
  name?: string
  label?: React.ReactNode | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  helpText?: React.ReactNode | string
  inputProps?: InputBaseProps
  errors?: FieldErrors<any> | any
  sx?: SxProps
  inputType?: 'input' | 'textarea'
  minHeight?: number
  sxInput?: SxProps
  sxLabel?: SxProps
  extraContent?: React.ReactNode
}

export default function BaseFormControl({
  prefix,
  suffix,
  label,
  helpText,
  inputProps,
  errors,
  name = '',
  sx,
  inputType,
  minHeight,
  sxInput,
  sxLabel,
  extraContent
}: Props) {
  return (
    <FormControl
      fullWidth
      component="div"
      variant="standard"
      sx={sx}
    >
      {label && (
        <Typography
          color="purple.400"
          mb={2}
          component="div"
          sx={{
            typography: {
              xs: 'MsSanParagraphMediumNormal',
              md: 'MsSanParagraphLargeNormal'
            },
            ...sxLabel
          }}
        >
          {label}
        </Typography>
      )}
      <InputStyled
        InputProps={{
          startAdornment: prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : undefined,
          endAdornment: suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : undefined,
          ...inputProps
        }}
        sx={{
          '.MuiInputBase-formControl': {
            minHeight
          },
          '.MuiInputBase-input': {
            height: `${minHeight}px !important`
          },
          ...sxInput
        }}
        error={!!errors?.[name]?.message}
        multiline={inputType === 'textarea'}
      />
      {errors?.[name]?.message && (
        <FormHelperText sx={{ typography: 'MsSanParagraphMediumNormal', mt: 2, color: 'destructive.400' }}>
          {errors?.[name]?.message}
        </FormHelperText>
      )}
      {helpText && <FormHelperText sx={{ typography: 'MsSanParagraphMediumNormal', mt: 2 }}>{helpText}</FormHelperText>}
      {extraContent}
    </FormControl>
  )
}
