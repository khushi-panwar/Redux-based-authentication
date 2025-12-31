import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen  from-blue-50 to-indigo-100 flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
         Auth Dashboard
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-8">
         authentication system built with React, Redux, and Tailwind CSS.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        {/* <Link
          to="/signup"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Signup
        </Link> */ }
      </div>
    </div>
  );
};

export default Home;
