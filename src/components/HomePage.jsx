import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from './ExperienceSection';
import Chatbot from './Chatbot'; // Import the Chatbot component



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
    <div className="flex flex-col min-h-screen">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.a
                href="#"
                className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                         text-base sm:text-lg font-semibold transition-all duration-300 
                         hover:bg-blue-600 hover:text-white hover:scale-105 shadow-md"
              >
                Try Demo
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
     
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


      {/* Add the Experience Section here */}
      <ExperienceSection />
      
      {/* Add the application  Section here */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
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
          viewport={{ once: true, margin: "-100px" }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"/>
                
                {/* Title Container */}
               {/* Title Container */}
<motion.div 
  className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white-900 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
    {card.title}
  </h3>
  <div className="w-0 group-hover:w-16 h-0.5 bg-red-500 mt-2 transition-all duration-300"/>
</motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

        
   {/* About Section */}
   <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">About Our Platform</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our smart classroom management software is designed to enhance the teaching experience by automating tasks
          such as attendance tracking, lesson planning, and student engagement analytics.
        </p>
      </section>
      <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">About Us</h4>
          <p className="text-sm text-gray-400">
            We provide innovative classroom solutions to streamline attendance, lesson planning, and student performance tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Dashboard", "Courses", "Resources", "Home", "Contact"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {["facebook", "twitter", "instagram"].map((social, idx) => (
              <a
                key={idx}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition duration-300"
              >
                <img src={`/assets/${social}.png`} alt={social} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        © 2025 Smart Classroom. All rights reserved.
      </p>
    </footer>


  {/* Include the Chatbot component */}
  <Chatbot />

    </div>
  );
}

