// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout & Shared Components
import Header from "./components/Header";

// Pages
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Auth from "./components/Auth";
import Profile from "./components/Profile";

// Student Pages
import Attendance from "./student/attendance";
import TeacherDashboard from "./student/teacher-dashboard";
import Quizz from "./student/Quizz";
import ResumeUpload from "./student/ResumeUpload";
import ClassSchedule from "./student/ClassSchedule"; // ✅ Class Schedule Import
import TeacherAssignmentUpload from "./student/Assignment"; // ✅ Assignment Upload Import
import ResourceUpload from "./student/ResourceUpload"; // ✅ Resource Upload Import
import ManageExams from "./student/ManageExams"; // ✅ Manage Exams Import
import NotebookPage from "./student/NotebookPage"; // ✅ Notebook Page Import



const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 w-full max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/resources" element={<ResourcePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            {/* Student Routes */}
            <Route path="/student/attendance" element={<Attendance />} />
            <Route path="/student/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student/Quizz" element={<Quizz />} />
            <Route path="/student/resume-upload" element={<ResumeUpload />} />
            <Route path="/student/ClassSchedule" element={<ClassSchedule />} />
            <Route path="/student/Assignments" element={<TeacherAssignmentUpload />} />
            <Route path="/student/ResourceUpload" element={<ResourceUpload />} />
            <Route path="/student/ManageExams" element={<ManageExams/>} />
            <Route path="/student/NotebookPage" element={<NotebookPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;