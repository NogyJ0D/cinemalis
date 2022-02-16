import React from 'react'
import { format } from 'timeago.js'

import { InputTextarea } from 'primereact/inputtextarea'
import { Rating } from 'primereact/rating'

const CardReview = ({ userName, text, rating, date }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-white font-bold text-xl flex gap-4 items-baseline'>
        <h2 className='border rounded w-max px-2 py-1'>{userName}</h2>
        <div className='border rounded px-2 py-1 flex gap-4'>
          <h4>Puntuación:</h4>
          <Rating value={rating} cancel={false} readOnly />
          <p>({rating})</p>
        </div>
        <h4 className='border rounded px-2 py-1 flex gap-4'>{format(date, 'es')}</h4>
      </div>
      <InputTextarea readOnly value={text} />
    </div>
  )
}

export default CardReview
