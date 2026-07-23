function ParticlesBackground() {
    return (
        <div className="particles-bg">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="particle" />
            ))}
        </div>
    )
}

export default ParticlesBackground
