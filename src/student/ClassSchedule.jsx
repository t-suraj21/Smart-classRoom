// src/student/ClassSchedule.jsx
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, HelpCircle } from "lucide-react";

const scheduleData = [
  {
    type: "Regular Class",
    subject: "Data Structures",
    time: "10:00 AM - 11:30 AM",
    day: "Monday, Wednesday, Friday",
  },
  {
    type: "Regular Class",
    subject: "Web Development",
    time: "12:00 PM - 1:30 PM",
    day: "Tuesday, Thursday",
  },
  {
    type: "Extra Class",
    subject: "AI/ML Project Session",
    time: "5:00 PM - 6:00 PM",
    day: "Saturday",
  },
  {
    type: "Doubt Class",
    subject: "DSA Problem Solving",
    time: "4:00 PM - 5:00 PM",
    day: "Friday",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "Regular Class":
      return <CalendarDays className="text-blue-600" size={28} />;
    case "Extra Class":
      return <Clock className="text-green-600" size={28} />;
    case "Doubt Class":
      return <HelpCircle className="text-purple-600" size={28} />;
    default:
      return null;
  }
};

const ClassSchedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-50 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          📅 Class Schedule
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                {getIcon(item.type)}
                <h3 className="text-xl font-semibold text-gray-800">{item.type}</h3>
              </div>
              <p className="text-gray-700">
                <strong>📘 Subject:</strong> {item.subject}
              </p>
              <p className="text-gray-700">
                <strong>🕒 Time:</strong> {item.time}
              </p>
              <p className="text-gray-700">
                <strong>📆 Days:</strong> {item.day}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          Need changes in schedule? Contact your coordinator or head of department.
        </div>
      </motion.div>
    </div>
  );
};

export default ClassSchedule;