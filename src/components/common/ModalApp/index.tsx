import React from 'react'
import { useWindowSize } from 'react-use'

import BaseButton from '@/components/BaseButton'
import { Icon } from '@/components/common/Icon'
import useBlockScrollBody from '@/hooks/useBlockScrollBody'
import { Global } from '@emotion/react'
import { Box, Modal, styled, SwipeableDrawer, SxProps, Typography } from '@mui/material'
import { useTheme as useThemeMUI } from '@mui/material/styles'

interface Props {
  isOpen: boolean
  close: () => void
  children: React.ReactNode
  width?: number
  minHeight?: number
  style?: React.CSSProperties
  bgColor?: string
  showModalCloseIcon?: boolean
  shadowClass?: string
  borderColor?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  drawerMobile?: {
    hideHeader?: boolean
    title?: string | React.ReactElement
    hideCancel?: boolean
    hideDone?: boolean
    doneText?: string
    onCancel?: () => void
    onDone?: () => void
    loadingDoneBtn?: boolean
    disableDoneBtn?: boolean
  }
  sxBox?: SxProps
  sxModal?: SxProps
  isSubModal?: boolean
  minHeightDrawer?: number | string
}

const Puller = styled('div')(({ theme }) => ({
  width: 60,
  height: 6,
  backgroundColor: theme?.palette?.blackWhiteNeutral?.[700],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 30px)'
}))

export default function ModalApp({
  isOpen,
  close,
  children,
  width = 500,
  minHeight = 300,
  style = {},
  bgColor,
  showModalCloseIcon = true,
  shadowClass,
  borderColor,
  onClick,
  drawerMobile,
  sxBox,
  sxModal,
  isSubModal,
  minHeightDrawer = 300
}: Props) {
  const { width: windowWidth } = useWindowSize()
  const { breakpoints } = useThemeMUI()

  const drawerMode = windowWidth <= breakpoints?.values?.sm && drawerMobile

  useBlockScrollBody(isOpen, isSubModal)
  return (
    <>
      <Global
        styles={{
          '&.MuiDrawer-root > .MuiPaper-root.MuiDrawer-paperAnchorBottom': {
            maxHeight: 'calc(100% - 72px)',
            overflow: 'visible',
            borderRadius: '20px'
          }
        }}
      />
      {isOpen && (
        <>
          {drawerMode && (
            <SwipeableDrawer
              anchor="bottom"
              open={isOpen}
              onClose={close}
              classes={{
                paper: '!bg-blackWhiteNeutral-1000 !text-blackWhiteNeutral-0 border border-blackWhiteNeutral-500'
              }}
              onOpen={() => {
                //
              }}
              onClick={(e) => {
                e.stopPropagation()
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  borderRadius: '20px 20px 0 0 !important',
                  minHeight: minHeightDrawer
                }
              }}
            >
              <Puller />

              {!drawerMobile?.hideHeader && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  mt={6}
                  alignItems="center"
                  px={3}
                >
                  {!drawerMobile?.hideCancel && (
                    <Typography
                      variant="MontserratParagraphSmallMedium"
                      color="blackWhiteNeutral.400"
                      onClick={() => {
                        close()
                        drawerMobile?.onCancel?.()
                      }}
                      sx={{
                        position: 'relative',
                        zIndex: 99
                      }}
                    >
                      Cancel
                    </Typography>
                  )}
                  <Typography variant="MsSanParagraphLargeBold">{drawerMobile?.title}</Typography>
                  {!drawerMobile?.hideDone && (
                    <BaseButton
                      borderRadius={20}
                      color="primary"
                      typography="MsSanParagraphSmallBold"
                      onClick={() => {
                        if (drawerMobile?.onDone) {
                          drawerMobile?.onDone?.()
                        } else {
                          close()
                        }
                      }}
                      loading={drawerMobile?.loadingDoneBtn}
                      disabled={drawerMobile?.disableDoneBtn}
                      sx={{
                        position: 'relative',
                        zIndex: 99
                      }}
                    >
                      {drawerMobile?.doneText || 'Done'}
                    </BaseButton>
                  )}
                </Box>
              )}
              <Box
                pt={8}
                pb={4}
                px={3}
                height={drawerMobile?.hideHeader ? '100%' : 'calc(100% - 58px)'}
                mt={drawerMobile?.hideHeader ? 0 : '58px'}
                className="overflow-y-auto"
                sx={{ ...sxBox }}
              >
                {children}
              </Box>
            </SwipeableDrawer>
          )}
          {!drawerMode && (
            <Modal
              open={isOpen}
              onClose={close}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              onClick={onClick}
              sx={{
                ...sxModal
              }}
            >
              <Box
                sx={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxHeight: '100vh',
                  overflowY: 'auto',
                  // width: '100vw',
                  py: 5
                }}
              >
                <Box
                  p={6}
                  // position="absolute"
                  // top="50%"
                  // left="50%"
                  bgcolor={bgColor || 'blackWhiteNeutral.1000'}
                  borderRadius={4}
                  className={shadowClass || 'shadow-md'}
                  style={{
                    // transform: 'translate(-50%, -50%)',
                    minHeight: minHeight,
                    borderWidth: '1px',
                    borderColor: borderColor || 'blackWhiteNeutral.0',
                    width: width,
                    maxWidth: 'calc(100vw - 24px)',
                    margin: '0 auto',
                    position: 'relative',
                    ...style
                  }}
                  sx={{
                    padding: {
                      xs: 3,
                      md: 6
                    }
                  }}
                >
                  {showModalCloseIcon && (
                    <Icon
                      url="icons/modal-close-icon.svg"
                      className="absolute right-3 top-3 z-[999] cursor-pointer text-blackWhiteNeutral-0 sm:right-6 sm:top-6"
                      onClick={close}
                      size={20}
                      height={20}
                    />
                  )}
                  {children}
                </Box>
              </Box>
            </Modal>
          )}
        </>
      )}
    </>
  )
}
