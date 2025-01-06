import { Box, Skeleton, Stack } from '@mui/material'

export default function SkeletonTrendingThread() {
  return (
    <Stack spacing={1}>
      <Box
        display="flex"
        gap={3}
        alignItems="start"
      >
        <Skeleton
          variant="circular"
          width={55}
          height={55}
          sx={{ backgroundColor: 'blackWhiteNeutral.500' }}
        />
        <Box flex="1">
          <Skeleton
            variant="rectangular"
            sx={{
              backgroundColor: 'blackWhiteNeutral.500',
              height: 20,
              borderRadius: '40px',
              width: 75,
              mb: 2
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              flex: '1',
              backgroundColor: 'blackWhiteNeutral.500',
              height: 20,
              borderRadius: '4px'
            }}
          />
        </Box>
      </Box>

      <Skeleton
        sx={{
          backgroundColor: 'blackWhiteNeutral.500',
          mt: '20px !important'
        }}
      />
      <Skeleton
        sx={{
          backgroundColor: 'blackWhiteNeutral.500'
        }}
        width="80%"
      />
      <Skeleton
        sx={{
          backgroundColor: 'blackWhiteNeutral.500'
        }}
        width="60%"
      />
      <Skeleton
        sx={{
          backgroundColor: 'blackWhiteNeutral.500'
        }}
        width="40%"
      />
    </Stack>
  )
}
