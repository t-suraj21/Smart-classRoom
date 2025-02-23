import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const Auth = () => {
  const [step, setStep] = useState("login"); // Default: login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/profile");
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
      navigate("/profile"); // Redirect to profile after login
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 shadow-lg rounded-lg w-96 text-white border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-4">
          {step === "register" ? "Create an Account" : "Welcome Back"}
        </h2>
        <form onSubmit={step === "register" ? handleRegister : handleLogin}>
          {step === "register" && (
            <div className="relative mb-3">
              <UserIcon className="w-5 h-5 text-gray-300 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 pl-10 border border-gray-400 rounded-md bg-white text-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="relative mb-3">
            <EnvelopeIcon className="w-5 h-5 text-gray-300 absolute left-3 top-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 pl-10 border border-gray-400 rounded-md bg-white text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-3">
            <LockClosedIcon className="w-5 h-5 text-gray-300 absolute left-3 top-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 pl-10 border border-gray-400 rounded-md bg-white text-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md mt-3 text-white font-semibold transition-all duration-200
            bg-blue-500 hover:bg-blue-600"
          >
            {step === "register" ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          {step === "register" ? "Already have an account?" : "New here?"}{" "}
          <span
            className="text-blue-300 cursor-pointer hover:underline"
            onClick={() => setStep(step === "register" ? "login" : "register")}
          >
            {step === "register" ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;