import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome
        </h1>

        <div className="flex flex-col gap-4">
          <Link 
          to="/login"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </Link>

          <Link 
          to="signup/"
          className="border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
