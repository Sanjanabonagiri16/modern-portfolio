import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiMysql, SiHtml5, SiCss3, 
  SiTailwindcss, SiFramer, SiNextdotjs, SiPowerbi, 
  SiPostman, SiMicrosoftazure, SiReact, SiGit,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase
} from 'react-icons/si';
import { FaRobot, FaBrain, FaCode, FaAd } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdEngineering } from 'react-icons/md';

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'RPA', icon: FaRobot, color: '#0000FF' },
  { name: 'AI', icon: GiArtificialIntelligence, color: '#FF4500' },
  { name: 'NLP', icon: FaCode, color: '#4CAF50' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
];

const SkillIcon = ({ skill }) => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Reset after 1 second
  };

  return (
    <motion.div
      className="skill-icon m-4"
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
        animate={isRotating ? { rotateY: 360 } : { rotateY: 0 }}
        transition={isRotating ? { duration: 1, ease: "easeInOut" } : {}}
      >
        <motion.div
          className="absolute w-full h-full rounded-full flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <skill.icon className="text-3xl" style={{ color: skill.color }} />
        </motion.div>
        <motion.div
          className="absolute w-full h-full rounded-full bg-black bg-opacity-80 flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-white text-xs font-semibold text-center">{skill.name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-purple to-pastelPink">
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
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}