import React, { useState } from 'react'

const Carousel = () => {
  const movieBanners = [
    {
      name: 'Encanto',
      url: 'https://i.ytimg.com/vi/iW-QBcjakrc/maxresdefault.jpg'
    },
    {
      name: 'Moonfall',
      url:
        'https://images.reporteindigo.com/wp-content/uploads/2022/02/Cri%CC%81tica-Moonfall-una-peli%CC%81cula-que-es-ma%CC%81s-de-lo-mismo-de-Roland-Emmerich-.jpg'
    },
    {
      name: 'Pasajero666',
      url: 'https://i.ytimg.com/vi/T9le8mbyQbE/maxresdefault.jpg'
    },
    {
      name: 'Spiderman: No Way Home',
      url:
        'https://infonoasalta.com.ar/wp-content/uploads/2021/12/spiderman.jpg'
    }
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectNewBanner = (index, movieBanners, next) => {
    const condition = next
      ? selectedIndex < movieBanners.length - 1
      : selectedIndex > 0
    const nextIndex = next
      ? condition
        ? setSelectedIndex(selectedIndex + 1)
        : setSelectedIndex(0)
      : condition
      ? setSelectedIndex(selectedIndex - 1)
      : setSelectedIndex(movieBanners.length - 1)
  }

  const previous = () => {
    console.log(selectedIndex)
    selectNewBanner(selectedIndex, movieBanners, false)
  }

  const next = () => {
    console.log(selectedIndex)
    selectNewBanner(selectedIndex, movieBanners, true)
  }

  return (
    <div className='flex gap-8'>
      <div className='flex flex-col items-center gap-1'>
        <img
          className='min-h-[330px] w-[600px]'
          src={movieBanners[selectedIndex].url}
          alt={movieBanners[selectedIndex].name}
        />
        <div className='grid grid-cols-2 text-white'>
          <button
            className='border-2 border-r-0 rounded-l-full bg-black bg-opacity-30 font-bold px-4 border-black'
            onClick={previous}
          >
            Anterior
          </button>
          <button
            className='border-2 border-l-0 rounded-r-full bg-black bg-opacity-30 font-bold px-4 border-black'
            onClick={next}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className='text-white bg-black p-4 h-[330px] bg-opacity-50'>
        <h2 className='font-extrabold text-4xl max-w-[400px]'>
          {movieBanners[selectedIndex].name}
        </h2>
        <p className='w-[400px] text-justify break-all'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          et provident amet facilis! Nam ea repudiandae quasi voluptatem
          reiciendis consequatur fugiat, deleniti voluptate, enim ipsa pariatur
          dolor? Laudantium nostrum mollitia, quis ab delectus perferendis sit
          praesentium, minima odio magni similique?
          <b>El pepe</b>
        </p>
      </div>
    </div>
  )
}

export default Carousel
