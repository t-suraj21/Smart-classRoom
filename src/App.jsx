import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Homepage"; // Import HomePage
import CoursePage from "./components/CoursePage";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/CoursePage" element={<CoursePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;