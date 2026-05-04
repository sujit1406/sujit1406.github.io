import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    company: 'Mobily Infotech',
    role: 'Technical Consultant',
    period: 'Feb 2026 - Present',
    duration: '4 months',
    location: 'Bengaluru, Karnataka, India',
    highlights: ['Technical consulting for iOS projects'],
  },
  {
    company: 'Singlepoint Solutions',
    role: 'Senior Software Engineer',
    period: 'Oct 2024 - Feb 2026',
    duration: '1 year 5 months',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Leading iOS development for Signia hearing-aid app (SwiftUI, Combine, BLE)',
      'Mentoring 3 junior engineers, improving code coverage by 30%',
      'Automated CI/CD pipelines on AppCenter/Firebase',
      'Active in Scrum: sprint planning, reviews, retrospectives',
    ],
  },
  {
    company: 'ACL Digital',
    role: 'Principal Engineer',
    period: 'Jan 2023 - Sep 2024',
    duration: '1 year 9 months',
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Built JioXplor indoor navigation app with BLE beacons',
      'Reduced app load time by 25% with Ionic integration',
      'Implemented custom maps using OpenLayers',
      'Mentored peers on hybrid mobile performance & BLE integration',
    ],
  },
  {
    company: 'Mavenir',
    role: 'Senior Member Of Technical Staff II - R&D',
    period: 'Aug 2019 - Sep 2022',
    duration: '3 years 2 months',
    location: 'Bengaluru Area, India',
    highlights: [
      'Co-developed Mavenir Connect - secure VoIP & messaging app',
      'Increased app stability, improving enterprise adoption',
      'Consistent on-time App Store & AppCenter releases',
    ],
  },
  {
    company: 'Harman Connected Services',
    role: 'Technical Lead Product Development',
    period: 'Feb 2017 - Jul 2019',
    duration: '2 years 6 months',
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Aha Radio integration for Maruti Suzuki & Audi Connect',
      'Spearheaded iOS CI/CD automation - days to hours',
      'Architectural diagrams and technical design',
    ],
  },
  {
    company: 'ACL Digital',
    role: 'Senior Software Engineer',
    period: 'Dec 2014 - Feb 2017',
    duration: '2 years 3 months',
    location: 'Bengaluru Area, India',
    highlights: [
      'Delivered multiple iOS projects for enterprise customers',
      'Implemented unit testing & participated in Agile ceremonies',
      'Conducted code reviews and mentored junior developers',
    ],
  },
]

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

        <div className="experience-glass-container">
          <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className="timeline-item"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-duration">{exp.duration}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
