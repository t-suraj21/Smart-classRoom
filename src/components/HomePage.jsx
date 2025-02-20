"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

//framer-motion
const images = ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg", "/assets/image4.jpg"];
// Slider content
const slides = [
  {
    image: "/assets/back.jpg",
    title: "Unlock Your Potential,\nEmbrace Education.",
    subtitle: "Learn, Achieve, and Believe",
    description: "Transform your classroom experience with our innovative management system.",
  },
  {
    image: "/assets/tech.jpg",
    title: "Welcome to Smart\nClassroom Management",
    subtitle: "Innovate, Collaborate, Succeed",
    description: "A Community Based Platform Designed For Modern Education",
  },
  {
    image: "/assets/close.jpg",
    title: "Empower Your\nTeaching Journey",
    subtitle: "Track, Analyze, Improve",
    description: "AI-powered tools for seamless classroom management",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center text-white"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl mb-12 text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                  </motion.p>
                <motion.a
                  href="#"
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold 
                             transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md"
                >
                  Try Demo
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-blue-500" : "bg-black-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-grey-100">
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
  <AnimatePresence initial={false}>
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={images[currentSlide]}
        alt="Campus Buzz"
        className="rounded-lg shadow-lg w-1/2 h-auto" // Adjusted size to 50%
      />
    </motion.div>
  </AnimatePresence>
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
            <p className="text-sm text-gray-400">Phone: +1 123 456 7890</p>
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