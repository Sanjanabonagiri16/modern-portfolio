import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 section-overlay">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-grey mb-4">
              I am a passionate Full Stack Developer with expertise in various technologies including Python, JavaScript, React, and Node.js. My journey in the world of programming started with a curiosity to understand how things work behind the scenes, and it has evolved into a career where I constantly push the boundaries of what's possible in web development.
            </p>
            <p className="text-lg text-grey mb-4">
              With a strong foundation in both front-end and back-end technologies, I enjoy creating seamless, user-friendly applications that solve real-world problems. My experience spans from developing responsive web interfaces to designing robust server-side architectures.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Skills Highlight</h3>
            <ul className="list-disc list-inside space-y-2 text-grey">
              <li>Full Stack Web Development</li>
              <li>React.js and Next.js</li>
              <li>Node.js and Express.js</li>
              <li>Python and Django</li>
              <li>Database Management (SQL and NoSQL)</li>
              <li>RESTful API Design</li>
              <li>Cloud Services (AWS, Google Cloud)</li>
              <li>Version Control (Git)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}