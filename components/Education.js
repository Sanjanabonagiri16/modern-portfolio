import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Malla Reddy Engineering College',
      period: '2021-2025',
      specialization: 'Specialization In Artificial Intelligence & Machine Learning',
      relevantCourses: ['Data Structures and Algorithms', 'Artificial Intelligence'],
      icon: <FaGraduationCap className="text-3xl text-pastelPink" />
    },
    {
      degree: 'Intermediate Education',
      institution: 'Sri Chaitanya Junior College',
      period: '2019-2021',
      icon: <FaSchool className="text-3xl text-pastelPink" />
    },
    {
      degree: 'Secondary Education',
      institution: 'Telangana Model School',
      period: '2018-2019',
      icon: <FaBook className="text-3xl text-pastelPink" />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + educationData.length) % educationData.length);
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="relative max-w-md mx-auto mb-20"> {/* Added margin-bottom */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="bg-black bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center mb-4">
                {educationData[currentIndex].icon}
                <h3 className="text-xl font-bold text-pastelPink ml-4">{educationData[currentIndex].degree}</h3>
              </div>
              <p className="text-sm text-grey mb-2">{educationData[currentIndex].institution}</p>
              <p className="text-sm text-grey mb-2">{educationData[currentIndex].period}</p>
              {educationData[currentIndex].specialization && (
                <p className="text-sm text-grey mb-2">{educationData[currentIndex].specialization}</p>
              )}
              {educationData[currentIndex].relevantCourses && (
                <div className="mt-2">
                  <p className="text-sm text-pastelPink font-semibold">Relevant Coursework:</p>
                  <ul className="list-disc list-inside text-sm text-grey">
                    {educationData[currentIndex].relevantCourses.map((course, courseIndex) => (
                      <li key={courseIndex}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
      <div className="h-40 bg-gradient-to-b from-black to-transparent"></div> {/* Gradient transition */}
    </section>
  );
}