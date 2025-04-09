import React, { useState } from "react";
import { BookOpen, Download, BookMarked } from "lucide-react";

const NotebookPage = () => {
  const [notebooks, setNotebooks] = useState([
    {
      id: 1,
      title: "Mathematics Notes - Semester 1",
      description: "Algebra, Trigonometry, Calculus covered with examples.",
      subject: "Mathematics",
      fileUrl: "#",
    },
    {
      id: 2,
      title: "Physics Formula Handbook",
      description: "Quick reference for JEE/NEET aspirants.",
      subject: "Physics",
      fileUrl: "#",
    },
    {
      id: 3,
      title: "Computer Networks Notes",
      description: "OSI Model, TCP/IP, Protocols, and more.",
      subject: "Computer Science",
      fileUrl: "#",
    },
    {
      id: 4,
      title: "English Grammar Essentials",
      description: "All grammar rules explained simply.",
      subject: "English",
      fileUrl: "#",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-purple-800 flex items-center justify-center gap-2 mb-10">
          <BookOpen size={32} /> Available Notebooks
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notebooks.map((note) => (
            <div
              key={note.id}
              className="bg-purple-100 hover:bg-purple-200 border border-purple-300 rounded-2xl p-6 shadow-md transition duration-300"
            >
              <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2 mb-2">
                <BookMarked size={20} /> {note.title}
              </h3>
              <p className="text-gray-700 mb-3">{note.description}</p>
              <span className="inline-block bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {note.subject}
              </span>
              <div>
                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-4 py-2 rounded-full transition"
                >
                  <Download size={16} /> Download/View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;