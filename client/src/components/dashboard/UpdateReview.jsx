import React from 'react'
import { format } from 'timeago.js'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axiosRequest from '../../services/axiosRequest'

const UpdateReview = ({ userRole, reviewId, movieId, movieName, text, rating, date }) => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async ({ text, rating }) => {
    const response = await axiosRequest(
      `http://localhost:4000/reviews/${reviewId}`, 'PUT', { text, rating }
    )
    response.success
      ? navigate(0)
      : window.alert('Error de actualización de reseña.')
  }

  return (
    <form className='flex flex-col p-2 gap-1 border m-2 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
      <Link to={`/movies/${movieId}`} className='rounded border-2 text-xl font-bold w-max px-2 py-1'>{movieName}</Link>
      <textarea className='text-black rounded px-2' defaultValue={text} {...register('text')} />
      <div className='flex justify-between gap-4 items-baseline py-2'>
        <div className='flex gap-4 items-center'>
          <label>Puntuación:</label>
          <input
            type='number' step='0.1' min='0' max='5'
            defaultValue={rating}
            className='text-black text-xl rounded-lg px-2'
            {...register('rating', {
              min: 0,
              max: 5
            })}
          />
        </div>
        <p className=''>{format(date, 'es')}</p>
        <button className='border rounded px-2 py-1 bg-stone-900 font-bold ml-auto'>Actualizar</button>
      </div>
    </form>
  )
}

export default UpdateReview
