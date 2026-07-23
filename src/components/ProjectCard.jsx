function ProjectCard({ project, onClick, animationDelay = 0, isInView = false }) {
    return (
        <div 
            className={`project-card ${isInView ? 'animate-in' : ''}`}
            onClick={onClick}
            style={{ transitionDelay: `${animationDelay}s` }}
        >
            <div className="project-card-image">
                <img src={project.imagenes[0]} alt={project.nombre} />
                <div className="project-card-overlay">
                    <div className="project-info">
                        <h3>{project.nombre}</h3>
                        <div className="project-tags">
                            {project.tecnologias.slice(0, 3).map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="project-action">
                        <span>Ver Proyecto</span>
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
