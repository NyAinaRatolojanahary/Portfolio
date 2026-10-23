import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Link, Mail, Send } from 'lucide-react'
import { sendContactMessage } from '../api/sendContactMessage.js'
import { contactDetails } from '../data/contact.js'
import './ContactPage.css'

const initialFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  _gotcha: '',
}

const fieldLabels = {
  name: 'nom',
  email: 'adresse e-mail',
  subject: 'sujet',
  message: 'message',
}

function validateField(name, value) {
  const trimmedValue = value.trim()

  if (!trimmedValue) return `Veuillez renseigner votre ${fieldLabels[name]}.`
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return 'Veuillez saisir une adresse e-mail valide.'
  }
  if (name === 'message' && trimmedValue.length < 10) {
    return 'Votre message doit contenir au moins 10 caractères.'
  }

  return ''
}

function ContactPage() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Contact | Ny Aina Ratolojanahary'
    if (description) {
      description.content =
        'Contactez Ny Aina Ratolojanahary pour une opportunité professionnelle, un projet web ou une collaboration.'
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFields((currentFields) => ({ ...currentFields, [name]: value }))
    setStatus(null)

    if (hasSubmitted && name !== '_gotcha') {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, value),
      }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    if (name === '_gotcha') return

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    setHasSubmitted(true)
    const nextErrors = Object.fromEntries(
      Object.keys(fieldLabels).map((name) => [name, validateField(name, fields[name])]),
    )
    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors).find((name) => nextErrors[name])
    if (firstInvalidField) {
      formRef.current?.elements.namedItem(firstInvalidField)?.focus()
      setStatus({
        type: 'error',
        message: 'Vérifiez les champs signalés avant l’envoi.',
        showEmailLink: false,
      })
      return
    }

    if (fields._gotcha) {
      setStatus({ type: 'success', message: 'Votre message a bien été envoyé.' })
      setFields(initialFields)
      return
    }

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Le formulaire n’est pas encore configuré. Vous pouvez m’écrire directement par e-mail.',
        showEmailLink: true,
      })
      return
    }

    setIsSubmitting(true)
    try {
      await sendContactMessage(endpoint, {
        name: fields.name.trim(),
        email: fields.email.trim(),
        subject: fields.subject.trim(),
        message: fields.message.trim(),
        _gotcha: fields._gotcha,
      })
      setFields(initialFields)
      setErrors({})
      setHasSubmitted(false)
      setStatus({ type: 'success', message: 'Votre message a bien été envoyé.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'L’envoi a échoué. Réessayez ou contactez-moi directement par e-mail.',
        showEmailLink: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const mailtoHref = `mailto:${contactDetails.email}`

  return (
    <div className="contact-page">
      <section className="contact-intro page-width" aria-labelledby="contact-title">
        <div className="contact-intro__heading">
          <p className="eyebrow"><span /> Contact</p>
          <h1 id="contact-title">Parlons de votre prochain projet.</h1>
        </div>
        <p className="contact-intro__copy">
          Une opportunité professionnelle, une idée à développer ou une
          collaboration en tête ? Vous pouvez m’écrire directement ou utiliser
          le formulaire.
        </p>
      </section>

      <section className="contact-content" aria-label="Coordonnées et formulaire de contact">
        <div className="page-width contact-content__grid">
          <aside className="contact-details" aria-labelledby="contact-details-title">
            <p className="eyebrow"><span /> Restons en contact</p>
            <h2 id="contact-details-title">Les bons échanges commencent par un message.</h2>
            <p className="contact-details__note">
              Pour un échange professionnel ou une question au sujet de mon parcours,
              vous pouvez me joindre ici.
            </p>
            <a className="contact-detail-link" href={mailtoHref}>
              <span className="contact-detail-link__icon"><Mail aria-hidden="true" size={19} /></span>
              <span>
                <span className="contact-detail-link__label">E-mail</span>
                <span className="contact-detail-link__value">{contactDetails.email}</span>
              </span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a className="contact-detail-link" href={contactDetails.linkedIn} target="_blank" rel="noreferrer">
              <span className="contact-detail-link__icon"><Link aria-hidden="true" size={19} /></span>
              <span>
                <span className="contact-detail-link__label">LinkedIn</span>
                <span className="contact-detail-link__value">Voir mon profil</span>
              </span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </aside>

          <div className="contact-form-panel">
            <div className="contact-form-panel__heading">
              <span>Contact</span>
              <span>Écrire un message</span>
            </div>
            {!endpoint && (
              <p className="contact-form__notice" role="status">
                Le formulaire sera activé après configuration du service d’envoi.
                En attendant, contactez-moi par e-mail.
              </p>
            )}

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__field">
                <label htmlFor="contact-name">Nom</label>
                <input
                  autoComplete="name"
                  id="contact-name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  required
                />
                {errors.name && <span className="contact-form__error" id="contact-name-error">{errors.name}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">E-mail</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  required
                />
                {errors.email && <span className="contact-form__error" id="contact-email-error">{errors.email}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-subject">Sujet</label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  required
                />
                {errors.subject && <span className="contact-form__error" id="contact-subject-error">{errors.subject}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  required
                />
                {errors.message && <span className="contact-form__error" id="contact-message-error">{errors.message}</span>}
              </div>

              <div className="contact-form__trap" aria-hidden="true">
                <label htmlFor="contact-gotcha">Laisser ce champ vide</label>
                <input
                  autoComplete="off"
                  id="contact-gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  value={fields._gotcha}
                  onChange={handleChange}
                />
              </div>

              <button className="contact-form__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
                {!isSubmitting && <Send aria-hidden="true" size={16} />}
              </button>

              {status && (
                <p className={`contact-form__status contact-form__status--${status.type}`} role="status" aria-live="polite">
                  {status.message}{' '}
                  {status.showEmailLink && (
                    <a href={mailtoHref}>Écrire un e-mail</a>
                  )}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage