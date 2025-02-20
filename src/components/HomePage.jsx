import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Smart Classroom Management
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          AI-powered tools for automated attendance, lesson planning, student performance tracking, and seamless collaboration.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Our Platform</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our smart classroom management software is designed to enhance the teaching experience by automating tasks such as attendance tracking, lesson planning, and student engagement analytics.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
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
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/technews" className="hover:text-gray-300">Tech News</a></li>
              <li><a href="/internship" className="hover:text-gray-300">Internships</a></li>
              <li><a href="/resources" className="hover:text-gray-300">Resources</a></li>
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
