import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from "../components/ExperienceSection";


// Slider content
const slides = [
  {
    image: "/assets/back.jpg",
    title: "Unlock Your Potential,\nEmbrace Education.",
    subtitle: "Learn, Achieve, and Believe",
    description: "Transform your classroom experience with our innovative management system.",
  },
  {
    image: "/assets/tech.jpg",
    title: "Welcome to Smart\nClassroom Management",
    subtitle: "Innovate, Collaborate, Succeed",
    description: "A Community Based Platform Designed For Modern Education",
  },
  {
    image: "/assets/close.jpg",
    title: "Empower Your\nTeaching Journey",
    subtitle: "Track, Analyze, Improve",
    description: "AI-powered tools for seamless classroom management",
  },
];

// Stats data
const stats = [
  { value: 500, label: 'PROJECTS', suffix: '+' },
  { value: 1000, label: 'STUDENTS TRAINED', suffix: '+' },
  { value: 20, label: 'DOMAIN EXPERTS', suffix: '+' },
  { value: 100, label: 'SATISFACTION', suffix: '%' }
];

const faqData = [
  {
    question: "How does the Smart Classroom track attendance?",
    answer: "Our system uses QR codes and AI-powered facial recognition to mark attendance automatically. Teachers can also manually verify attendance when needed."
  },
  {
    question: "How can teachers track student performance?",
    answer: "Teachers have access to a real-time dashboard that provides insights on student progress, grades, and engagement metrics."
  },
  {
    question: "What features are included in lesson planning?",
    answer: "Teachers can create interactive lesson plans, add multimedia content, and schedule assignments all in one place."
  },
  {
    question: "Is there a communication tool for students and teachers?",
    answer: "Yes, our platform includes built-in messaging and announcement features to facilitate communication between students and teachers."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsStatsVisible(true);
    
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center text-white"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl mb-12 text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.a
                  href="#"
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold 
                             transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md"
                >
                  Try Demo
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-blue-500" : "bg-black-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsVisible ? 1 : 0, y: isStatsVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif text-gray-800 flex items-center gap-2">
                We Love What We Do
                <span className="text-purple-600 text-2xl">✧</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
              At Edusphere, we are building a cutting-edge smart classroom platform designed to 
              meet the evolving needs of students and educators across all engineering disciplines.
               With a team of industry experts in educational technology, we are dedicated to
                transforming traditional learning spaces into interactive, tech-driven environments that 
                enhance engagement, collaboration, and academic success.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg">
                LEARN MORE
              </button>
            </motion.div>
          </div>

          {/* Right Stats */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-3xl bg-purple-900 p-8">
            {/* Background Design Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white rounded-lg transform rotate-45" />
              <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: isStatsVisible ? 1 : 0, scale: isStatsVisible ? 1 : 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ number: 0 }}
                    animate={{ number: isStatsVisible ? stat.value : 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {Math.round(stat.value)}{stat.suffix}
                  </motion.div>
                  <div className="text-sm text-purple-200 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


   

   {/* About Section */}
   <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">About Our Platform</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our smart classroom management software is designed to enhance the teaching experience by automating tasks
          such as attendance tracking, lesson planning, and student engagement analytics.
        </p>
      </section>

      {/* Add the Experience Section here */}
      <ExperienceSection />
      
    
{/* Applications Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-2">SMART CLASSROOM APPLICATIONS</h2>
      <div className="w-20 h-1 bg-red-500 mx-auto mt-4 mb-8"></div>
      <h3 className="text-2xl font-medium text-gray-700">Learn smarter, not harder—transform your education with cutting-edge technology.</h3>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Row 1 */}
      <motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/colloge.jpg" alt="Engineering Colleges" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">Engineering Colleges</h3>
    </div>
  </div>
</motion.div>

<motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/medical-college.jpg" alt="Medical Colleges" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">Medical Colleges</h3>
    </div>
  </div>
</motion.div>

<motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/universities.jpg" alt="Universities" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">Universities</h3>
    </div>
  </div>
</motion.div>

<motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/corporates.jpg" alt="Corporates" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">Corporates</h3>
    </div>
  </div>
</motion.div>

<motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/k12-education.jpg" alt="K12 Education" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">K12 Education</h3>
    </div>
  </div>
</motion.div>

<motion.div 
  className="relative overflow-hidden rounded-lg shadow-lg group"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <div className="h-64 bg-cover bg-center">
    <img src="/assets/training-institute.jpg" alt="Training Institute" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-semibold">Training Institute</h3>
    </div>
  </div>
</motion.div>
    </div>
  </div>
</section>

 {/* FAQ Section */}
 <div className="col-span-1 md:col-span-3 p-6">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 shadow-md p-4 bg-white rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <button className="text-xl font-bold">{openIndex === index ? "−" : "+"}</button>
            </div>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
        </div>

    {/* Footer Section */}
<footer className="bg-black text-white py-12 px-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
    {/* About Us */}
    <div>
      <h4 className="text-xl font-semibold mb-4">About Us</h4>
      <p className="text-sm text-gray-400 leading-relaxed">
        We provide innovative classroom solutions to streamline attendance, lesson planning, and student
        performance tracking.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <ul className="text-sm space-y-3">
        <li>
          <a href="/dashboard" className="text-gray-400 hover:text-white transition duration-300">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/classes" className="text-gray-400 hover:text-white transition duration-300">
            Classes
          </a>
        </li>
        <li>
          <a href="/home" className="text-gray-400 hover:text-white transition duration-300">
            Home
          </a>
        </li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
      <p className="text-sm text-gray-400">📧 support@smartclassroom.com</p>
      <p className="text-sm text-gray-400">📞 +1 123 456 7890</p>
    </div>

    {/* Follow Us */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
      <div className="flex justify-center md:justify-start space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/facebook.png" alt="Facebook" className="w-7 h-7 opacity-80 hover:opacity-100 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.png" alt="Twitter" className="w-7 h-7 opacity-80 hover:opacity-100 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.png" alt="Instagram" className="w-7 h-7 opacity-80 hover:opacity-100 transition duration-300" />
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-12 text-center justify-center text-gray-500 text-sm border-t border-gray-700 pt-6">
    <p>&copy; 2025 Smart Classroom. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
}