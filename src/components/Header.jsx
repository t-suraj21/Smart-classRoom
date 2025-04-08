import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

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
    <header className="bg-white text-white shadow-md sticky top-0 z-50 h-20">
  <div className="mx-auto max-w-screen-xl flex justify-between items-center h-full px-4">
    {/* Left - Logo & Name */}
    <div className="flex items-center gap-2">
      <img src="/assets/edusphere.png" alt="EduSphere Logo" className="h-12 w-12" />
      <h2 className="text-xl font-bold text-gray-800">EduSphere</h2>
    </div>

    {/* Center - Nav Items */}
    <nav className="hidden md:flex items-center gap-5 text-gray-700 font-medium">
      <NavItem text="Home" to="/home" />
      <NavItem text="Courses" to="/course" />
      <NavItem text="Resources" to="/resources" />
      <NavItem text="Contact" to="/contact" />
      <NavItem text="Profile" to="/profile" />

<<<<<<< HEAD
      {/* Student Dropdown (Hover) */}
      <div
        className="relative"
        onMouseEnter={() => setStudentDropdown(true)}
        onMouseLeave={() => setStudentDropdown(false)}
        ref={dropdownRef}
      >
        <button className="flex items-center gap-1 hover:text-blue-500 transition">
          Student <ChevronDown className="w-4 h-4" />
        </button>
        {studentDropdown && (
          <div className="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg py-2">
            <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" />
            <DropdownItem text="📅 Attendance" to="/student/attendance" />
            <DropdownItem text="📖 Quizz" to="/student/Quizz" />
          </div>
        )}
      </div>
    </nav>

    {/* Right - Let's Go Button */}
    <div className="hidden md:block">
      <Link
        to="/auth"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Let's Go!
      </Link>
    </div>

    {/* Mobile Menu Toggle */}
    <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
    </button>
  </div>

  {/* Mobile Menu remains the same */}
  {menuOpen && (
    <div
      ref={mobileMenuRef}
      className="md:hidden bg-white text-gray-700 absolute top-20 left-0 w-full shadow-md px-6 py-4"
    >
      <NavItem text="Home" to="/home" onClick={() => setMenuOpen(false)} />
      <NavItem text="Courses" to="/course" onClick={() => setMenuOpen(false)} />
      <NavItem text="Resources" to="/resources" onClick={() => setMenuOpen(false)} />
      <NavItem text="Contact" to="/contact" onClick={() => setMenuOpen(false)} />
      <div className="mt-3">
        <p className="font-semibold">Student</p>
        <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" onClick={() => setMenuOpen(false)} />
        <DropdownItem text="📅 Attendance" to="/student/attendance" onClick={() => setMenuOpen(false)} />
        <DropdownItem text="📖 Quizz" to="/student/Quizz" onClick={() => setMenuOpen(false)} />
      </div>
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
=======
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setStudentDropdown(!studentDropdown)}
              className="flex items-center gap-1 hover:text-blue-500 transition"
            >
              Student <ChevronDown className="w-4 h-4" />
            </button>
            {studentDropdown && (
              <div className="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg py-2">
                <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" />
                <DropdownItem text="📅 Attendance" to="/student/attendance" />
                <DropdownItem text="📖 Quizz" to="/student/Quizz" />
              </div>
            )}
          </div>
        </nav>

        <Link to="/auth" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Let's Go!
        </Link>

        {/* Hamburger Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu with Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-gray-700 absolute top-16 left-0 w-full shadow-md px-6 py-4 rounded-b-lg"
          >
            <NavItem text="Home" to="/home" onClick={() => setMenuOpen(false)} />
            <NavItem text="Courses" to="/course" onClick={() => setMenuOpen(false)} />
            <NavItem text="Resources" to="/resources" onClick={() => setMenuOpen(false)} />
            <NavItem text="Contact" to="/contact" onClick={() => setMenuOpen(false)} />
            <NavItem text="Profile" to="/profile" onClick={() => setMenuOpen(false)} />

            <div className="mt-3">
              <p className="font-semibold">Student</p>
              <DropdownItem text="👨‍🏫 Teacher Dashboard" to="/student/teacher-dashboard" onClick={() => setMenuOpen(false)} />
              <DropdownItem text="📅 Attendance" to="/student/attendance" onClick={() => setMenuOpen(false)} />
              <DropdownItem text="📖 Quizz" to="/student/Quizz" onClick={() => setMenuOpen(false)} />
            </div>

            <Link
              to="/auth"
              className="block text-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Let's Go!
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
>>>>>>> f51c4f975a375f16c556212f7c7628127e3a3417
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
