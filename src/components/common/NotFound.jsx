function NotFound() {
  return (
    <section className="page-width home-section" aria-labelledby="not-found-title">
      <p className="eyebrow"><span /> Erreur 404</p>
      <h1 id="not-found-title">Cette page n’existe pas encore.</h1>
      <a className="text-link" href="/">Revenir à l’accueil</a>
    </section>
  )
}

export default NotFound