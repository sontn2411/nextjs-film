import { useQuery } from '@tanstack/react-query'
import axiosInstance from './http'

const fetchGetHome = async () => {
  const response = await axiosInstance.get('/home')

  return response.data.data
}

export const useGetHome = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: () => fetchGetHome(),
    staleTime: 5 * 60 * 1000,
  })
}

const fetchGetList = async (slug: string, page: number) => {
  const response = await axiosInstance.get(`/danh-sach/${slug}?page=${page}`)

  return response.data.data
}

export const useGetList = (slug: string, page: number) => {
  return useQuery({
    queryKey: ['getList', slug, page],
    queryFn: () => fetchGetList(slug, page),
    staleTime: 5 * 60 * 1000,
  })
}
