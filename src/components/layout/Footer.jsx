function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width site-footer__inner">
        <a className="site-footer__brand" href="/">NA<span>.</span></a>
        <p>Ny Aina Ratolojanahary · Développeur Fullstack</p>
        <span>© {new Date().getFullYear()} · Tous droits réservés</span>
      </div>
    </footer>
  )
}

export default Footer