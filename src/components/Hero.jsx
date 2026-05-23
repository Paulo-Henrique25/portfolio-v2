function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">Desenvolvedor Front-End</span>

        <h1>
          Olá, eu sou <strong>Paulo Henrique</strong>
        </h1>

        <p>
          Crio interfaces modernas, responsivas e funcionais para web,
          utilizando HTML, CSS, JavaScript, React e boas práticas de UI.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver projetos
          </a>

          <a href="#contact" className="btn btn-secondary">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero