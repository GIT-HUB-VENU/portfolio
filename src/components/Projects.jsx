import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Projects({ projects }) {
    return (
        <motion.section
            className="section-block"
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={sectionVariants}>
                <span>04. Projects</span>
                <h2>Featured Case Studies</h2>
            </motion.div>
            <motion.div className="projects-grid" variants={containerVariants}>
                {projects.map((project) => (
                    <motion.article
                        key={project.name}
                        className="project-card glass-card"
                        variants={sectionVariants}
                        whileHover={{ y: -8, scale: 1.01 }}
                    >
                        <div className="project-top">
                            <span>Project</span>
                            <h3>{project.name}</h3>
                        </div>
                        <p>{project.description}</p>
                        <p className="project-tech">{project.technologies}</p>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className="project-actions">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer" className="button ghost">
                                    Visit Live
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    )
}
