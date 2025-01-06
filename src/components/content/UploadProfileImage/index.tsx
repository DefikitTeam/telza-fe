import React from 'react'

import { Icon } from '@/components/common/Icon'
import { getBase64File } from '@/utils/getBase64File'
import { getBaseImgUrl } from '@/utils/getBaseImgUrl'
import { Avatar, Box, Popover, styled, useTheme } from '@mui/material'

import clsx from 'clsx'

const defaultAvatarList = [
  {
    id: 1,
    url: getBaseImgUrl('/avatar/avt1.png')
  },
  {
    id: 2,
    url: getBaseImgUrl('/avatar/avt2.png')
  },
  {
    id: 3,
    url: getBaseImgUrl('/avatar/avt3.png')
  },
  {
    id: 4,
    url: getBaseImgUrl('/avatar/avt4.png')
  },
  {
    id: 5,
    url: getBaseImgUrl('/avatar/avt5.png')
  },
  {
    id: 6,
    url: getBaseImgUrl('/avatar/avt6.png')
  },
  {
    id: 7,
    url: getBaseImgUrl('/avatar/avt7.png')
  }
]

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

interface Props {
  selectedImage?: string
  onSelectImage: (url: string) => void
  setFile?: (e?: File | undefined) => void
}

export default function UploadProfileImage({ selectedImage, onSelectImage, setFile }: Props) {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const id = open ? 'simple-popover' : undefined

  const handleOnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile?.(e.target.files[0])
      getBase64File(e.target.files[0]).then((base64) => {
        onSelectImage(base64)
        handleClose()
      })
    }
  }

  return (
    <>
      <Box
        position="relative"
        height={90}
        className="cursor-pointer"
        onClick={handleClick}
      >
        <Avatar
          src={selectedImage}
          sx={{
            width: 90,
            height: 90
          }}
        />
        <Box
          width={40}
          height={40}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        >
          <Icon
            url="icons/camera.svg"
            className="text-blackWhiteNeutral-0"
            size={16}
            height={14}
          />
        </Box>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        sx={{
          '.MuiPopover-paper': {
            backgroundColor: 'blackWhiteNeutral.900',
            padding: 4,
            border: '1px solid',
            borderColor: 'blackWhiteNeutral.400',
            width: 280,
            borderRadius: 3,
            marginTop: 2,

            [theme.breakpoints.up('xxl')]: {
              left: '920px !important'
            }
          }
        }}
      >
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          rowGap={3}
        >
          {defaultAvatarList.map((e, index) => (
            <Box
              key={index}
              className={clsx(
                'flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full',
                selectedImage === e.url && 'border-2 border-cyan-300'
              )}
              onClick={() => {
                onSelectImage(e.url)
                handleClose()
                setFile?.(undefined)
              }}
            >
              <Box
                component="img"
                src={e.url}
                width={48}
                height={48}
                className="h-[48px] w-[48px] rounded-full"
              />
            </Box>
          ))}
          <Box
            component="label"
            className="flex h-[60px] w-[60px] items-center justify-center"
          >
            <VisuallyHiddenInput
              type="file"
              onChange={handleOnChangeFile}
            />
            <Box
              className={clsx(
                'flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-dashed border-blackWhiteNeutral-400 p-3'
              )}
            >
              <Icon
                url="icons/camera.svg"
                className="text-blackWhiteNeutral-400"
                size={24}
                height={21}
              />
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  )
}
