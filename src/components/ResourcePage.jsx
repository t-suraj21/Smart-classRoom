"use client"

import { useState, useEffect } from "react"
import { Search, BookOpen, PenToolIcon as Tool, Video, Code, FlaskRoundIcon as Flask } from "lucide-react"
import { Link } from "react-router-dom";


const resources = [
  {
    id: 1,
    title: "Beginner's Guide to React",
    category: "Articles",
    description: "A comprehensive guide to get started with React.",
    link: "https://reactjs.org/docs/getting-started.html",
    image: "/assets/article1.jpg",
    readTime: "10 min read",
    author: "John Doe",
    date: "Feb 20, 2025",
  },
  {
    id: 2,
    title: "React Cheatsheet",
    category: "Tools",
    description: "Quick reference for React concepts and hooks.",
    link: "https://reactcheatsheet.com/",
    image: "/assets/tools.jpg",
    readTime: "5 min read",
    author: "Jane Smith",
    date: "Feb 18, 2025",
  },
  {
    id: 3,
    title: "Web Development eBook",
    category: "eBooks",
    description: "A comprehensive eBook on modern web development.",
    link: "https://eloquentjavascript.net/",
    image: "/assets/ebook1.jpg",
    readTime: "3 hour read",
    author: "Mike Johnson",
    date: "Feb 15, 2025",
  },
  {
    id: 4,
    title: "CSS Grid Mastery",
    category: "Articles",
    description: "Master CSS Grid layout with practical examples.",
    link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    image: "/assets/article2.jpg",
    readTime: "15 min read",
    author: "Sarah Wilson",
    date: "Feb 12, 2025",
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    category: "eBooks",
    description: "A classic book on JavaScript best practices.",
    link: "https://www.oreilly.com/library/view/javascript-the-good/9780596517748/",
    image: "/assets/ebooks2.jpg",
    readTime: "4 hour read",
    author: "Douglas Crockford",
    date: "Jan 30, 2025",
  },
  {
    id: 6,
    title: "VS Code Productivity Tips",
    category: "Videos",
    description: "Boost your coding speed with these VS Code tricks.",
    link: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks",
    image: "/assets/video1.jpg",
    readTime: "20 min watch",
    author: "Alex Chen",
    date: "Feb 5, 2025",
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    category: "Engineering",
    description: "Introduction to machine learning concepts.",
    link: "https://www.coursera.org/learn/machine-learning",
    image: "/assets/engi1.jpg",
    readTime: "1 hour read",
    author: "Dr. Emily Watson",
    date: "Feb 8, 2025",
  },
  {
    id: 8,
    title: "Quantum Computing Explained",
    category: "Science",
    description: "Simplified explanation of quantum computing principles.",
    link: "https://quantum.country/",
    image: "/assets/science1.jpg",
    readTime: "30 min read",
    author: "Prof. David Quantum",
    date: "Feb 1, 2025",
  },
]

const categories = ["All", "Articles", "eBooks", "Tools", "Videos", "Engineering", "Science"]

const categoryIcons = {
  All: <Search className="w-5 h-5" />,
  Articles: <BookOpen className="w-5 h-5" />,
  eBooks: <BookOpen className="w-5 h-5" />,
  Tools: <Tool className="w-5 h-5" />,
  Videos: <Video className="w-5 h-5" />,
  Engineering: <Code className="w-5 h-5" />,
  Science: <Flask className="w-5 h-5" />,
}

export default function ResourcePage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredResources, setFilteredResources] = useState(resources)

  useEffect(() => {
    const results = resources.filter(
      (resource) =>
        (selectedFilter === "All" || resource.category === selectedFilter) &&
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredResources(results)
  }, [selectedFilter, searchTerm])

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Resources</h1>
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">AI and the Future of Work</h3>
              <p className="mb-4">How are companies actually using AI in Q4 2025?</p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
                Read article →
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">SupportNinja ranks №1092 on Inc. 5000</h3>
              <p className="mb-4">Learn about our growth and success story.</p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
                Read more →
              </button>
            </div>
          </div>
        </section>

        {/* Browse Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block group">
            Browse all content
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </h2>

          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  selectedFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {categoryIcons[category]}
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-blue-500 font-medium">{resource.category}</span>
                  <h3 className="text-lg font-medium mt-2 mb-2 hover:text-blue-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.author}</span>
                    <span>{resource.readTime}</span>
                  </div>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No resources found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>


      
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
    © 2025 Smart Classroom. All rights reserved.
  </p>
</div>

  </div>
</footer>
    </div>
  )
}