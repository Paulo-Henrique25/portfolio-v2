function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-content">
        <span className="section-tag">Contato</span>

        <h2>Vamos conversar sobre uma oportunidade ou projeto?</h2>

        <p>
          Estou disponível para oportunidades como Desenvolvedor Front-End
          Júnior, Assistente de Desenvolvimento e também para projetos
          freelancer envolvendo páginas, interfaces e sites responsivos.
        </p>

        <div className="contact-links">
          <a href="mailto:paulostack.dev@gmail.com" className="btn btn-primary">
            Enviar e-mail
          </a>

          <a
            href="https://www.linkedin.com/in/paulohenrique01/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Paulo-Henrique25"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>

          <div className="contact-links">
            <a
              href="https://wa.me/5533998120675?text=Olá,%20Paulo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact