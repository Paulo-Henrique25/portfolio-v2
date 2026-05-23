function About() {
  return (
    <section className="section about" id="about">
      <div className="section-header">
        <span className="section-tag">Sobre mim</span>
        <h2>Um pouco sobre minha trajetória</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Sou Paulo Henrique, desenvolvedor Front-End em evolução, focado na
            criação de interfaces modernas, responsivas e funcionais para web.
          </p>

          <p>
            Tenho experiência prática com HTML, CSS, JavaScript, React, Git e
            GitHub, desenvolvendo projetos próprios para fortalecer minha base
            técnica e construir soluções cada vez mais próximas do mercado.
          </p>

          <p>
            Atualmente busco oportunidades como Desenvolvedor Front-End Júnior,
            Assistente de Desenvolvimento ou projetos freelancer, contribuindo
            com páginas, landing pages, interfaces web e manutenção de sites.
          </p>
        </div>

        <div className="about-card">
          <h3>Foco atual</h3>

          <ul>
            <li>Desenvolvimento Front-End</li>
            <li>Interfaces responsivas</li>
            <li>React e JavaScript</li>
            <li>Boas práticas de UI</li>
            <li>Projetos reais para portfólio</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About