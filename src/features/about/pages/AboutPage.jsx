import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { academicProjects, education, experiences } from '../data/about.js'
import './AboutPage.css'

function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'À propos | Ny Aina Ratolojanahary'
    if (description) {
      description.content =
        'Découvrez le parcours, les expériences professionnelles, la formation et les projets académiques de Ny Aina Ratolojanahary.'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [])

  return (
    <div className="about-page">
      <section className="about-intro page-width" aria-labelledby="about-title">
        <div className="about-intro__heading">
          <p className="eyebrow"><span /> À propos</p>
          <h1 id="about-title">Un parcours entre développement applicatif et systèmes en production.</h1>
          <a className="about-scroll-link" href="#experience">
            Découvrir mon parcours
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="about-intro__copy">
          <p className="about-intro__lead">
            Je suis Ny Aina Ratolojanahary, développeur Fullstack formé en
            informatique, avec une expérience en développement d’applications
            et en exploitation de systèmes de traitement de données.
          </p>
          <p>
            Mon parcours m’a amené à travailler sur des sujets allant des
            interfaces web et services backend aux flux de données utilisés
            dans des environnements de production. J’apprécie comprendre un
            besoin dans son ensemble et contribuer à des solutions fiables et
            adaptées à leur contexte.
          </p>
          <a className="about-inline-link" href="/#contact">
            Échanger sur un projet
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <section className="about-experience" id="experience" aria-labelledby="experience-title">
        <div className="page-width">
          <div className="about-section-heading">
            <p className="eyebrow"><span /> Expérience professionnelle</p>
            <h2 id="experience-title">Mon parcours en entreprise</h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-item" key={experience.role}>
                <div className="experience-item__index" aria-hidden="true">
                  0{index + 1}
                </div>
                <div className="experience-item__main">
                  <p className="experience-item__period">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p className="experience-item__organization">{experience.organization}</p>
                </div>
                <div className="experience-item__detail">
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <ul className="about-tags" aria-label="Technologies utilisées">
                    {experience.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-education page-width" aria-labelledby="education-title">
        <div className="about-section-heading">
          <p className="eyebrow"><span /> Formation</p>
          <h2 id="education-title">Apprendre et approfondir</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <p className="education-item__period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="education-item__institution">{item.institution}</p>
              <p className="education-item__focus">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-projects" aria-labelledby="academic-projects-title">
        <div className="page-width">
          <div className="about-section-heading">
            <p className="eyebrow"><span /> Projets académiques</p>
            <h2 id="academic-projects-title">Des réalisations en formation</h2>
            <p className="about-section-heading__note">
              Présentées séparément de mon expérience professionnelle.
            </p>
          </div>
          <div className="academic-project-list">
            {academicProjects.map((project, index) => (
              <article className="academic-project" key={project.title}>
                <span className="academic-project__number">0{index + 1}</span>
                <div>
                  <p className="academic-project__context">{project.context}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="academic-project__detail">
                  <p>{project.summary}</p>
                  <ul className="about-tags" aria-label="Technologies utilisées">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  {project.githubUrl && (
                    <a
                      className="academic-project__link"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le dépôt GitHub
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-outlook page-width" aria-labelledby="outlook-title">
        <p className="eyebrow"><span /> Et maintenant</p>
        <div className="about-outlook__content">
          <h2 id="outlook-title">Continuer à progresser sur toute la stack.</h2>
          <p>
            Je souhaite approfondir le développement Fullstack, la conception
            d’applications et les systèmes backend, tout en continuant à
            apprendre au fil des projets.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage