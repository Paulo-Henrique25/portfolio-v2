const services = [
  {
    title: 'Landing Pages',
    description:
      'Criação de páginas modernas, responsivas e focadas em apresentação profissional de serviços, produtos ou projetos.',
  },
  {
    title: 'Sites Responsivos',
    description:
      'Desenvolvimento de interfaces adaptadas para desktop, tablet e celular, mantendo boa experiência em diferentes telas.',
  },
  {
    title: 'Ajustes Visuais',
    description:
      'Correção de layout, espaçamento, cores, responsividade e melhorias em páginas HTML, CSS ou React já existentes.',
  },
  {
    title: 'Interfaces com React',
    description:
      'Construção de componentes reutilizáveis e páginas web utilizando React, JavaScript e organização de código.',
  },
]

function Services() {
  return (
    <section className="section services">
      <div className="section-header">
        <span className="section-tag">Serviços</span>
        <h2>Como posso contribuir em projetos web</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services