import React from 'react'

const RankingMovie = ({ name, image, rating, year }) => {
  return (
    <div className='flex p-4 gap-4'>
      <img className='w-56' src={image} alt={name} />
      <div className='pt-8'>
        <h3>
          {name} ({year})
        </h3>
        <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default RankingMovie
