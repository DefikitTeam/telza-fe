import { Box, Skeleton } from '@mui/material'

export default function SkeletonPortfolio() {
  return (
    <Box
      position="relative"
      display="flex"
      border="1px solid"
      borderColor="blackWhiteNeutral.0"
      bgcolor="blackWhiteNeutral.1000"
      p={4}
      borderRadius={3}
      height={100}
      gap={4}
      alignItems="center"
      sx={{
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        }
      }}
    >
      <Box
        sx={{
          className: 'flex-auto',
          flex: 1
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 100,
            mb: 3
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 200
          }}
        />
      </Box>
      <Box
        sx={{
          width: 230
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 100,
            mb: 3
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 152
          }}
        />
      </Box>
      <Box
        sx={{
          width: 230
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 100,
            mb: 3
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 152
          }}
        />
      </Box>
      <Box
        sx={{
          width: 230
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 100,
            mb: 3
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            borderRadius: 3,
            backgroundColor: 'blackWhiteNeutral.500',
            width: 152
          }}
        />
      </Box>
    </Box>
  )
}
