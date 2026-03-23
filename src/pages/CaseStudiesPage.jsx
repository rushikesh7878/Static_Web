import SectionTitle from '../components/common/SectionTitle'
import CaseStudyCard from '../components/sections/CaseStudyCard'
import { caseStudies } from '../data/content'

export default function CaseStudiesPage() {
  return (
    <section id="caseStudies" className="section section-theme-results reveal-section" data-reveal="section">
      <div className="container">
        <SectionTitle
          className="reveal-item"
          eyebrow="Case Studies"
          title="Results and Process in Detail"
          description="Each engagement is structured as a mini-report: goal, strategy, media, and measurable outcomes."
        />
        <div className="case-stack reveal-stagger">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
