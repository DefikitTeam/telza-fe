import { BaseImage } from '@/components/common/BaseImage'
import { Box, SxProps, Typography } from '@mui/material'

interface Props extends Omit<SxProps, 'width' | 'height'> {
  width?: number | string
  height?: number | string
  widthIcon?: number
  heightIcon?: number
  sx?: SxProps
  emptyText?: string
}

export default function EmptyData({ width, height, widthIcon, heightIcon, sx, emptyText }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
      gap={5}
      sx={sx}
    >
      <BaseImage
        url="no-data.svg"
        width={widthIcon || 142}
        height={heightIcon || 100}
      />

      <Typography variant="MsSanParagraphSmallNormal">{emptyText || 'No data available'}</Typography>
    </Box>
  )
}
