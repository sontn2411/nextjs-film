import { useQuery } from '@tanstack/react-query'
import { fetchDataFilm } from '@/lib/utils'
import LoadingFilm from '@/components/LoadingFilm'
import ListFilm from '@/components/ListFilm'
import Head from 'next/head'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['home'],
    queryFn: () => fetchDataFilm('home'),
  })

  if (isLoading) {
    return <LoadingFilm />
  }

  const { items, seoOnPage } = data.data

  return (
    <>
      <Head>
        <title>{seoOnPage.titleHead}</title>
      </Head>
      <div className='max-w-[1200px] mx-auto w-full pb-10'>
        <ListFilm data={items} />
      </div>
    </>
  )
}
