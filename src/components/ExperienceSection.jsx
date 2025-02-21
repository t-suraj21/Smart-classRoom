import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const courseCategories = [
  {
    category: "Consulting",
    title: "Market Analysis & Strategy Consulting",
    subtitle: "Men's casual apparel",
    logo: "/assets/microsoft.png",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const resumeAutoplayTimeout = setTimeout(() => {
      setAutoplayEnabled(true);
    }, 5000);

    return () => clearTimeout(resumeAutoplayTimeout);
  }, [activeIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left max-w-3xl"
        >
          Get professional experience that matters with Extern
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-xl p-6 relative overflow-hidden h-full"
            onHoverStart={() => setAutoplayEnabled(false)}
            onHoverEnd={() => setAutoplayEnabled(true)}
          >
            <h3 className="mb-2 relative z-10">
              <span className="font-bold text-xl">Flexibly</span>
              <span className="text-blue-600 font-bold text-xl"> explore careers</span>
            </h3>
            <h3 className="text-xl font-bold mb-6 relative z-10">through real experience</h3>
            <motion.div 
              animate={{ 
                x: [0, 10, 0], 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -ml-16 -mt-16 opacity-50"
            ></motion.div>
            <motion.div 
              animate={{ 
                x: [0, -10, 0], 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 7,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mb-12 opacity-50"
            ></motion.div>
            <div className="relative z-10">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                autoplay={autoplayEnabled ? {
                  delay: 3000,
                  disableOnInteraction: false,
                } : false}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full"
              >
                {courseCategories.map((course, index) => (
                  <SwiperSlide key={index}>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-lg shadow-sm p-6 h-64"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <motion.span 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-sm text-gray-600 mb-3 block"
                            >
                              {course.category}
                            </motion.span>
                            <motion.h4 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-lg font-semibold mb-2"
                            >
                              {course.title}
                            </motion.h4>
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-sm text-gray-500"
                            >
                              {course.subtitle}
                            </motion.p>
                          </div>
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 100,
                              delay: 0.2
                            }}
                            className="w-16 h-16 flex items-center justify-center"
                          >
                            <img 
                              src={course.logo} 
                              alt={`${course.category} logo`} 
                              className="max-w-full max-h-full object-contain"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination flex justify-center mt-4 space-x-2"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-50 rounded-xl p-6 relative overflow-hidden h-full"
          >
            <motion.div 
              animate={{ 
                x: [0, 15, 0], 
                y: [0, -15, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10,
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -ml-16 -mt-16 opacity-50"
            ></motion.div>
            <motion.div 
              animate={{ 
                x: [0, -15, 0], 
                y: [0, 15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 9,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mb-12 opacity-50"
            ></motion.div>
            <h3 className="mb-4 relative z-10">
              <span className="font-bold text-xl">Build a </span>
              <span className="text-green-600 font-bold text-xl">resume</span>
              <span className="font-bold text-xl"> employers will notice</span>
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-4 shadow-sm mb-3 relative z-10"
            >
              <div className="mb-2">
                <span className="font-semibold">Experience</span>
              </div>
              <div className="flex items-start gap-3">
                <motion.div 
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs"
                >
                  X
                </motion.div>
                <div>
                  <div className="font-medium">Extern</div>
                  <div className="text-sm text-gray-500">Blockchain Extern, Webacy</div>
                  <div className="text-xs text-gray-400">Mar 2024 - Apr 2024 · 2 mos</div>
                  <ul className="mt-2 text-sm">
                    <motion.li 
                      initial={{ x: -5, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start"
                    >
                      <span className="text-xs mt-1 mr-1">•</span>
                      <span>Analyzed ethereum blockchain to identify suspicious transactions</span>
                    </motion.li>
                    <motion.li 
                      initial={{ x: -5, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start"
                    >
                      <span className="text-xs mt-1 mr-1">•</span>
                      <span>Investigated suspicious blockchain activity</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;