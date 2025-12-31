import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";


const ProtectedRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    return isAuth? <Outlet/>: <Navigate to={"/"} />;
}

export default ProtectedRoute;
