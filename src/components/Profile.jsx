import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/auth");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3000/auth/me", {
          headers: {
            Authorization: token,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("❌ Profile fetch error:", err);
        localStorage.removeItem("token");
        navigate("/auth");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <div className="text-white text-center mt-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">👤 Your Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/auth");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
