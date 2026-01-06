import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import ProtectedRoute from './ProtectedRoute'
import DashboardPage from '../pages/DashboardPage'
import Loading from '../Loading'
const Home = lazy(()=> delayForDemo(import('../pages/HomePage'))); // lazy loading  

const AppRoute = () => {

  return (
    <Suspense fallback={<Loading/>}>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Route>
    </Routes>
    </Suspense>
  )
}

export default AppRoute

// Add a fixed delay so we can see the loading state
async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 5000)
  })
  return promise
}