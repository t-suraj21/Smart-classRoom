import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">EduSphere</h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem text="Home" to="/home" />
          <NavItem text="Courses" to="/CoursePage" />
          <NavItem text="Resources" to="/resources" />
          <NavItem text="Contact" to="/ContactPage" />

          {/* Student Dropdown */}
          <div className="relative">
            <button
              onClick={() => setStudentDropdown(!studentDropdown)}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              Student <ChevronDown className="w-4 h-4" />
            </button>
            {studentDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
                <DropdownItem text="📜 Student List" to="/student/Student-list" />
                <DropdownItem text="📊 Student Dashboard" to="/student/Dashboard" />
                <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/teacher/Dashboard" />
                <DropdownItem text="📅 Attendance" to="/student/Attendance" />
                <DropdownItem text="📖 Notebook" to="/student/Notebook" />
              </div>
            )}
          </div>
        </nav>

        <Link to="/login" className="hidden md:block bg-blue-700 px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Login
        </Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

// Reusable Components
const NavItem = ({ text, to }) => (
  <Link to={to} className="relative py-2 px-4 hover:text-blue-400 transition group">
    {text}
    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
);

const DropdownItem = ({ text, to }) => (
  <Link to={to} className="block px-5 py-2 text-gray-300 hover:bg-gray-700">
    {text}
  </Link>
);

export default Header;