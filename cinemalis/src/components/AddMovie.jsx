const AddMovie = () => {
  // TODO: agregar react hook forms, hacer un service para crear en la DB
  return (
    <div className='bg-stone-900 bg-opacity-50'>
      <h3 className='px-8 py-2 font-bold text-2xl border-b-4 border-sky-400'>
        Agregar película
      </h3>
      <form className='grid grid-flow-row gap-4 p-4'>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Nombre</label>
          </div>
          <input type='text' className='input' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Descripción</label>
          </div>
          <input type='textarea' className='input' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Año de lanzamiento</label>
          </div>
          <input type='date' className='input' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Puntuación</label>
          </div>
          <input type='number' className='input' min='0' max='10' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          {/* TODO: ver como funciona esto */}
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Banner (▭)</label>
          </div>
          <input type='file' className='rounded-md' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          {/* TODO: ver como funciona esto */}
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Poster (▯)</label>
          </div>
          <input type='file' className='rounded-md' />
        </div>
        <div className='grid grid-flow-row gap-2'>
          {/* TODO: probar useFieldArray para el castCrew, botón para agregar y eliminar nueva persona */}
          <div className='grid grid-cols-2'>
            <label className='inputLabel'>Elenco y equipo</label>
          </div>
          <input type='textarea' className='input' />
        </div>
        <input
          type='submit'
          className='bg-white p-2 rounded-lg border-2 w-40 border-black text-black cursor-pointer justify-self-center'
          value='Agregar'
        />
      </form>
    </div>
  )
}

export default AddMovie
