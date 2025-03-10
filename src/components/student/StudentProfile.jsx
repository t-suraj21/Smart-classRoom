import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const studentData = {
  STU001: { name: "Kate Johnson", subjects: { Math: 85, English: 90, Science: 80 }, assignments: 5 },
  STU002: { name: "Jim Carter", subjects: { Math: 75, English: 88, Science: 78 }, assignments: 4 },
  STU003: { name: "Angelo Diaz", subjects: { Math: 82, English: 86, Science: 83 }, assignments: 6 },
  STU004: { name: "Shang Lee", subjects: { Math: 88, English: 92, Science: 85 }, assignments: 7 },
  STU005: { name: "Billie Eilish", subjects: { Math: 79, English: 85, Science: 80 }, assignments: 5 },
  STU006: { name: "Alex Turner", subjects: { Math: 90, English: 91, Science: 89 }, assignments: 8 },
};

const StudentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentData[id];

  if (!student) {
    return <div className="text-center text-red-500 font-bold">⚠️ Student Not Found!</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">{student.name}'s Performance</h2>

        {/* Subject Scores */}
        <div className="bg-blue-50 p-5 rounded-lg mb-4 shadow-md">
          <h3 className="text-md font-semibold mb-2">📚 Subject Scores:</h3>
          <ul>
            {Object.entries(student.subjects).map(([subject, marks]) => (
              <li key={subject} className="flex justify-between border-b py-2 text-lg">
                <span>{subject}</span>
                <span className="font-bold text-blue-500">{marks}/100</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Assignments Submitted */}
        <div className="bg-green-50 p-5 rounded-lg mb-4 shadow-md">
          <h3 className="text-md font-semibold">📝 Assignments Submitted:</h3>
          <p className="mt-2 text-xl font-bold">{student.assignments}</p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 text-lg"
        >
          🔙 Back to Performance List
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;