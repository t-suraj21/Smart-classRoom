import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const courseCategories = [
  {
    category: "Consulting",
    title: "Market Analysis & Strategy Consulting",
    subtitle: "Men's casual apparel",
    logo: "/assets/bajaj-logo.png",
    bgColor: "#f0f4f8"
  },
  {
    category: "Venture Capital",
    title: "VC Deal Sourcing & Startup Analysis",
    subtitle: "VC arm of HP Inc.",
    logo: "/assets/hp-ventures-logo.png",
    bgColor: "#f0f4f8"
  },
  {
    category: "Data",
    title: "Consumer Behavior & Market Analysis",
    subtitle: "Analytics and insights",
    logo: "/assets/beats-logo.png",
    bgColor: "#f0f4f8"
  },
  {
    category: "Artificial Intelligence",
    title: "Machine Learning Applications",
    subtitle: "AI implementation strategy",
    logo: "/assets/ai-logo.png",
    bgColor: "#f0f4f8"
  },
  {
    category: "Digital Marketing",
    title: "Social Media & Content Strategy",
    subtitle: "Engagement optimization",
    logo: "/assets/digital-logo.png",
    bgColor: "#f0f4f8"
  }
];

const ExperienceSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < courseCategories.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Get professional experience that matters with Extern
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Test drive career paths with real projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Build your resume with skills you've applied</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Connect with professionals from startups to Fortune brands</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Develop soft skills through professional collaboration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Learn how to use Gen AI tools through real projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Gain real project experience to discuss at job interviews</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-xl p-6 mb-8"
            >
              <h3 className="mb-2">
                <span className="font-bold text-xl">Flexibly</span>
                <span className="text-blue-600 font-bold text-xl"> explore careers</span>
              </h3>
              <h3 className="text-xl font-bold mb-6">through real experience</h3>
              
              <div className="relative">
                <div 
                  ref={carouselRef}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="flex"
                    animate={{ x: -activeIndex * 100 + '%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {courseCategories.map((course, index) => (
                      <motion.div 
                        key={index}
                        className="min-w-full px-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="bg-white rounded-lg shadow-sm p-6 h-64">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-sm text-gray-600 mb-3 block">
                                {course.category}
                              </span>
                              <h4 className="text-lg font-semibold mb-2">
                                {course.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {course.subtitle}
                              </p>
                            </div>
                            <div className="w-16 h-16 flex items-center justify-center">
                              <img 
                                src={course.logo} 
                                alt={`${course.category} logo`} 
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Navigation arrows */}
                <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                  <button 
                    onClick={scrollPrev}
                    className={`w-10 h-10 rounded-full flex items-center justify-center pointer-events-auto transition-all
                              ${activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-gray-200'}`}
                    disabled={activeIndex === 0}
                    aria-label="Previous slide"
                  >
                    <ChevronLeftIcon size={20} />
                  </button>
                  <button 
                    onClick={scrollNext}
                    className={`w-10 h-10 rounded-full flex items-center justify-center pointer-events-auto transition-all
                              ${activeIndex === courseCategories.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-gray-200'}`}
                    disabled={activeIndex === courseCategories.length - 1}
                    aria-label="Next slide"
                  >
                    <ChevronRightIcon size={20} />
                  </button>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {courseCategories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Build Resume Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <h3 className="mb-4">
                <span className="font-bold text-xl">Build a </span>
                <span className="text-green-600 font-bold text-xl">resume</span>
                <span className="font-bold text-xl"> employers will notice</span>
              </h3>
              
              <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                <div className="mb-2">
                  <span className="font-semibold">Experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs">X</div>
                  <div>
                    <div className="font-medium">Extern</div>
                    <div className="text-sm text-gray-500">Blockchain Extern, Webacy</div>
                    <div className="text-xs text-gray-400">Mar 2024 - Apr 2024 · 2 mos</div>
                    <ul className="mt-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-xs mt-1 mr-1">•</span>
                        <span>Analyzed ethereum blockchain to identify suspicious transactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-xs mt-1 mr-1">•</span>
                        <span>Investigated suspicious blockchain activity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;