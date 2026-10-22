import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ContactCta from '../../contact/components/ContactCta.jsx'
import ProjectsPreview from '../../projects/components/ProjectsPreview.jsx'
import SkillsPreview from '../../skills/components/SkillsPreview.jsx'
import portrait from '../../../assets/images/nyaina-profil.png'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <section className="home-hero page-width" aria-labelledby="hero-title">
        <div className="home-hero__copy">
          <p className="home-hero__greeting">Bonjour, je suis Ny Aina Ratolojanahary.</p>
          <h1 id="hero-title">
            Développeur <span>Fullstack</span>
          </h1>
          <p className="home-hero__description">
            Je conçois et développe des applications web en m’appuyant sur
            mes compétences en développement backend et frontend. J’aime
            transformer des idées et des besoins concrets en solutions
            fonctionnelles, tout en continuant à approfondir mes compétences
            techniques.
          </p>
          <div className="home-hero__actions">
            <a className="button button--primary" href="#projets">
              Découvrir mes projets
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button--secondary" href="#contact">
              Me contacter
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
          <p className="home-hero__availability">
            <span aria-hidden="true" /> Développement web · Backend &amp; frontend
          </p>
        </div>

        <div className="home-hero__visual">
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Portrait professionnel de Ny Aina Ratolojanahary"
              width="1086"
              height="1448"
              fetchPriority="high"
            />
            <div className="portrait-frame__label" aria-hidden="true">
              <span>Dev ·</span>
              <strong>NA<span>.</span></strong>
            </div>
          </div>
          <span className="home-hero__visual-note">Conception · Développement · Évolution</span>
        </div>
      </section>

      <div className="home-ribbon" aria-label="Domaines de développement">
        <div className="home-ribbon__inner page-width">
          <span>Applications web</span><i aria-hidden="true" />
          <span>Backend</span><i aria-hidden="true" />
          <span>Frontend</span><i aria-hidden="true" />
          <span>Apprentissage continu</span>
        </div>
      </div>

      <section className="home-section home-about page-width" id="a-propos">
        <div className="section-marker">
          <span>01</span>
          <span className="section-marker__line" />
          <span>À propos</span>
        </div>
        <div className="home-about__content">
          <h2>Construire des expériences web, du concept au code.</h2>
          <div className="home-about__detail">
            <p>
              Mon parcours associe une Licence en Informatique, option Web et
              Design, une première année de Master en Informatique et une
              expérience chez Orange Madagascar. J’explore les différentes
              étapes de création d’une application, de l’interface à la
              logique côté serveur, avec l’envie de concevoir des solutions
              utiles et bien pensées.
            </p>
            <a className="text-link" href="/a-propos">
              En savoir plus sur mon parcours
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>

      <SkillsPreview />
      <ProjectsPreview />
      <ContactCta />
    </>
  )
}

export default HomePage