import skooraxLogo from '../../assets/Skoorax.png'

function SocialIcon({ label }) {
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <path
          fill="#FFFFFF"
          d="M7.08 9H4.36v8.76h2.72V9zM7.26 6.28a1.58 1.58 0 1 0-3.16 0 1.58 1.58 0 0 0 3.16 0zM19.64 12.36c0-2.66-1.42-3.9-3.31-3.9a2.86 2.86 0 0 0-2.58 1.42V9H11v8.76h2.72v-4.59c0-1.21.24-2.38 1.83-2.38 1.56 0 1.59 1.38 1.59 2.45v4.52h2.72l-.22-5.4z"
        />
      </svg>
    )
  }

  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <defs>
          <linearGradient id="instagramGradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.32" stopColor="#FA7E1E" />
            <stop offset="0.62" stopColor="#D62976" />
            <stop offset="0.82" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagramGradient)" />
        <path
          fill="#FFFFFF"
          d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.61 4.61 0 0 0 12 7.4zm0 7.67A3.07 3.07 0 1 1 15.07 12 3.08 3.08 0 0 1 12 15.07zm5.86-7.85a1.07 1.07 0 1 1-1.07-1.07 1.07 1.07 0 0 1 1.07 1.07zM20.9 12c0-1.23.01-2.45-.06-3.68a7.52 7.52 0 0 0-.5-2.4 4.84 4.84 0 0 0-2.76-2.76 7.52 7.52 0 0 0-2.4-.5C13.95 2.59 12.73 2.6 11.5 2.6s-2.45-.01-3.68.06a7.52 7.52 0 0 0-2.4.5A4.84 4.84 0 0 0 2.66 5.9a7.52 7.52 0 0 0-.5 2.4C2.09 9.55 2.1 10.77 2.1 12s-.01 2.45.06 3.68a7.52 7.52 0 0 0 .5 2.4 4.84 4.84 0 0 0 2.76 2.76 7.52 7.52 0 0 0 2.4.5c1.23.07 2.45.06 3.68.06s2.45.01 3.68-.06a7.52 7.52 0 0 0 2.4-.5 4.84 4.84 0 0 0 2.76-2.76 7.52 7.52 0 0 0 .5-2.4c.07-1.23.06-2.45.06-3.68zm-1.57 0c0 1.19.01 2.38-.06 3.56a5.94 5.94 0 0 1-.34 1.81 3.23 3.23 0 0 1-1.85 1.85 5.94 5.94 0 0 1-1.81.34c-1.18.07-2.37.06-3.56.06s-2.38.01-3.56-.06a5.94 5.94 0 0 1-1.81-.34 3.23 3.23 0 0 1-1.85-1.85 5.94 5.94 0 0 1-.34-1.81c-.07-1.18-.06-2.37-.06-3.56s-.01-2.38.06-3.56a5.94 5.94 0 0 1 .34-1.81 3.23 3.23 0 0 1 1.85-1.85 5.94 5.94 0 0 1 1.81-.34c1.18-.07 2.37-.06 3.56-.06s2.38-.01 3.56.06a5.94 5.94 0 0 1 1.81.34 3.23 3.23 0 0 1 1.85 1.85 5.94 5.94 0 0 1 .34 1.81c.07 1.18.06 2.37.06 3.56z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="#1D9BF0"
        d="M21 7.2c-.66.3-1.37.5-2.12.59a3.72 3.72 0 0 0 1.63-2.05 7.41 7.41 0 0 1-2.35.9 3.7 3.7 0 0 0-6.3 3.36A10.5 10.5 0 0 1 4.24 6.1a3.7 3.7 0 0 0 1.14 4.94 3.65 3.65 0 0 1-1.68-.46v.05A3.7 3.7 0 0 0 6.66 14a3.8 3.8 0 0 1-.97.13c-.24 0-.47-.03-.7-.07a3.71 3.71 0 0 0 3.46 2.57A7.43 7.43 0 0 1 3 18.16a10.48 10.48 0 0 0 5.67 1.66c6.8 0 10.52-5.63 10.52-10.52v-.48A7.3 7.3 0 0 0 21 7.2z"
      />
      <path
        fill="#FFFFFF"
        d="M16.47 6.6h-1.06l-3.3 4.2L9.1 6.6H6.7l4.08 5.58L6.5 17.4h1.06l3.69-4.68 3.24 4.68h2.4l-4.19-6.01 3.72-4.79z"
        opacity="0"
      />
    </svg>
  )
}

export default function Footer({ meta }) {
  return (
    <footer className="footer reveal-section" data-reveal="footer">
      <div className="container footer-grid reveal-stagger">
        <div className="reveal-item">
          <img className="footer-logo-image" src={skooraxLogo} alt="Skoorax" />
          <p className="footer-brand">{meta.brand}</p>
          <p>{meta.tagline}</p>
        </div>
        <div className="reveal-item">
          <p className="footer-title">Quick Links</p>
          <a href="#home">Home</a>
          <a href="#caseStudies">Our Results</a>
          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="reveal-item">
          <p className="footer-title">Email</p>
          <a href={`mailto:${meta.email}`}>{meta.email}</a>
          <p className="footer-title social-title">Social</p>
          <div className="social-links">
            {meta.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                <SocialIcon label={item.label} />
                <span className="social-link-label">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="reveal-item">
          <p className="footer-title">Policy</p>
          <a href="#">Privacy Policy</a>
          <p className="footer-note">We respond within 24 hours.</p>
        </div>
      </div>
    </footer>
  )
}
