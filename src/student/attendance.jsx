import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, UserCheck2, Save } from "lucide-react";

const defaultStudents = [
  { id: 1, name: "Aarav Sharma" },
  { id: 2, name: "Diya Patel" },
  { id: 3, name: "Vivaan Mehta" },
  { id: 4, name: "Anaya Singh" },
  { id: 5, name: "Krish Gupta" },
  { id: 6, name: "Ishita Desai" },
  { id: 7, name: "Arjun Verma" },
  { id: 8, name: "Myra Iyer" },
  { id: 9, name: "Reyansh Nair" },
  { id: 10, name: "Saanvi Rao" },
];

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
        setStudents(defaultStudents);
      } finally {
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

  if (loading) return <div className="text-center py-20 text-xl text-blue-600 animate-pulse">Loading students...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-2xl animate-fadeIn">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-800 flex items-center justify-center gap-3">
          <UserCheck2 size={32} /> Class Attendance
        </h2>

        <div className="overflow-x-auto border rounded-xl shadow-inner">
          <table className="min-w-full text-sm md:text-base table-auto">
            <thead className="bg-blue-600 text-white uppercase">
              <tr>
                <th className="px-6 py-4 text-left">Student Name</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-gray-800">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-center">
                    {attendance[student.id] === "Present" ? (
                      <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                        <CheckCircle size={18} /> Present
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-500 font-semibold">
                        <XCircle size={18} /> Absent
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition duration-300 ${
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
          className="mt-10 flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-2xl transition duration-300 shadow-lg"
          onClick={handleSave}
        >
          <Save size={20} /> Save Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;