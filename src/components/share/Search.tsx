import { Search as SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <div className='flex gap-2 border-b border-[#5b77aa] pb-2 px-2 '>
      <span>
        <SearchIcon strokeWidth={1} className=' opacity-50' />
      </span>

      <input
        type='text'
        name='search'
        placeholder='Tìm Kiếm Phim'
        className=' bg-transparent focus-within:outline-none w-full'
      />
    </div>
  )
}

export default Search
