const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
  'Responsividade',
  'UI Design',
]

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-header">
        <span className="section-tag">Skills</span>
        <h2>Tecnologias e habilidades que utilizo</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills