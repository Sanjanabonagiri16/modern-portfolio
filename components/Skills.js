import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiMysql, SiHtml5, SiCss3, 
  SiTailwindcss, SiFramer, SiNextdotjs, SiPowerbi, 
  SiPostman, SiMicrosoftazure, SiReact, SiGit,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase
} from 'react-icons/si';
import { FaRobot, FaBrain, FaCode, FaChevronDown } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';

const SKILLS_PER_PAGE = 10;

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB', importance: 'Versatile language for web development, data analysis, and AI/ML projects.' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', importance: 'Essential for front-end and full-stack web development.' },
  { name: 'React', icon: SiReact, color: '#61DAFB', importance: 'Popular library for building dynamic and responsive user interfaces.' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', importance: 'Enables server-side JavaScript for full-stack development.' },
  { name: 'Express', icon: SiExpress, color: '#000000', importance: 'Fast, unopinionated web framework for Node.js.' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', importance: 'Flexible NoSQL database for modern applications.' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26', importance: 'Foundation of web content structure.' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6', importance: 'Styling language for designing web pages.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', importance: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', importance: 'React framework for production-grade applications.' },
  { name: 'Git', icon: SiGit, color: '#F05032', importance: 'Version control system for tracking changes in code.' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', importance: 'Standard language for managing relational databases.' },
  { name: 'Power BI', icon: SiPowerbi, color: '#F2C811', importance: 'Business analytics tool for data visualization and reporting.' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', importance: 'API development and testing tool.' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4', importance: 'Cloud computing platform for building and deploying applications.' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', importance: 'Platform for developing web and mobile applications.' },
  { name: 'RPA', icon: FaRobot, color: '#0000FF', importance: 'Automation of repetitive tasks and processes.' },
  { name: 'AI', icon: GiArtificialIntelligence, color: '#FF4500', importance: 'Development of intelligent systems and algorithms.' },
  { name: 'NLP', icon: FaCode, color: '#4CAF50', importance: 'Processing and analyzing natural language data.' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', importance: 'Library for creating smooth animations in React.' },
];

const SkillIcon = ({ skill, onClick }) => {
  return (
    <motion.div
      className="flex flex-col items-center m-2 cursor-pointer"
      whileHover={{ scale: 1.1, rotateY: 180, z: 50 }}
      onClick={() => onClick(skill)}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="text-5xl"
        style={{ color: skill.color, transformStyle: "preserve-3d" }}
      >
        <skill.icon />
      </motion.div>
      <motion.p
        className="mt-2 text-xs text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
};

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState(SKILLS_PER_PAGE);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const loadMore = () => {
    setVisibleSkills(prevVisible => Math.min(prevVisible + SKILLS_PER_PAGE, skills.length));
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {skills.slice(0, visibleSkills).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <SkillIcon skill={skill} onClick={handleSkillClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleSkills < skills.length && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={loadMore}
              className="bg-pastelPink text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300"
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronDown className="inline mr-2" />
              Load More Skills
            </motion.button>
          </div>
        )}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-lg max-w-md"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <selectedSkill.icon className="mr-2" style={{ color: selectedSkill.color }} />
                  {selectedSkill.name}
                </h3>
                <p className="text-gray-700">{selectedSkill.importance}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}