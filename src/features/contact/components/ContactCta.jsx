import { ArrowUpRight } from 'lucide-react'

function ContactCta() {
  return (
    <section className="home-contact" id="contact">
      <div className="page-width home-contact__inner">
        <div>
          <p className="eyebrow eyebrow--light">Une idée en tête ?</p>
          <h2>Faisons avancer<br />votre prochain projet.</h2>
        </div>
        <a className="button button--contact" href="/contact">
          Me contacter
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </section>
  )
}

export default ContactCta