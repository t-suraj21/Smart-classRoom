// filepath: c:\Users\VICTUS\TECH\Smart-classRoom\src\components\Header.jsx
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
          <img src="/assets/edusphere.png" alt="EduSphere Logo" className="h-20 w-20 ml-2" />
          <h2 className="text-2xl font-bold text-white">EduSphere</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <NavItem text="Home" to="/home" />
          <NavItem text="Courses" to="/course" />
          <NavItem text="Resources" to="/resources" />
          <NavItem text="Contact" to="/contact" />
          <NavItem text="Profile" to="/profile" />

          {/* Student Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setStudentDropdown(!studentDropdown)}
              className="flex items-center gap-1 hover:text-blue-500 transition"
            >
              Student <ChevronDown className="w-4 h-4" />
            </button>
            {studentDropdown && (
              <div className="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg py-2">
                <DropdownItem text="📜 Student List" to="/student/student-list" />
                <DropdownItem text="📊 Student Dashboard" to="/student/dashboard" />
                <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" />
                <DropdownItem text="📅 Attendance" to="/student/attendance" />
                <DropdownItem text="📖 Notebook" to="/student/notebook" />
              </div>
            )}
          </div>
        </nav>

        {/* Login Button (Desktop) */}
        <Link to="/auth" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Let's Go!
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white text-gray-700 absolute top-16 left-0 w-full shadow-md px-6 py-4">
          <NavItem text="Home" to="/home" onClick={() => setMenuOpen(false)} />
          <NavItem text="Courses" to="/course" onClick={() => setMenuOpen(false)} />
          <NavItem text="Resources" to="/resources" onClick={() => setMenuOpen(false)} />
          <NavItem text="Contact" to="/contact" onClick={() => setMenuOpen(false)} />

          {/* Student Dropdown (Mobile) */}
          <div className="mt-3">
            <p className="font-semibold">Student</p>
            <DropdownItem text="📜 Student List" to="/student/student-list" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📊 Student Dashboard" to="/student/dashboard" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📅 Attendance" to="/student/attendance" onClick={() => setMenuOpen(false)} />
            <DropdownItem text="📖 Notebook" to="/student/notebook" onClick={() => setMenuOpen(false)} />
          </div>

          {/* Login Button (Mobile) */}
          <Link
            to="/auth"
            className="block text-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Let's Go!
          </Link>
        </div>
      )}
    </header>
  );
};

// Reusable Components
const NavItem = ({ text, to, onClick }) => (
  <Link
    to={to}
    className="relative py-2 px-3 hover:text-blue-500 transition group"
    onClick={onClick}
  >
    {text}
    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
);

const DropdownItem = ({ text, to, onClick }) => (
  <Link to={to} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition" onClick={onClick}>
    {text}
  </Link>
);

export default Header;