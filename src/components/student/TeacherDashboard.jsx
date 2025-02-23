import React from "react";
import { Link } from "react-router-dom";
import { Users, BookOpen, FileText, MessageSquare, Bell, Video } from "lucide-react";

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">📚 Teacher Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/ManageClassroom" className="dashboard-card">
            <Users className="icon" />
            <p>Manage Classroom</p>
          </Link>
          <Link to="/LiveClassManagement" className="dashboard-card">
            <Video className="icon" />
            <p>Live Class Management</p>
          </Link>
          <Link to="/assignments" className="dashboard-card">
            <FileText className="icon" />
            <p>Assignments & Tests</p>
          </Link>
          <Link to="/StudentPerformance" className="dashboard-card">
            <BookOpen className="icon" />
            <p>Student Performance</p>
          </Link>
          <Link to="/discussion" className="dashboard-card">
            <MessageSquare className="icon" />
            <p>Q&A Discussion</p>
          </Link>
          <Link to="/notifications" className="dashboard-card">
            <Bell className="icon" />
            <p>Notifications</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;