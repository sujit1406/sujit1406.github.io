import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Signia Hearing Aid App',
    description: 'Led iOS development for Signia, a hearing-aid configuration app using SwiftUI, Combine, and BLE. Mentored 3 junior engineers and improved code coverage by 30%.',
    tech: ['SwiftUI', 'Combine', 'BLE', 'CI/CD'],
    image: '🎧',
    color: '#5856D6',
  },
  {
    title: 'JioXplor - Indoor Navigation',
    description: 'Built and shipped an indoor navigation app powered by Bluetooth Low Energy (BLE) beacons. Integrated Ionic framework with native iOS, reducing app load time by 25%.',
    tech: ['Swift', 'BLE', 'Ionic', 'OpenLayers'],
    image: '📍',
    color: '#FF2D55',
  },
  {
    title: 'Mavenir Connect - VoIP & Messaging',
    description: 'Co-developed a secure enterprise VoIP & messaging app used by global customers. Increased app stability and improved enterprise adoption.',
    tech: ['Swift', 'VoIP', 'WebRTC', 'MVVM'],
    image: '📞',
    color: '#34C759',
  },
  {
    title: 'Aha Radio - Automotive Integration',
    description: 'Contributed to Aha Radio integration for Maruti Suzuki SmartPlay & Audi Connect systems. Spearheaded iOS CI/CD automation, cutting release effort from days to hours.',
    tech: ['Objective-C', 'Swift', 'CI/CD', 'Automotive'],
    image: '🚗',
    color: '#FF9500',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="projects-glass-container glass-card">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card glass-card"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
              <div className="project-image" style={{ background: `${project.color}20` }}>
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <motion.a 
                    href="#" 
                    className="project-view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <motion.span 
                      key={t} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
