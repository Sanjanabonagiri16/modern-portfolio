import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'services', 'certifications', 'contact']
      const scrollPosition = window.scrollY

      setScrolled(scrollPosition > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Services', href: '/#services' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Link href="/" legacyBehavior>
              <a className={`font-bold text-3xl font-playfair ${scrolled ? 'text-pastelPink' : 'text-white'}`}>
                SB
              </a>
            </Link>
          </motion.div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-pastelPink'
                    : 'text-white hover:text-pastelPink'
                }`}>
                  {item.name}
                </a>
              </Link>
            ))}
            <a 
              href="/SANJANA_BONAGIRI_SOFTWARE_RESUME.pdf" 
              download
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-white hover:text-pastelPink"
            >
              <FaDownload className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, isActive, scrolled, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} passHref>
        <motion.a
          className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive 
              ? 'text-pastelPink'
              : scrolled
                ? 'text-white hover:text-pastelPink'
                : 'text-black hover:text-pastelPink'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        >
          {children}
        </motion.a>
      </Link>
    </motion.div>
  )
}