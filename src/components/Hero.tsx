import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-glass-container glass-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot"></span>
          Open to Opportunities
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Sujith <span className="gradient-text">Antony</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Technical Consultant | Swift, SwiftUI, BLE/IoT | CI/CD
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a 
            href="#projects" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <span className="btn-icon">→</span>
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '20+', label: 'Apps Shipped' },
            { number: '100K+', label: 'Users Served' },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
