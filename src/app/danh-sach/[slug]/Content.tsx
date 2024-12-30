'use client'

import { useGetList } from '@/app/api/ophim'
import ListFilm from '@/components/share/ListFilm'
import LoadingListFilm from '@/components/share/LoadingFilm'

const ContentSlug = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetList(slug)

  // console.log('===', data)

  return (
    <div className='max-w-[1200px] mx-auto w-full pb-10'>
      {isLoading ? <LoadingListFilm /> : data && <ListFilm data={data.items} />}
    </div>
  )
}

export default ContentSlug
