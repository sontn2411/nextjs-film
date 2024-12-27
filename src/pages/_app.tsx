import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import LayoutWrapper from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </QueryClientProvider>
  )
}
