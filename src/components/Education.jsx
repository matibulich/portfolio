import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/personalInfo'

function Education() {
    const [titleRef, titleInView] = useInView({ threshold: 0.5 })
    const [timelineRef, timelineInView] = useInView({ threshold: 0.1 })

    return (
        <section id="education" className="education">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${titleInView ? 'animate-in' : ''}`}>Educación</h2>
                <div ref={timelineRef} className="education-timeline">
                    {personalInfo.educacion.map((edu, index) => (
                        <div 
                            key={index} 
                            className={`education-item ${timelineInView ? 'animate-in' : ''}`}
                            style={{ transitionDelay: timelineInView ? `${index * 0.2}s` : '0s' }}
                        >
                            <div className="education-period">{edu.periodo}</div>
                            <div className="education-content">
                                <h3 className="education-title">{edu.titulo}</h3>
                                <p className="education-subtitle">{edu.subtitulo}</p>
                                <p className="education-institution">{edu.institucion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
