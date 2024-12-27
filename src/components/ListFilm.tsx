import { FilmItem } from '@/type/film'
import Link from 'next/link'

interface ListFilmProps {
  data: FilmItem[]
}

const ListFilm = ({ data }: ListFilmProps) => {
  return (
    <ul className='grid grid-cols-6 gap-8 w-full '>
      {data?.map((item: FilmItem, index: number) => {
        const urlImgPoster = `https://img.ophim.live/uploads/movies/${item.thumb_url}`
        return (
          <li key={index} className=''>
            <Link
              href={`/phim/${item.slug}`}
              className='flex flex-col gap-2 relative group overflow-hidden transition-transform duration-300 hover:cursor-pointer hover:scale-105'
            >
              <div
                style={{ backgroundImage: `url(${urlImgPoster})` }}
                className='img w-full h-40 bg-cover bg-center object-cover'
              ></div>

              <div className='absolute text-white bg-color-7 text-[11px] font-bold px-[3px] whitespace-nowrap inline-block shadow-[2px_2px_3px_0_rgba(0,0,0,0.75)] text-shadow-md left-[2px] top-[2px] leading-[1.5]'>
                <div className='flex  gap-1 justify-center text-sm'>
                  <span>{item.episode_current}</span>
                </div>
              </div>

              <span className='px-2 text-base font-semibold'>{item.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ListFilm
