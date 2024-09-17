import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const aboutContent = [
    "Welcome to my professional portfolio! I am an accomplished Full Stack Developer, Python Developer, and Data Analyst with expertise in AI and Machine Learning. With a strong foundation in Computer Science & Engineering, I have honed my skills in developing innovative software solutions and data-driven insights.",
    "My technical proficiency spans frontend development using HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js, along with Frame Motion for advanced animations and transitions. On the backend, I specialize in Python, Node.js, and API development, ensuring seamless functionality and integration.",
    "In the realm of data analysis and visualization, I bring extensive experience using SQL, PowerBI, and other analytics tools to uncover actionable insights and drive business performance. I have successfully completed high-impact projects like AI Jarvis with Smart Blind Stick, which leverages AI for accessibility, and DriveWise Android App, a solution focused on enhancing driving safety. Additionally, I developed the Fashion Sewing App, an e-commerce platform enabling users to order custom-tailored clothing online.",
    "Throughout my career, I have gained invaluable experience working with leading global companies. At PwC Switzerland, I served as a Power BI Intern, while at Cognizant, I participated in their AI Job Simulation, sharpening my AI and data analytics skills. I was part of Walmart USA's Advanced Software Engineer Job Simulation, where I worked on sophisticated software engineering solutions. I also collaborated with J.P. Morgan during their Software Job Simulation, enhancing my software development and problem-solving capabilities. My role as a Software Engineer at InnoByte Services allowed me to contribute to impactful software solutions.",
    "I am committed to continuous learning and growth, having earned certifications from esteemed institutions like IBM, Cisco, LetsUpgrade, and Google. With a passion for cutting-edge technologies and a focus on delivering value, I strive to develop robust applications and provide insightful data-driven solutions. I am excited to bring my expertise in full stack development, data analysis, and AI/ML to create innovative and scalable solutions that meet the needs of tomorrow."
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % aboutContent.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + aboutContent.length) % aboutContent.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-purple to-pastelPink">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <p>{aboutContent[currentSlide]}</p>
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-xl" />
          </motion.button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          {aboutContent.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-pastelPink' : 'bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}