"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg", "/assets/image4.jpg"];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Smart Classroom Management</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          AI-powered tools for automated attendance, lesson planning, student performance tracking, and seamless
          collaboration.
        </p>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-blue-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay <span className="text-blue-600">Informed.</span> <br />
              Stay <span className="text-blue-600">Connected.</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your go-to platform for the latest campus news, events, and opportunities.
            </motion.p>
            <motion.a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join Now
            </motion.a>
          </div>

          {/* Right Side - Animated Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={images[currentImage]}
              alt="Campus Buzz"
              className="rounded-lg shadow-lg w-1/2 h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">About Our Platform</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our smart classroom management software is designed to enhance the teaching experience by automating tasks
          such as attendance tracking, lesson planning, and student engagement analytics.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">About Us</h4>
            <p className="text-sm text-gray-400">
              We provide innovative classroom solutions to streamline attendance, lesson planning, and student
              performance tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/dashboard" className="hover:text-gray-300">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-gray-300">
                  Classes
                </a>
              </li>
              <li>
                <a href="/home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-sm text-gray-400">Email: support@smartclassroom.com</p>
            <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Smart Classroom. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}