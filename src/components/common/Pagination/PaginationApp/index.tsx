import * as React from 'react'

import BaseButton from '@/components/BaseButton'
import { Icon } from '@/components/common/Icon'
import { Box, BoxProps, Typography } from '@mui/material'
import usePagination from '@mui/material/usePagination'

interface Props {
  totalPage: number
  currentPage?: number
  onchange?: (page: number) => void
  boxProps?: BoxProps
}

export default function PaginationApp({ totalPage, currentPage, onchange, boxProps }: Props) {
  const { items } = usePagination({
    count: totalPage,
    page: currentPage,
    onChange: (_, page) => onchange?.(page as unknown as number)
  })

  return (
    <Box
      display="flex"
      gap="14px"
      alignItems="center"
      justifyContent="center"
      {...boxProps}
    >
      {items.map(({ page, type, selected, ...item }, index) => {
        let children

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = <Typography color="blackWhiteNeutral.300">...</Typography>
        } else if (type === 'page') {
          children = selected ? (
            <BaseButton
              sx={{ minWidth: 'auto' }}
              color="primary"
              width={44}
              height={40}
              typography="MsSanParagraphMediumBold"
              borderRadius="10px"
            >
              {String(page).padStart(2, '0')}
            </BaseButton>
          ) : (
            <button
              style={{
                width: 42,
                height: 38,
                borderRadius: 10
              }}
              className="border border-blackWhiteNeutral-500 bg-blackWhiteNeutral-1000"
              {...item}
            >
              <Typography
                variant="MsSanParagraphMediumBold"
                color="blackWhiteNeutral.300"
              >
                {String(page).padStart(2, '0')}
              </Typography>
            </button>
          )
        } else {
          children = (
            <BaseButton
              color="primary"
              sx={{
                minWidth: 'auto',
                marginLeft: type === 'next' ? '50px' : '',
                marginRight: type === 'previous' ? '50px' : ''
              }}
              width={42}
              height={38}
              typography="MsSanParagraphMediumBold"
              borderRadius="10px"
              {...item}
            >
              {type === 'next' ? (
                <Icon
                  url="icons/arrow-right-paginate.svg"
                  className="text-blackWhiteNeutral-1000"
                  size={6.5}
                  height={10.5}
                />
              ) : (
                <Icon
                  url="icons/arrow-left-paginate.svg"
                  className="text-blackWhiteNeutral-1000"
                  size={6.5}
                  height={10.5}
                />
              )}
            </BaseButton>
          )
        }

        return <Box key={index}>{children}</Box>
      })}
    </Box>
  )
}
