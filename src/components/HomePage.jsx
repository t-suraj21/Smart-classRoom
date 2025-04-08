import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from './ExperienceSection';
import Chatbot from './Chatbot'; // Import the Chatbot component
import { Link } from "react-router-dom";


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

  const cards = [
    { title: "Engineering Colleges", image: "/assets/engicoll.jpg" },
    { title: "Medical Colleges", image: "/assets/medical.jpg" },
    { title: "Universities", image: "/assets/uni.jpg" },
    { title: "Corporates", image: "/assets/cop.jpg" },
    { title: "K12 Education", image: "/assets/sch.jpg" },
    { title: "Training Institute", image: "/assets/inst.jpg" }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
    <div className=" w-full flex flex-col min-h-screen">
    {/* Hero Section with Slider */}
    <section className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
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
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.p
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {slides[currentSlide].description}
                </motion.p>
              <motion.div
  className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full 
           text-base sm:text-lg font-semibold transition-all duration-300 
           hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md"
>
  <Link to="/auth">
    Try Demo
  </Link>
</motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
     
    </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
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


      {/* Add the Experience Section here */}
      <ExperienceSection />
      
   {/* Add the application Section here */}
<section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
  {/* Animated Header */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 sm:mb-16 lg:mb-20"
  >
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
      SMART CLASSROOM APPLICATIONS
    </h2>
    <motion.div
      className="w-24 h-1 bg-red-500 mx-auto"
      initial={{ width: 0 }}
      animate={{ width: "6rem" }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </motion.div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Animated Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-xl group transform transition-all duration-300 hover:shadow-2xl"
          variants={itemVariants}
        >
          <div className="aspect-[4/3] relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
            {/* Title Container */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white-900 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {card.title}
              </h3>
              <div className="w-0 group-hover:w-16 h-0.5 bg-red-500 mt-2 transition-all duration-300" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
   

 {/* FAQ Section */}
 <div className=" w-full col-span-1 md:col-span-3 p-6">
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

        
   {/* About Section */}
   <section className=" w- full py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">About Our Platform</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our smart classroom management software is designed to enhance the teaching experience by automating tasks
          such as attendance tracking, lesson planning, and student engagement analytics.
        </p>
      </section>

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


  {/* Include the Chatbot component */}
  <Chatbot />

    </div>
  );
}

