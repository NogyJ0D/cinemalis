import { useContext } from 'react'
import AddMovie from '../components/AddMovie'
import { userContext } from '../context/UserContext'

const Dashboard = () => {
  const { user } = useContext(userContext)

  /*
    TODO: componentes para hacer
      Administrador:
        Agregar / eliminar moderadores
        Agregar / eliminar pelicula
      Owner:
        Agregar / eliminar admins
  */
  return (
    <div className='grid grid-cols-2 m-10 gap-32 text-white'>
      {user.userName ? (
        <div>
          <AddMovie />
        </div>
      ) : (
        <h2 className='col-span-2 text-center text-4xl text-red-500 border-red-500 border-2 font-bold bg-stone-900 bg-opacity-50'>
          No se puede entrar sin iniciar sesión.
        </h2>
      )}
    </div>
  )
}

export default Dashboard
