import { useInView } from '../hooks/useInView'
import { skills } from '../data/skills'

function Skills() {
    const [titleRef, titleInView] = useInView({ threshold: 0.5 })
    const [gridRef, gridInView] = useInView({ threshold: 0.1 })

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${titleInView ? 'animate-in' : ''}`}>Habilidades Técnicas</h2>
                <div ref={gridRef} className="skills-grid">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className={`skill-card ${gridInView ? 'animate-in' : ''}`}
                            style={{ transitionDelay: gridInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="skill-icon">
                                <img src={skill.icono} alt={skill.nombre} />
                            </div>
                            <h3 className="skill-name">{skill.nombre}</h3>
                            <p className="skill-description">{skill.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
