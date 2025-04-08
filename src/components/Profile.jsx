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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">👤 Welcome, {user.name}</h2>

        {/* 🧾 Profile Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Profile Info</h3>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* 📘 Purchased Courses */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📘 Enrolled Courses</h3>
          <ul className="list-disc ml-6">
            {user.courses?.length > 0 ? (
              user.courses.map((course, index) => (
                <li key={index}>{course.title} - {course.progress}% completed</li>
              ))
            ) : (
              <li>No courses enrolled yet.</li>
            )}
          </ul>
        </div>

        {/* 📊 Test Results */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📊 Test Results</h3>
          <ul className="list-disc ml-6">
            {user.tests?.length > 0 ? (
              user.tests.map((test, index) => (
                <li key={index}>{test.subject}: {test.score} / {test.total}</li>
              ))
            ) : (
              <li>No test results yet.</li>
            )}
          </ul>
        </div>

        {/* 📆 Upcoming Exams */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📆 Upcoming Exams</h3>
          <ul className="list-disc ml-6">
            {user.exams?.length > 0 ? (
              user.exams.map((exam, index) => (
                <li key={index}>{exam.subject} - {exam.date}</li>
              ))
            ) : (
              <li>No upcoming exams.</li>
            )}
          </ul>
        </div>

        {/* 🧠 Upcoming Quizzes */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🧠 Upcoming Quizzes</h3>
          <ul className="list-disc ml-6">
            {user.quizzes?.length > 0 ? (
              user.quizzes.map((quiz, index) => (
                <li key={index}>{quiz.topic} - {quiz.date}</li>
              ))
            ) : (
              <li>No upcoming quizzes.</li>
            )}
          </ul>
        </div>

        {/* 📅 Attendance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📅 Attendance</h3>
          <ul className="list-disc ml-6">
            {user.attendance?.length > 0 ? (
              user.attendance.map((att, index) => (
                <li key={index}>{att.subject}: {att.percentage}%</li>
              ))
            ) : (
              <li>No attendance records.</li>
            )}
          </ul>
        </div>

        {/* 🚪 Logout Button */}
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600"
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
