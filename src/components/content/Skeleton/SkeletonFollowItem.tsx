import { Box, Skeleton, Stack } from '@mui/material'

export default function SkeletonFollowItem() {
  return (
    <Stack spacing={1}>
      <Box
        display="flex"
        gap={4}
        borderRadius={3}
      >
        <Box
          display="flex"
          gap={3}
          alignItems="start"
          width="100%"
        >
          <Skeleton
            variant="circular"
            sx={{
              width: '63px',
              height: '63px',
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
      </Box>
    </Stack>
  )
}
