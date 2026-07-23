import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/personalInfo'
import heroImage from '../assets/images/hero.webp'

function About() {
    const [titleRef, titleInView] = useInView({ threshold: 0.5 })
    const [contentRef, contentInView] = useInView({ threshold: 0.3 })

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${titleInView ? 'animate-in' : ''}`}>Sobre Mí</h2>
                <div className="about-content">
                    <div ref={contentRef} className={`about-image ${contentInView ? 'animate-in' : ''}`}>
                        <img src={heroImage} alt={personalInfo.nombreCorto} />
                    </div>
                    <div className={`about-text ${contentInView ? 'animate-in' : ''}`}>
                        <p>{personalInfo.presentacion}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
