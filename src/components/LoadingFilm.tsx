

const LoadingFilm= () =>{

  return (
    <ul className='grid grid-cols-6 gap-8 w-full'>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className='skeleton w-full'>
          <div className='skeleton-img w-full h-40 bg-gray-300 animate-pulse img'></div>
          <div className='skeleton-text w-3/4 h-5 mt-2 bg-gray-300 animate-pulse'></div>
        </div>
      ))}
    </ul>
  )
}

export default LoadingFilm