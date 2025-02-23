"use client"

import { useState, useEffect } from "react"
import { Search, BookOpen, PenToolIcon as Tool, Video, Code, FlaskRoundIcon as Flask } from "lucide-react"
const resources = [
  {
    id: 1,
    title: "Beginner's Guide to React",
    category: "Articles",
    description: "A comprehensive guide to get started with React.",
    link: "https://reactjs.org/docs/getting-started.html",
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ResourceHub</h3>
              <p className="text-gray-400">Empowering developers with curated resources.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2025 ResourceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}