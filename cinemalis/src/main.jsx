import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import Login from './routes/Login'
import Layout from './Layout'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Ruta padre que contiene la plantilla para sus rutas hijas */}
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
