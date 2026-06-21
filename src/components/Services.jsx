import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

export default function Services({ services }) {
    return (
        <motion.section
            className="section-block"
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={sectionVariants}>
                <span>03. Services</span>
            </motion.div>
            <motion.div className="services-grid" variants={containerVariants}>
                {services.map((service) => (
                    <motion.article
                        key={service.title}
                        className="service-card glass-card"
                        variants={sectionVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    )
}
