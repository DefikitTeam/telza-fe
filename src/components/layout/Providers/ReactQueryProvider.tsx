'use client'

import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 1_000 * 60 * 60 * 24, // 24 hours
            refetchOnWindowFocus: false,
            retryDelay: 3_000
          }
        }
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
