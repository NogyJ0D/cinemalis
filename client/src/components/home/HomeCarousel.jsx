import React, { useEffect, useState } from 'react'
import { Carousel } from 'primereact/carousel'
import axiosRequest from '../../services/axiosRequest'
import { Link } from 'react-router-dom'

const HomeCarousel = () => {
  const [movies, setMovies] = useState([])

  useEffect(async () => {
    const lastMoviesResponse = await axiosRequest('http://localhost:4000/movies/last/year', 'GET')
    lastMoviesResponse.success
      ? setMovies(lastMoviesResponse.movies)
      : window.alert('Error, no hay películas.')
  }, [])

  const bannerTemplate = (banner) => {
    return (
      <Link to={`/movies/${banner._id}`} className='flex flex-col justify-center items-center w-fit bg-black bg-opacity-50 pb-2 shadow-2xl rounded-lg'>
        <img src={banner.banner} alt={banner.name} className='h-52 w-96' />
        <h3 className='font-semibold text-white text-xl'>{banner.name}</h3>
        <h3 className='font-semibold text-white'>{banner.year}</h3>
      </Link>
    )
  }

  return (
    <div>
      <Carousel value={movies} itemTemplate={bannerTemplate} numVisible={3} numScroll={1} circular autoplayInterval={3000} header={<h4 className='text-white text-3xl pb-4 text-center'>Más recientes</h4>} />
    </div>
  )
}

export default HomeCarousel
