import { FormControlLabel, styled, Switch, SwitchProps, SxProps } from '@mui/material'

const IOSSwitchStyled = styled((props: SwitchProps) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  overflow: 'inherit',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: theme.palette?.blackWhiteNeutral?.['900'],
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette?.purple?.['400'],
        opacity: 1,
        border: `1px solid ${theme.palette?.blackWhiteNeutral?.['900']}`,
        boxShadow: '2px 2px 0px 0px #F5F5F5',
        borderRadius: 50
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette?.blackWhiteNeutral?.['400'],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

interface Props {
  label?: string
  sx?: SxProps
  onChange?: (checked: boolean) => void
  value?: boolean
}

export default function IOSSwitch({ label, sx, onChange, value }: Props) {
  return (
    <FormControlLabel
      control={
        <IOSSwitchStyled
          sx={{ m: 1 }}
          value={value}
          checked={value}
          onChange={(event) => onChange?.(event.target.checked)}
        />
      }
      label={label}
      sx={sx}
    />
  )
}
