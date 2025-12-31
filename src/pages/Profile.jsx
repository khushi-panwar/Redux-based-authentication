import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state)=>state.auth.user)
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        <div className="space-y-4">
          

          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full px-4 py-3 border rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
