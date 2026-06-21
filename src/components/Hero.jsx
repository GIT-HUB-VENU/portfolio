import heroImg from '../assets/profile.jpeg'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero({ resumeLink }) {
    const [cgpa, setCgpa] = useState(0)
    const [projects, setProjects] = useState(0)
    const [recruiter, setRecruiter] = useState(0)
    const startedRef = useRef(false)

    const startStatsAnimation = () => {
        if (startedRef.current) return
        startedRef.current = true

        const duration = 1600
        const targetCgpa = 9.04
        const targetProjects = 3
        const targetRecruiter = 100
        const startTime = performance.now()

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1)
            setCgpa(parseFloat((targetCgpa * progress).toFixed(2)))
            setProjects(Math.floor(targetProjects * progress))
            setRecruiter(Math.floor(targetRecruiter * progress))

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                setCgpa(targetCgpa)
                setProjects(targetProjects)
                setRecruiter(targetRecruiter)
            }
        }

        requestAnimationFrame(animate)
    }

    return (
        <motion.section
            className="hero-section"
            id="home"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={startStatsAnimation}
            variants={sectionVariants}
        >
            <motion.div className="hero-copy" variants={cardVariants}>
                <p className="eyebrow">Full-Stack Developer Portfolio</p>
                <h1>
                    Hello, I’m <span>Dantini Venu Gopal</span>
                </h1>
                <p className="hero-title">
                    Full-Stack Developer | Java Developer | React Developer
                </p>
                <p className="hero-text">
                    Building scalable web applications and transforming ideas into seamless digital experiences.
                </p>
                <p className="hero-subtitle">
                    A passionate developer specializing in Java, React, Node.js, REST APIs, and modern web technologies.
                </p>
                <div className="hero-actions">
                    <a className="button primary" href="#projects">
                        View Projects
                    </a>
                    <a className="button secondary" href={resumeLink} target="_blank" rel="noreferrer">
                        Download Resume
                    </a>
                    <a className="button ghost" href="#contact">
                        Contact Me
                    </a>
                </div>
            </motion.div>

            <motion.div className="hero-panel" variants={cardVariants}>
                <motion.div className="hero-card" whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }}>
                    <div className="image-frame">
                        <img src={heroImg} alt="Profile of Dantini Venu Gopal" />
                    </div>
                    <div className="hero-info">
                        <p className="label">PROFILE</p>
                        <h2>Dantini Venu Gopal</h2>
                        <p>Full-Stack Software Developer and Computer Science & Design Engineering student.</p>
                        <div className="hero-badges">
                            <span>Java</span>
                            <span>React</span>
                            <span>Node.js</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="hero-stats" variants={cardVariants}>
                    <div>
                        <strong>{cgpa.toFixed(2)}</strong>
                        <span>B.Tech CGPA</span>
                    </div>
                    <div>
                        <strong>{projects}+</strong>
                        <span>Major Projects</span>
                    </div>
                    <div>
                        <strong>{recruiter}%</strong>
                        <span>Recruiter ready</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
