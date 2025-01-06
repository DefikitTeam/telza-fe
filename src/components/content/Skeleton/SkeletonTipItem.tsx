import { Box, Skeleton, Stack } from '@mui/material'

export default function SkeletonTipItem() {
  return (
    <Stack
      className="rounded-[20px]"
      spacing={1}
      height={65}
    >
      <Box
        display="flex"
        gap={3}
        alignItems="start"
      >
        <Skeleton
          variant="rectangular"
          width={80}
          height={30}
          sx={{ backgroundColor: 'blackWhiteNeutral.500', borderRadius: '12px' }}
        />
        <Box flex="1">
          <Skeleton
            variant="rectangular"
            sx={{
              backgroundColor: 'blackWhiteNeutral.500',
              height: 12,
              borderRadius: '40px',
              width: 75,
              mb: 2
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              backgroundColor: 'blackWhiteNeutral.500',
              height: 12,
              borderRadius: '40px',
              mb: 2
            }}
          />
        </Box>
      </Box>
      <Skeleton
        variant="rectangular"
        sx={{
          backgroundColor: 'blackWhiteNeutral.500',
          height: 12,
          borderRadius: '40px',
          mb: 2
        }}
      />
    </Stack>
  )
}
