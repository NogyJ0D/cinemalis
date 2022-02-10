import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UserContext from './context/UserContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import Login from './routes/Login'
import Layout from './Layout'
import Dashboard from './routes/Dashboard'

ReactDOM.render(
  <UserContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Ruta padre que contiene la plantilla para sus rutas hijas */}
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContext>,
  document.getElementById('root')
)
