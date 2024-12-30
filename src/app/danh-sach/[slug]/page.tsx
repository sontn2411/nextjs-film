'use client'

import { useGetList } from '@/app/api/ophim'
import ListFilm from '@/components/share/ListFilm'
import LoadingListFilm from '@/components/share/LoadingFilm'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import PaginationSlugFilm from '@/components/share/PaginationSlugFilm'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SubSlug = (props: { params: Params; searchParams: SearchParams }) => {
  const params = use(props.params)
  const searchParams = use(props.searchParams)

  const slug = params.slug
  const currentPage = Number(searchParams.page || 1)
  const router = useRouter()

  useEffect(() => {
    if (!searchParams.page && slug) {
      router.push(`/danh-sach/${slug}?page=1`)
    }
  }, [slug, searchParams.page, router])

  const { data, isLoading, error } = useGetList(slug, currentPage)

  if (error) {
    return <div>Error loading data.</div>
  }

  if (isLoading) {
    return <LoadingListFilm />
  }

  const { items, params: dataParams } = data

  return (
    <div className='max-w-[1200px] mx-auto w-full pb-10'>
      <ListFilm data={items} />

      <PaginationSlugFilm {...dataParams.pagination} slug={slug} />
    </div>
  )
}

export default SubSlug
