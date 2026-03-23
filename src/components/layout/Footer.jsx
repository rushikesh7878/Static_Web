function SocialIcon({ label }) {
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5zm.22-3.56A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.06zM20.44 13.4c0-3.3-1.76-4.84-4.11-4.84a3.55 3.55 0 0 0-3.2 1.76V8.5H9.75V20h3.38v-6.03c0-1.59.3-3.12 2.27-3.12 1.94 0 1.97 1.81 1.97 3.22V20h3.38l-.31-6.6z"
        />
      </svg>
    )
  }

  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <path
          fill="currentColor"
          d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 7.74A3.04 3.04 0 1 1 15.04 12 3.05 3.05 0 0 1 12 15.04zM18 7.1a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 18 7.1zm-6 14.9c-2.1 0-2.36 0-3.2-.05a5.52 5.52 0 0 1-1.86-.36 3.3 3.3 0 0 1-1.2-.78 3.3 3.3 0 0 1-.78-1.2 5.52 5.52 0 0 1-.36-1.86c0-.84-.05-1.1-.05-3.2s0-2.36.05-3.2a5.52 5.52 0 0 1 .36-1.86 3.3 3.3 0 0 1 .78-1.2 3.3 3.3 0 0 1 1.2-.78 5.52 5.52 0 0 1 1.86-.36c.84 0 1.1-.05 3.2-.05s2.36 0 3.2.05a5.52 5.52 0 0 1 1.86.36 3.42 3.42 0 0 1 1.99 1.98 5.52 5.52 0 0 1 .36 1.86c0 .84.05 1.1.05 3.2s0 2.36-.05 3.2a5.52 5.52 0 0 1-.36 1.86 3.3 3.3 0 0 1-.78 1.2 3.3 3.3 0 0 1-1.2.78 5.52 5.52 0 0 1-1.86.36c-.84 0-1.1.05-3.2.05zm0-1.5c2.06 0 2.3 0 3.13-.05a4.08 4.08 0 0 0 1.44-.27 1.92 1.92 0 0 0 1.1-1.1 4.08 4.08 0 0 0 .27-1.44c0-.83.05-1.07.05-3.13s0-2.3-.05-3.13a4.08 4.08 0 0 0-.27-1.44 1.92 1.92 0 0 0-1.1-1.1 4.08 4.08 0 0 0-1.44-.27C14.3 4.5 14.06 4.5 12 4.5s-2.3 0-3.13.05a4.08 4.08 0 0 0-1.44.27 1.92 1.92 0 0 0-1.1 1.1 4.08 4.08 0 0 0-.27 1.44C6 8.2 6 8.44 6 10.5s0 2.3.05 3.13a4.08 4.08 0 0 0 .27 1.44 1.92 1.92 0 0 0 1.1 1.1 4.08 4.08 0 0 0 1.44.27c.83.05 1.07.05 3.13.05z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M18.9 3h-3.2l-3.6 4.1L8.9 3H2.5l6.2 8.7L2 21h3.2l4.1-4.6 3.4 4.6h6.5l-6.5-9.1L18.9 3zm-5.1 16h-1.4L6.3 5h1.4l6.1 14z"
      />
    </svg>
  )
}

export default function Footer({ meta }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-logo" aria-hidden="true">
            S
          </span>
          <p className="footer-brand">{meta.brand}</p>
          <p>{meta.tagline}</p>
        </div>
        <div>
          <p className="footer-title">Quick Links</p>
          <a href="#home">Home</a>
          <a href="#caseStudies">Our Results</a>
          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <p className="footer-title">Email</p>
          <a href={`mailto:${meta.email}`}>{meta.email}</a>
          <p className="footer-title social-title">Social</p>
          <div className="social-links">
            {meta.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                <SocialIcon label={item.label} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Policy</p>
          <a href="#">Privacy Policy</a>
          <p className="footer-note">We respond within 24 hours.</p>
        </div>
      </div>
    </footer>
  )
}
