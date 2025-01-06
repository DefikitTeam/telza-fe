import React, { useEffect, useState } from 'react'

import { msSansSerifBoldFont } from '@/themes/fonts'
import { Box, styled, useTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SxProps } from '@mui/system'

import { Icon } from '../Icon'

export type SelectItem<T = any> = {
  value: string
  label: string
} & T

interface SelectProps<T> {
  listItem: SelectItem<T>[]
  value: string
  onChange?: (value: string) => void
  dropdownWidth?: number
  showTick?: boolean
  height?: number
  sx?: SxProps
  sxBox?: SxProps
  sxItem?: SxProps
  customLabel?: (item: SelectItem) => React.ReactNode
}

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette?.blackWhiteNeutral?.[0],
  border: '2px solid',
  borderColor: theme.palette?.blackWhiteNeutral?.[0],
  backgroundColor: theme.palette?.blackWhiteNeutral?.[1000],
  borderRadius: 12,
  padding: '10px 16px',

  '& .MuiSelect-select': {
    padding: 0,
    paddingRight: '10px !important'
  },

  '& .MuiInputBase-input': {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px'
  }
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: 8,
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: msSansSerifBoldFont.style.fontFamily,
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '28px',

  '&:hover': {
    backgroundColor: theme.palette?.blackWhiteNeutral?.[900]
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette?.blackWhiteNeutral?.[900]
  },
  '&.Mui-selected:hover': {
    backgroundColor: theme.palette?.blackWhiteNeutral?.[900]
  }
}))

export default function SelectCustom<T = any>(props: SelectProps<T>) {
  const {
    listItem,
    value,
    onChange,
    dropdownWidth,
    showTick = true,
    height,
    sx = {},
    sxBox = {},
    sxItem = {},
    customLabel
  } = props
  const [open, setOpen] = useState(false)

  const theme = useTheme()

  const MenuProps = {
    PaperProps: {
      style: {
        marginTop: 8,
        padding: 8,
        borderRadius: 12,
        width: dropdownWidth ? dropdownWidth : 260,
        border: '2px solid',
        borderColor: theme.palette?.blackWhiteNeutral?.[0],
        backgroundColor: theme.palette?.blackWhiteNeutral?.[1000],
        boxShadow: '2px 2px 0px 0px #F5F5F5',
        color: theme.palette?.blackWhiteNeutral?.[0]
      }
    },
    MenuListProps: {
      style: {
        display: 'flex',
        flexDirection: 'column' as const,
        padding: 0,
        gap: 4
      }
    },
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <FormControl
      sx={{ minWidth: 120, ...sxBox }}
      className="relative"
    >
      <div
        onClick={handleOpen}
        className="absolute inset-0 z-10 cursor-pointer"
      />
      <StyledSelect
        open={open}
        value={value}
        onChange={(event: any) => onChange?.(event.target.value as string)}
        onOpen={handleOpen}
        onClose={handleClose}
        autoWidth
        IconComponent={() => (
          <Box
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Icon
              url="icons/chevron-down.svg"
              size={10.5}
              height={6.5}
              color="blackWhiteNeutral.0"
            />
          </Box>
        )}
        renderValue={(selected) => {
          const selectedItem = listItem.find((item) => item.value === selected) as SelectItem
          return customLabel ? customLabel?.(selectedItem) : selectedItem?.label
        }}
        MenuProps={MenuProps}
        displayEmpty
        sx={{
          height: height ? height : 48,
          ...sx
        }}
      >
        {listItem.map((item) => (
          <StyledMenuItem
            key={item.value}
            value={item.value}
            autoFocus
            sx={{
              ...sxItem
            }}
          >
            {customLabel ? customLabel?.(item) : item.label}
            {showTick && value === item.value && (
              <Icon
                url="icons/tick.svg"
                size={16}
                height={16}
              />
            )}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}
