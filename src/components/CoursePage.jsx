import React, { useState } from "react";

const courses = [
  {
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    learners: "44,394",
    price: 499,
    originalPrice: 2699,
    category: "AI",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Tomas Moravek",
    rating: 4.3,
    learners: "1,748",
    price: 499,
    originalPrice: 3099,
    category: "AI",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Andrew Ng",
    rating: 4.7,
    learners: "85,000",
    price: 799,
    originalPrice: 1599,
    category: "Machine Learning",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Deep Learning Specialization",
    instructor: "Ian Goodfellow",
    rating: 4.8,
    learners: "70,500",
    price: 999,
    originalPrice: 1999,
    category: "Deep Learning",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Python for Data Science",
    instructor: "Jose Portilla",
    rating: 4.6,
    learners: "95,000",
    price: 699,
    originalPrice: 1299,
    category: "Python",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Statistics for Data Science",
    instructor: "Khan Academy",
    rating: 4.4,
    learners: "50,000",
    price: 599,
    originalPrice: 1199,
    category: "Data Science",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Artificial Intelligence & Ethics",
    instructor: "Stuart Russell",
    rating: 4.2,
    learners: "15,000",
    price: 499,
    originalPrice: 999,
    category: "AI",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Full-Stack Web Development with React",
    instructor: "Colt Steele",
    rating: 4.7,
    learners: "100,000",
    price: 899,
    originalPrice: 1799,
    category: "Web Development",
    image: "https://via.placeholder.com/300",
  },
];

const categories = ["All", "AI", "Data Science", "Python", "Machine Learning", "Deep Learning", "Web Development"];

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Upgrade Your Skills with Our Top Courses</h1>
        <p className="text-lg mb-6">Learn from industry experts and enhance your career prospects.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Browse Courses
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex gap-4 p-6 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200 transition ${
              selectedCategory === category ? "bg-gray-300" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses List */}
      <div className="grid md:grid-cols-4 gap-6 px-6">
        {filteredCourses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={course.image} alt={course.title} className="w-full rounded-lg mb-3" />
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.instructor}</p>
            <p className="text-yellow-500 font-bold">⭐ {course.rating} ({course.learners})</p>
            <p className="text-gray-900 font-bold text-lg">₹{course.price} <span className="text-gray-500 line-through text-sm">₹{course.originalPrice}</span></p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>

     {/* Footer */}
     <footer className="bg-white mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2025 Courses. All rights reserved.</p>
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

export default CoursePage;
