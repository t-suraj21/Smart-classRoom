import React, { useState } from "react";
import { motion } from "framer-motion";

const TeacherAssignmentUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate || !file) {
      alert("Please fill in all fields.");
      return;
    }

    // Mocking backend file upload
    setTimeout(() => {
      setSuccessMessage("✅ Assignment uploaded successfully!");
      setTitle("");
      setDescription("");
      setDueDate("");
      setFile(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">📘 Upload New Assignment</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Assignment Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg border-gray-300"
              placeholder="Enter title..."
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg border-gray-300"
              rows="4"
              placeholder="Assignment details..."
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <label className="block font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-2 w-full px-4 py-2 border rounded-lg border-gray-300"
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700">Upload File (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-2 w-full px-4 py-2 border rounded-lg border-gray-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
          >
            Upload Assignment
          </button>
        </form>

        {successMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg"
          >
            {successMessage}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TeacherAssignmentUpload;