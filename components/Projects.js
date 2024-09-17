import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'Description of Project 1',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    { 
      title: 'Project 2', 
      description: 'Description of Project 2',
      technologies: ['Python', 'Django', 'PostgreSQL']
    },
    { 
      title: 'Project 3', 
      description: 'Description of Project 3',
      technologies: ['Vue.js', 'Express', 'MySQL']
    },
  ]

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-pastelPink mb-2">{project.title}</h3>
              <p className="text-grey mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}