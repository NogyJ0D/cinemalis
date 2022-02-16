import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputTextarea } from 'primereact/inputtextarea'
import { Rating } from 'primereact/rating'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'
import { useForm } from 'react-hook-form'

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
      <div className='text-white font-bold text-xl flex gap-4 items-baseline'>
        <h2 className='border rounded w-max px-2 py-1'>{user.userName}</h2>
        <div className='border rounded px-2 py-1 flex gap-4'>
          <h4>Puntuación:</h4>
          <Rating value={rating} onChange={(e) => setRating(e.value)} cancel={false} />
          <label>({rating})</label>
        </div>
        <button className='button ml-auto'>Enviar</button>
      </div>
      <InputTextarea required {...register('text', { required: true })} placeholder='Reseña' />
    </form>
  )
}

export default NewReview
