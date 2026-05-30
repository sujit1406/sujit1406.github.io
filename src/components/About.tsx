import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Seasoned <span className="gradient-text">iOS Engineer</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-glass-container glass-card">
              <p>
                Seasoned iOS Engineer with 15+ years of experience designing and
                delivering enterprise-grade mobile apps across healthcare IoT (BLE
                hearing aids), telecom (VoIP & messaging), and indoor navigation.
              </p>
              <p>
                Skilled in Swift, SwiftUI, Combine, RxSwift, and modern architectures
                (MVVM, VIPER, Clean). Proven success in building and scaling apps
                for WS Audiology, Jio, Mavenir, and Harman.
              </p>
              <div className="about-highlights">
                {[
                  '🏥 Healthcare IoT & BLE Expertise',
                  '📱 SwiftUI & Combine Specialist',
                  '⚙️ CI/CD Pipeline Automation',
                  '🎯 Agile/Scrum Leadership',
                ].map((item) => (
                  <div key={item} className="highlight-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-glass glass-card">

              <div className="card-icon">📱</div>
              <h3>Technical Consultant</h3>
              <p>Based in Bengaluru, Karnataka, India</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
