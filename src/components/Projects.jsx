import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-header">
        <span className="section-tag">Projetos</span>
        <h2>Projetos que mostram minha evolução prática</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? 'featured-project' : ''}`}
            key={project.title}
          >
            <div className="project-image">
              <img src={project.imageUrl} alt={`Preview do projeto ${project.title}`} />
            </div>

            <div className="project-info">
              {project.featured && <span className="project-badge">Destaque</span>}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-techs">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Ver projeto
                  </a>
                )}

                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Ver código
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects