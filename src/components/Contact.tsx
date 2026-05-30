import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({ email: '' })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { email: string } = { email: '' }
    let isValid = true

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      const subject = `Portfolio Contact: ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
      const mailtoLink = `mailto:mail2say@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      setFormData({ name: '', email: '', message: '' })
      setErrors({ email: '' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (e.target.name === 'email') {
      setErrors({ ...errors, email: '' })
    }
  }

  return (
    <section id="contact" className="contact-section">
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
          <motion.span 
            className="section-tag"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
        </motion.div>

        <div className="contact-glass-container glass-card">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting
                projects, or potential collaborations.
              </p>
              <div className="contact-items">
                {[
                  { icon: '📧', label: 'Email', value: 'mail2say@gmail.com' },
                  { icon: '📱', label: 'Phone', value: 'Available on request' },
                  { icon: '📍', label: 'Location', value: 'Bengaluru, Karnataka, India' },
                ].map((item) => (
                  <div key={item.label} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div>
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="social-links">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sujithantony' },
                  { name: 'GitHub', url: 'https://github.com/sujit1406' },
                  { name: 'Email', url: 'mailto:mail2say@gmail.com' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message →
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
