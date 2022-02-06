import React from 'react'
import Carousel from '../components/Carousel'
import Opinion from '../components/Opinion'
import RankingMovie from '../components/RankingMovie'

const HomePage = () => {
  const rankingMovies = [
    {
      name: 'Eternals',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzVjYThmNDAtOTE1NC00YjQ2LTk4NWYtNTc4Yzc4OTRhYjllXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      rating: 6.5,
      year: 2021
    },
    {
      name: 'Múnich en vísperas de una guerra',
      image:
        'https://m.media-amazon.com/images/M/MV5BODIwMDE0MTktZTVjNS00OTVmLTg1MDEtOWNhMmUzYmNkM2UyXkEyXkFqcGdeQXVyNTg1MDQzMDU@._V1_.jpg',
      rating: 6.9,
      year: 2021
    },
    {
      name: 'Scream',
      image:
        'https://m.media-amazon.com/images/M/MV5BM2E4ZGFmZTgtMDVkYS00ZTk0LWIzYWMtODk5OGVmYmEyMzEzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      rating: 7.1,
      year: 2022
    }
  ]

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex justify-center font-nunito py-4 h-96 bg-stone-900 bg-opacity-80 mt-4 shadow-2xl'>
        <Carousel />
      </div>
      <div className='w-4/5 mx-auto flex justify-between text-white'>
        <div className='w-[500px] h-max bg-black bg-opacity-70'>
          <h2 className='pl-10 text-2xl'>Top 10 del mes</h2>
          {rankingMovies.map(el => (
            <RankingMovie
              key={el.name}
              name={el.name}
              image={el.image}
              rating={el.rating}
              year={el.year}
            />
          ))}
        </div>
        <div className='w-[500px] h-max bg-black bg-opacity-70'>
          <h2 className='pl-10 text-2xl'>Opiniones</h2>
          <Opinion />
        </div>
      </div>
    </div>
  )
}

export default HomePage
