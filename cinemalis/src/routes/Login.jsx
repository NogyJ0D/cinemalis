import axios from 'axios'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(userContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // TODO: Pasar el usuario al contexto global. El usuario debe estar activo solo durante la sesión.
  const onSubmit = async ({ email, password }) => {
    await axios({
      url: 'http://localhost:4000/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        password
      },
      withCredentials: true
    })
      .then(res => {
        return res
      })
      .then(data => {
        console.log(data)
        window.localStorage.setItem('token', data.data.token)
        setUser(data.data.data)
        return navigate('/')
        // return window.location.reload()
      })
      .catch(err => {
        return err
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-28 rounded-3xl w-[450px] mx-auto flex flex-col bg-opacity-50 bg-stone-900 p-4 gap-4'
    >
      <h2 className='text-yellow-500 text-2xl font-extrabold text-center'>
        placeholder
      </h2>
      <div className='grid grid-flow-row gap-4'>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='text-white underline font-semibold bg-stone-900 mr-4 py-1 bg-opacity-50 text-xl pl-4'>
              Email
            </label>
            {errors.email && (
              <p className='text-red-500 font-bold bg-opacity-50 bg-stone-900 text-center rounded border border-white'>
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            type='email'
            className='outline-none px-2 py-1 rounded-xl'
            {...register('email', {
              required: {
                value: true,
                message: 'Campo requerido.'
              },
              pattern: {
                value: /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/i,
                message: 'Debe ser un email válido.'
              }
            })}
          />
        </div>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label className='text-white underline font-semibold bg-stone-900 mr-4 py-1 bg-opacity-50 text-xl pl-4'>
              Contraseña
            </label>
            {errors.password && (
              <p className='text-red-500 font-bold bg-opacity-50 bg-stone-900 text-center rounded border border-white'>
                {errors.password.message}
              </p>
            )}
          </div>
          <input
            type='password'
            className='outline-none px-2 py-1 rounded-xl'
            {...register('password', {
              required: { value: true, message: 'Campo requerido.' }
            })}
          />
        </div>
        <input
          type='submit'
          className='bg-white p-2 rounded-lg border-2 w-40 border-black cursor-pointer justify-self-center'
          value='Entrar'
        />
      </div>
    </form>
  )
}

export default Login
