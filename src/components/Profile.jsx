import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/profile", {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96 text-center border border-gray-300">
        {loading ? (
          <p className="text-lg font-medium text-gray-600">Loading profile...</p>
        ) : (
          <>
            <UserCircleIcon className="w-20 h-20 text-gray-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile</h2>
            <p className="text-gray-600 text-lg"><strong>Name:</strong> {user.name}</p>
            <p className="text-gray-600 text-lg"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600 text-lg"><strong>User ID:</strong> {user.userId}</p>
            
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mt-6 flex items-center justify-center gap-2"
              onClick={handleLogout}
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;