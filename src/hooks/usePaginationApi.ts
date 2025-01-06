import { useMemo, useState } from 'react'

interface Params {
  pageSize?: number
  totalItem: number
}

const MAX_PAGE_SIZE = 10

export default function usePaginationApi({ totalItem, pageSize = MAX_PAGE_SIZE }: Params) {
  const totalPage = useMemo(() => {
    return Math.ceil(Number(totalItem || 0) / pageSize)
  }, [totalItem, pageSize])

  const isShowPagination = useMemo(() => {
    return Number(totalItem || 0) > 0
  }, [totalItem])

  return {
    isShowPagination,
    totalPage,
    totalItem
  }
}
