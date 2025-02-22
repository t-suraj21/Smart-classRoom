import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [step, setStep] = useState("register"); // "register", "login"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const userId = "STU" + Math.floor(1000 + Math.random() * 9000);
    const user = { name, email, password, userId };
    localStorage.setItem("user", JSON.stringify(user));

    alert(`Registration Successful! Your User ID is ${userId}`);
    setStep("login");
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password");
      return;
    }

    alert("Login Successful!");
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black p-8 shadow-md rounded-md w-96 text-white">
        {step === "register" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Full Name" className="w-full p-2 border mb-2" onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" className="w-full p-2 border mb-2" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="w-full p-2 border mb-2" onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
            </form>
            <p className="text-center mt-2">Already registered? <span className="text-blue-500 cursor-pointer" onClick={() => setStep("login")}>Login</span></p>
          </>
        )}

        {step === "login" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" className="w-full p-2 border mb-2" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="w-full p-2 border mb-2" onChange={(e) => setPassword(e.target.value)} />
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