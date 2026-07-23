import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        {personalInfo.nombreCorto}
                    </Link>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#about" onClick={closeMenu} style={{ '--i': 1 }}>Sobre Mí</a>
                        <a href="#skills" onClick={closeMenu} style={{ '--i': 2 }}>Habilidades</a>
                        <a href="#education" onClick={closeMenu} style={{ '--i': 3 }}>Educación</a>
                        <a href="#contact" onClick={closeMenu} style={{ '--i': 4 }}>Contacto</a>
                    </nav>
                </div>
            </div>
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </header>
    )
}

export default Header
