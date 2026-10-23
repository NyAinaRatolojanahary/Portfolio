import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-summary"
        ref={dialogRef}
        tabIndex={-1}
      >
        <button className="project-modal__close" type="button" onClick={onClose} aria-label="Fermer les détails">
          <X aria-hidden="true" size={20} />
        </button>
        <p className="eyebrow"><span /> {project.context}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal__summary" id="project-modal-summary">
          {project.summary}
        </p>

        <div className="project-modal__section">
          <h3>Objectif</h3>
          <p>{project.objective}</p>
        </div>

        <div className="project-modal__section">
          <h3>Fonctionnalités documentées</h3>
          <ul className="project-modal__features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="project-modal__section">
          <h3>Technologies</h3>
          <ul className="project-card__tags project-modal__tags" aria-label="Technologies utilisées">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>

        <div className="project-modal__section project-modal__contribution">
          <h3>Contexte & contribution</h3>
          <p>{project.contribution}</p>
        </div>

        {project.githubUrl && (
          <a className="project-modal__github" href={project.githubUrl} target="_blank" rel="noreferrer">
            Consulter le dépôt GitHub
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        )}
      </section>
    </div>
  )
}

export default ProjectModal