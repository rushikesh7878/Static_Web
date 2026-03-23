import { useEffect, useMemo } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { siteMeta } from '../data/content'
import { useHashRoute } from '../hooks/useHashRoute'
import { useScrollReveal } from '../hooks/useScrollReveal'
import HomePage from '../pages/HomePage'
import CaseStudiesPage from '../pages/CaseStudiesPage'
import ServicesPage from '../pages/ServicesPage'
import ProcessPage from '../pages/ProcessPage'
import InsightsPage from '../pages/InsightsPage'
import ContactPage from '../pages/ContactPage'

const routes = {
  home: HomePage,
  caseStudies: CaseStudiesPage,
  services: ServicesPage,
  process: ProcessPage,
  insights: InsightsPage,
  contact: ContactPage,
}

export default function App() {
  const routeKey = useHashRoute(Object.keys(routes), 'home')
  const CurrentPage = useMemo(() => routes[routeKey] || HomePage, [routeKey])
  useScrollReveal(routeKey)

  useEffect(() => {
    const scrollToRouteTop = () => {
      const header = document.querySelector('.header')
      const headerOffset = header ? header.getBoundingClientRect().height : 0
      const target = document.getElementById(routeKey)

      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' })
        return
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    const raf = window.requestAnimationFrame(scrollToRouteTop)
    return () => window.cancelAnimationFrame(raf)
  }, [routeKey])

  return (
    <div className="site-shell">
      <Header routeKey={routeKey} />
      <main className="main-content">
        <CurrentPage />
      </main>
      <Footer meta={siteMeta} />
    </div>
  )
}
