import React, { useState } from "react";
import { motion } from "framer-motion";

const resources = [
  {
    domain: "Web Development",
    icon: "💻",
    color: "#4f46e5",
    courses: [
      { name: "HTML & CSS for Beginners", link: "https://example.com/html-css" },
      { name: "JavaScript: The Complete Guide", link: "https://example.com/javascript" },
      { name: "React.js Essentials", link: "https://example.com/react" },
    ],
  },
  {
    domain: "Data Science",
    icon: "📊",
    color: "#0ea5e9",
    courses: [
      { name: "Python for Data Science", link: "https://example.com/python-ds" },
      { name: "Data Analysis with Pandas", link: "https://example.com/pandas" },
      { name: "Visualization with Matplotlib", link: "https://example.com/matplotlib" },
    ],
  },
  {
    domain: "Cybersecurity",
    icon: "🔒",
    color: "#10b981",
    courses: [
      { name: "Introduction to Cybersecurity", link: "https://example.com/cybersecurity" },
      { name: "Ethical Hacking Basics", link: "https://example.com/ethical-hacking" },
      { name: "Network Security Fundamentals", link: "https://example.com/network-security" },
    ],
  },
  {
    domain: "Machine Learning",
    icon: "🤖",
    color: "#8b5cf6",
    courses: [
      { name: "Machine Learning Basics", link: "https://example.com/ml-basics" },
      { name: "Deep Learning with TensorFlow", link: "https://example.com/tensorflow" },
      { name: "Natural Language Processing", link: "https://example.com/nlp" },
    ],
  },
];

const ResourcePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="resource-container max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Educational Resources</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of courses organized by domain. Each resource is
          carefully selected to help you master essential skills.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeCategory === null ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All Domains
        </motion.button>
        {resources.map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.domain}
          </motion.button>
        ))}
      </div>

      <div className="resource-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources
          .filter((_, index) => activeCategory === null || activeCategory === index)
          .map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="resource-card bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
            >
              <div 
                className="p-5" 
                style={{ 
                  borderTop: `5px solid ${category.color}`,
                  background: `linear-gradient(to bottom, ${category.color}10, white)`
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-xl font-bold text-gray-800">{category.domain}</h2>
                </div>
                <ul className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <motion.li 
                      key={courseIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + courseIndex * 0.1 }}
                      className="group"
                    >
                      <a 
                        href={course.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 -mx-2 rounded-lg group-hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 mr-2 group-hover:bg-blue-500 transition-colors duration-200"></span>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                          {course.name}
                        </span>
                        <motion.span 
                          className="ml-auto opacity-0 group-hover:opacity-100 text-blue-500"
                          initial={{ x: -5 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 w-full py-2 rounded-lg text-sm font-medium text-white transition-colors duration-300"
                  style={{ backgroundColor: category.color }}
                >
                  View All Courses
                </motion.button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ResourcePage;