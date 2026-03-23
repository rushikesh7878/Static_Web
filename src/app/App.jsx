import { Suspense, lazy, useEffect, useMemo } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { siteMeta } from '../data/content'
import { useHashRoute } from '../hooks/useHashRoute'

const HomePage = lazy(() => import('../pages/HomePage'))
const CaseStudiesPage = lazy(() => import('../pages/CaseStudiesPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ProcessPage = lazy(() => import('../pages/ProcessPage'))
const InsightsPage = lazy(() => import('../pages/InsightsPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))

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
        <Suspense fallback={<div className="page-loading">Loading page...</div>}>
          <CurrentPage />
        </Suspense>
      </main>
      <Footer meta={siteMeta} />
    </div>
  )
}
