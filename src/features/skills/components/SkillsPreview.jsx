import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { skillAreas } from '../data/skills.js'

function SkillsPreview() {
  return (
    <section className="home-skills" id="competences">
      <div className="page-width home-skills__inner">
        <div className="section-marker section-marker--light">
          <span>02</span>
          <span className="section-marker__line" />
          <span>Compétences</span>
        </div>
        <div className="home-skills__heading">
          <h2>Un regard sur toute la stack.</h2>
          <a className="text-link text-link--light" href="/competences">
            Voir les compétences
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="skill-areas">
          {skillAreas.map(({ title, icon: Icon, items }, index) => (
            <a className="skill-area" href="/competences" key={title}>
              <span className="skill-area__number">0{index + 1}</span>
              <Icon aria-hidden="true" size={25} strokeWidth={1.5} />
              <span className="skill-area__title">{title}</span>
              <span className="skill-area__items">
                {items.map((item) => item.name).join(' · ')}
              </span>
              <ArrowUpRight className="skill-area__arrow" aria-hidden="true" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview