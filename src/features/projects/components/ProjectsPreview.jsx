import { ArrowRight } from 'lucide-react'

function ProjectsPreview() {
  return (
    <section className="home-projects page-width" id="projets">
      <div className="section-marker">
        <span>03</span>
        <span className="section-marker__line" />
        <span>Projets</span>
      </div>
      <div className="home-projects__content">
        <h2>Des idées devenues concrètes.</h2>
        <p>
          La sélection de projets sera présentée ici avec leur contexte,
          les technologies utilisées et les contributions réalisées.
        </p>
        <a className="text-link" href="/projets">
          Explorer les projets
          <ArrowRight aria-hidden="true" size={17} />
        </a>
      </div>
      <div className="home-projects__index" aria-hidden="true">03<span>—</span>∞</div>
    </section>
  )
}

export default ProjectsPreview