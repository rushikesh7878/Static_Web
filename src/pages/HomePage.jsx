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
      <section id="home" className="hero reveal-section" data-reveal="hero">
        <div className="container hero-grid reveal-stagger">
          <div className="reveal-item">
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
          <div className="hero-panel reveal-item">
            <p>Revenue Focused Execution</p>
            <ul>
              <li>Structured campaign scaling</li>
              <li>Creative test velocity</li>
              <li>ROAS-first optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust-bar section-theme-trust reveal-section" data-reveal="section">
        <div className="container trust-list reveal-stagger">
          <p className="reveal-item">As featured in / trusted by</p>
          {trustLogos.map((logo) => (
            <span key={logo} className="reveal-item">
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-theme-services reveal-section" data-reveal="section">
        <div className="container">
          <SectionTitle
            className="reveal-item"
            eyebrow="Services"
            title="What We Do"
            description="Specialized growth services built for measurable outcomes."
          />
          <div className="service-grid reveal-stagger">
            {services.map((service) => (
              <article key={service.id} className="service-card reveal-item">
                <p className="service-icon">{service.icon}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-muted section-theme-results reveal-section"
        data-reveal="section"
      >
        <div className="container">
          <SectionTitle
            className="reveal-item"
            eyebrow="Featured Work"
            title="Real Campaigns. Real Numbers."
            description="Two highlighted engagements that show how structured execution drives profitable scale."
          />
          <div className="case-stack reveal-stagger">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-theme-process reveal-section" data-reveal="section">
        <div className="container">
          <SectionTitle
            className="reveal-item"
            eyebrow="Our Process"
            title="A 3-Step Engagement Teaser"
            description="Simple engagement model that keeps strategy and execution tightly aligned."
          />
          <ProcessFlow steps={processSteps.slice(0, 3)} />
        </div>
      </section>

      <section
        className="section section-muted section-theme-testimonials reveal-section"
        data-reveal="section"
      >
        <div className="container">
          <SectionTitle
            className="reveal-item"
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
