import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-around items-center gap-6'>
      <div className='py-4 px-8 '>
        <Link href='/' className='text-4xl font-bold uppercase'>
          Movibazar
        </Link>
      </div>
      <div className='w-1/4'>{/* <Search /> */}</div>
      <ul className='flex gap-4 text-base font-semibold items-center'>
        {menus.map((item) => {
          return (
            <li key={item.name} className='w-auto'>
              <Link className='' href={`/danh-sach/${item.to}?page=1`}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header

const menus = [
  {
    id: 1,
    name: 'Phim Bộ',
    to: 'phim-bo',
  },
  {
    id: 2,
    name: 'Phim Lẻ',
    to: 'phim-le',
  },
  {
    id: 3,
    name: 'Hoạt Hình',
    to: 'hoat-hinh',
  },
  {
    id: 4,
    name: 'TV Shows',
    to: 'tv-shows',
  },
  {
    id: 5,
    name: 'VietSub',
    to: 'phim-vietsub',
  },
  {
    id: 6,
    name: 'Thuyết Minh',
    to: 'phim-thuyet-minh',
  },
  {
    id: 7,
    name: 'Lồng Tiếng',
    to: 'phim-long-tieng',
  },
]
