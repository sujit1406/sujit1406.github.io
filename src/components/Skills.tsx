import { motion } from 'framer-motion'
import './Skills.css'

// A skill is either a plain label or a label linked to a certificate.
type Skill = string | { label: string; href: string }

type SkillCategory = {
  title: string
  icon: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Swift', 'Objective-C', 'Python', 'Node.js'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    skills: ['SwiftUI', 'UIKit', 'Combine', 'RxSwift', 'Express'],
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
    skills: [
      {
        label: 'Complete AI Engineer Bootcamp',
        href: 'https://www.udemy.com/certificate/UC-072a723b-d088-4d08-a917-b7a32c0175fd/',
      },
      'SwiftUI Essentials',
      'iOS App Development: Design Patterns for Mobile Architecture',
      {
        label: 'Async/Await & Actors',
        href: 'https://www.udemy.com/certificate/UC-785e101d-6268-4725-9020-7cf242028f68/',
      },
      'Python Data Science',
    ],
  },
  {
    title: 'AI & LLMs',
    icon: '🤖',
    skills: ['LangChain', 'LangGraph', 'Ollama', 'Gemini', 'Qwen', 'DeepSeek', 'RAG', 'Fine-Tuning', 'OpenCode Agents', 'VibeCoding'],
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
      type: 'spring' as const,
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
      type: 'spring' as const,
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
        viewport={{ once: true, margin: "0px" }}
        variants={containerVariants}
      >
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="skills-glass-container glass-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(34, 197, 94, 0.2)",
                  borderColor: "rgba(34, 197, 94, 0.5)"
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 15 }}
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
                  {category.skills.map((skill, sIndex) => {
                    const label = typeof skill === 'string' ? skill : skill.label
                    const href = typeof skill === 'string' ? undefined : skill.href
                    const tagProps = {
                      className: href ? 'skill-tag skill-tag-link' : 'skill-tag',
                      initial: 'hidden',
                      whileInView: 'visible',
                      viewport: { once: true },
                      variants: tagVariants,
                      whileHover: {
                        scale: 1.1,
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        color: '#166534',
                      },
                      whileTap: { scale: 0.95 },
                      transition: { delay: sIndex * 0.05 },
                    } as const

                    const content = (
                      <>
                        {label}
                        {href && (
                          <span className="skill-tag-arrow" aria-hidden="true">
                            ↗
                          </span>
                        )}
                      </>
                    )

                    return href ? (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View the ${label} certificate`}
                        aria-label={`${label} certificate (opens in a new tab)`}
                        {...tagProps}
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <motion.span key={label} {...tagProps}>
                        {content}
                      </motion.span>
                    )
                  })}
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
