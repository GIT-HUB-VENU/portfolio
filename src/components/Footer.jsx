import { motion } from 'framer-motion'

const footerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Footer() {
    return (
        <motion.footer
            className="site-footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={footerVariants}
        >
            <div>
                <p>Designed and Developed by Dantini Venu Gopal</p>
                <p>© {new Date().getFullYear()}</p>
            </div>
            <a href="#home" className="back-top">
                Back To Top
            </a>
        </motion.footer>
    )
}
