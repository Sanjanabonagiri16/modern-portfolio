import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <div className="flex justify-center space-x-8">
          <motion.a 
            href="https://www.linkedin.com/in/sanjana-bonagiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-pastelPink transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-4xl mb-2" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a 
            href="https://github.com/Sanjanabonagiri16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-pastelPink transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-4xl mb-2" />
            <span>GitHub</span>
          </motion.a>
          <motion.a 
            href="mailto:bonagirisanjana1116@gmail.com"
            className="flex flex-col items-center text-white hover:text-pastelPink transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-4xl mb-2" />
            <span>Email</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}