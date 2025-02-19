import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, MessageCircle, Users, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">EduSync</h2>
      <nav className="flex-1">
        <ul>
          <li className="mb-4"><Link to="/" className="flex items-center gap-3 hover:text-gray-400"><Home /> Dashboard</Link></li>
          <li className="mb-4"><Link to="/classes" className="flex items-center gap-3 hover:text-gray-400"><BookOpen /> Classes</Link></li>
          <li className="mb-4"><Link to="/messages" className="flex items-center gap-3 hover:text-gray-400"><MessageCircle /> Messages</Link></li>
          <li className="mb-4"><Link to="/students" className="flex items-center gap-3 hover:text-gray-400"><Users /> Students</Link></li>
          <li className="mb-4"><Link to="/settings" className="flex items-center gap-3 hover:text-gray-400"><Settings /> Settings</Link></li>
        </ul>
      </nav>
      <button className="flex items-center gap-3 bg-red-500 p-2 rounded hover:bg-red-600"><LogOut /> Logout</button>
    </div>
  );
};

export default Sidebar;