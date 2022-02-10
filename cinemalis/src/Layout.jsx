import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-blue-700 to-fuchsia-700'>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
