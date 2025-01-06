import React from 'react'

import EmptyData from '@/components/content/EmptyData'
import { msSansSerifBoldFont } from '@/themes/fonts'
import {
  Box,
  Skeleton,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { SxProps } from '@mui/system'

const StyledTableContainer = styled(TableContainer)(() => ({
  backgroundColor: 'transparent',
  overflowY: 'hidden'
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.blackWhiteNeutral?.[0],
    border: 0,
    padding: '16px 12px'
  },
  [`&.${tableCellClasses.root}`]: {
    paddingLeft: 8,
    paddingRight: 8
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '22px',
    fontStyle: 'normal',
    color: theme.palette.blackWhiteNeutral?.[50],
    paddingTop: 12,
    paddingBottom: 12
  }
}))

export const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: 'transparent',
  // hide border
  'td, th': {
    border: 0
  }
}))

export interface TableColumnData<T> {
  label: string | React.ReactNode
  align?: 'center' | 'left' | 'right'
  sx?: SxProps
  formatter: (item: T, index: number) => React.ReactNode
  width?: number | string
  typography?: string
}

interface Props<T> {
  columns: Array<TableColumnData<T>>
  data: Array<T>
  loading?: boolean
  bottomRow?: React.ReactNode
}

function SleketonColumn() {
  return (
    <Box height="32px">
      <Skeleton
        sx={{
          backgroundColor: 'blackWhiteNeutral.500',
          height: 15,
          width: '100%'
        }}
      />
    </Box>
  )
}

export default function TableApp<T>({ columns, data, loading, bottomRow }: Props<T>) {
  return (
    <StyledTableContainer>
      <Table
        sx={{ minWidth: 500 }}
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <StyledTableCell
                key={index}
                align={item?.align || 'left'}
              >
                <Typography
                  variant={(item?.typography as any) || 'MsSanParagraphLargeBold'}
                  color="blackWhiteNeutral.400"
                  sx={item?.sx}
                >
                  {item?.label}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading &&
            new Array(10).fill('').map((_, index) => (
              <StyledTableRow key={index}>
                {columns?.map((header, i) => (
                  <StyledTableCell
                    component="th"
                    scope="row"
                    key={i}
                    width={header?.width}
                  >
                    <SleketonColumn />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}

          {!loading &&
            data?.map((row, index) => (
              <StyledTableRow
                key={index}
                className="group hover:!bg-blackWhiteNeutral-900"
              >
                {columns?.map((header, i) => (
                  <StyledTableCell
                    key={i}
                    component="td"
                    scope="row"
                    align={header?.align || 'left'}
                    width={header?.width}
                  >
                    {header.formatter(row, index)}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}

          {!loading && Number(data?.length || 0) === 0 && (
            <StyledTableRow>
              <StyledTableCell colSpan={columns?.length || 1}>
                <EmptyData
                  height={200}
                  width="100%"
                />
              </StyledTableCell>
            </StyledTableRow>
          )}

          {bottomRow}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
