import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage"; 
import CoursePage from "./components/CoursePage";
import ResourcePage from "./components/ResourcePage";
import ContactPage from "./components/ContactPage";
import Attendance from "./components/student/Attendance";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/resources" element={<ResourcePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;