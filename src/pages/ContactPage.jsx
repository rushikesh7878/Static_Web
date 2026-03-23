import { useEffect, useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL
const INITIAL_FORM = {
  name: '',
  email: '',
  website: '',
  goal: '',
}

function formatSubmittedAt(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date)
}

export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: 'Guaranteed response within 24 hours.',
  })
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function closeSuccessPopup() {
    setIsSuccessPopupOpen(false)
  }

  useEffect(() => {
    if (!isSuccessPopupOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsSuccessPopupOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSuccessPopupOpen])

  async function handleSubmit(event) {
    event.preventDefault()

    if (!GOOGLE_SCRIPT_URL) {
      setSubmitState({
        status: 'error',
        message: 'Add your Google Apps Script URL to VITE_GOOGLE_SCRIPT_URL to collect submissions.',
      })
      return
    }

    setSubmitState({
      status: 'submitting',
      message: 'Submitting your request...',
    })

    const payload = {
      ...formData,
      submittedAt: formatSubmittedAt(new Date()),
      source: 'contact-page',
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      setFormData(INITIAL_FORM)
      setSubmitState({
        status: 'success',
        message: 'Your request has been sent successfully.',
      })
      setIsSuccessPopupOpen(true)
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Something went wrong while sending your request. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="section section-theme-contact reveal-section" data-reveal="section">
      <div className="container contact-wrap reveal-stagger">
        <div className="reveal-item">
          <SectionTitle
            className="reveal-item"
            eyebrow="Contact"
            title="Get a Proposal"
            description="Share your current setup and targets. We will respond within 24 hours."
          />
          <p>
            Tell us your website and main growth goal. We will return a scoped, channel-specific
            action plan.
          </p>
        </div>
        <form className="contact-form reveal-item" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@brand.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="website">Website URL</label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            value={formData.website}
            onChange={handleChange}
            required
          />

          <label htmlFor="goal">Main Goal</label>
          <textarea
            id="goal"
            name="goal"
            rows="4"
            placeholder="Increase purchases while keeping ROAS stable"
            value={formData.goal}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={`btn btn-primary contact-submit-button ${
              submitState.status === 'submitting' ? 'is-submitting' : ''
            }`}
            disabled={submitState.status === 'submitting'}
          >
            {submitState.status === 'submitting' ? (
              <>
                <span className="button-loader" aria-hidden="true">
                  <span className="button-loader-ring" />
                  <span className="button-loader-dot" />
                </span>
                <span>Sending your request...</span>
              </>
            ) : (
              'Submit Proposal Request'
            )}
          </button>
          <p className={`form-note form-note-${submitState.status}`}>{submitState.message}</p>
        </form>
      </div>
      {isSuccessPopupOpen ? (
        <div className="contact-popup-backdrop" role="presentation" onClick={closeSuccessPopup}>
          <div
            className="contact-popup"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-description"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-popup-glow" aria-hidden="true" />
            <div className="contact-popup-badge" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="contact-popup-icon" aria-hidden="true">
              <span />
            </div>
            <h3 id="contact-success-title">Request Sent Successfully</h3>
            <p id="contact-success-description">
              Thanks for reaching out. We have received your details and will respond within 24
              hours with the next steps.
            </p>
            <button type="button" className="btn btn-primary contact-popup-button" onClick={closeSuccessPopup}>
              Awesome, close this
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
