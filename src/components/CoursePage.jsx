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
    },
    // New Database Courses
    {
      id: 13,
      title: 'SQL Database Fundamentals',
      category: 'Database',
      instructor: 'Robert Anderson',
      rating: 4.7,
      students: 2543,
      image: '/assets/db4.jpg',
      price: 44.99,
      duration: '8 weeks',
      level: 'Beginner',
      externalLink: 'https://www.mysql.com/training/'
    },
    {
      id: 14,
      title: 'MongoDB for Modern Applications',
      category: 'Database',
      instructor: 'Jennifer Lee',
      rating: 4.8,
      students: 1876,
      image: '/assets/db3.jpg',
      price: 54.99,
      duration: '6 weeks',
      level: 'Intermediate',
      externalLink: 'https://university.mongodb.com/'
    },
    {
      id: 15,
      title: 'PostgreSQL Administration',
      category: 'Database',
      instructor: 'Dr. Miguel Sanchez',
      rating: 4.9,
      students: 1540,
      image: '/assets/db2.jpg',
      price: 69.99,
      duration: '10 weeks',
      level: 'Advanced',
      externalLink: 'https://www.postgresql.org/docs/online-resources/'
    },
    {
      id: 16,
      title: 'Database Design and Normalization',
      category: 'Database',
      instructor: 'Priya Patel',
      rating: 4.6,
      students: 1982,
      image: '/assets/db1.jpg',
      price: 49.99,
      duration: '6 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.udemy.com/course/database-design/'
    },
    // New Cloud Computing Courses
    {
      id: 17,
      title: 'AWS Certified Solutions Architect',
      category: 'Cloud Computing',
      instructor: 'Mark Thompson',
      rating: 4.9,
      students: 3862,
      image: '/assets/cp2.jpg',
      price: 79.99,
      duration: '12 weeks',
      level: 'Intermediate',
      externalLink: 'https://aws.amazon.com/training/'
    },
    {
      id: 18,
      title: 'Microsoft Azure Fundamentals',
      category: 'Cloud Computing',
      instructor: 'Samantha Wright',
      rating: 4.7,
      students: 2741,
      image: '/assets/cp3.jpg',
      price: 59.99,
      duration: '8 weeks',
      level: 'Beginner',
      externalLink: 'https://learn.microsoft.com/en-us/azure/'
    },
    {
      id: 19,
      title: 'Google Cloud Platform Engineering',
      category: 'Cloud Computing',
      instructor: 'Jason Patel',
      rating: 4.8,
      students: 2153,
      image: '/assets/cp4.jpg',
      price: 69.99,
      duration: '10 weeks',
      level: 'Intermediate',
      externalLink: 'https://cloud.google.com/training'
    },
    {
      id: 20,
      title: 'Cloud Security and Compliance',
      category: 'Cloud Computing',
      instructor: 'Dr. Lauren Turner',
      rating: 4.9,
      students: 1654,
      image: '/assets/cp5.jpg',
      price: 74.99,
      duration: '8 weeks',
      level: 'Advanced',
      externalLink: 'https://www.sans.org/cloud-security/'
    },
    {
      id: 21,
      title: 'DevOps for Cloud Environments',
      category: 'Cloud Computing',
      instructor: 'Daniel Martinez',
      rating: 4.8,
      students: 2385,
      image: '/assets/cp6.jpg',
      price: 69.99,
      duration: '10 weeks',
      level: 'Intermediate',
      externalLink: 'https://www.devopsschool.com/courses/'
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

              >
                {category}
              </button>
            ))}
          </div>
        </div>


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


      
   {/* footer  Section */}
   <footer class=" w-full bg-white pt-8 border-t border-blue-700 mt-2  text-white py-12 px-6">
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


    </div>
  );
};

export default CoursesPage;