import React, { useState, useEffect } from "react";

const resources = [
  { id: 1, title: "Beginner's Guide", category: "Articles", description: "A simple guide to get started.", link: "https://developer.mozilla.org/en-US/", image: "/api/placeholder/400/200", readTime: "5 min read", author: "John Doe", date: "Feb 20, 2025" },
  { id: 2, title: "React Cheatsheet", category: "Tools", description: "Quick reference for React concepts.", link: "https://codepen.io/", image: "/api/placeholder/400/200", readTime: "3 min read", author: "Jane Smith", date: "Feb 18, 2025" },
  { id: 3, title: "Web Development eBook", category: "eBooks", description: "A free eBook on web dev basics.", link: "https://eloquentjavascript.net/", image: "/api/placeholder/400/200", readTime: "15 min read", author: "Mike Johnson", date: "Feb 15, 2025" },
  { id: 4, title: "CSS Tricks - Frontend Tips", category: "Articles", description: "Useful frontend development tips.", link: "https://css-tricks.com/", image: "/api/placeholder/400/200", readTime: "7 min read", author: "Sarah Wilson", date: "Feb 12, 2025" }
];

const categories = ["Articles", "eBooks", "Tools", "Videos", "Engineering", "Science"];

export default function ResourcePage() {
  const [selectedFilter, setSelectedFilter] = useState("Filter by type");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] = useState(resources);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const results = resources.filter(resource =>
      (selectedFilter === "Filter by type" || resource.category === selectedFilter) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredResources(results);
  }, [selectedFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-blue-50 p-8 transition-all duration-300">
      {/* Header with Search */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-serif mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300">
            Resourcing for your team sourcing
          </h1>
          
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full px-6 py-3 rounded-full border-2 focus:outline-none transition-all duration-300 
                ${isSearchFocused ? 'border-blue-500 shadow-lg' : 'border-gray-200 shadow'}`}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-yellow-400 rounded-lg p-6 relative overflow-hidden transform hover:scale-102 transition-all duration-300 hover:shadow-xl">
            <img 
              src="/api/placeholder/400/200" 
              alt="AI and Work" 
              className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity duration-300"
            />
            <h2 className="text-xl font-semibold mb-2">AI and the Future of Work: How Are Companies Actually Using AI in Q4?</h2>
            <p className="text-sm text-gray-700 mb-4">3 min read</p>
            <a href="#" className="text-black font-medium hover:underline transform hover:translate-x-2 inline-block transition-transform duration-300">
              Read article →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 relative overflow-hidden transform hover:scale-102 transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Inc. 5000</h3>
              <span className="text-4xl font-bold text-red-500 animate-pulse">№ 1092</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">SupportNinja ranks no. 1092 on the 2023 Inc. 5000</h2>
            <p className="text-sm text-gray-700 mb-4">2 min read</p>
            <a href="#" className="text-black font-medium hover:underline transform hover:translate-x-2 inline-block transition-transform duration-300">
              Read more →
            </a>
          </div>
        </div>

        {/* Browse Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-6">Browse all content</h2>
          
          {/* Filter Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border rounded-full bg-white hover:border-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <option>Filter by type</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="group bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <span className="text-sm text-blue-500 font-medium">{resource.category}</span>
                  <h3 className="text-lg font-medium mt-2 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
        </div>

        {/* No Results Message */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}