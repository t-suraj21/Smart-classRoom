// filepath: c:\Users\VICTUS\TECH\Smart-classRoom\src\App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Dashboard from "./components/student/Dashboard";
import TeacherDashboard from "./components/student/TeacherDashboard";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import StudentList from "./components/student/StudentList";
import StudentProfile from "./components/student/StudentProfile";
import StudentPerformance from "./components/student/StudentPerformance";
// import Attendance from "./components/student/Attendance";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 w-full max-w-7xl mx-auto p-4">
          <Routes>
            {/* 🏠 General Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/resources" element={<ResourcePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />

            {/* 🎓 Student Routes */}
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student/student-list" element={<StudentList />} />
            <Route path="/student/:id/profile" element={<StudentProfile />} />
            <Route path="/student/:id/performance" element={<StudentPerformance />} />
            {/* <Route path="/student/attendance" element={<Attendance />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;