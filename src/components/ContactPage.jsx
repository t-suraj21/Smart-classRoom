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

      {/* Responsive Grid Layout */}
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

          {/* Social Media Icons */}
          <div className="flex gap-4 flex-wrap">
            {[
              {
                name: "Facebook",
                url: "https://facebook.com",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                  </svg>
                ),
              },
              {
                name: "Twitter",
                url: "https://twitter.com",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M22.162 5.65593C21.3986 5.99373 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74539C15.6615 3.59589 14.7279 3.74932 13.9153 4.18338C13.1026 4.61743 12.4564 5.30967 12.0772 6.14978C11.6979 6.98989 11.6067 7.93177 11.818 8.82893C10.1551 8.74558 8.52832 8.31353 7.04328 7.56073C5.55823 6.80793 4.24812 5.75103 3.19799 4.45893C2.82628 5.0976 2.63095 5.82629 2.63199 6.56993C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84276 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.472 3.54384 12.2211C4.15532 12.9703 5.00647 13.4861 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.30897 14.5762 4.80901 15.3039 5.48994 15.824C6.17087 16.344 6.99699 16.6316 7.85199 16.6499C6.17801 17.9779 4.1861 18.6997 2.13199 18.6969C1.77799 18.6969 1.42399 18.6789 1.07199 18.6419C3.15976 20.0338 5.60943 20.7795 8.10199 20.7769C15.558 20.7769 19.616 14.8889 19.616 9.79193C19.616 9.60193 19.612 9.41193 19.602 9.22393C20.4201 8.62577 21.1224 7.87534 21.666 7.01393L22.162 5.65593Z"></path>
                  </svg>
                ),
              },
              {
                name: "Instagram",
                url: "https://instagram.com",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M16.5 0h-9C3.4 0 0 3.4 0 7.5v9C0 20.6 3.4 24 7.5 24h9c4.1 0 7.5-3.4 7.5-7.5v-9C24 3.4 20.6 0 16.5 0zm5 16.5c0 2.8-2.2 5-5 5h-9c-2.8 0-5-2.2-5-5v-9c0-2.8 2.2-5 5-5h9c2.8 0 5 2.2 5 5v9z"></path>
                    <path d="M12 5.9c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z"></path>
                    <circle cx="18.5" cy="5.5" r="1.5"></circle>
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                  </svg>
                ),
              },
            ].map(({ name, url, svg }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition duration-300"
                aria-label={name}
              >
                {svg}
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
    </div>
  );
};

export default ContactPage;
// import React, { useState } from "react";