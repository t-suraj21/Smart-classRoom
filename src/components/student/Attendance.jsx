import React, { useState } from "react";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const studentId = localStorage.getItem("studentId");
  const navigate = useNavigate();
  
  const markAttendance = async () => {
    try {
      await axios.post("https://backend-zgt2.onrender.com/attendance", { studentId });
      alert("Attendance Marked!");
    } catch (error) {
      alert("Error marking attendance");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Scan QR to Mark Attendance</h2>
      <QRCode value={studentId} size={200} />
      <button onClick={markAttendance} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Mark Attendance</button>
      <button onClick={() => { localStorage.clear(); navigate("/"); }} className="mt-2 text-red-500">Logout</button>
    </div>
  );
};

export default Dashboard;