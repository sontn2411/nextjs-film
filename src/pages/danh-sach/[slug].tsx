import ListFilm from '@/components/ListFilm'
import LoadingFilm from '@/components/LoadingFilm'
import { fetchDataFilm } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import PaginationSlugFilm from '@/components/PaginationSlugFilm'
import Head from 'next/head'

const SlugComponent = () => {
  console.log('==========')

  const router = useRouter()
  const searchParams = useSearchParams()
  const { slug } = router.query

  const page = searchParams.get('page') || '1'

  useEffect(() => {
    if (!searchParams.get('page') && slug) {
      const params = new URLSearchParams(window.location.search)
      params.set('page', '1')
      router.push(
        { pathname: `/danh-sach/${slug}`, query: { page: '1' } },
        undefined,
        { shallow: true }
      )
    }
  }, [slug, searchParams, router])

  const { data, isLoading } = useQuery({
    queryKey: ['slug', slug, page],
    queryFn: () => fetchDataFilm('danh-sach/' + slug, page),
  })

  if (isLoading) {
    return <LoadingFilm />
  }

  const { items, params, seoOnPage } = data.data

  return (
    <>
      <Head>
        <title>{seoOnPage.titleHead}</title>
      </Head>
      <div className='max-w-[1200px] mx-auto w-full pb-10'>
        <ListFilm data={items} />
        <PaginationSlugFilm {...params.pagination} />
      </div>
    </>
  )
}

export default SlugComponent
