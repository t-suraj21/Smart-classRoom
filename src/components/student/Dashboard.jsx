import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://backend-zgt2.onrender.com/student-dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudentData(res.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  if (!studentData) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Student Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-blue-100">
            <h3 className="text-lg font-semibold">Class Schedule</h3>
            <ul className="mt-2">
              {studentData.classSchedule.map((cls, index) => (
                <li key={index} className="text-gray-700">{cls}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 border rounded-lg bg-green-100">
            <h3 className="text-lg font-semibold">Attendance</h3>
            <p className="text-gray-700 mt-2">{studentData.attendance}%</p>
          </div>
          
          <div className="p-4 border rounded-lg bg-yellow-100">
            <h3 className="text-lg font-semibold">Exam Dates</h3>
            <ul className="mt-2">
              {studentData.examDates.map((exam, index) => (
                <li key={index} className="text-gray-700">{exam.subject}: {exam.date}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 border rounded-lg bg-red-100">
            <h3 className="text-lg font-semibold">Vacation Dates</h3>
            <p className="text-gray-700 mt-2">{studentData.vacationStart} - {studentData.vacationEnd}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
