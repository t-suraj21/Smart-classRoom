import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Link } from "react-router-dom";

const ResourcePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const resources = {
    Ebooks: [
      { 
        title: 'The Art of Classroom Management', 
        author: 'Dr. Sarah Johnson', 
        link: 'https://example.com/ebooks/classroom-management',
        image:"/assets/ebook1.jpg",
        description: 'A comprehensive guide to managing modern classrooms effectively.'
      },
      { 
        title: 'Digital Tools for Modern Educators', 
        author: 'Prof. Michael Chen', 
        link: 'https://example.com/ebooks/digital-tools', 
        image: "/assets/ebooks2.jpg",
        description: 'Explore essential digital tools that can transform your teaching experience.'
      },
      { 
        title: 'Student Engagement Strategies', 
        author: 'Emily Rodriguez, Ed.D.', 
        link: 'https://example.com/ebooks/engagement', 
        image: "/assets/ebooks3.jpg",
        description: 'Learn proven techniques to boost student engagement and participation.'
      },
    ],
    Articles: [
      { 
        title: '10 Proven Techniques for Behavior Management', 
        source: 'Education Today', 
        link: 'https://example.com/articles/behavior-management', 
        image: "/assets/article2.jpg",
        description: 'Research-backed approaches to classroom behavior management.'
      },
      { 
        title: 'Using Technology to Save Time on Grading', 
        source: 'Tech for Teachers', 
        link: 'https://example.com/articles/grading-tech', 
        image: "/assets/article1.jpg",
        description: 'Time-saving grading solutions to help you focus more on teaching.'
      },
      { 
        title: 'Building Student Autonomy in Virtual Classrooms', 
        source: 'Digital Learning Journal', 
        link: 'https://example.com/articles/student-autonomy', 
        image: "/assets/article3.jpg",
        description: 'Methods to foster independent learning in online environments.'
      },
      { 
        title: 'How to Create Effective Lesson Plans for Diverse Learners', 
        source: 'Inclusive Teaching', 
        link: 'https://example.com/articles/diverse-lesson-plans', 
        image: "/assets/article4.jpg",
        description: 'Design inclusive lesson plans that address diverse learning styles.'
      },
    ],
    Tools: [
      { 
        title: 'ClassTrack', 
        description: 'Attendance and participation tracking', 
        link: 'https://classtrack.edu',
        image:"/assets/tools.jpg",
        tags: ['attendance', 'tracking', 'analytics']
      },
      { 
        title: 'GradeWise', 
        description: 'AI-powered grading assistant', 
        link: 'https://gradewise.io', 
        image:"/assets/tools1.jpg",
        tags: ['grading', 'AI', 'feedback']
      },
      { 
        title: 'LessonBuilder', 
        description: 'Interactive lesson planning tool', 
        link: 'https://lessonbuilder.app',
        image:"/assets/tools2.jpg",
        tags: ['planning', 'curriculum', 'interactive']
      },
      { 
        title: 'ClassFlow', 
        description: 'Real-time classroom collaboration', 
        link: 'https://classflow.com',
        image:"/assets/tools3.jpg",
        tags: ['collaboration', 'real-time', 'interaction']
      },
      { 
        title: 'EduMetrics', 
        description: 'Student progress analytics dashboard', 
        link: 'https://edumetrics.io',
        image: "/assets/py.jpg",
        tags: ['analytics', 'metrics', 'progress']
      },
    ],
    Videos: [
      { 
        title: 'Classroom Management for the Digital Age', 
        duration: '32:15', 
        creator: 'Teaching Excellence', 
        link: 'https://example.com/videos/digital-classroom', 
        image:"/assets/video.jpg",
        description: 'Expert strategies for managing digital classroom environments.'
      },
      { 
        title: 'Setting Up Virtual Breakout Rooms - Tutorial', 
        duration: '14:47', 
        creator: 'EdTech Tips', 
        link: 'https://example.com/videos/breakout-rooms', 
        
        image:"/assets/video1.jpg",
        description: 'Step-by-step guide to creating effective virtual breakout sessions.'
      },
      { 
        title: 'Student Engagement Techniques that Work', 
        duration: '45:33', 
        creator: 'Educator Insights', 
        link: 'https://example.com/videos/engagement', 
       
        image:"/assets/video2.jpg",
        description: 'Practical techniques to boost student participation and interest.'
      },
    ],
    Courses: [
      { 
        title: 'Mastering Classroom Management', 
        provider: 'Teacher Academy', 
        duration: '6 weeks', 
        link: 'https://example.com/courses/master-management', 
        
        image:"/assets/video3.jpg",
        description: 'Comprehensive course on effective classroom management strategies.'
      },
      { 
        title: 'Digital Assessment Strategies', 
        provider: 'EdTech Institute', 
        duration: '4 weeks', 
        link: 'https://example.com/courses/assessment', 

        image:"/assets/video4.jpg",
        description: 'Learn to create and implement effective digital assessments.'
      },
      { 
        title: 'Creating an Inclusive Classroom', 
        provider: 'Diversity in Education', 
        duration: '8 weeks', 
        link: 'https://example.com/courses/inclusive', 

        image:"/assets/video2.jpg",
        description: 'Build an inclusive learning environment for all students.'
      },
    ],
  };

  const categories = ['All', ...Object.keys(resources)];

  // Search and filter functionality
  useEffect(() => {
    let results = [];
    
    if (activeCategory === 'All') {
      // Search across all categories when 'All' is selected
      Object.entries(resources).forEach(([category, items]) => {
        const matchingItems = items.filter(item => 
          (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.source && item.source.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.provider && item.provider.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.creator && item.creator.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
        );
        
        if (matchingItems.length > 0) {
          results.push({ category, items: matchingItems });
        }
      });
    } else {
      // Search only within the selected category
      const matchingItems = resources[activeCategory].filter(item => 
        (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.source && item.source.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.provider && item.provider.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.creator && item.creator.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      
      if (matchingItems.length > 0) {
        results.push({ category: activeCategory, items: matchingItems });
      }
    }
    
    setFilteredItems(results);
  }, [searchQuery, activeCategory, resources]);

  // Handle searching
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Determine what to display based on search results
  const displayItems = searchQuery.length > 0 
    ? filteredItems
    : (activeCategory === 'All'
        ? Object.entries(resources).map(([category, items]) => ({ category, items }))
        : [{ category: activeCategory, items: resources[activeCategory] }]);

  return (
    <div className="resource-page">
      <header className="header">
        <div className="banner">
          <div className="banner-overlay">
            <h1>Edusphere Resources</h1>
            <p>Curated resources to help you excel in classroom management and teaching</p>
          </div>
        </div>
      </header>

      <div className="search-container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search" onClick={clearSearch}>×</button>
          )}
          <button className="search-button">
            <span className="search-icon">🔍</span>
          </button>
        </div>
      </div>

      <div className="category-nav">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="resources-container">
        {displayItems.length > 0 ? (
          displayItems.map(({ category, items }) => (
            <div key={category} className="category-section">
              {(activeCategory === 'All' || searchQuery) && (
                <h2 className="category-title">{category}</h2>
              )}
              <div className="resource-grid">
                {items.map((resource, index) => (
                  <a 
                    href={resource.link} 
                    key={index} 
                    className="resource-card" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {resource.image && (
                      <div className="resource-image">
                        <img src={resource.image} alt={resource.title} />
                      </div>
                    )}
                    <div className="resource-content">
                      <div className="resource-icon">{resource.icon}</div>
                      <h3 className="resource-title">{resource.title}</h3>
                      {resource.author && <p className="resource-meta">By {resource.author}</p>}
                      {resource.source && <p className="resource-meta">From {resource.source}</p>}
                      {resource.description && <p className="resource-description">{resource.description}</p>}
                      {resource.duration && <p className="resource-meta">{resource.duration}</p>}
                      {resource.creator && <p className="resource-meta">{resource.creator}</p>}
                      {resource.provider && <p className="resource-meta">{resource.provider} • {resource.duration}</p>}
                      {resource.tags && (
                        <div className="resource-tags">
                          {resource.tags.map((tag, i) => (
                            <span key={i} className="resource-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                      <span className="view-resource">View Resource →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No resources found matching "{searchQuery}"</p>
            <button className="reset-search" onClick={clearSearch}>Clear Search</button>
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
    </div>
  );
};



// Inject the CSS directly into the document
const injectCss = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* ResourcePage Styles */
    .resource-page {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      color: #333;
    }

    .header {
      margin-bottom: 2rem;
      overflow: hidden;
    }

    .banner {
      position: relative;
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      padding: 2rem;
    }

    .banner-overlay h1 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .banner-overlay p {
      font-size: 1.2rem;
      color: white;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .search-container {
      margin-bottom: 2rem;
      padding: 0 1rem;
    }

    .search-bar {
      position: relative;
      display: flex;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }

    .search-input {
      flex: 1;
      padding: 1rem 1rem 1rem 1.5rem;
      font-size: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 30px;
      outline: none;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    .search-button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 1.5rem;
      background: #2563eb;
      border: none;
      border-radius: 0 30px 30px 0;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .search-button:hover {
      background: #1d4ed8;
    }

    .search-icon {
      font-size: 1.2rem;
    }

    .clear-search {
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #64748b;
      cursor: pointer;
      padding: 0.5rem;
    }

    .category-nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }

    .category-btn {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 30px;
      padding: 0.5rem 1.25rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #64748b;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .category-btn:hover {
      background-color: #f1f5f9;
      color: #1e40af;
    }

    .category-btn.active {
      background-color: #2563eb;
      color: white;
      border-color: #2563eb;
    }

    .resources-container {
      padding: 0 1rem;
    }

    .category-title {
      font-size: 1.8rem;
      color: #0f172a;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e2e8f0;
    }

    .resource-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .resource-card {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
      height: 100%;
    }

    .resource-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      border-color: #cbd5e1;
    }

    .resource-image {
      height: 180px;
      overflow: hidden;
    }

    .resource-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .resource-card:hover .resource-image img {
      transform: scale(1.05);
    }

    .resource-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .resource-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .resource-title {
      font-size: 1.2rem;
      color: #1e40af;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    .resource-meta {
      font-size: 0.9rem;
      color: #64748b;
      margin-bottom: 0.5rem;
    }

    .resource-description {
      font-size: 0.95rem;
      color: #475569;
      margin-bottom: 1rem;
      flex: 1;
    }

    .resource-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    .resource-tag {
      background-color: #f1f5f9;
      border-radius: 30px;
      padding: 0.25rem 0.75rem;
      font-size: 0.8rem;
      color: #64748b;
    }

    .view-resource {
      display: inline-block;
      margin-top: auto;
      padding-top: 0.75rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #2563eb;
    }

    .no-results {
      text-align: center;
      padding: 3rem 1rem;
    }

    .no-results p {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 1rem;
    }

    .reset-search {
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 30px;
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .reset-search:hover {
      background-color: #1d4ed8;
    }



  


    .contact-btn {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background-color: #2563eb;
      color: white;
      border-radius: 30px;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .contact-btn:hover {
      background-color: #1d4ed8;
    }


    .category-section {
      margin-bottom: 2rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .banner {
        height: 250px;
      }
      
      .banner-overlay h1 {
        font-size: 2rem;
      }
      
      .resource-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }

    @media (max-width: 640px) {
      .banner {
        height: 200px;
      }
      
      .banner-overlay h1 {
        font-size: 1.75rem;
      }
      
      .banner-overlay p {
        font-size: 1rem;
      }
      
      .search-input {
        padding: 0.75rem 1rem;
      }
      
      .category-btn {
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
      }
      
      .resource-grid {
        grid-template-columns: 1fr;
      }
      
      .category-title {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .banner {
        height: 180px;
      }
      
      .banner-overlay h1 {
        font-size: 1.5rem;
      }
      
      
    }
  `;
  document.head.appendChild(style);
};

// Render the app
document.addEventListener('DOMContentLoaded', () => {
  injectCss();
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
});

export default ResourcePage;