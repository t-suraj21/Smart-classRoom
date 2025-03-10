import React from "react";
import { useNavigate } from "react-router-dom";

const students = [
  { userId: "STU001", name: "Alice Johnson", email: "alice@example.com", domain: "Computer Science" },
  { userId: "STU002", name: "Bob Smith", email: "bob@example.com", domain: "Electrical Engineering" },
  { userId: "STU003", name: "Charlie Brown", email: "charlie@example.com", domain: "Mechanical Engineering" },
  { userId: "STU004", name: "David Lee", email: "david@example.com", domain: "Civil Engineering" },
  { userId: "STU005", name: "Eve Taylor", email: "eve@example.com", domain: "Information Technology" },
  { userId: "STU006", name: "Frank Martin", email: "frank@example.com", domain: "Computer Science" },
  { userId: "STU007", name: "Grace Hall", email: "grace@example.com", domain: "Electrical Engineering" },
  { userId: "STU008", name: "Henry Wilson", email: "henry@example.com", domain: "Mechanical Engineering" },
  { userId: "STU009", name: "Ivy Thomas", email: "ivy@example.com", domain: "Civil Engineering" },
  { userId: "STU010", name: "Jack White", email: "jack@example.com", domain: "Information Technology" },
];

const StudentList = () => {
  const navigate = useNavigate();

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
          {students.map((student) => (
            <tr key={student.userId} className="border">
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

export default StudentList;