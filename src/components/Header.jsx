import React, { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-blue-400">EduSync</h2>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem text="Home" to="/home" />
          <NavItem text="Courses" to="/courses" />
          <NavItem text="Resources" to="/resources" />
          <NavItem text="Contact" to="/contact" />
        </nav>
        
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2 w-full rounded-lg hover:bg-blue-800 transition"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <UserCircle className="w-6 h-6" /> Profile
          </button>
          
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <DropdownItem text="Settings" />
              <DropdownItem text="Logout" />
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-gray-800 p-4 space-y-2 mt-2 rounded-lg">
          <NavItem text="Home" to="/home" />
          <NavItem text="Courses" to="/courses" />
          <NavItem text="Resources" to="/resources" />
          <NavItem text="Contact" to="/contact" />
        </nav>
      )}
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

const DropdownItem = ({ text }) => (
  <a href="#" className="block px-5 py-2 text-gray-300 hover:bg-gray-700 w-full">
    {text}
  </a>
);

export default Header;