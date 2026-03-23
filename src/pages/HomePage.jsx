import SectionTitle from '../components/common/SectionTitle'
import CaseStudyCard from '../components/sections/CaseStudyCard'
import ProcessFlow from '../components/sections/ProcessFlow'
import TestimonialSlider from '../components/sections/TestimonialSlider'
import {
  featuredCaseStudies,
  processSteps,
  services,
  testimonials,
  trustLogos,
} from '../data/content'

export default function HomePage() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Performance Marketing Agency</p>
            <h1>Skoorax: We turn clicks into customers.</h1>
            <p>
              We build profitable growth engines for ambitious e-commerce brands through data-backed
              paid media, content systems, and performance reporting.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get a Proposal
              </a>
              <a className="btn btn-secondary" href="#caseStudies">
                View Results
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <p>Revenue Focused Execution</p>
            <ul>
              <li>Structured campaign scaling</li>
              <li>Creative test velocity</li>
              <li>ROAS-first optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust-bar section-theme-trust">
        <div className="container trust-list">
          <p>As featured in / trusted by</p>
          {trustLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="section section-theme-services">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="What We Do"
            description="Specialized growth services built for measurable outcomes."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <p className="service-icon">{service.icon}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted section-theme-results">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Work"
            title="Real Campaigns. Real Numbers."
            description="Two highlighted engagements that show how structured execution drives profitable scale."
          />
          <div className="case-stack">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-theme-process">
        <div className="container">
          <SectionTitle
            eyebrow="Our Process"
            title="A 3-Step Engagement Teaser"
            description="Simple engagement model that keeps strategy and execution tightly aligned."
          />
          <ProcessFlow steps={processSteps.slice(0, 3)} />
        </div>
      </section>

      <section className="section section-muted section-theme-testimonials">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by Growth-Focused Teams"
            description="Client feedback from performance marketing engagements."
          />
          <TestimonialSlider items={testimonials} />
        </div>
      </section>
    </>
  )
}
