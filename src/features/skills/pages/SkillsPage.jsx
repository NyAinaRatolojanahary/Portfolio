import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { skillAreas, skillHighlights } from '../data/skills.js'
import './SkillsPage.css'

function SkillsPage() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Compétences | Ny Aina Ratolojanahary'
    if (description) {
      description.content =
        'Compétences de Ny Aina Ratolojanahary en développement backend, frontend, bases de données, systèmes et outils, avec leurs contextes d’utilisation.'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [])

  return (
    <div className="skills-page">
      <section className="skills-intro page-width" aria-labelledby="skills-title">
        <div className="skills-intro__heading">
          <p className="eyebrow"><span /> Compétences</p>
          <h1 id="skills-title">Des outils choisis selon le problème à résoudre.</h1>
        </div>
        <div className="skills-intro__copy">
          <p>
            Mon parcours associe développement d’applications, traitement de
            données et exploitation de systèmes en production. Voici les
            technologies rencontrées en entreprise, en stage et dans mes
            projets académiques.
          </p>
          <a className="skills-intro__link" href="/a-propos#experience">
            Voir les expériences associées
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>

      <section className="skills-catalog" aria-label="Compétences par domaine">
        <div className="page-width skills-catalog__grid">
          {skillAreas.map(({ title, icon: Icon, items }, index) => (
            <section className="skills-group" key={title} aria-labelledby={`skill-group-${index}`}>
              <div className="skills-group__heading">
                <span className="skills-group__index">0{index + 1}</span>
                <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
                <h2 id={`skill-group-${index}`}>{title}</h2>
              </div>
              <ul className="skills-group__list">
                {items.map(({ name, kind, context }) => (
                  <li className={`skill-row${context ? '' : ' skill-row--solo'}`} key={name}>
                    <span className="skill-row__identity">
                      <span className="skill-row__name">{name}</span>
                      <span className="skill-row__kind">{kind}</span>
                    </span>
                    {context && <span className="skill-row__context">{context}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="skills-impact" aria-labelledby="skills-impact-title">
        <div className="page-width skills-impact__inner">
          <div className="skills-impact__heading">
            <p className="eyebrow eyebrow--light"><span /> Expérience en production</p>
            <h2 id="skills-impact-title">Des systèmes à l’échelle opérationnelle.</h2>
          </div>
          <div className="skills-impact__figures">
            {skillHighlights.map(({ value, label }) => (
              <div className="skills-impact__figure" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="page-width skills-impact__source">
          <a href="/a-propos#experience">
            Contexte de l’expérience chez Orange Madagascar
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </section>

      <section className="skills-next page-width">
        <p className="eyebrow"><span /> Pour aller plus loin</p>
        <div className="skills-next__content">
          <h2>Les compétences prennent leur sens dans les réalisations.</h2>
          <a className="skills-next__link" href="/a-propos#academic-projects-title">
            Découvrir mon parcours et mes projets
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default SkillsPage