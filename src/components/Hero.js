import "./Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Barla Mahender</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science Engineer Post Graduate with a passion for building innovative solutions
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="Barla-Mahender_updated@1.pdf" className="btn btn-secondary" download>
                Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
