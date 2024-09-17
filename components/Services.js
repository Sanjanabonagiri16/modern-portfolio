import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaServer, FaLayerGroup, FaLinkedin, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const services = [
    {
      icon: <FaCode className="text-6xl text-pastelPink mb-4" />,
      title: 'Web Development',
      description: [
        'Responsive and dynamic websites',
        'Modern technologies: React, Next.js, Node.js',
        'From landing pages to complex web applications',
        'Focus on functionality and visual appeal'
      ],
    },
    {
      icon: <FaDesktop className="text-6xl text-pastelPink mb-4" />,
      title: 'Frontend Development',
      description: [
        'Intuitive and engaging user interfaces',
        'Specialization in React and Vue.js',
        'Modern design principles',
        'Cross-browser compatibility'
      ],
    },
    {
      icon: <FaServer className="text-6xl text-pastelPink mb-4" />,
      title: 'Backend Development',
      description: [
        'Robust server-side applications and APIs',
        'Node.js, Express, and Python',
        'Efficient database design and management',
        'Scalable and secure backend solutions'
      ],
    },
    {
      icon: <FaLayerGroup className="text-6xl text-pastelPink mb-4" />,
      title: 'Full Stack Development',
      description: [
        'End-to-end application development',
        'Seamless integration of frontend and backend',
        'Database management and API development',
        'Deployment and DevOps practices'
      ],
    },
    {
      icon: <FaMobileAlt className="text-6xl text-pastelPink mb-4" />,
      title: 'Mobile App Development',
      description: [
        'Cross-platform mobile applications',
        'React Native and Flutter expertise',
        'Native-like performance and user experience',
        'iOS and Android app development'
      ],
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="relative max-w-2xl mx-auto perspective-1000" style={{ perspective: 1000 }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.5 },
              }}
              className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {services[currentIndex].icon}
              <h3 className="text-3xl font-bold text-pastelPink mb-4">{services[currentIndex].title}</h3>
              <ul className="text-grey mb-6 text-left list-disc list-inside">
                {services[currentIndex].description.map((point, index) => (
                  <li key={index} className="mb-2">{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <motion.button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-xl" />
          </motion.button>
          <motion.button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-xl" />
          </motion.button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-pastelPink' : 'bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/sanjana-bonagiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-pastelPink text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2" />
            Message on LinkedIn
          </motion.a>
          <motion.a
            href="mailto:bonagirisanjana1116@gmail.com"
            className="flex items-center bg-pastelPink text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="mr-2" />
            Send Email
          </motion.a>
        </div>
      </div>
    </section>
  );
}