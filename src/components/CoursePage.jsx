<<<<<<< HEAD
import React, { useState } from 'react';
import { BookOpen, Users, Clock, Star, Search, Filter } from 'lucide-react';

const CoursePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      category: "AI",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 3245,
      duration: "8 weeks",
      level: "Beginner",
      price: 79.99,
      image: "https://via.placeholder.com/600x400/3498db/ffffff?text=AI+Course",
      isFeatured: true,
      isNew: true,
    },
    {
      id: 2,
      title: "Advanced Data Science with Python",
      category: "Data Science",
      instructor: "Prof. Michael Chen",
      rating: 4.9,
      students: 2876,
      duration: "10 weeks",
      level: "Advanced",
      price: 99.99,
      image: "https://via.placeholder.com/600x400/e74c3c/ffffff?text=Data+Science",
      isFeatured: true,
      isNew: false,
    },
    {
      id: 3,
      title: "Python for Beginners: Zero to Hero",
      category: "Python",
      instructor: "Jamie Rivera",
      rating: 4.7,
      students: 5432,
      duration: "6 weeks",
      level: "Beginner",
      price: 49.99,
      image: "https://via.placeholder.com/600x400/2ecc71/ffffff?text=Python",
      isFeatured: false,
      isNew: false,
    },
    {
      id: 4,
      title: "Machine Learning: Practical Applications",
      category: "Machine Learning",
      instructor: "Dr. Alex Kim",
      rating: 4.9,
      students: 2134,
      duration: "12 weeks",
      level: "Intermediate",
      price: 89.99,
      image: "https://via.placeholder.com/600x400/9b59b6/ffffff?text=Machine+Learning",
      isFeatured: true,
      isNew: true,
    },
    {
      id: 5,
      title: "Deep Learning with TensorFlow",
      category: "Deep Learning",
      instructor: "Prof. Emily Zhang",
      rating: 4.8,
      students: 1865,
      duration: "10 weeks",
      level: "Advanced",
      price: 109.99,
      image: "https://via.placeholder.com/600x400/f39c12/ffffff?text=Deep+Learning",
      isFeatured: false,
      isNew: true,
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      category: "Web Development",
      instructor: "Carlos Rodriguez",
      rating: 4.6,
      students: 4521,
      duration: "14 weeks",
      level: "Intermediate",
      price: 79.99,
      image: "https://via.placeholder.com/600x400/1abc9c/ffffff?text=Web+Development",
      isFeatured: true,
      isNew: false,
    },
    {
      id: 7,
      title: "Neural Networks from Scratch",
      category: "Deep Learning",
      instructor: "Dr. Maya Patel",
      rating: 4.7,
      students: 1432,
      duration: "8 weeks",
      level: "Advanced",
      price: 99.99,
      image: "https://via.placeholder.com/600x400/d35400/ffffff?text=Neural+Networks",
      isFeatured: false,
      isNew: false,
    },
    {
      id: 8,
      title: "Data Visualization Masterclass",
      category: "Data Science",
      instructor: "Robert Wilson",
      rating: 4.5,
      students: 2654,
      duration: "6 weeks",
      level: "Intermediate",
      price: 69.99,
      image: "https://via.placeholder.com/600x400/27ae60/ffffff?text=Data+Viz",
      isFeatured: false,
      isNew: true,
    },
    {
      id: 9,
      title: "Modern JavaScript for Web Apps",
      category: "Web Development",
      instructor: "Lisa Thompson",
      rating: 4.6,
      students: 3256,
      duration: "8 weeks",
      level: "Intermediate",
      price: 59.99,
      image: "https://via.placeholder.com/600x400/8e44ad/ffffff?text=JavaScript",
      isFeatured: false,
      isNew: false,
    },
    {
      id: 10,
      title: "Computer Vision with PyTorch",
      category: "AI",
      instructor: "Prof. David Clark",
      rating: 4.9,
      students: 1756,
      duration: "10 weeks",
      level: "Advanced",
      price: 119.99,
      image: "https://via.placeholder.com/600x400/c0392b/ffffff?text=Computer+Vision",
      isFeatured: true,
      isNew: true,
    },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on active category and search query
  const filteredCourses = courses.filter(course => 
    (activeCategory === 'All' || course.category === activeCategory) &&
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
     course.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Featured courses
  const featuredCourses = courses.filter(course => course.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expand Your Skills with Our Expert Courses</h1>
            <p className="text-xl mb-8 opacity-90">
              Learn from industry experts and advance your career with our comprehensive courses in tech, data science, AI, and more.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for courses, instructors, or topics..."
                className="w-full py-4 px-6 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                {course.isNew && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{course.category}</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800">${course.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Categories and Listings */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Courses</h2>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category)}
=======
import React, { useState, useEffect } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();
  
  const categories = [
    'All', 'AI', 'Data Science', 'Python', 'Machine Learning', 
    'Deep Learning', 'Web Development', 'Database', 'Cloud Computing'
  ];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Artificial Intelligence',
      category: 'AI',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 1245,
      image: '/assets/ai1.jpg',
      price: 49.99,
      duration: '8 weeks',
      level: 'Beginner',
      externalLink: 'https://www.coursera.org/learn/intro-to-ai'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      category: 'Data Science',
      instructor: 'Prof. Michael Chen',
      rating: 4.9,
      students: 3421,
      image: '/assets/pydata.jpg',
      price: 59.99,
      duration: '10 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.edx.org/learn/python-for-data-science'
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      category: 'Python',
      instructor: 'Alex Rodriguez',
      rating: 4.7,
      students: 1876,
      image: '/assets/adpyt.jpg',
      price: 44.99,
      duration: '6 weeks',
      level: 'Advanced',
      externalLink: 'https://www.udemy.com/course/advanced-python-programming'
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals',
      category: 'Machine Learning',
      instructor: 'Dr. Emily Wong',
      rating: 4.8,
      students: 2543,
      image: '/assets/ml.jpg',
      price: 69.99,
      duration: '12 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.datacamp.com/courses/machine-learning-fundamentals'
    },
    {
      id: 5,
      title: 'Deep Learning with TensorFlow',
      category: 'Deep Learning',
      instructor: 'Dr. James Wilson',
      rating: 4.9,
      students: 1932,
      image: '/assets/deepl.jpg',
      price: 79.99,
      duration: '10 weeks',
      level: 'Advanced',
      externalLink: 'https://www.tensorflow.org/learn'
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      category: 'Web Development',
      instructor: 'Jessica Martinez',
      rating: 4.7,
      students: 3156,
      image: '/assets/webd.jpg',
      price: 39.99,
      duration: '8 weeks',
      level: 'Beginner',
      externalLink: 'https://www.freecodecamp.org/learn/responsive-web-design/'
    },
    {
      id: 7,
      title: 'Full Stack JavaScript Development',
      category: 'Web Development',
      instructor: 'David Kim',
      rating: 4.8,
      students: 2765,
      image: '/assets/fsjsd.jpg',
      price: 69.99,
      duration: '14 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
    },
    {
      id: 8,
      title: 'Neural Networks and Deep Learning',
      category: 'Deep Learning',
      instructor: 'Dr. Rachel Green',
      rating: 4.9,
      students: 1543,
      image: '/assets/dl.jpg',
      price: 74.99,
      duration: '12 weeks',
      level: 'Advanced',
      externalLink: 'https://www.deeplearning.ai/courses/neural-networks-deep-learning/'
    },
    {
      id: 9,
      title: 'Python for Beginners',
      category: 'Python',
      instructor: 'Thomas Clark',
      rating: 4.6,
      students: 4532,
      image: '/assets/py.jpg',
      price: 34.99,
      duration: '6 weeks',
      level: 'Beginner',
      externalLink: 'https://www.learnpython.org/'
    },
    {
      id: 10,
      title: 'Data Analysis with Python',
      category: 'Data Science',
      instructor: 'Lisa Wong',
      rating: 4.7,
      students: 2875,
      image: '/assets/data1.jpg',
      price: 49.99,
      duration: '8 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.kaggle.com/learn/python'
    },
    {
      id: 11,
      title: 'Modern React Development',
      category: 'Web Development',
      instructor: 'Chris Johnson',
      rating: 4.8,
      students: 2134,
      image: '/assets/react.jpg',
      price: 59.99,
      duration: '10 weeks',
      level: 'Intermediate',
      externalLink: 'https://react.dev/learn'
    },
    {
      id: 12,
      title: 'AI Ethics and Governance',
      category: 'AI',
      instructor: 'Dr. Sophia Martinez',
      rating: 4.6,
      students: 1234,
      image: '/assets/ai2.jpg',
      price: 54.99,
      duration: '6 weeks',
      level: 'Intermediate',
      externalLink: 'https://ethics.harvard.edu/ai-ethics-resources'
    }
  ];

  useEffect(() => {
    filterCourses();
  }, [activeCategory, searchQuery]);

  const filterCourses = () => {
    let filtered = courses;
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        course => 
          course.title.toLowerCase().includes(query) || 
          course.instructor.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredCourses(filtered);
  };

  // Function to handle course click and navigation
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  // Function to handle external link click
  const handleExternalLinkClick = (e, link) => {
    e.stopPropagation(); // Prevent triggering the card click
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover professional courses to enhance your skills and advance your career
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto flex items-center bg-white rounded-full overflow-hidden px-4 shadow-lg">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for courses, instructors, or topics..."
              className="w-full py-3 px-4 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Section */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all 
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
>>>>>>> 50706920c806dcd1dcf4150fd1ad9e66b387add4
              >
                {category}
              </button>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Filter options */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Filter size={18} className="mr-2 text-gray-500" />
            <span className="font-medium">Filters:</span>
          </div>
          <select className="bg-gray-100 rounded-md px-3 py-2 text-gray-700 focus:outline-none">
            <option>Price: All</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>Over $100</option>
          </select>
          <select className="bg-gray-100 rounded-md px-3 py-2 text-gray-700 focus:outline-none">
            <option>Level: All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="bg-gray-100 rounded-md px-3 py-2 text-gray-700 focus:outline-none">
            <option>Duration: All</option>
            <option>Under 6 weeks</option>
            <option>6-10 weeks</option>
            <option>Over 10 weeks</option>
          </select>
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Apply Filters
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  {course.isNew && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white font-medium text-sm">{course.level}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{course.category}</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="font-bold text-gray-800">${course.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-2xl text-gray-500">No courses found matching your criteria.</p>
              <button 
                className="mt-4 text-blue-600 hover:text-blue-800"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to advance your skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students who are already learning with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors duration-300">
              Browse All Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-colors duration-300">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  {/* This would normally be an image */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Student Name {testimonial}</h4>
                  <p className="text-sm text-gray-500">Course: {["AI", "Python", "Data Science"][testimonial - 1]} Student</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                "This course exceeded my expectations. The material was well-structured, and the instructor was knowledgeable and engaging. I've already applied what I learned to my work projects."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Smart Class</h3>
              <p className="text-gray-400 mb-4">
                Empowering students with high-quality education in technology, data science, and more.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                {categories.filter(cat => cat !== 'All').map(category => (
                  <li key={category}>
                    <a href="#" className="hover:text-white transition-colors duration-300">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Get the latest updates on new courses and special offers.</p>
              <form className="mb-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 text-center">
            <p>© 2025 Smart Class Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
=======
        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
          </h2>
          <div className="text-gray-600">
            {activeCategory !== 'All' ? activeCategory : 'All Categories'}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer relative"
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {course.level}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-semibold mb-2">{course.category}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium text-gray-800">{course.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-gray-600 text-sm">{course.students.toLocaleString()} students</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-blue-600 font-bold">${course.price}</div>
                    <div className="text-gray-600 text-sm">{course.duration}</div>
                  </div>
                  
                  {/* External Link Button */}
                  <button
                    onClick={(e) => handleExternalLinkClick(e, course.externalLink)}
                    className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Course <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for</p>
          </div>
        )}
      </div>


      
      <footer class="bg-white pt-8 border-t border-blue-700 mt-2  text-white py-12 px-6">
  <div class="max-w-7xl mx-auto">
  
   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 text-center md:text-left">
    
      <div>
        <h4 class="text-lg font-bold mb-3">About Us</h4>
        <p class="text-blue-200 text-sm">
          We provide innovative classroom solutions to streamline attendance, lesson planning, and student performance tracking.
        </p>
      </div>
      
    
       
      <div>
  <h4 className="text-lg font-bold mb-3">Quick Links</h4>
  <ul className="space-y-2">
    <li><Link to="/course" className="text-blue-200 hover:text-white transition-colors duration-300">Courses</Link></li>
    <li><Link to="/resources" className="text-blue-200 hover:text-white transition-colors duration-300">Resources</Link></li>
    <li><Link to="/home" className="text-blue-200 hover:text-white transition-colors duration-300">Home</Link></li>
    <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-300">Contact</Link></li>
  </ul>
</div>
  
      <div>
        <h4 class="text-lg font-bold mb-3">Legal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
          <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a></li>
          <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
          <li><a href="#" class="text-blue-200 hover:text-white transition-colors duration-300">Accessibility</a></li>
        </ul>
      </div>
      
   
      <div>
        <h4 class="text-lg font-semibold mb-3">Connect With Us</h4>
        <div class="flex justify-center md:justify-start space-x-4 mb-4">
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white  flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white  flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M22.162 5.65593C21.3986 5.99373 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74539C15.6615 3.59589 14.7279 3.74932 13.9153 4.18338C13.1026 4.61743 12.4564 5.30967 12.0772 6.14978C11.6979 6.98989 11.6067 7.93177 11.818 8.82893C10.1551 8.74558 8.52832 8.31353 7.04328 7.56073C5.55823 6.80793 4.24812 5.75103 3.19799 4.45893C2.82628 5.0976 2.63095 5.82629 2.63199 6.56993C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84276 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.472 3.54384 12.2211C4.15532 12.9703 5.00647 13.4861 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.30897 14.5762 4.80901 15.3039 5.48994 15.824C6.17087 16.344 6.99699 16.6316 7.85199 16.6499C6.17801 17.9779 4.1861 18.6997 2.13199 18.6969C1.77799 18.6969 1.42399 18.6789 1.07199 18.6419C3.15976 20.0338 5.60943 20.7795 8.10199 20.7769C15.558 20.7769 19.616 14.8889 19.616 9.79193C19.616 9.60193 19.612 9.41193 19.602 9.22393C20.4201 8.62577 21.1224 7.87534 21.666 7.01393L22.162 5.65593Z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M16.5 0h-9C3.4 0 0 3.4 0 7.5v9C0 20.6 3.4 24 7.5 24h9c4.1 0 7.5-3.4 7.5-7.5v-9C24 3.4 20.6 0 16.5 0zm5 16.5c0 2.8-2.2 5-5 5h-9c-2.8 0-5-2.2-5-5v-9c0-2.8 2.2-5 5-5h9c2.8 0 5 2.2 5 5v9z"></path>
              <path d="M12 5.9c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z"></path>
              <circle cx="18.5" cy="5.5" r="1.5"></circle>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
        </div>
        <p class="text-blue-200 text-sm">
          Need help? <a href="#" class="underline hover:text-white">Contact support</a>
        </p>
      </div>
    </div>
    
    <div className="pt-8 border-t border-blue-700 mt-2 text-center sm:flex sm:justify-center sm:items-center">
  <p className="text-blue-200 text-sm">
    © 2025 Edusphere. All rights reserved.
  </p>
</div>

  </div>
</footer>

>>>>>>> 50706920c806dcd1dcf4150fd1ad9e66b387add4
    </div>
  );
};

<<<<<<< HEAD
export default CoursePage ;
=======
export default CoursesPage;
>>>>>>> 50706920c806dcd1dcf4150fd1ad9e66b387add4
