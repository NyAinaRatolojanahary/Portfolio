import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="project-card">
      <button
        className="project-card__trigger"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Voir les détails du projet ${project.title}`}
      >
        <span className={`project-card__visual project-card__visual--${project.visual}`} aria-hidden="true">
          <span className="project-card__visual-label">{project.visualLabel}</span>
          <span className="project-card__visual-title">{project.visualTitle}</span>
          <span className="project-card__visual-detail">{project.visualDetail}</span>
          <span className="project-card__visual-index">{String(index).padStart(2, '0')}</span>
        </span>
        <span className="project-card__body">
          <span className="project-card__context">{project.context}</span>
          <span className="project-card__title-row">
            <span className="project-card__title">{project.title}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
          <span className="project-card__summary">{project.summary}</span>
        </span>
      </button>
      <ul className="project-card__tags" aria-label={`Technologies de ${project.title}`}>
        {project.technologies.slice(0, 4).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
        {project.technologies.length > 4 && (
          <li className="project-card__more">+{project.technologies.length - 4}</li>
        )}
      </ul>
    </article>
  )
}

export default ProjectCard