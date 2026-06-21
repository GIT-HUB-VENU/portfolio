import { motion } from 'framer-motion'

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

export default function Achievements() {
    return (
        <motion.section
            className="section-block"
            id="achievements"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={cardVariants}>
                <span>05. Achievements</span>
                <h2>Coding Profiles & Recognition</h2>
            </motion.div>
            <motion.div className="achievements-grid" variants={containerVariants}>
                <motion.div className="profile-card glass-card" variants={cardVariants} whileHover={{ y: -6, scale: 1.01 }}>
                    <h3>GitHub</h3>
                    <p>Explore my repositories, commit history, and open-source contributions.</p>
                    <a href="https://github.com/GIT-HUB-VENU" target="_blank" rel="noreferrer" className="button ghost">
                        View GitHub
                    </a>
                </motion.div>
                <motion.div className="profile-card glass-card" variants={cardVariants} whileHover={{ y: -6, scale: 1.01 }}>
                    <h3>HackerRank</h3>
                    <p>Track my problem-solving and algorithm skills through coding challenges.</p>
                    <a href="https://www.hackerrank.com/profile/venugopal5880844" target="_blank" rel="noreferrer" className="button ghost">
                        View HackerRank
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
