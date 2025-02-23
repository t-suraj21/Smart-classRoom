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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 shadow-2xl rounded-xl w-96 text-white border border-gray-500">
        {loading ? (
          <p className="text-lg font-medium text-gray-300">Loading profile...</p>
        ) : (
          <>
            <UserCircleIcon className="w-24 h-24 text-gray-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-100 mb-2">Profile</h2>
            <p className="text-gray-300 text-lg"><strong>Name:</strong> {user.name}</p>
            <p className="text-gray-300 text-lg"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-300 text-lg"><strong>Student ID:</strong> {user.studentId}</p>

            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg mt-6 flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
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