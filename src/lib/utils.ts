import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchDataFilm = async (path: string, page?: string) => {
  const response = await fetch(`https://ophim1.com/v1/api/${path}?page=${page}`)
  const data = response.json()

  return data
}

export const arrShowPage = (currentPage: number, maxNumber: number) => {
  const length = 5
  const start = Math.max(
    1,
    Math.min(maxNumber - length + 1, currentPage - Math.floor(length / 2))
  )
  const end = Math.min(maxNumber, start + length - 1)

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
