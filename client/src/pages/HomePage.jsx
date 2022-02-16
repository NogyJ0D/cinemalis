import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axiosRequest from '../services/axiosRequest'

import HomeCarousel from '../components/home/HomeCarousel'
import Review from '../components/home/Review'
// import RankingMovie from '../components/home/RankingMovie'
import MovieDisplay from '../components/MovieDisplay'

const HomePage = () => {
  const [lastReviews, setLastReviews] = useState([])
  const [lastAddedMovies, setLastAddedMovies] = useState([])

  useEffect(async () => {
    const lastReviewsResponse = await axiosRequest('http://localhost:4000/reviews/8', 'GET')
    lastReviewsResponse.success
      ? setLastReviews(lastReviewsResponse.reviews)
      : window.alert('Error, no hay opiniones.')

    const lastAddedResponse = await axiosRequest('http://localhost:4000/movies/last/createdAt', 'GET')
    lastAddedResponse.success
      ? setLastAddedMovies(lastAddedResponse.movies)
      : window.alert('Error, no hay ultimas añadidas')
  }, [])

  return (
    <div className='flex flex-col gap-8'>
      <div className='py-4 h-96 bg-black bg-opacity-70 mt-4 shadow-2xl'>
        <HomeCarousel />
      </div>
      <div className='w-4/5 mx-auto flex justify-between text-white'>
        <div className='w-96 rounded-md h-max bg-black bg-opacity-60 flex flex-col gap-2 p-2 items-center'>
          <h2 className='px-2 pt-2 text-2xl font-bold text-center'>Últimas agregadas</h2>
          {
            lastAddedMovies.length > 0
              ? lastAddedMovies.map(movie => <MovieDisplay key={movie._id} id={movie._id} name={movie.name} poster={movie.poster} />)
              : <h3>Cargando películas...</h3>
          }
        </div>
        <div className='w-[520px] rounded-md h-max bg-black bg-opacity-60 flex flex-col gap-2 p-2 items-center'>
          <h2 className='px-2 pt-2 text-2xl font-bold text-center'>Últimas opiniones</h2>
          {
            lastReviews.length > 0
              ? lastReviews.map(review => <Review key={review._id} movieId={review.movieId} userName={review.userName} movie={review.movieName} rating={review.rating} text={review.text} time={review.date} />)
              : <h3>Sin opiniones</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
