import { BaseImage } from '@/components/common/BaseImage'
import { Box, Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

export default function EmptyDataAi() {
  const router = useRouter()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={288}
      gap={5}
    >
      <BaseImage
        url="no-data-ai.svg"
        width={95}
        height={100}
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography variant="MsSanParagraphSmallNormal">No AI coin created yet</Typography>

        <Typography
          variant="MsSanParagraphSmallNormal"
          color="cyan.400"
          className="cursor-pointer"
          onClick={() => {
            router.push('/coins/ai-generate')
          }}
        >
          Create an AI Coin
        </Typography>
      </Box>
    </Box>
  )
}
