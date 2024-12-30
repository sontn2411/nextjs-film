'use client'

import LoadingListFilm from '@/components/share/LoadingFilm'
import { useGetHome } from './api/ophim'
import ListFilm from '@/components/share/ListFilm'

export default function Home() {
  const { data, isLoading } = useGetHome()

  return (
    <div className='max-w-[1200px] mx-auto w-full pb-10'>
      {isLoading ? <LoadingListFilm /> : data && <ListFilm data={data.items} />}
    </div>
  )
}
