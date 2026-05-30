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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
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
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="skills-glass-container glass-card">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
