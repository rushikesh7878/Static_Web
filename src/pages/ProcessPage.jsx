import SectionTitle from '../components/common/SectionTitle'
import ProcessFlow from '../components/sections/ProcessFlow'
import { processSteps } from '../data/content'

export default function ProcessPage() {
  return (
    <section id="process" className="section section-theme-process reveal-section" data-reveal="section">
      <div className="container">
        <SectionTitle
          className="reveal-item"
          eyebrow="Our Process"
          title="The Trust Builder"
          description="Without founder-led storytelling, process clarity builds confidence. This is how GAVDME operates."
        />
        <ProcessFlow steps={processSteps} />
      </div>
    </section>
  )
}
