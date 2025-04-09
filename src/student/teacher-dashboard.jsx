// src/student/teacher-dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  ClipboardList,
  NotebookPen,
  Upload,
  CalendarClock,
  FileBarChart2,
  Users2,
} from "lucide-react";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-10"
        >
          👨‍🏫 Welcome Back, Teacher!
        </motion.h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatedCard title="📅 Attendance Sheet" to="/student/attendance" Icon={ClipboardList} />
          <AnimatedCard title="📚 Assignments" to="/student/Assignments" Icon={Book} />
          <AnimatedCard title="📖 Notebook Access" to="/teacher/notebooks" Icon={NotebookPen} />
          <AnimatedCard title="📤 Upload Resources" to="/student/ResourceUpload" Icon={Upload} />
          <AnimatedCard title="📝 Manage Exams" to="/teacher/exams" Icon={FileBarChart2} />
          <AnimatedCard title="📆 Class Schedule" to="/student/ClassSchedule" Icon={CalendarClock} />
          {/* ✅ New Resume Upload Card */}
          <AnimatedCard title="📄 Analyze Student Resumes" to="/student/resume-upload" Icon={Upload} />
        </div>

        {/* Class Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">📊 Class Overview</h3>
          <p className="text-gray-600">
            You're currently handling <strong>3 classes</strong> with <strong>75 students</strong> enrolled.
          </p>
        </motion.div>

        {/* Future Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 p-6 border border-dashed border-blue-200 rounded-xl bg-white/60"
        >
          <div className="flex items-center justify-center gap-4">
            <Users2 className="text-blue-600" size={28} />
            <p className="text-gray-700 text-md">
              Coming soon: Real-time analytics of student performance & engagement 📈
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnimatedCard = ({ title, to, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to={to}
      className="block bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border border-blue-100"
    >
      <Icon className="mx-auto text-blue-600 mb-3" size={36} />
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </Link>
  </motion.div>
);

export default TeacherDashboard;