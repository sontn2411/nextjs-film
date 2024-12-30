'use client'

import Header from '@/components/share/Header'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const MyApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col gap-2'>
        <Header />
        <div className='min-h-screen flex  pt-10 justify-center'>
          {children}
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
