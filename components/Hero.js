import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm <span className="text-pastelPink">Sanjana Bonagiri</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A versatile Full Stack Developer, Python Developer, AI/ML Engineer, and Data Analyst. I specialize in web development, cloud technologies, and data-driven solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-white mb-2">I'm open to:</p>
            <TypeAnimation
              sequence={[
                'Freelance',
                2000,
                'Internships',
                2000,
                'Remote Work',
                2000,
                'Hourly Work',
                2000,
                'Full-Time',
                2000,
                'Part-Time',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block', color: '#FFD1DC' }}
              repeat={Infinity}
            />
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96" // Increased size here
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/profile-pic1.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(255, 209, 220, 0.3)",
                  "0 0 0 20px rgba(255, 209, 220, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}