import SectionTitle from '../components/common/SectionTitle'
import { services, technologies } from '../data/content'

export default function ServicesPage() {
  return (
    <section id="services" className="section section-theme-services">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="The What We Do"
          description="Clear service categories to match growth stages and channel priorities."
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

        <div className="tech-wrap">
          <h3>Technologies We Use</h3>
          <ul className="chips">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
