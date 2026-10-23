import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { academicProjects, upcomingProjects } from '../data/projects.js'
import './ProjectsPage.css'

function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Projets | Ny Aina Ratolojanahary'
    if (description) {
      description.content =
        'Projets académiques de Ny Aina Ratolojanahary : application MEAN de gestion commerciale, prototype d’identité numérique et application de course par étapes.'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [])

  return (
    <div className="projects-page">
      <section className="projects-intro page-width" aria-labelledby="projects-title">
        <div className="projects-intro__heading">
          <p className="eyebrow"><span /> Projets sélectionnés</p>
          <h1 id="projects-title">Des projets pour donner forme aux idées.</h1>
        </div>
        <div className="projects-intro__copy">
          <p>
            Réalisations académiques explorant la gestion commerciale,
            l’identité numérique et le suivi d’une course. Les détails
            ci-dessous sont tirés des dépôts et de leurs fichiers de projet.
          </p>
          <a className="projects-intro__link" href="#project-grid">
            Parcourir les projets
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <section className="projects-catalog" id="project-grid" aria-label="Projets académiques">
        <div className="page-width">
          <div className="projects-catalog__heading">
            <p className="eyebrow"><span /> Réalisations académiques</p>
            <span className="projects-catalog__count">
              {academicProjects.length}{' '}
              {academicProjects.length === 1 ? 'projet réalisé' : 'projets réalisés'}
            </span>
          </div>
          <div className="projects-grid">
            {academicProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 1}
                onOpen={setActiveProject}
              />
            ))}
          </div>

          <div className="upcoming-projects" aria-labelledby="upcoming-title">
            <div className="projects-catalog__heading upcoming-projects__heading">
              <div>
                <p className="eyebrow"><span /> En cours</p>
                <h2 id="upcoming-title">La suite s’écrit.</h2>
              </div>
              <span className="projects-catalog__count">
                {upcomingProjects.length}{' '}
                {upcomingProjects.length === 1 ? 'projet en cours' : 'projets en cours'}
              </span>
            </div>
            <div className="upcoming-projects__grid">
              {upcomingProjects.map((project) => (
                <article className={`upcoming-slot${project.title ? ' upcoming-slot--filled' : ''}`} key={project.id}>
                  <div className="upcoming-slot__top">
                    <span className="upcoming-slot__number">{project.number}</span>
                    <span className="upcoming-slot__status">{project.status}</span>
                  </div>
                  <h3>{project.title || 'Projet en cours'}</h3>
                  <p className="upcoming-slot__summary">
                    {project.summary || 'Informations à préciser'}
                  </p>
                  {project.features.length > 0 && (
                    <ul className="upcoming-slot__features">
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  )}
                  {project.technologies.length > 0 && (
                    <ul className="upcoming-slot__technologies" aria-label={`Technologies de ${project.title}`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}

export default ProjectsPage