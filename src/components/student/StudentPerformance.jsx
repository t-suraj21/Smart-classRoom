import React from "react";
import { Link } from "react-router-dom";

const students = [
  { id: "STU001", name: "Kate Johnson", performance: 85 },
  { id: "STU002", name: "Jim Carter", performance: 78 },
  { id: "STU003", name: "Angelo Diaz", performance: 88 },
  { id: "STU004", name: "Shang Lee", performance: 92 },
  { id: "STU005", name: "Billie Eilish", performance: 80 },
  { id: "STU006", name: "Alex Turner", performance: 91 },
];

const StudentPerformance = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">📊 Student Performance</h2>
        
        <ul className="space-y-3">
          {students.map((student) => (
            <li key={student.id} className="p-4 bg-gray-200 rounded-lg flex justify-between items-center">
              <span className="text-lg font-medium">{student.name}</span>
              <span className="text-blue-500 font-bold">{student.performance}%</span>
              <Link 
                to={`/student/${student.id}`} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View Profile
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentPerformance;