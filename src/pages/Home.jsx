import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import SoftSkills from '../components/SoftSkills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ParticlesBackground from '../components/ParticlesBackground'

function Home() {
    return (
        <div className="home">
            <ParticlesBackground />
            <Header />
            <Hero />
            <About />
            <Skills />
            <SoftSkills />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
