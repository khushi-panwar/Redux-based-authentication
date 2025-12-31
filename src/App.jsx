import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/protectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useSelector } from 'react-redux'


const App = () => {
  const isAuth = useSelector((state)=>state.auth.isAuthenticated)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuth? <Navigate to="/dashboard"/> : <Home/>}/>
        <Route path='/login' element={isAuth? <Navigate to="/dashboard"/> :<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* protected routing  */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App