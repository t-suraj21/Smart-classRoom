import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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

// 🔹 Component to handle authentication and redirection
const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth"); // Redirect to auth if not logged in
  }, [navigate]);
  return element;
};

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

            {/* Protected Routes (Only accessible when logged in) */}
            <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
            <Route path="/student/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/student/teacher-dashboard" element={<ProtectedRoute element={<TeacherDashboard />} />} />
            <Route path="/student/Student-List" element={<ProtectedRoute element={<StudentList />} />} />
            <Route path="/student/:id/profile" element={<ProtectedRoute element={<StudentProfile />} />} />
            <Route path="/student/:id/performance" element={<ProtectedRoute element={<StudentPerformance />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;