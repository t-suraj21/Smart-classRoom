import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const { role, id } = useParams(); // Fetch role (student/teacher) & ID from URL
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on role
    const users = JSON.parse(localStorage.getItem(role === "student" ? "students" : "teachers")) || [];
    const user = users.find((u) => u.userId === id);
    setUserData(user);
  }, [role, id]);

  if (!userData) {
    return <div className="text-center text-red-500 font-bold">⚠️ User Not Found!</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">{userData.name}'s Profile</h2>
        <p className="text-gray-600 text-center">📧 {userData.email}</p>
        <p className="text-gray-600 text-center">🔖 {role === "student" ? `Student ID: ${userData.userId}` : `Faculty ID: ${userData.userId}`}</p>
        
        {role === "student" ? (
          <div>
            <div className="bg-blue-50 p-5 rounded-lg mb-4 shadow-md">
              <h3 className="text-md font-semibold">📚 Subjects & Grades:</h3>
              <ul>
                {Object.entries(userData.subjects || {}).map(([subject, marks]) => (
                  <li key={subject} className="flex justify-between border-b py-2 text-lg">
                    <span>{subject}</span>
                    <span className="font-bold text-blue-500">{marks}/100</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg mb-4 shadow-md">
              <h3 className="text-md font-semibold">📅 Attendance:</h3>
              <p className="mt-2 text-xl font-bold">{userData.attendance || "N/A"}%</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-yellow-50 p-5 rounded-lg mb-4 shadow-md">
              <h3 className="text-md font-semibold">📖 Assigned Subjects:</h3>
              <ul>
                {userData.subjects?.map((subject) => (
                  <li key={subject} className="border-b py-2 text-lg font-bold">{subject}</li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg mb-4 shadow-md">
              <h3 className="text-md font-semibold">🗓 Class Schedule:</h3>
              <p className="mt-2 text-xl font-bold">{userData.schedule || "Not Available"}</p>
            </div>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 text-lg mt-4"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default Profile;
