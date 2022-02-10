import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillLock } from 'react-icons/ai'
import HeadLogo from '../assets/img/HeadLogo.svg'
import { userContext } from '../context/UserContext'

const Header = () => {
  const { user } = useContext(userContext)

  return (
    <nav className='flex h-20 bg-gray-800 justify-between px-14 pt-2 items-center font-nunito shadow-2xl'>
      <Link className='self-baseline' to='/'>
        <img src={HeadLogo} alt='Cinémalis' />
      </Link>

      <div className='flex items-center gap-8'>
        <input
          className='rounded-full px-4 text-xl outline-none py-1'
          type='text'
          placeholder='Buscar película'
        />
        <Link
          to='/dashboard'
          className={
            user.userName
              ? 'block text-white font-bold text-xl rounded-xl border-2 px-2 py-1'
              : 'hidden'
          }
        >
          {user.userName}
        </Link>
        <Link to='/login'>
          <AiFillLock
            className={
              user.userName
                ? 'hidden'
                : 'block text-white h-full w-10 rounded-full border-2 p-1'
            }
          />
        </Link>
      </div>
    </nav>
  )
}

export default Header
