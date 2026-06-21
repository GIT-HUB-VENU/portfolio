import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Resume({ resumeLink }) {
    return (
        <motion.section
            className="resume-section section-block"
            id="resume"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <motion.div className="resume-card glass-card" variants={sectionVariants} whileHover={{ y: -6, scale: 1.01 }}>
                <div>
                    <span>Resume</span>
                    <h2>Professional Resume Preview</h2>
                    <p>Download the complete resume to review skills, projects, education, and achievements.</p>
                </div>
                <a className="button primary" href={resumeLink} target="_blank" rel="noreferrer">
                    Download Resume
                </a>
            </motion.div>
        </motion.section>
    )
}
