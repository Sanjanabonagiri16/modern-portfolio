import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: 'Python Developer',
      company: 'InnoByte Services',
      logo: '/innobyte_services_logo.jpg',
      period: 'Sep 2024 - Present',
      location: 'New Delhi, Delhi, India · Remote',
      description: 'Python (Programming Language) and Program Creation',
      companyLink: 'https://www.linkedin.com/company/innobyte-services/mycompany/verification/'
    },
    {
      title: 'Student Ambassador',
      company: 'LetsUpgrade',
      logo: '/lets upgrade.png',
      period: 'Mar 2024 - Sep 2024',
      location: 'India · Remote',
      description: 'Represented LetsUpgrade, shared information, and guided new students. Developed new skills and expanded network.',
      companyLink: 'https://www.linkedin.com/company/letsupgrade-in/posts/?feedView=all'
    },
    {
      title: 'Co-Founder',
      company: 'VirtuAlly Solutions',
      logo: '/virtually-solutions.jpg',
      period: 'Sep 2023 - Sep 2024',
      location: 'Hyderabad, Telangana, India · Remote',
      description: 'Led web development initiatives, delivering high-quality, responsive websites that surpassed client expectations.',
      companyLink: 'https://www.linkedin.com/company/virtualysolutions/posts/?feedView=all'
    },
    {
      title: 'Student Partner',
      company: 'Internshala',
      logo: '/internshala.jpg',
      period: 'Mar 2024 - Jun 2024',
      location: 'India · Remote',
      description: "Participated in Internshala's student partner program, promoting internship opportunities and career resources.",
      companyLink: 'https://www.linkedin.com/company/internshala/posts/?feedView=all'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-purple to-pastelPink">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="flex justify-center items-center space-x-8 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="cursor-pointer relative"
              onClick={() => setSelectedExperience(exp)}
              initial={{ opacity: 0, y: 20, rotateY: 0 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 180,
                transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1
              }}
            >
              <motion.div 
                className="w-24 h-24 rounded-full overflow-hidden"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={96}
                  height={96}
                  objectFit="cover"
                  className="rounded-full"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                  initial={{ rotateY: 180, opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-white text-xs text-center p-2">{exp.company}</span>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple to-pastelPink rounded-full opacity-0 group-hover:opacity-100 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 15 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <motion.h3 
                className="text-2xl font-bold text-pastelPink mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedExperience.title}
              </motion.h3>
              <motion.a 
                href={selectedExperience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-grey hover:text-pastelPink transition-colors flex items-center mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedExperience.company}
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </motion.a>
              <motion.p 
                className="text-grey mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedExperience.period}
              </motion.p>
              <motion.p 
                className="text-grey mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {selectedExperience.location}
              </motion.p>
              <motion.p 
                className="text-white"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {selectedExperience.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}