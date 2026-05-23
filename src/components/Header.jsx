function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Paulo<span>Henrique</span>
      </a>

      <nav className="nav">
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Header