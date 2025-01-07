import React from 'react'

import { styled, Switch, SwitchProps } from '@mui/material'

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 22,
  padding: 0,
  display: 'flex',
  borderRadius: 50,
  boxShadow: '2px 2px 0px 0px #F5F5F5',
  border: '1px solid',
  borderColor: theme.palette?.blackWhiteNeutral?.[0],
  '&:active': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    paddingTop: 2.5,
    color: theme.palette?.pink?.[300],
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: theme.palette?.blackWhiteNeutral?.[900],
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette?.pink?.[300]
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    borderRadius: 50,
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 50,
    opacity: 1,
    backgroundColor: theme.palette?.blackWhiteNeutral?.[900],
    boxSizing: 'border-box'
  }
}))

const SwitchCustom = (props: SwitchProps) => {
  return <CustomSwitch {...props} />
}

export default SwitchCustom
