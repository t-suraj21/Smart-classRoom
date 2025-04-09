import React, { useState } from "react";
import { CalendarDays, Clock, Plus, Trash2 } from "lucide-react";

const ManageExams = () => {
  const [exams, setExams] = useState([
    { id: 1, subject: "Mathematics", date: "2025-04-15", time: "10:00 AM" },
    { id: 2, subject: "Physics", date: "2025-04-17", time: "2:00 PM" },
    { id: 3, subject: "Chemistry", date: "2025-04-20", time: "11:00 AM" },
  ]);

  const [form, setForm] = useState({ subject: "", date: "", time: "" });

  const handleAddExam = () => {
    if (!form.subject || !form.date || !form.time) return alert("Fill all fields!");
    const newExam = { id: Date.now(), ...form };
    setExams((prev) => [...prev, newExam]);
    setForm({ subject: "", date: "", time: "" });
  };

  const handleDelete = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-2xl animate-fadeIn">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-800">📚 Test-Shedule</h2>

        {/* Add Exam Form */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="border rounded-xl p-3 w-full"
          />
          <button
            onClick={handleAddExam}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Plus size={18} /> Add Exam
          </button>
        </div>

        {/* Exam List */}
        {exams.length > 0 ? (
          <div className="overflow-x-auto border rounded-xl shadow-inner">
            <table className="min-w-full table-auto text-sm md:text-base">
              <thead className="bg-indigo-600 text-white uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">Subject</th>
                  <th className="px-6 py-4 text-center">Date</th>
                  <th className="px-6 py-4 text-center">Time</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-gray-800">
                {exams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-indigo-50 transition">
                    <td className="px-6 py-4 font-medium">{exam.subject}</td>
                    <td className="px-6 py-4 text-center flex justify-center items-center gap-2">
                      <CalendarDays size={16} /> {exam.date}
                    </td>
                    <td className="px-6 py-4 text-center flex justify-center items-center gap-2">
                      <Clock size={16} /> {exam.time}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(exam.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">No exams scheduled yet.</p>
        )}
      </div>
    </div>
  );
};

export default ManageExams;