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
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">📩 Get in Touch</h2>

      {/* Grid Layout for Contact Details & Form */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h3>
          <p className="text-gray-600 text-lg">
            We’re here to assist you. Feel free to reach out via phone, email, or visit us.
          </p>
          <div className="text-lg text-gray-700 space-y-3">
            <p><span className="font-semibold">📍 Address:</span> 123 School Lane, EduCity</p>
            <p><span className="font-semibold">📧 Email:</span> support@smartclassroom.com</p>
            <p><span className="font-semibold">📞 Phone:</span> +1 (800) 123-4567</p>
            <p><span className="font-semibold">⏰ Office Hours:</span> Mon - Fri, 9 AM - 5 PM</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-200 text-white rounded-full hover:bg-blue-500 transition duration-300"
              >
                {platform}
              </motion.a>
            ))}
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">📍 Find Us on the Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.30778923355!2d-74.25986531998145!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af4e8b882b%3A0x9cbcd2a67e5e4c7d!2sNew%20York!5e0!3m2!1sen!2sus!4v1606759536421!5m2!1sen!2sus"
              width="100%"
              height="250"
              frameBorder="0"
              className="rounded-md shadow-md"
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">✉️ Send Us a Message</h3>
          <p className="text-gray-600 mb-4">Fill out the form below, and we’ll get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Your Message"
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

{/* Footer */}
      <footer className="bg-white mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2025 Contact. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;