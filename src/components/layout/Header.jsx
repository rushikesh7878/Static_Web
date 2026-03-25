import { useEffect, useState } from 'react'
import skooraxLogo from '../../assets/Skoorax.png'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'caseStudies', label: 'Our Results' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Our Process' },
  { id: 'insights', label: 'Insights' },
]

export default function Header({ routeKey }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })

    return () => window.removeEventListener('scroll', updateHeaderState)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function toggleMobileMenu() {
    setIsMobileMenuOpen((current) => !current)
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={isScrolled ? 'header header-transparent' : 'header'}>
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Skoorax Home">
          <img className="brand-logo-image" src={skooraxLogo} alt="Skoorax" />
          <span>Skoorax</span>
        </a>
        <button
          type="button"
          className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="site-navigation"
          className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              className={routeKey === item.id ? 'nav-link active' : 'nav-link'}
              href={`#${item.id}`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact" onClick={closeMobileMenu}>
          Contact
        </a>
      </div>
    </header>
  )
}
