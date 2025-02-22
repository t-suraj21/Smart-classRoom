import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const [step, setStep] = useState("login"); // Default: login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Profile");
    }
  }, [navigate]);

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/register", { name, email, password });
      alert(res.data.message);
      localStorage.setItem("userId", res.data.userId); // Store userId
      setStep("login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId); // Store userId
      navigate("/Profile");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 text-white">
        {step === "register" ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Full Name" className="w-full p-2 border mb-2 text-black" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" className="w-full p-2 border mb-2 text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="w-full p-2 border mb-2 text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
            </form>
            <p className="text-center mt-2">Already registered? <span className="text-blue-500 cursor-pointer" onClick={() => setStep("login")}>Login</span></p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" className="w-full p-2 border mb-2 text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="w-full p-2 border mb-2 text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">Login</button>
            </form>
            <p className="text-center mt-2">New user? <span className="text-blue-500 cursor-pointer" onClick={() => setStep("register")}>Register</span></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;