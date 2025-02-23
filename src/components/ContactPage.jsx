import React, { useState } from "react";
import { motion } from "framer-motion";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-10">📩 Get in Touch</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h3>
          <p className="text-gray-600 text-lg">We’re here to assist you. Reach out via phone, email, or visit us.</p>
          <div className="text-lg text-gray-700 space-y-3">
            <p><span className="font-semibold">📍 Address:</span> 123 School Lane, EduCity</p>
            <p><span className="font-semibold">📧 Email:</span> support@smartclassroom.com</p>
            <p><span className="font-semibold">📞 Phone:</span> +1 (800) 123-4567</p>
            <p><span className="font-semibold">⏰ Office Hours:</span> Mon - Fri, 9 AM - 5 PM</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 flex-wrap">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
              >
                {platform}
              </motion.a>
            ))}
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">📍 Find Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-full h-64 rounded-md shadow-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">✉ Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "subject"].map((field, i) => (
              <div key={i}>
                <label className="block text-gray-600 font-medium mb-1 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
      <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">About Us</h4>
          <p className="text-sm text-gray-400">
            We provide innovative classroom solutions to streamline attendance, lesson planning, and student performance tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Dashboard", "Courses", "Resources", "Home", "Contact"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {["facebook", "twitter", "instagram"].map((social, idx) => (
              <a
                key={idx}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition duration-300"
              >
                <img src={`/assets/${social}.png`} alt={social} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        © 2025 Smart Classroom. All rights reserved.
      </p>
    </footer>
    </div>
  );
};

export default ContactPage;
