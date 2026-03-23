import SectionTitle from '../components/common/SectionTitle'
import CaseStudyCard from '../components/sections/CaseStudyCard'
import { caseStudies } from '../data/content'

export default function CaseStudiesPage() {
  return (
    <section id="caseStudies" className="section section-theme-results">
      <div className="container">
        <SectionTitle
          eyebrow="Case Studies"
          title="Results and Process in Detail"
          description="Each engagement is structured as a mini-report: goal, strategy, media, and measurable outcomes."
        />
        <div className="case-stack">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
