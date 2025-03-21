import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserIcon, EnvelopeIcon, LockClosedIcon, IdentificationIcon } from "@heroicons/react/24/solid";

const Auth = () => {
  const [role, setRole] = useState(null); // "Student" or "Teacher"
  const [step, setStep] = useState("login"); // "login" or "register"
  const [formData, setFormData] = useState({ name: "", email: "", password: "", studentId: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === "register" && (!formData.name || !formData.email || !formData.password || (role === "Student" && !formData.studentId))) {
      alert("❌ Please fill in all fields.");
      return;
    }

    const url = step === "register" ? "https://backend-zgt2.onrender.com/register" : "https://backend-zgt2.onrender.com/login";
    try {
      const res = await axios.post(url, { ...formData, role }, { headers: { "Content-Type": "application/json" } });

      if (step === "login") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        navigate("/dashboard");
      } else {
        alert("✅ " + res.data.message);
        setStep("login");
      }
    } catch (error) {
      alert("❌ " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  if (!role) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="bg-white p-8 shadow-lg rounded-xl w-96 text-center border border-gray-400">
          <h2 className="text-2xl font-bold mb-4">Select Your Role</h2>
          <button className="w-full py-2 mb-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700" onClick={() => setRole("Student")}>Student</button>
          <button className="w-full py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-700" onClick={() => setRole("Teacher")}>Teacher</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 shadow-lg rounded-xl w-96 text-white border border-gray-400">
        <h2 className="text-3xl font-bold text-center mb-4">{step === "register" ? "Create an Account" : "Welcome Back"}</h2>
        
        <form onSubmit={handleSubmit}>
          {step === "register" && (
            <div className="relative mb-3">
              <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" name="name" placeholder="Full Name" className="w-full p-2 pl-10 border border-gray-400 rounded-lg bg-white text-gray-800" onChange={handleChange} required />
            </div>
          )}
          
          {step === "register" && role === "Student" && (
            <div className="relative mb-3">
              <IdentificationIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" name="studentId" placeholder="Student ID" className="w-full p-2 pl-10 border border-gray-400 rounded-lg bg-white text-gray-800" onChange={handleChange} required />
            </div>
          )}
          
          <div className="relative mb-3">
            <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 pl-10 border border-gray-400 rounded-lg bg-white text-gray-800" onChange={handleChange} required />
          </div>
          
          <div className="relative mb-3">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 pl-10 border border-gray-400 rounded-lg bg-white text-gray-800" onChange={handleChange} required />
          </div>
          
          <button type="submit" className="w-full py-2 rounded-lg mt-3 text-white font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-700">
            {step === "register" ? "Register" : "Login"}
          </button>
        </form>
        
        <p className="text-center mt-4 text-sm">
          {step === "register" ? (
            <>Already have an account? <span className="text-blue-300 cursor-pointer hover:underline" onClick={() => setStep("login")}>Login</span></>
          ) : (
            <>Don't have an account? <span className="text-blue-300 cursor-pointer hover:underline" onClick={() => setStep("register")}>Register</span></>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
