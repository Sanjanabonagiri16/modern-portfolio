import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Certifications />
      <Contact />
    </motion.div>
  )
}
