import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'
import { useForm } from 'react-hook-form'
import RatingStars from '../RatingStars'

const NewReview = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [rating, setRating] = useState(0)
  const [store, dispatch] = useContext(GlobalContext)
  const { user, movie } = store

  const onSubmit = async ({ text }) => {
    const response = await axiosRequest('http://localhost:4000/reviews', 'POST', { userName: user.userName, userId: user.id, text, rating, movieId: movie.id, movieName: movie.name })
    response.success
      ? navigate(0)
      : window.alert('Error, complete todos los campos...')
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='text-white font-bold text-xl flex gap-4 items-center'>
        <h2 className='border rounded w-max px-2 py-1'>{user.userName}</h2>
        <RatingStars rating={rating} setRating={setRating} />
        <button className='button ml-auto'>Enviar</button>
      </div>
      <textarea className='text-black outline-none rounded-xl p-4' {...register('text', { required: true })} required placeholder='Reseña' />
    </form>
  )
}

export default NewReview
