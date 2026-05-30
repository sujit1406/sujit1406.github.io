import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Swift', 'Objective-C', 'Python', 'Dart'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    skills: ['SwiftUI', 'UIKit', 'Combine', 'RxSwift', 'Flutter'],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    skills: ['MVVM', 'VIPER', 'Clean Architecture', 'Design Patterns'],
  },
  {
    title: 'Tools & CI/CD',
    icon: '🛠️',
    skills: ['Xcode', 'Git', 'AppCenter', 'Firebase', 'Jenkins'],
  },
  {
    title: 'Specialized',
    icon: '🔧',
    skills: ['BLE/IoT', 'VoIP/WebRTC', 'CoreData', 'Agile/Scrum'],
  },
  {
    title: 'Certifications',
    icon: '📜',
    skills: ['Async/Await & Actors', 'Python Data Science', 'Flutter Bootcamp'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const tagVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }} // Removed negative margin
        variants={containerVariants}
      >
        <motion.div
          className="section-header"
          variants={cardVariants}
        >
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="skills-glass-container glass-card"
          variants={cardVariants}
        >
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-card glass-card"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(34, 197, 94, 0.2)",
                  borderColor: "rgba(34, 197, 94, 0.5)"
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="skill-icon"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, sIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      variants={tagVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                        color: "#166534"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: sIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
