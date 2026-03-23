import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'caseStudies', label: 'Our Results' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Our Process' },
  { id: 'insights', label: 'Insights' },
]

export default function Header({ routeKey }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })

    return () => window.removeEventListener('scroll', updateHeaderState)
  }, [])

  return (
    <header className={isScrolled ? 'header header-transparent' : 'header'}>
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Skoorax Home">
          <span className="brand-logo" aria-hidden="true">
            S
          </span>
          <span>Skoorax</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={routeKey === item.id ? 'nav-link active' : 'nav-link'}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact">
          Contact
        </a>
      </div>
    </header>
  )
}
