import { useState, useEffect } from 'react'

function ProjectModal({ project, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose()
            } else if (e.key === 'ArrowLeft') {
                prevImage()
            } else if (e.key === 'ArrowRight') {
                nextImage()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [project])

    if (!project) return null

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.imagenes.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.imagenes.length - 1 : prev - 1
        )
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-body">
                    <div className="modal-gallery">
                        <div className="gallery-main">
                            <img
                                src={project.imagenes[currentImageIndex]}
                                alt={`${project.nombre} - ${currentImageIndex + 1}`}
                            />
                            {project.imagenes.length > 1 && (
                                <>
                                    <button className="gallery-btn gallery-btn-prev" onClick={prevImage} aria-label="Imagen anterior">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    <button className="gallery-btn gallery-btn-next" onClick={nextImage} aria-label="Siguiente imagen">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                        {project.imagenes.length > 1 && (
                            <div className="gallery-thumbnails">
                                {project.imagenes.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${project.nombre} thumbnail ${index + 1}`}
                                        className={index === currentImageIndex ? 'active' : ''}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="modal-info">
                        <h2>{project.nombre}</h2>
                        <p className="modal-description">{project.descripcion}</p>

                        <div className="modal-technologies">
                            <h3>Tecnologías Utilizadas</h3>
                            <div className="tech-tags">
                                {project.tecnologias.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Ver en GitHub
                            </a>
                            <a
                                href={project.sitioWeb}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link modal-link-primary"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Ver Sitio Web
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
