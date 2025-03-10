import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';


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
        image: "/assets/tools.jpg",
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
            <h1>Resources</h1>
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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Smart Class Management</h3>
            <p>Helping educators excel through curated resources and tools.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {categories.map(category => (
                <li key={category}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveCategory(category); }}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Looking for something specific?</p>
            <a href="#contact" className="contact-btn">Get in Touch</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Smart Class Management Resources. All rights reserved.</p>
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

    .footer {
      margin-top: 3rem;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 2rem 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section h3 {
      font-size: 1.2rem;
      color: #0f172a;
      margin-bottom: 1rem;
    }

    .footer-section p {
      font-size: 0.95rem;
      color: #64748b;
      margin-bottom: 1rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: #64748b;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-section ul li a:hover {
      color: #2563eb;
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

    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid #e2e8f0;
    }

    .footer-bottom p {
      font-size: 0.9rem;
      color: #64748b;
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
      
      .footer-content {
        grid-template-columns: 1fr;
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