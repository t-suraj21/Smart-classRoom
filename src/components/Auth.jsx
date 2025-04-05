import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const url = isRegister
      ? "http://localhost:3000/auth/register"
      : "http://localhost:3000/auth/login";

    // Only send necessary fields
    const payload = isRegister
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      : {
          email: formData.email,
          password: formData.password,
        };

    console.log("Sending payload:", payload); // Optional: for debugging

    try {
      const res = await axios.post(url, payload);
      const token = res.data.token;
      localStorage.setItem("token", token);

      alert(`${isRegister ? "Registration" : "Login"} successful!`);
      navigate("/profile");
    } catch (err) {
      console.error("❌ Auth error:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-black w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border px-3 py-2 rounded"
              required
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-black text-white py-2 rounded">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="underline text-black"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
