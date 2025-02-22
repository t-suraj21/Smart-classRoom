import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:3000/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 shadow-md rounded-md text-white w-96 text-center">
        {loading ? <p className="text-lg">Loading profile...</p> : (
          <>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>User ID:</strong> {user.userId}</p>
            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;