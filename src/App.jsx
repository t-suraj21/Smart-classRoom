import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Dashboard from "./components/student/Dashboard";
import TeacherDashboard from "./components/student/TeacherDashboard";
import Auth from "./components/Auth"; // Import Auth component
import Profile from "./components/Profile"; // Import Profile component

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
            <Route path="/auth" element={<Auth />} /> {/* Add Auth Route */}
            <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;