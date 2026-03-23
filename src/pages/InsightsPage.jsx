import SectionTitle from '../components/common/SectionTitle'

const insightItems = [
  {
    title: 'How to Scale Meta Ads Without Killing ROAS',
    excerpt:
      'Framework for phased budget increases, frequency controls, and creative replacement cadence during scale.',
  },
  {
    title: 'Paid + Organic: Building a Lower-CAC Growth Stack',
    excerpt:
      'How performance channels and SEO content loops reduce blended acquisition cost over 90-day windows.',
  },
  {
    title: 'Reporting That Drives Action',
    excerpt:
      'Move beyond vanity metrics by connecting campaign KPIs to contribution margin and purchase quality.',
  },
]

export default function InsightsPage() {
  return (
    <section id="insights" className="section section-theme-insights">
      <div className="container">
        <SectionTitle
          eyebrow="Insights"
          title="Playbooks and Analysis"
          description="Optional thought leadership section to demonstrate strategic depth."
        />
        <div className="insight-grid">
          {insightItems.map((item) => (
            <article key={item.title} className="insight-card">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href="#contact">Talk to our team</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
