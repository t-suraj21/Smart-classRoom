// src/pages/TeacherDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">👨‍🏫 Teacher Dashboard</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="📅 Attendance Sheet" to="/student/attendance" />
          <Card title="📚 Assignments" to="/teacher/assignments" />
          <Card title="📖 Notebook Access" to="/teacher/notebooks" />
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Class Overview</h3>
          <p className="text-gray-600">You are handling <strong>3 classes</strong> with a total of <strong>75 students</strong>.</p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, to }) => (
  <Link
    to={to}
    className="bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 p-6 text-center transition"
  >
    <h4 className="text-lg font-semibold">{title}</h4>
  </Link>
);

export default TeacherDashboard;
