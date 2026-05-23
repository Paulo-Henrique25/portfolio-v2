function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {currentYear} Paulo Henrique. Desenvolvido com React.
      </p>
    </footer>
  )
}

export default Footer