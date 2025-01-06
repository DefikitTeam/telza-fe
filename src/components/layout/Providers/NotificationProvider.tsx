import React, { forwardRef, useMemo } from 'react'

import { Icon } from '@/components/common/Icon'
import { msSansSerif1Font, msSansSerifBoldFont } from '@/themes/fonts'
import { Box, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'

import clsx from 'clsx'
import { type CustomContentProps, SnackbarContent, SnackbarProvider, useSnackbar } from 'notistack'

export const useNotification = useSnackbar

const useStyles: any = makeStyles({
  containerRoot: {
    top: '90px'
  }
})

const durationInSecond = 3

const ToastContainer = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  width: '410px',
  padding: '16px',
  justifyContent: 'space-between',
  gap: '16px',
  borderRadius: '16px',
  border: '2px solid',
  boxShadow: '3px 3px 0px 0px #F5F5F5',
  overflow: 'hidden',
  '&:hover': {
    '& .box-line': {
      'animation-play-state': 'paused'
    }
  },

  '& .box-line': {
    position: 'absolute',
    width: '410px',
    height: '6px',
    top: '0',
    left: '0',
    animation: `slideIn ${durationInSecond}s ease-out forwards`
  },

  '& .notification-title': {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.36px'
  },

  '& .notification-message': {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0.28px',
    wordBreak: 'break-word',
    overflow: 'hidden',
    maxWidth: '100%'
  }
}))

const CustomNotificationBox = forwardRef<HTMLDivElement, CustomContentProps>((props, forwardedRef) => {
  const { closeSnackbar } = useSnackbar()
  const { message, id, action, variant } = props

  const [bgColor, borderColor, textColor] = useMemo(() => {
    switch (variant) {
      case 'error':
        return ['bg-destructive-400', '!border-destructive-400', 'text-destructive-400']
      case 'warning':
        return ['bg-yellow-300', '!border-yellow-300', 'text-yellow-300']
      case 'success':
        return ['bg-cyan-300', '!border-cyan-300', 'text-cyan-300']
      default:
        return ['bg-cyan-300', '!border-cyan-300', 'text-cyan-300']
    }
  }, [variant])

  return (
    <SnackbarContent ref={forwardedRef}>
      <ToastContainer
        className={clsx('bg-blackWhiteNeutral-1000', borderColor)}
        onClick={() => {
          closeSnackbar(id)
        }}
      >
        <Box className={clsx('box-line', bgColor)} />
        <Icon
          url="icons/toast-success.svg"
          size={24}
          height={24}
          className={clsx(textColor)}
        />
        <Box flex={1}>
          <Box className={clsx('notification-title', textColor)}>{action as string}</Box>
          <Box
            mt={1}
            className="text-blackWhiteNeutral.200 notification-message"
          >
            {message}
          </Box>
        </Box>
        <Icon
          url="icons/modal-close-icon.svg"
          size={20}
          height={20}
          color="blackWhiteNeutral.0"
          onClick={() => closeSnackbar(id)}
          className="cursor-pointer"
        />
      </ToastContainer>
    </SnackbarContent>
  )
})
CustomNotificationBox.displayName = 'CustomNotificationBox'

export default function IntegrationNotistack({ children }: { children: React.ReactNode }) {
  const classes = useStyles()
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={durationInSecond * 1000}
      maxSnack={3}
      Components={{
        default: CustomNotificationBox,
        success: CustomNotificationBox,
        error: CustomNotificationBox,
        warning: CustomNotificationBox
      }}
      classes={{
        containerRoot: classes.containerRoot
      }}
    >
      {children}
    </SnackbarProvider>
  )
}
