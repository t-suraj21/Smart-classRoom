import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ResourcePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  //  resource data structure
  const resources = {
    Ebooks :[
      { 
        title: 'Enhancing the Art & Science of Teaching With Technology', 
        author: 'Sonny Magana & Robert J. Marzano', 
        link: 'https://www.amazon.com/Enhancing-Teaching-Technology-Classroom-Strategies-ebook/dp/B00H8HKDW8',
        image: "/assets/ebook1.jpg",
        description: 'Over 100 strategies for integrating technology into classroom practices effectively.'
      },
      { 
        title: 'Effective Classroom Management: The Essentials', 
        author: 'Tracey Garrett', 
        link: 'https://students.aiu.edu/submissions/profiles/resources/onlineBook/P5e2H3_Effective%20Classroom%20Management2014.pdf',
        image: "/assets/ebooks2.jpg",
        description: 'Practical strategies to engage learners and build supportive student relationships.'
      },
      { 
        title: 'Handbook of Research on Student Engagement', 
        author: 'Sandra L. Christenson, Amy L. Reschly & Cathy Wylie', 
        link: 'https://www.researchgate.net/publication/278666258_Handbook_of_Research_on_Student_Engagement',
        image: "/assets/ebooks3.jpg",
        description: 'Comprehensive insights into fostering student engagement in educational settings.'
      },
      { 
        title: 'The Inclusive Classroom: Strategies for Effective Differentiated Instruction', 
        author: 'Margo A. Mastropieri & Thomas E. Scruggs', 
        link: 'https://dokumen.pub/the-inclusive-classroom-strategies-for-effective-differentiated-instruction-0137848943-9780137848942.html',
        image: "/assets/ebook4.jpg",
        description: 'Practical strategies to meet diverse learning needs in inclusive classrooms.'
      },
      { 
        title: 'Artificial Intelligence and the Future of Teaching and Learning', 
        author: 'U.S. Department of Education', 
        link: 'https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf',
        image: "/assets/ebook5.jpg",
        description: 'Insights into leveraging AI for enhancing teaching and learning outcomes.'
      },
      { 
        title: 'School Culture Rewired: Toward a More Positive and Productive School', 
        author: 'Steve Gruenert & Todd Whitaker', 
        link: 'https://files.ascd.org/pdfs/publications/books/School-Culture-Rewired-2ed-sample-chapters.pdf',
        image: "/assets/ebook6.jpg",
        description: 'Strategies for reshaping school culture for better productivity and positivity.'
      },
    ],
    Articles: [
      { 
        title: '10 Effective ABA Behavior Management Strategies', 
        source: 'Ori Learning', 
        link: 'https://orilearning.com/aba-behavior-management-strategies/', 
        image: '/assets/article2.jpg',
        description: 'Research-backed approaches to classroom behavior management.'
      },
      { 
        title: 'Here\'s How Teachers Are Using AI to Save Time', 
        source: 'Education Week', 
        link: 'https://www.edweek.org/technology/heres-how-teachers-are-using-ai-to-save-time/2025/02', 
        image: '/assets/article1.jpg',
        description: 'Time-saving grading solutions to help you focus more on teaching.'
      },
      { 
        title: 'Autonomous Learning and the Use of Digital Technologies in Online English Classrooms', 
        source: 'Contemporary Educational Technology', 
        link: 'https://www.cedtech.net/download/autonomous-learning-and-the-use-of-digital-technologies-in-online-english-classrooms-in-higher-13094.pdf', 
        image: '/assets/article3.jpg',
        description: 'Methods to foster independent learning in online environments.'
      },
      { 
        title: 'Inclusive Lessons for Diverse Classrooms', 
        source: 'Edutopia', 
        link: 'https://www.edutopia.org/article/inclusive-lessons-diverse-classrooms/', 
        image: '/assets/article4.jpg',
        description: 'Design inclusive lesson plans that address diverse learning styles.'
      },
      { 
        title: 'The Neuroscience of Active Learning and Direct Instruction', 
        source: 'Neuroscience & Biobehavioral Reviews', 
        link: 'https://www.sciencedirect.com/science/article/pii/S0149763424002069', 
        image: '/assets/article5.jpg',
        description: 'How brain science can inform more effective teaching practices.'
      },
      { 
        title: '27 Easy Formative Assessment Strategies for Gathering Evidence of Student Learning', 
        source: 'NWEA', 
        link: 'https://www.nwea.org/blog/2024/27-easy-formative-assessment-strategies-for-gathering-evidence-of-student-learning/', 
        image: '/assets/article6.jpg',
        description: 'Real-world techniques to gather meaningful feedback on student learning.'
      },
      { 
        title: 'What is Project Based Learning?', 
        source: 'PBLWorks', 
        link: 'https://www.pblworks.org/what-is-pbl', 
        image: '/assets/article7.jpg',
        description: 'Step-by-step guide to implementing effective project-based learning in any subject.'
      },
      { 
        title: 'The Path to Social-Emotional Learning With Virtual Learning', 
        source: 'Class', 
        link: 'https://www.class.com/blog/building-relationships-in-online-settings-path-to-social-emotional-learning/', 
        image: '/assets/article8.jpg',
        description: 'Integrating SEL competencies into virtual and hybrid learning environments.'
      },
    
    ],
     Tools : [
      { 
        title: 'ClassTrack', 
        description: 'Attendance and participation tracking', 
        link: 'https://www.recsolutions.com/classtrack',
        image: "/assets/tools.jpg",
        tags: ['attendance', 'tracking', 'analytics']
      },
      { 
        title: 'GradeWise', 
        description: 'AI-powered grading assistant', 
        link: 'https://gradewise.io', 
        image: "/assets/tools1.jpg",
        tags: ['grading', 'AI', 'feedback']
      },
      { 
        title: 'LessonBuilder', 
        description: 'Interactive lesson planning tool', 
        link: 'https://lessonbuilder.app',
        image: "/assets/tools2.jpg",
        tags: ['planning', 'curriculum', 'interactive']
      },
      { 
        title: 'ClassFlow', 
        description: 'Real-time classroom collaboration', 
        link: 'https://classflow.tech',
        image: "/assets/tools3.jpg",
        tags: ['collaboration', 'real-time', 'interaction']
      },
      { 
        title: 'EduMetrics', 
        description: 'Student progress analytics dashboard', 
        link: 'https://edumetrics.io',
        image: "/assets/t5.jpg",
        tags: ['analytics', 'metrics', 'progress']
      },
      { 
        title: 'QuizGenius', 
        description: 'AI-powered quiz and assessment generator', 
        link: 'https://quizgecko.com/',
        image: "/assets/tools4.jpg",
        tags: ['assessment', 'quiz', 'test creation']
      },
      { 
        title: 'ClassroomCast', 
        description: 'Screen sharing and recording platform for educators', 
        link: 'https://www.screencastify.com/education/teachers',
        image: "/assets/tools5.jpg",
        tags: ['presentation', 'recording', 'multimedia']
      },
      { 
        title: 'FeedbackLoop', 
        description: 'Real-time student response and engagement system', 
        link: 'https://www.formative.com/feature/real-time-feedback',
        image: "/assets/tools6.jpg",
        tags: ['feedback', 'polling', 'student engagement']
      },
      { 
        title: 'PlannerPro', 
        description: 'Comprehensive curriculum and lesson planning suite', 
        link: 'https://planbook.com/',
        image: "/assets/tools7.jpg",
        tags: ['planning', 'curriculum', 'organization']
      },
    ],
    
    Videos : [
      { 
        title: 'Classroom Management for the Digital Age', 
        duration: '32:15', 
        creator: 'Teaching Excellence', 
        link: 'https://www.youtube.com/watch?v=yddBAhcYFpY', 
        image: "/assets/video.jpg",
        description: 'Expert strategies for managing digital classroom environments.'
      },
      { 
        title: 'Setting Up Virtual Breakout Rooms - Tutorial', 
        duration: '14:47', 
        creator: 'EdTech Tips', 
        link: 'https://www.youtube.com/watch?v=VkK5WEf6xgk', 
        image: "/assets/video1.jpg",
        description: 'Step-by-step guide to creating effective virtual breakout sessions.'
      },
      { 
        title: 'Student Engagement Techniques that Work', 
        duration: '45:33', 
        creator: 'Educator Insights', 
        link: 'https://www.youtube.com/watch?v=e8CU11tjuLQ', 
        image: "/assets/video2.jpg",
        description: 'Practical techniques to boost student participation and interest.'
      },
      { 
        title: 'The Science of Learning: Cognitive Load Theory Explained', 
        duration: '28:52', 
        creator: 'Education Brain Trust', 
        link: 'https://www.youtube.com/watch?v=e8CU11tjuLQ', 
        image: "/assets/video3.jpg",
        description: 'Understanding how working memory affects student learning and retention.'
      },
      { 
        title: 'Formative Assessment in 5 Minutes a Day', 
        duration: '23:18', 
        creator: 'Assessment Matters', 
        link: 'https://www.youtube.com/watch?v=OLNTFEhcLAk', 
        image: "/assets/video4.jpg",
        description: 'Quick, effective techniques to check for understanding every day.'
      },
      { 
        title: 'Creating Inclusive Classrooms: Universal Design for Learning', 
        duration: '38:45', 
        creator: 'Inclusive Education Channel', 
        link: 'https://www.youtube.com/watch?v=0WJG7lZA27o', 
        image: "/assets/video5.jpg",
        description: 'Implementing UDL principles to create accessible learning for all students.'
      },
      { 
        title: 'Effective Parent-Teacher Communication Strategies', 
        duration: '25:10', 
        creator: 'Community Education Partners', 
        link: 'https://www.youtube.com/watch?v=W3qtYv7-s5w', 
        image: "/assets/video6.jpg",
        description: 'Building strong relationships with families to support student success.'
      },
    ],
    
     Courses:[
      { 
        title: 'Mastering Classroom Management', 
        provider: 'Teacher Academy', 
        duration: '6 weeks', 
        link: 'https://www.wholechildacademy.edu/courses/sel-integration', 
        image: "/assets/c1.jpg",
        description: 'Comprehensive course on effective classroom management strategies.'
      },
      { 
        title: 'Digital Assessment Strategies', 
        provider: 'EdTech Institute', 
        duration: '4 weeks', 
        link: 'https://www.edtechinstitute.org/courses/digital-assessment-strategies', 
        image: "/assets/c2.jpg",
        description: 'Learn to create and implement effective digital assessments.'
      },
      { 
        title: 'Creating an Inclusive Classroom', 
        provider: 'Diversity in Education', 
        duration: '8 weeks', 
        link: 'https://www.projectbasedlearning.org/courses/pbl-design', 
        image: "/assets/c3.jpg",
        description: 'Build an inclusive learning environment for all students.'
      },
      { 
        title: 'Social-Emotional Learning Integration', 
        provider: 'Whole Child Academy', 
        duration: '6 weeks', 
        link: 'https://www.projectbasedlearning.org/courses/pbl-design', 
        image: "/assets/c4.jpg",
        description: 'Strategies for embedding SEL competencies across the curriculum.'
      },
      { 
        title: 'Project-Based Learning Design Workshop', 
        provider: 'Learning by Design Institute', 
        duration: '5 weeks', 
        link: 'https://projectbasedlearning.org/courses/pbl-design', 
        image: "/assets/c5.jpg",
        description: 'Learn to create, facilitate, and assess powerful project-based learning experiences.'
      },
      { 
        title: 'Advanced Differentiation Techniques', 
        provider: 'Personalized Learning Center', 
        duration: '7 weeks', 
        link: 'https://www.personalizededucation.org/courses/advanced-differentiation', 
        image: "/assets/c6.jpg",
        description: 'Take your differentiated instruction to the next level with advanced strategies.'
      },
      { 
        title: 'Educational Technology Integration', 
        provider: 'Future Classroom Lab', 
        duration: '6 weeks', 
        link: 'https://www.phxtraining.com/courses/future-classroom-lab-fcl/', 
        image: "/assets/c7.jpg",
        description: 'Learn to select and integrate the right technology tools for your teaching goals.'
      },
      { 
        title: 'Data-Driven Instruction', 
        provider: 'Assessment Analytics Academy', 
        duration: '4 weeks', 
        link: 'https://data4education.academy/courses/data-driven', 
        image: "/assets/c8.jpg",
        description: 'Using assessment data to inform instruction and improve student outcomes.'
      },
    ],
  };
  const categories = ['All', ...Object.keys(resources)];

  // Search and filter functionality - simplified
  useEffect(() => {
    let results = [];
    
    if (activeCategory === 'All') {
      Object.entries(resources).forEach(([category, items]) => {
        const matchingItems = items.filter(item => 
          Object.values(item).some(value => 
            typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
          ) || 
          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
        );
        
        if (matchingItems.length > 0) {
          results.push({ category, items: matchingItems });
        }
      });
    } else {
      const matchingItems = resources[activeCategory].filter(item => 
        Object.values(item).some(value => 
          typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
        ) || 
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      
      if (matchingItems.length > 0) {
        results.push({ category: activeCategory, items: matchingItems });
      }
    }
    
    setFilteredItems(results);
  }, [searchQuery, activeCategory]);

  // Handle resource click
  const handleResourceClick = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Determine what to display based on search results
  const displayItems = searchQuery.length > 0 
    ? filteredItems
    : (activeCategory === 'All'
        ? Object.entries(resources).map(([category, items]) => ({ category, items }))
        : [{ category: activeCategory, items: resources[activeCategory] }]);

  return (
    <div className="resource-page">
      {/* Improved Header Section */}
      <header className="header">
        <div className="banner bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="banner-overlay">
            <h1 className="main-heading text-white text-4xl md:text-5xl font-bold mb-4">
              <span className="heading-primary">Edusphere</span>{" "}
              <span className="heading-accent">Resources</span>
            </h1>
            <p className="banner-subtitle text-white text-lg md:text-xl mb-6">
              Empowering educators with premium resources for classroom excellence
            </p>
            
          </div>
        </div>
      </header>

      {/* Search and Category Filters */}
      <div className="search-container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
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

      {/* Resource Grid */}
      <div className="resources-container">
        {displayItems.length > 0 ? (
          displayItems.map(({ category, items }) => (
            <div key={category} className="category-section">
              {(activeCategory === 'All' || searchQuery) && (
                <h2 className="category-title">{category}</h2>
              )}
              <div className="resource-grid">
                {items.map((resource, index) => (
                  <div 
                    key={index} 
                    className="resource-card" 
                    onClick={(e) => handleResourceClick(e, resource.link)}
                  >
                    {resource.image && (
                      <div className="resource-image">
                        <img src={resource.image} alt={resource.title} />
                      </div>
                    )}
                    <div className="resource-content">
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
                      <button className="read-more-btn">Read More →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No resources found matching "{searchQuery}"</p>
            <button className="reset-search" onClick={() => setSearchQuery('')}>Clear Search</button>
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

// Inject CSS
const injectCss = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* Core ResourcePage Styles */
    .resource-page {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      color: #333;
    }

    .banner {
      position: relative;
      width: 100%;
      height: 280px;
      border-radius: 8px;
      margin-bottom: 2rem;
      overflow: hidden;
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
      text-align: center;
      padding: 2rem;
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
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
      height: 100%;
      cursor: pointer;
    }

    .resource-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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

    .resource-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
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

    .read-more-btn {
      display: inline-block;
      margin-top: auto;
      padding: 0.5rem 1rem;
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
    }

    .read-more-btn:hover {
      background-color: #1d4ed8;
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
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .banner {
        height: 240px;
      }
      
      .resource-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }

    @media (max-width: 640px) {
      .banner {
        height: 200px;
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
    }
  `;
  document.head.appendChild(style);
};

// Initialize the component
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', injectCss);
}

export default ResourcePage;