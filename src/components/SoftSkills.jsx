import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/personalInfo'

function SoftSkills() {
    const [titleRef, titleInView] = useInView({ threshold: 0.5 })
    const [gridRef, gridInView] = useInView({ threshold: 0.3 })

    return (
        <section id="softskills" className="softskills">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${titleInView ? 'animate-in' : ''}`}>Habilidades Blandas</h2>
                <div ref={gridRef} className="softskills-grid">
                    {personalInfo.habilidadesBlandas.map((skill, index) => (
                        <div
                            key={index}
                            className={`softskill-tag ${gridInView ? 'animate-in' : ''}`}
                            style={{ transitionDelay: gridInView ? `${index * 0.1}s` : '0s' }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SoftSkills
