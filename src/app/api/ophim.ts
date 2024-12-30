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

const fetchGetList = async (slug: string) => {
  const response = await axiosInstance.get('/danh-sach/' + slug)

  return response.data.data
}

export const useGetList = (slug: string) => {
  return useQuery({
    queryKey: ['getList', slug],
    queryFn: () => fetchGetList(slug),
    staleTime: 5 * 60 * 1000,
  })
}
