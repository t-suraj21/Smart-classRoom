import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({ name: "", email: "", userId: "", domain: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students")) || [];
    localStorage.setItem("students", JSON.stringify([...students, formData]));
    alert("✅ Student Registered Successfully!");
    navigate("/student-list");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="userId" placeholder="User ID" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
        <select name="domain" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required>
          <option value="">Select Domain</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Information Technology">Information Technology</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Student List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Domain</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">{student.userId}</td>
              <td className="border px-4 py-2">{student.domain}</td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => navigate(`/student/${student.userId}/performance`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Performance
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { StudentRegistration, StudentList };
