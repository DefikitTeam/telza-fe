import React from 'react'

import { Menu, MenuProps, styled, SxProps } from '@mui/material'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    color: theme.palette.blackWhiteNeutral?.[0],
    backgroundColor: theme.palette?.blackWhiteNeutral?.[1000],
    minWidth: 200,
    border: '1px solid',
    borderColor: theme.palette?.blackWhiteNeutral?.[0],
    boxShadow: '2px 2px 0px 0px #F5F5F5',
    padding: 8,
    '& .MuiMenu-list': {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    },
    '& .MuiMenuItem-root': {
      padding: '8px 12px',
      justifyContent: 'space-between',
      borderRadius: 8,
      '&:active': {
        backgroundColor: theme.palette?.blackWhiteNeutral?.[900]
      },
      '&:hover': {
        backgroundColor: theme.palette?.blackWhiteNeutral?.[900]
      }
    }
  }
}))

interface Menurops {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: (event: React.MouseEvent<HTMLElement>) => void
  sx?: SxProps
  children: React.ReactNode
}

const MenuCustom = (props: Menurops) => {
  const { anchorEl, open, onClose, sx, children } = props

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      sx={sx}
    >
      {children}
    </StyledMenu>
  )
}

export default MenuCustom
