import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Sanjanabonagiri16/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        const sortedProjects = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setProjects(sortedProjects);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + PROJECTS_PER_PAGE);
  };

  if (isLoading) return <div className="text-white text-center">Loading projects...</div>;
  if (error) return <div className="text-white text-center">Error: {error}</div>;

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg transform-gpu"
                initial={{ opacity: 0, rotateY: -90, z: -300 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, rotateY: 90, z: -300 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10, 
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-pastelPink mb-2"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {project.name}
                </motion.h3>
                <motion.p 
                  className="text-grey mb-4"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {project.description || 'No description available.'}
                </motion.p>
                <div className="flex justify-between items-center">
                  <motion.a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pastelPink hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <FaGithub className="inline mr-2" />
                    View on GitHub
                  </motion.a>
                  {project.homepage && (
                    <motion.a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pastelPink hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotateZ: -5 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <FaExternalLinkAlt className="inline mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={loadMore}
              className="bg-pastelPink text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              <FaChevronDown className="inline mr-2" />
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}