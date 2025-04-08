// src/pages/Attendance.jsx
import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch registered students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students");
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: prev[id] === "Present" ? "Absent" : "Present",
    }));
  };

  const handleSave = () => {
    console.log("Attendance submitted:", attendance);
    alert("✅ Attendance saved!");
  };

  if (loading) return <div className="text-center py-20 text-lg">Loading students...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">📅 Class Attendance</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Student Name</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {students.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4 text-center">
                    {attendance[student.id] === "Present" ? (
                      <span className="text-green-600 font-medium flex justify-center items-center gap-1">
                        <CheckCircle size={18} /> Present
                      </span>
                    ) : (
                      <span className="text-red-500 font-medium flex justify-center items-center gap-1">
                        <XCircle size={18} /> Absent
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`px-4 py-2 rounded-lg transition font-semibold ${
                        attendance[student.id] === "Present"
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      Mark {attendance[student.id] === "Present" ? "Absent" : "Present"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition"
          onClick={handleSave}
        >
          ✅ Save Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;