import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blue flex flex-col items-center justify-center p-6">
      {/* Contact Section */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-5xl w-full">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">📞 Get in Touch with Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Whether you have a question about features, pricing, demos, or anything else, our team is ready to assist you!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">📍 Office Address</h3>
            <p className="text-gray-600 mt-2">123 Smart Classroom St, City, Country</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">📧 Email Us</h3>
            <p className="text-gray-600 mt-2">support@smartclassroom.com</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">📞 Call Us</h3>
            <p className="text-gray-600 mt-2">+1 234 567 890</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">⏰ Office Hours</h3>
            <p className="text-gray-600 mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">💬 Live Chat</h3>
            <p className="text-gray-600 mt-2">Available 24/7</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">📝 Help Center</h3>
            <a href="#" className="text-blue-600 mt-2 block">Visit our FAQ section</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Subject</label>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md">
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📍 Our Location</h3>
          <iframe 
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093944!2d144.95373631531694!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1620134500807!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition">🔵 Facebook</a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600 transition">🐦 Twitter</a>
          <a href="#" className="text-pink-600 text-2xl hover:text-pink-800 transition">📸 Instagram</a>
          <a href="#" className="text-red-600 text-2xl hover:text-red-800 transition">▶ YouTube</a>
          <a href="#" className="text-blue-500 text-2xl hover:text-blue-700 transition">💼 LinkedIn</a>
        </div>
      </div>
    </div>
  );
}