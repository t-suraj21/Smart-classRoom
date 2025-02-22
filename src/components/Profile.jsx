import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  if (!storedUser) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black p-8 shadow-md rounded-md w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
        <p><strong>Name:</strong> {storedUser.name}</p>
        <p><strong>Email:</strong> {storedUser.email}</p>
        <p><strong>User ID:</strong> {storedUser.userId}</p>
        <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;