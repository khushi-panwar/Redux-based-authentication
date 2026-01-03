import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useSelector((state)=>state.auth.user);// get user if exist any 
  return user ? <Outlet/> : <Navigate to={"/"}/>  
}

export default ProtectedRoute
