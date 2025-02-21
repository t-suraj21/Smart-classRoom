import React, { useState } from "react";

const resources = [
  { id: 1, title: "Beginner's Guide", category: "Articles", description: "A simple guide to get started.", link: "https://developer.mozilla.org/en-US/" },
  { id: 2, title: "React Cheatsheet", category: "Tools", description: "Quick reference for React concepts.", link: "https://codepen.io/" },
  { id: 3, title: "Web Development eBook", category: "eBooks", description: "A free eBook on web dev basics.", link: "https://eloquentjavascript.net/" },
  { id: 4, title: "CSS Tricks - Frontend Tips", category: "Articles", description: "Useful frontend development tips.", link: "https://css-tricks.com/" },
  { id: 5, title: "HTML & CSS eBook", category: "eBooks", description: "Design and build websites.", link: "https://www.pdfdrive.com/html-css-design-and-build-websites-e33430804.html" },
  { id: 6, title: "Traversy Media - Web Dev Tutorials", category: "Videos", description: "Web development tutorials.", link: "https://www.youtube.com/c/TraversyMedia" },
  { id: 7, title: "MIT OpenCourseWare - Engineering", category: "Engineering", description: "Free engineering courses from MIT.", link: "https://ocw.mit.edu/courses/engineering/" },
  { id: 8, title: "NASA Technical Reports", category: "Science", description: "Access NASA's research and technical papers.", link: "https://ntrs.nasa.gov/" },
  { id: 9, title: "IEEE Xplore Digital Library", category: "Engineering", description: "Access scientific and engineering research papers.", link: "https://ieeexplore.ieee.org/" },
  { id: 10, title: "Khan Academy - Physics", category: "Science", description: "Free physics lessons for all levels.", link: "https://www.khanacademy.org/science/physics" },
  { id: 11, title: "Stack Overflow - Developer Community", category: "Community", description: "Join discussions and get coding help.", link: "https://stackoverflow.com/" },
  { id: 12, title: "Reddit - Engineering Communities", category: "Community", description: "Engage with engineering discussions.", link: "https://www.reddit.com/r/engineering/" },
  { id: 13, title: "Dev.to - Developer Articles", category: "Community", description: "Read and share software development articles.", link: "https://dev.to/" }
];

const categories = ["All", "Articles", "eBooks", "Tools", "Videos", "Community", "Engineering", "Science"];

export default function ResourcePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = selectedCategory === "All"
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 text-gray-900">
      {/* Header */}
      <header className="p-6 text-white flex justify-between items-center shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/b1.jpg')" }}>
        <h1 className="text-2xl font-extrabold">Resources</h1>
        <input type="text" placeholder="Search resources..." className="p-2 rounded text-black w-1/3 shadow-inner" />
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 text-white rounded-b-3xl shadow-xl bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/b1.jpg')" }}>
        <h2 className="text-4xl font-extrabold">Discover Helpful Resources</h2>
        <p className="mt-2 text-lg">Find guides, tools, and templates to help you succeed.</p>
      </section>

      {/* Categories */}
      <div className="flex justify-center space-x-4 p-6 bg-white shadow-md rounded-xl mt-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${selectedCategory === category ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resource Listings */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="font-bold text-xl">{resource.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
            <a href={resource.link} className="text-blue-600 font-semibold mt-3 inline-block">View Resource →</a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white mt-10 rounded-t-3xl shadow-lg">
        &copy; 2025 Your Website | Follow us on social media
      </footer>
    </div>
  );
}