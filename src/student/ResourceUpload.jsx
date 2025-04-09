import React, { useState } from "react";
import { motion } from "framer-motion";

const ResourceUpload = () => {
  const [resourceFile, setResourceFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setResourceFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resourceFile || !title || !category) {
      setMessage("❗ Please fill in all fields and choose a file.");
      return;
    }

    // Here you'd normally send the file to the backend
    setMessage("✅ Resource uploaded successfully!");
    setTitle("");
    setCategory("");
    setResourceFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-200 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          📤 Upload Resource
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-600">Resource Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. React Basics Slides"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">-- Select Category --</option>
              <option value="Lecture Notes">Lecture Notes</option>
              <option value="Slides">Slides</option>
              <option value="Assignment Solutions">Assignment Solutions</option>
              <option value="Extra Materials">Extra Materials</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
              accept=".pdf,.docx,.pptx,.jpg,.png"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-all"
          >
            Upload Resource
          </button>
        </form>

        {message && (
          <motion.div
            className="mt-6 text-center text-md font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ResourceUpload;