import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'

import { BaseImage } from '@/components/common/BaseImage'
import BaseFormControl from '@/components/common/Form/BaseFormControl'
import { Icon } from '@/components/common/Icon'
import IOSSwitch from '@/components/common/Switch/IOSSwitch'
import TooltipInfo from '@/components/common/TooltipInfo'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { appActions, DEFAULT_SLIPPAGE, MINIMUM_TRANSACTION_FEE_IN_SOL } from '@/stores/app.slice'
import { Box, Popover, Typography } from '@mui/material'

const MAXIMUM_SLIPPAGE = 10
const MINIMUM_SLIPPAGE = 0.01
const MAXIMUM_PRIORITY_FEE = 0.05

export default function ConfigSlippage() {
  const { slippage, priorityFee, isAutoSlippge, frontRunProtect } = useAppSelector((state) => state.appStore)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const dispatch = useAppDispatch()

  function setSlippge(value: number | string) {
    if (Number(value) > MAXIMUM_SLIPPAGE) {
      dispatch(appActions.updateSlippage(MAXIMUM_SLIPPAGE))
    } else if (Number(value) < MINIMUM_SLIPPAGE) {
      dispatch(appActions.updateSlippage(MINIMUM_SLIPPAGE))
    } else {
      if (!value) {
        dispatch(appActions.updateSlippage(DEFAULT_SLIPPAGE))
      }
      dispatch(appActions.updateSlippage(value))
    }
  }

  function setPriorityFee(value: number | string) {
    if (Number(value) > MAXIMUM_PRIORITY_FEE) {
      dispatch(appActions.updatePriorityFee(MAXIMUM_PRIORITY_FEE))
    } else {
      dispatch(appActions.updatePriorityFee(Number(value)))
    }
  }

  function handleFrontRunProtect() {
    dispatch(appActions.updateFrontRunProtect(!frontRunProtect))
  }
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <Box>
      <Box
        onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>)}
        display="inline-flex"
        alignItems="center"
        gap={1}
        boxShadow="1px 1px 0px 0px #FFF"
        border="2px solid"
        borderColor="blackWhiteNeutral.0"
        py="6px"
        px={3}
        borderRadius={3}
        className="cursor-pointer"
      >
        <Icon
          url="icons/settings.svg"
          size={15}
          height={15}
          className="text-blackWhiteNeutral-0"
        />
        <Typography
          variant="MontserratLabelLargeRegular"
          color="blackWhiteNeutral.0"
        >
          {slippage ? `${slippage}%` : 'auto'}
        </Typography>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        sx={{
          '& .MuiPopover-paper': {
            backgroundColor: 'blackWhiteNeutral.1000',
            width: 300,
            p: 4,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'blackWhiteNeutral.0'
          }
        }}
        classes={{
          paper: '!shadow-sm'
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Typography
              variant="MontserratLabelLargeRegular"
              color="blackWhiteNeutral.0"
            >
              Max. Slippage
            </Typography>
            <Typography
              variant="MontserratLabelLargeRegular"
              color="blackWhiteNeutral.0"
            >
              {`${MAXIMUM_SLIPPAGE}%`}
            </Typography>
            <TooltipInfo content="Your transaction will revert if the price changes unfavorable by more than this percentage" />
          </Box>
          <Icon
            url="icons/arrow-up.svg"
            size={10}
            height={10}
            className="cursor-pointer text-blackWhiteNeutral-0"
            onClick={() => handleClose()}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            border="1px solid"
            borderColor="blackWhiteNeutral.0"
            borderRadius={2}
            p={1}
            gap={1}
            width={146}
            height={36}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="MontserratLabelMediumRegular"
              component="div"
              sx={{
                border: '1p solid',
                borderColor: 'blackWhiteNeutral.800',
                backgroundColor: isAutoSlippge ? 'blackWhiteNeutral.800' : '',
                width: '50%',
                color: 'blackWhiteNeutral.0',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '6px',
                height: '100%'
              }}
              onClick={() => {
                dispatch(appActions.updateIsAutoSlippge(true))
                dispatch(appActions.updateSlippage(DEFAULT_SLIPPAGE))
              }}
            >
              Auto
            </Typography>
            <Typography
              variant="MontserratLabelMediumRegular"
              component="div"
              sx={{
                border: '1p solid',
                borderColor: 'blackWhiteNeutral.800',
                backgroundColor: isAutoSlippge ? '' : 'blackWhiteNeutral.800',
                width: '50%',
                color: 'blackWhiteNeutral.0',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '6px',
                height: '100%'
              }}
              onClick={() => dispatch(appActions.updateIsAutoSlippge(false))}
            >
              Custom
            </Typography>
          </Box>

          <Box
            width={100}
            height={36}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={2}
            border="1px solid"
            borderColor="blackWhiteNeutral.500"
            overflow="hidden"
            sx={{
              backgroundColor: isAutoSlippge ? 'blackWhiteNeutral.800' : '',
              cursor: isAutoSlippge ? 'no-drop' : ''
            }}
          >
            <NumericFormat
              style={{
                height: '100%',
                border: 'none',
                textAlign: 'center',
                width: '60px',
                background: 'none',
                color: '#fff',
                cursor: isAutoSlippge ? 'no-drop' : ''
              }}
              placeholder="0.01"
              value={slippage}
              decimalScale={2}
              disabled={isAutoSlippge}
              onChange={(e) => setSlippge(Number(e?.target?.value) || '')}
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values
                return formattedValue === '' || Number(floatValue) <= 10
              }}
            />

            <Typography
              color="blackWhiteNeutral.0"
              variant="MontserratLabelMediumRegular"
            >
              %
            </Typography>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography
            variant="MontserratLabelLargeRegular"
            color="blackWhiteNeutral.0"
            component="div"
          >
            Priority Fee
          </Typography>
          <BaseFormControl
            sx={{
              my: 2
            }}
            inputProps={{
              placeholder: 'Enter amount',
              value: priorityFee,
              type: 'number',
              onChange: (event) => setPriorityFee(Number(event.target.value))
            }}
            suffix={
              <Box
                display="flex"
                alignItems="center"
                mt={1}
                gap={2}
                px={2}
                width={60}
              >
                <BaseImage
                  url="coins/sol.png"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <Typography
                  variant="MontserratLabelMediumRegular"
                  color="blackWhiteNeutral.0"
                >
                  SOL
                </Typography>
              </Box>
            }
          />
        </Box>

        <Typography
          variant="MontserratLabelMediumMedium"
          color="blackWhiteNeutral.500"
        >
          A higher priority fee will speed up the confirmation of your transactions. This is the fee paid to the Solana
          Network for each trade.
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="MontserratLabelLargeRegular"
            color="blackWhiteNeutral.0"
          >
            Front-running protection
          </Typography>
          <IOSSwitch
            sx={{ mr: 0 }}
            onChange={handleFrontRunProtect}
            value={frontRunProtect}
          />
        </Box>

        <Typography
          variant="MontserratLabelMediumMedium"
          color="#02A83F"
        >
          Front-running protection prevents bots from front-running your buys. With this feature enabled, you can safely
          use high slippage. We recommend setting a priority fee of at least 0.01 SOL when front-running protection is
          active.
        </Typography>
      </Popover>
    </Box>
  )
}
