import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiFillLock } from 'react-icons/ai'
import HeadLogo from './assets/HeadLogo.jsx'

const Layout = () => {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-blue-700 to-fuchsia-700'>
      <nav className='flex h-20 bg-gray-800 justify-between px-14 pt-2 items-center font-nunito shadow-2xl'>
        <Link className='self-baseline' to='/'>
          <HeadLogo />
        </Link>

        <div className='flex items-center gap-8'>
          <input
            className='rounded-full px-4 text-xl outline-none py-1'
            type='text'
            placeholder='Buscar película'
          />
          <Link to='/login'>
            <AiFillLock className='text-white h-full w-10 rounded-full border-2 p-1' />
          </Link>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
