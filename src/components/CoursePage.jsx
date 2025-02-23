import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";


const courses = [
  {
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    learners: "44,394",
    price: 499,
    originalPrice: 2699,
    category: "AI",
    image: "/assets/ai1.jpg",
    link: "https://www.udemy.com/course/chatgpt-complete-guide-to-chatgpt-openai-apis/",
  },
  {
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Tomas Moravek",
    rating: 4.3,
    learners: "1,748",
    price: 499,
    originalPrice: 3099,
    category: "AI",
    image: "/assets/ai2.jpg",
    link: "https://www.udemy.com/course/ai-powered-copywriting-course/",
  },
  {
    title: "Machine Learning Specialization",
    instructor: "Andrew Ng",
    rating: 4.7,
    learners: "85,000",
    price: 799,
    originalPrice: 1599,
    category: "Machine Learning",
    image: "/assets/ml.jpg",
    link: "https://www.coursera.org/specializations/machine-learning-introduction",
  },
  {
    title: "Deep Learning Specialization",
    instructor: "Andrew Ng",
    rating: 4.8,
    learners: "70,500",
    price: 999,
    originalPrice: 1999,
    category: "Deep Learning",
    image: "/assets/dl.jpg",
    link: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    learners: "95,000",
    price: 699,
    originalPrice: 1299,
    category: "Python",
    image: "/assets/py.jpg",
    link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
  },
  {
    title: "Statistics for Data Science and Business Analysis",
    instructor: "365 Careers",
    rating: 4.4,
    learners: "50,000",
    price: 599,
    originalPrice: 1199,
    category: "Data Science",
    image: "/assets/data1.jpg",
    link: "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/",
  },
  {
    title: "AI For Everyone",
    instructor: "Andrew Ng",
    rating: 4.2,
    learners: "15,000",
    price: 499,
    originalPrice: 999,
    category: "AI",
    image: "/assets/ai3.jpg",
    link: "https://www.coursera.org/learn/ai-for-everyone",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    learners: "100,000",
    price: 899,
    originalPrice: 1799,
    category: "Web Development",
    image: "/assets/webd.jpg",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },

];

const categories = [
  { name: "All", icon: "mdi:view-grid" },
  { name: "AI", icon: "mdi:robot" },
  { name: "Data Science", icon: "mdi:chart-bar" },
  { name: "Python", icon: "mdi:language-python" },
  { name: "Machine Learning", icon: "mdi:brain" },
  { name: "Deep Learning", icon: "mdi:layers" },
  { name: "Web Development", icon: "mdi:web" },
];

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All" 
    ? courses 
    : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Transform Your Future with Expert-Led Courses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Discover cutting-edge courses designed to help you master the skills 
              that drive innovation and shape tomorrow's technology.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full 
                shadow-lg hover:bg-gray-100 transition duration-300 text-lg"
            >
              Browse All Courses
            </motion.button>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border text-base font-medium
                  flex items-center space-x-2 transition duration-300
                  ${selectedCategory === category.name 
                    ? "bg-blue-100 border-blue-500 text-blue-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon icon={category.icon} className="text-xl" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl 
                  transition duration-300 overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 
                    line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                  <div className="flex items-center mb-2">
                    <Icon icon="mdi:star" className="text-yellow-500 mr-1" />
                    <span className="text-yellow-500 font-bold">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({course.learners} learners)
                    </span>
                  </div>
                  <p className="text-gray-900 font-bold text-2xl mb-4">
                    ₹{course.price}{" "}
                    <span className="text-gray-500 line-through text-lg">
                      ₹{course.originalPrice}
                    </span>
                  </p>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 text-white 
                      py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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

export default CoursePage;