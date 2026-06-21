import { useState } from 'react'
import { motion } from 'framer-motion'

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.header
            className="site-header"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <a className="brand" href="#home">
                Dantini<span>Venu</span>
            </a>
            <button
                className="nav-toggle"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                    Home
                </a>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                    About
                </a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                    Skills
                </a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                    Projects
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </nav>
        </motion.header>
    )
}
