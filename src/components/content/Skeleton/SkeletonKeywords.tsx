import { Box, Skeleton } from '@mui/material'

export default function SkeletonKeywords() {
  return new Array(30).fill(0).map((_, index) => (
    <Skeleton
      key={index}
      variant="rectangular"
      sx={{
        width: 75,
        height: 40,
        borderRadius: 2,
        backgroundColor: 'blackWhiteNeutral.500'
      }}
    />
  ))
}
