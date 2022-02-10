import React from 'react'

const Opinion = ({ userName, movie, rating, text, time }) => {
  return (
    <div className='bg-neutral-200 text-black m-4 p-2 rounded-lg flex flex-col'>
      <h2 className='font-bold text-3xl pl-8'>
        {userName} [{movie} - {rating}]
      </h2>
      <p className=''>{text}</p>
      <p className='self-end'>{time}</p>
    </div>
  )
}

export default Opinion
