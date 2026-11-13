import { motion } from 'framer-motion'
import './Experience.css'

import { experiences, formatPeriod, formatDuration, type Experience as ExperienceData } from '../data/profile'

const ExperienceCard = ({ exp, index }: { exp: ExperienceData, index: number }) => {
  const period = formatPeriod(exp)
  const duration = formatDuration(exp)

  return (
    <motion.div
      className="timeline-item"
      // 1st: Staggered Spring Reveal Entrance
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: index * 0.1 
      }}
      // 3rd: Lift & Glow on Hover
      whileHover={{ 
        y: -10, 
        scale: 1.02
      }}
      // 5th: iOS Haptic Squish (no rotation)
      whileTap={{ scale: 0.95 }}
    >
      <div className="timeline-content glass-card">
        {/* 3rd: Shimmer Effect overlay */}
        <motion.div 
          className="shimmer-wrapper"
          animate={{ left: ["-150%", "150%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="timeline-header">
          {/* 1st: Internal Staggering for Header */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index * 0.1) + 0.3 }}
          >
            {exp.role}
          </motion.h3>
          <span className="timeline-company">{exp.company}</span>
        </div>
        
        <div className="timeline-meta">
          <span className="timeline-period">{period}</span>
          <span className="timeline-duration">{duration}</span>
          <span className="timeline-location">{exp.location}</span>
        </div>
        
        <ul className="timeline-highlights">
          {exp.highlights.map((highlight, hIndex) => (
            <motion.li 
              key={highlight}
              // 1st: Internal Staggering for Highlights
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + 0.4 + (hIndex * 0.1) }}
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-tag"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Career
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
        </motion.div>

        <div className="experience-glass-container glass-panel">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${exp.start.year}-${exp.start.month}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
