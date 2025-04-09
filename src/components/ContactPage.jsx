import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h3>
          <p className="text-gray-600 text-lg">We’re here to assist you. Reach out via phone, email, or visit us.</p>
          <div className="text-lg text-gray-700 space-y-3">
            <p><span className="font-semibold">📧 Email:</span> support@edusphere.com</p>
            <p><span className="font-semibold">📞 Phone:</span> +1 (800) 123-4567</p>
            <p><span className="font-semibold">⏰ Office Hours:</span> Mon - Fri, 9 AM - 5 PM</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 flex-wrap">
            {[
              {
                name: "Facebook",
                url: "https://facebook.com",
                icon: "facebook",
              },
              {
                name: "Twitter",
                url: "https://twitter.com",
                icon: "twitter",
              },
              {
                name: "Instagram",
                url: "https://instagram.com",
                icon: "instagram",
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com",
                icon: "linkedin",
              },
            ].map(({ name, url, icon }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition duration-300"
                aria-label={name}
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>

          <img
            src="/assets/contact.jpg"
            alt="Map showing our location"
            className="w-full h-64 rounded-md shadow-md object-cover"
          />
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

      {/* Footer */}
      <footer className="bg-white pt-12 border-t border-blue-700 mt-12 text-sm text-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-bold mb-3">About Us</h4>
              <p>
                We provide innovative classroom solutions to streamline attendance, lesson planning, and student performance tracking.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/course" className="hover:text-blue-600">Courses</Link></li>
                <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
                <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((icon, i) => (
                  <a
                    key={i}
                    href={`https://${icon}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition duration-300"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center py-4 border-t border-gray-300 text-gray-500">© {new Date().getFullYear()} Edusphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
