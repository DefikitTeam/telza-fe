import BaseButton from '@/components/BaseButton'
import { Icon } from '@/components/common/Icon'
import { Box, BoxProps, SxProps, Typography } from '@mui/material'

interface Props {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  boxProps?: BoxProps
  sx?: SxProps
}

export default function PaginationSimple({ currentPage = 1, totalPages = 0, onPageChange, boxProps, sx }: Props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      {...boxProps}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ width: 424, ...sx }}
      >
        <BaseButton
          color="primary"
          borderRadius="10px"
          width={44}
          height={36}
          sx={{ minWidth: 'auto' }}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage > 1) {
              onPageChange?.(currentPage - 1)
            }
          }}
        >
          <Icon
            url="icons/arrow-left-paginate.svg"
            className="text-blackWhiteNeutral-1000"
            size={6.5}
            height={10.5}
          />
        </BaseButton>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          py={2}
          px={3}
          bgcolor="blackWhiteNeutral.1000"
        >
          <Typography
            color="blackWhiteNeutral.300"
            variant="MsSanParagraphMediumNormal"
          >
            Showing
          </Typography>
          <Typography
            color="blackWhiteNeutral.300"
            variant="MsSanParagraphMediumBold"
          >
            {currentPage}
          </Typography>
          <Typography
            color="blackWhiteNeutral.300"
            variant="MsSanParagraphMediumNormal"
          >
            of
          </Typography>
          <Typography
            color="blackWhiteNeutral.300"
            variant="MsSanParagraphMediumBold"
          >
            {totalPages}
          </Typography>
        </Box>

        <BaseButton
          color="primary"
          borderRadius="10px"
          width={44}
          height={36}
          sx={{ minWidth: 'auto' }}
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange?.(currentPage + 1)
            }
          }}
          disabled={currentPage === totalPages}
        >
          <Icon
            url="icons/arrow-right-paginate.svg"
            className="text-blackWhiteNeutral-1000"
            size={6.5}
            height={10.5}
          />
        </BaseButton>
      </Box>
    </Box>
  )
}
