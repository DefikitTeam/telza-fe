import React from 'react'

import BaseButton from '@/components/BaseButton'
import ModalApp from '@/components/common/ModalApp'
import { msSansSerifBoldFont } from '@/themes/fonts'
import { Box, Typography } from '@mui/material'

export default function HowItWorkModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  return (
    <ModalApp
      isOpen={isOpen}
      close={close}
      width={615}
    >
      <Box textAlign="center">
        <Typography
          mb={6}
          component="div"
          fontFamily={msSansSerifBoldFont.style.fontFamily}
          className="text-center !text-2xl"
          variant="MsSanHeadingHeading6Bold"
          color="blackWhiteNeutral.0"
        >
          How It Works:
        </Typography>

        <Typography
          component="div"
          mb={6}
          variant="MsSanParagraphLargeNormal"
          color="blackWhiteNeutral.200"
        >
          Write anything at here
        </Typography>
      </Box>
    </ModalApp>
  )
}
