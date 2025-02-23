import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown & menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setStudentDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/edusphere.jpg" alt="EduSphere Logo" className="h-8 mr-2" />
          <h2 className="text-2xl font-bold text-white">EduSphere</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem text="Home" to="/home" />
          <NavItem text="Courses" to="/course" />
          <NavItem text="Resources" to="/resources" />
          <NavItem text="Contact" to="/contact" />
          <NavItem text="Profile" to="/Profile" />

          {/* Student Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setStudentDropdown(!studentDropdown)}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              Student <ChevronDown className="w-4 h-4" />
            </button>
            {studentDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white  rounded-lg shadow-lg">
                <DropdownItem text="📜 Student List" to="/student/student-list" />
                <DropdownItem text="📊 Student Dashboard" to="/student/Dashboard" />
                <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/TeacherDashboard" />
                <DropdownItem text="📅 Attendance" to="/student/attendance" />
                <DropdownItem text="📖 Notebook" to="/student/notebook" />
              </div>
            )}
          </div>
        </nav>

        {/* Login Button (Desktop) */}
        <Link to="/Auth" className="hidden md:block bg-blue-700 px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Let's Go!
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white text-white p-4 absolute top-16 left-0 w-full shadow-md"
        >
          <NavItem text="Home" to="/home" onClick={() => setMenuOpen(false)} />
          <NavItem text="Courses" to="/course" onClick={() => setMenuOpen(false)} />
          <NavItem text="Resources" to="/resources" onClick={() => setMenuOpen(false)} />
          <NavItem text="Contact" to="/contact" onClick={() => setMenuOpen(false)} />

          {/* Student Dropdown (Mobile) */}
          <div className="mt-2">
            <p className="text-white px-5">Student</p>
            <DropdownItem text="📜 Student List" to="/student/student-list" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📊 Student Dashboard" to="/student/dashboard" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📅 Attendance" to="/student/attendance" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📖 Notebook" to="/student/notebook" onClick={() => setMenuOpen(false)} />
          </div>

          {/* Login Button (Mobile) */}
          <Link to="/login" className="block text-center bg-blue-700 px-5 py-2 rounded-lg hover:bg-blue-800 transition mt-4">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

// Reusable Components
const NavItem = ({ text, to, onClick }) => (
  <Link to={to} className="relative py-2 px-4 hover:text-blue-400 transition group" onClick={onClick}>
    {text}
    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
);

const DropdownItem = ({ text, to, onClick }) => (
  <Link to={to} className="block px-5 py-2 text-gray-300 hover:bg-gray-700" onClick={onClick}>
    {text}
  </Link>
);

export default Header;