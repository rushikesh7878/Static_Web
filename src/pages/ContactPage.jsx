import { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL
const INITIAL_FORM = {
  name: '',
  email: '',
  website: '',
  goal: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: 'Guaranteed response within 24 hours.',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

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
      submittedAt: new Date().toISOString(),
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
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Something went wrong while sending your request. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="section section-theme-contact">
      <div className="container contact-wrap">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Get a Proposal"
            description="Share your current setup and targets. We will respond within 24 hours."
          />
          <p>
            Tell us your website and main growth goal. We will return a scoped, channel-specific
            action plan.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary" disabled={submitState.status === 'submitting'}>
            {submitState.status === 'submitting' ? 'Submitting...' : 'Submit Proposal Request'}
          </button>
          <p className={`form-note form-note-${submitState.status}`}>{submitState.message}</p>
        </form>
      </div>
    </section>
  )
}
