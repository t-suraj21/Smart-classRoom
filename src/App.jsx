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
import Profile from "./components/Profile"; // Ensure correct case
import StudentList from "./components/student/StudentList"; // Correct import name

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
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/student/Student-List" element={<StudentList />} /> {/* Corrected usage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;