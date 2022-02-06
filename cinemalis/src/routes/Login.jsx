import React from 'react'

const Login = () => {
  return (
    <div className='mt-32 flex flex-col gap-4 items-center justify-center'>
      <form className='flex flex-col bg-opacity-50 bg-stone-900 p-4 w-1/2 gap-4'>
        <div className='flex gap-4'>
          <div className='flex flex-col text-right text-white font-bold text-2xl gap-3'>
            <label>Email</label>
            <label>Contraseña</label>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <input type='email' className='outline-none px-2 py-1 rounded-xl' />
            <input
              type='password'
              className='outline-none px-2 py-1 rounded-xl'
            />
          </div>
        </div>
        <input
          type='submit'
          className='bg-white self-end p-2 rounded-lg border-2 w-40 border-black'
          value='Iniciar'
        />
      </form>
    </div>
  )
}

export default Login
