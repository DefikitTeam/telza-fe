import { Box, Skeleton } from '@mui/material'

export default function SkeletonNotification() {
  return (
    <Box
      display="flex"
      gap={4}
    >
      <Skeleton
        variant="circular"
        sx={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'blackWhiteNeutral.500'
        }}
      />
      <Box flex="1">
        <Skeleton
          variant="rectangular"
          sx={{
            backgroundColor: 'blackWhiteNeutral.500',
            borderRadius: 10,
            height: 15,
            width: 100,
            mb: 2
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: '60%',
            backgroundColor: 'blackWhiteNeutral.500',
            height: 10,
            borderRadius: '4px',
            mb: 2
          }}
        />
      </Box>
    </Box>
  )
}
