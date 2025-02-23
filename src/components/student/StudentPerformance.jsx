import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const studentPerformanceData = {
  STU001: { grades: "A+", attendance: "95%", projects: "Completed 3 Projects" },
  STU002: { grades: "A", attendance: "92%", projects: "Completed 2 Projects" },
  STU003: { grades: "B+", attendance: "89%", projects: "Completed 1 Project" },
  STU004: { grades: "A", attendance: "97%", projects: "Completed 4 Projects" },
  STU005: { grades: "A-", attendance: "90%", projects: "Completed 2 Projects" },
  STU006: { grades: "B", attendance: "85%", projects: "Completed 1 Project" },
  STU007: { grades: "A", attendance: "94%", projects: "Completed 3 Projects" },
  STU008: { grades: "B+", attendance: "88%", projects: "Completed 2 Projects" },
  STU009: { grades: "A-", attendance: "91%", projects: "Completed 2 Projects" },
  STU010: { grades: "B", attendance: "87%", projects: "Completed 1 Project" },
};

const StudentPerformance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentData = studentPerformanceData[id];

  if (!studentData) {
    return <h2 className="text-center mt-10 text-red-500">⚠️ Student Performance Data Not Found!</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">📊 Student Performance</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <p className="text-lg font-semibold">📌 User ID: {id}</p>
        <p className="text-lg">🎓 Grades: {studentData.grades}</p>
        <p className="text-lg">📅 Attendance: {studentData.attendance}</p>
        <p className="text-lg">📝 Projects: {studentData.projects}</p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 block mx-auto"
      >
        ⬅ Back to Student List
      </button>
    </div>
  );
};

export default StudentPerformance;