import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const fillVariants = {
    hidden: { width: '0%' },
    visible: (level) => ({
        width: `${level}%`,
        transition: { duration: 1, ease: 'easeOut' },
    }),
}

export default function Skills({ skills }) {
    return (
        <motion.section
            className="section-block"
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={sectionVariants}>
                <span>02. Skills</span>
                <h2>Technical Expertise</h2>
            </motion.div>
            <motion.div className="skills-grid" variants={containerVariants}>
                {skills.map((skill) => (
                    <motion.div
                        key={skill.title}
                        className="skill-card"
                        variants={sectionVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                    >
                        <div className="skill-top">
                            <span>{skill.title}</span>
                            <strong>{skill.level}%</strong>
                        </div>
                        <div className="skill-bar">
                            <motion.div
                                className="skill-fill"
                                variants={fillVariants}
                                custom={skill.level}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}
