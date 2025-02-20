import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Messages from "./pages/Messages";
import Students from "./pages/Students";
import Settings from "./pages/Settings";
import HomePage from "./components/Homepage"; // Import HomePage

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/students" element={<Students />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;