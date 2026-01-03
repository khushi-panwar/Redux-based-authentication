import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import ProtectedRoute from './ProtectedRoute'
import DashboardPage from '../pages/DashboardPage'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Route>
    </Routes>
  )
}

export default AppRoute