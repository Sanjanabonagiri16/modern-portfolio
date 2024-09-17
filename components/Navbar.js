import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'services', 'projects', 'skills', 'education', 'contact']
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`font-bold text-xl font-playfair ${scrolled ? 'text-pastelPink' : 'text-black'}`}>
              SB
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/#home" isActive={activeSection === 'home'} scrolled={scrolled}>Home</NavLink>
              <NavLink href="/#about" isActive={activeSection === 'about'} scrolled={scrolled}>About</NavLink>
              <NavLink href="/#education" isActive={activeSection === 'education'} scrolled={scrolled}>Education</NavLink>
              <NavLink href="/#skills" isActive={activeSection === 'skills'} scrolled={scrolled}>Skills</NavLink>
              <NavLink href="/#projects" isActive={activeSection === 'projects'} scrolled={scrolled}>Projects</NavLink>
              <NavLink href="/#experience" isActive={activeSection === 'experience'} scrolled={scrolled}>Experience</NavLink>
              <NavLink href="/#services" isActive={activeSection === 'services'} scrolled={scrolled}>Services</NavLink>
              <NavLink href="/#certifications" isActive={activeSection === 'certifications'} scrolled={scrolled}>Certifications</NavLink>
              <NavLink href="/#contact" isActive={activeSection === 'contact'} scrolled={scrolled}>Contact</NavLink>
              <a 
                href="/SANJANA_BONAGIRI_SOFTWARE_RESUME.pdf" 
                download
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  scrolled ? 'text-white hover:text-pastelPink' : 'text-black hover:text-pastelPink'
                }`}
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, isActive, scrolled }) {
  return (
    <Link href={href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? 'text-pastelPink'
        : scrolled
          ? 'text-white hover:text-pastelPink'
          : 'text-black hover:text-pastelPink'
    }`}>
      {children}
    </Link>
  )
}