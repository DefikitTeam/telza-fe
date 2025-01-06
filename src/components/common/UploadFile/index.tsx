import React, { useState } from 'react'

import BaseButton from '@/components/BaseButton'
import { shortenAddress } from '@/utils/shortenAddress'
import { Box, styled, Typography } from '@mui/material'

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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UploadFile({ onChange }: Props) {
  const [file, setFile] = useState<React.ChangeEvent<HTMLInputElement>>()
  const fileName = file?.target?.files?.[0]?.name
  return (
    <Box
      className="shadow-md"
      p={3}
      borderRadius={4}
      border="2px solid"
      borderColor="blackWhiteNeutral.0"
      display="flex"
      gap="10px"
      alignItems="center"
    >
      <BaseButton
        color="primary"
        width="190px"
        height={48}
        component="label"
        typography="MsSanHeadingHeading6Bold"
      >
        Choose file
        <VisuallyHiddenInput
          type="file"
          onChange={(e) => {
            setFile(e)
            onChange?.(e)
          }}
        />
      </BaseButton>
      {fileName ? (
        <Typography
          variant="MontserratParagraphMediumRegular"
          color="blackWhiteNeutral.50"
        >
          {shortenAddress(fileName, 10, 8)}
        </Typography>
      ) : (
        <Typography
          variant="MontserratParagraphMediumRegular"
          color="blackWhiteNeutral.500"
        >
          No file chosen
        </Typography>
      )}
    </Box>
  )
}
