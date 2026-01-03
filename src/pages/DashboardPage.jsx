import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");// on logout - remove user from local storage 
        navigate('/login');
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow w-96 text-center">
                <h1 className="text-2xl font-bold mb-2">Dashboard</h1>

                {user && (
                    <p className="text-gray-600 mb-4">
                        Welcome, <span className="font-semibold">{user.name}</span>
                    </p>
                )}

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default DashboardPage