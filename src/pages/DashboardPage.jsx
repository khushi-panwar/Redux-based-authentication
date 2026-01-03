import React from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { removeUser } from '../redux/features/authSlice';

const DashboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));


    const handleLogout = () => {
        dispatch(removeUser()); // remove user from authslice 
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