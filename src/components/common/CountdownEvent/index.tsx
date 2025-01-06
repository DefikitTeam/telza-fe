import useCountdownEvent from '@/hooks/useCountdownEvent'
import { Box, Typography } from '@mui/material'

export default function CountdownEvent({ targetDate }: { targetDate: string | number }) {
  const { day, hour, min, sec } = useCountdownEvent(targetDate) // Replace with your target date

  return (
    <Box className="mt-5 flex items-center justify-center gap-[10px]">
      <Box className="flex flex-col items-center gap-2">
        <Typography
          variant="MsSanParagraphMediumBold"
          className="flex h-[38px] w-[45px] items-center justify-center gap-1 rounded-lg border border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900"
        >
          {day}
        </Typography>
        <Typography
          variant="MsSanParagraphXSmallNormal"
          color="blackWhiteNeutral.300"
        >
          Day
        </Typography>
      </Box>

      <Box className="flex flex-col items-center gap-2">
        <Typography
          variant="MsSanParagraphMediumBold"
          className="flex h-[38px] w-[45px] items-center justify-center gap-1 rounded-lg border border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900"
        >
          {hour}
        </Typography>
        <Typography
          variant="MsSanParagraphXSmallNormal"
          color="blackWhiteNeutral.300"
        >
          Hr
        </Typography>
      </Box>

      <Box className="flex flex-col items-center gap-2">
        <Typography
          variant="MsSanParagraphMediumBold"
          className="flex h-[38px] w-[45px] items-center justify-center gap-1 rounded-lg border border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900"
        >
          {min}
        </Typography>
        <Typography
          variant="MsSanParagraphXSmallNormal"
          color="blackWhiteNeutral.300"
        >
          Min
        </Typography>
      </Box>

      <Box className="flex flex-col items-center gap-2">
        <Typography
          variant="MsSanParagraphMediumBold"
          className="flex h-[38px] w-[45px] items-center justify-center gap-1 rounded-lg border border-blackWhiteNeutral-800 bg-blackWhiteNeutral-900"
        >
          {sec}
        </Typography>
        <Typography
          variant="MsSanParagraphXSmallNormal"
          color="blackWhiteNeutral.300"
        >
          Sec
        </Typography>
      </Box>
    </Box>
  )
}
