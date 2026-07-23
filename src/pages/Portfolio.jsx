import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Footer from '../components/Footer'
import ParticlesBackground from '../components/ParticlesBackground'

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const [gridRef, gridInView] = useInView({ threshold: 0.1 })

    useEffect(() => {
        window.scrollTo(0, 0)
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openModal = (project) => {
        setSelectedProject(project)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'auto'
    }

    return (
        <div className="portfolio-page animate-fade-in">
            <ParticlesBackground />
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo">Matías Bulich</Link>
                        <nav className="nav-portfolio">
                            <Link to="/" className="btn-back">
                                <span className="btn-back-text">Volver al Inicio</span>
                                <span className="btn-back-icon">←</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="portfolio-section">
                <div className="container">
                    <div className="portfolio-header">
                        <h1 className="page-title gradient-text">Mi Portfolio</h1>
                        <div className="title-underline"></div>
                        <p className="page-subtitle">Explora los proyectos que he desarrollado con pasión y dedicación.</p>
                    </div>

                    <div ref={gridRef} className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => openModal(project)}
                                animationDelay={index * 0.1}
                                isInView={gridInView}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}

            <Footer />
        </div>
    )
}

export default Portfolio
