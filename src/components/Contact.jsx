import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
    const [statusMessage, setStatusMessage] = useState('')

    // Initialize EmailJS on component mount
    useEffect(() => {
        emailjs.init('YOUR_PUBLIC_KEY') // Replace with your actual Public Key from EmailJS
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await emailjs.send(
                'service_mvxx0ys',
                'template_wz9lfnh',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'dpuZoySHFZV7YaIBB'
            )

            if (response.status === 200) {
                setStatus('success')
                setStatusMessage('Message sent successfully! I will get back to you soon.')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(null), 5000)
            }
        } catch (error) {
            setStatus('error')
            setStatusMessage('Failed to send message. Please try again or contact directly.')
            setTimeout(() => setStatus(null), 5000)
        }
    }

    return (
        <motion.section
            className="section-block"
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={sectionVariants}>
                <span>06. Contact</span>
                <h2>Let’s build something great together</h2>
            </motion.div>
            <motion.div className="contact-grid" variants={containerVariants}>
                <motion.div className="contact-panel glass-card" variants={sectionVariants} whileHover={{ y: -6 }}>
                    <div>
                        <span>Get in Touch</span>
                        <h3>Contact Information</h3>
                    </div>
                    <div className="contact-list">
                        <div>
                            <strong>Email</strong>
                            <a href="mailto:venugopal5880848@gmail.com">venugopal5880848@gmail.com</a>
                        </div>
                        <div>
                            <strong>Phone</strong>
                            <a href="tel:+917673911611">+91 76739 11611</a>
                        </div>
                        <div>
                            <strong>GitHub</strong>
                            <a href="https://github.com/GIT-HUB-VENU" target="_blank" rel="noreferrer">
                                github.com/GIT-HUB-VENU
                            </a>
                        </div>
                        <div>
                            <strong>HackerRank</strong>
                            <a href="https://www.hackerrank.com/profile/venugopal5880844" target="_blank" rel="noreferrer">
                                hackerrank.com/profile/venugopal5880844
                            </a>
                        </div>
                    </div>
                    <a className="button secondary" href="mailto:venugopal5880848@gmail.com">
                        Email Me
                    </a>
                </motion.div>
                <motion.form
                    className="contact-form glass-card"
                    onSubmit={handleSubmit}
                    variants={sectionVariants}
                >
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>
                    {status && (
                        <div
                            className={`status-message ${status}`}
                            style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                backgroundColor:
                                    status === 'success'
                                        ? 'rgba(80, 200, 120, 0.1)'
                                        : status === 'error'
                                            ? 'rgba(255, 77, 77, 0.1)'
                                            : 'rgba(100, 150, 200, 0.1)',
                                color:
                                    status === 'success'
                                        ? '#50C878'
                                        : status === 'error'
                                            ? '#FF4D4D'
                                            : '#6496C8',
                                border:
                                    status === 'success'
                                        ? '1px solid rgba(80, 200, 120, 0.3)'
                                        : status === 'error'
                                            ? '1px solid rgba(255, 77, 77, 0.3)'
                                            : '1px solid rgba(100, 150, 200, 0.3)',
                            }}
                        >
                            {statusMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="button primary"
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.6 : 1 }}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>
            </motion.div>
        </motion.section>
    )
}
