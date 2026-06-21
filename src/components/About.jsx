import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function About() {
    return (
        <motion.section
            className="section-block"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={sectionVariants}>
                <span>01. About Me</span>
                <h2>Personal Story & Career Objective</h2>
            </motion.div>
            <motion.div className="about-grid" variants={containerVariants}>
                <motion.div className="glass-card about-copy" variants={sectionVariants}>
                    <p>
                        I am a passionate software developer who enjoys turning ideas into practical and user-friendly applications. I recently completed engineering studies and actively built full-stack web applications while strengthening skills in Java, JavaScript, REST APIs, databases, and modern web technologies.
                    </p>
                    <p>
                        I focus on frontend and backend development, API integration, application deployment, database management, and software design principles. I enjoy solving problems, learning emerging technologies, and building impactful software solutions.
                    </p>
                    <div className="about-highlights">
                        <span>Full-Stack Development</span>
                        <span>API Development</span>
                        <span>Database Management</span>
                        <span>Application Deployment</span>
                        <span>Software Design Principles</span>
                    </div>
                </motion.div>
                <motion.div className="timeline-card glass-card" variants={sectionVariants}>
                    <h3>Education Timeline</h3>
                    <div className="timeline-item">
                        <strong>B.Tech (Computer Science & Design)</strong>
                        <span>Malla Reddy Engineering College • 2023 – 2027</span>
                        <p>CGPA: 9.04</p>
                    </div>
                    <div className="timeline-item">
                        <strong>Intermediate (MPC)</strong>
                        <span>Sri Chaitanya Junior College • 2021 – 2023</span>
                        <p>92.8%</p>
                    </div>
                    <div className="timeline-item">
                        <strong>10th Standard</strong>
                        <span>Sri Sahithi High School • 2020 – 2021</span>
                        <p>CGPA: 10</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
