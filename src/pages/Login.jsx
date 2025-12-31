import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email and password required");
            return;
        }

        const userData = {email};
        dispatch(login(userData));
        navigate('../dashboard')

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password"
                        autoComplete=""
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-semibold">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
