import { MoveLeft, MoveRight } from 'lucide-react'
import { useRouter } from 'next/router'
import { arrShowPage } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalItems: number
  totalItemsPerPage: number
}

const PaginationSlugFilm = ({
  currentPage,
  totalItems,
  totalItemsPerPage,
}: PaginationProps) => {
  const router = useRouter()
  const { slug } = router.query

  const totalPage = Math.ceil(totalItems / totalItemsPerPage)

  console.log('=totalPage==', totalPage)

  const arr = arrShowPage(currentPage, totalPage)

  const handleNavigate = (page: number | string) => {
    router.push(`/danh-sach/${slug}?page=${page}`)
  }

  const handleNextTotalPage = () => {
    if (currentPage !== totalPage) {
      handleNavigate(totalPage)
    }
  }

  const handlePrevToOnePage = () => {
    if (currentPage !== 1) {
      handleNavigate(1)
    }
  }

  return (
    <div className='flex justify-between pt-6'>
      <div>
        <span>
          Trang {currentPage} /{totalPage}| Tổng {totalItems} Kết quả
        </span>
      </div>
      <div className='flex items-center '>
        <button
          onClick={handlePrevToOnePage}
          className={`px-2 py-2 border  rounded-l-lg ${
            currentPage == 1 ? ' opacity-50' : ''
          }`}
        >
          <MoveLeft strokeWidth={1.25} size={20} />
        </button>
        {arr.map((number) => (
          <button
            className={` py-2 px-4  text-sm ${
              number == arr[4] ? 'border-r' : ''
            }   ${
              currentPage == number
                ? 'text-blue-500 border border-blue-500 font-bold'
                : ' border-l border-t border-b'
            }`}
            key={number}
            onClick={() => handleNavigate(number)}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNextTotalPage}
          className={`px-2 py-2 border  rounded-r-lg ${
            currentPage == totalPage ? ' opacity-50' : ''
          }`}
        >
          <MoveRight strokeWidth={1.25} size={20} />
        </button>
      </div>
    </div>
  )
}

export default PaginationSlugFilm
