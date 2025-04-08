// src/student/ResumeUpload.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [field, setField] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume || !field) {
      alert("Please select a resume and field.");
      return;
    }

    // 🔹 Mock resume analysis (replace with backend later)
    const mockAnalysis = {
      match: Math.floor(Math.random() * 100),
      tips: [
        "Add more project details.",
        "Include relevant keywords for your field.",
        "Highlight your soft skills and leadership experience.",
      ],
    };
    setAnalysis(mockAnalysis);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-indigo-100 p-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">📄 Upload Your Resume</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Resume (PDF only)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Your Field</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">-- Choose Field --</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Cloud & DevOps">Cloud & DevOps</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Analyze Resume
          </button>
        </form>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Analysis Result</h3>
            <p className="text-gray-700 mb-4">
              Your resume has a <strong>{analysis.match}%</strong> match for <strong>{field}</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              {analysis.tips.map((tip, index) => (
                <li key={index}>💡 {tip}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ResumeUpload;