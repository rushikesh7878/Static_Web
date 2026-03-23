import ResultGraph from '../common/ResultGraph'

export default function CaseStudyCard({ study, compact = false }) {
  return (
    <article className="case-card">
      <h3>{study.title}</h3>
      <div className="case-grid">
        <div>
          <p className="label">The Goal</p>
          <p>{study.goal}</p>
          <p className="label">The Strategy</p>
          <p>{study.strategy}</p>
        </div>
        <div>
          <p className="label">The Media</p>
          <ul>
            {study.media.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ResultGraph points={study.graph} />
        </div>
      </div>
      <p className="label">The Result</p>
      <ul className="result-list">
        {(compact ? study.results.slice(0, 4) : study.results).map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
      {!compact && (
        <>
          <p className="label">Skills Used</p>
          <ul className="chips">
            {study.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="label">Deliverables</p>
          <ul>
            {study.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
          <blockquote className="case-quote">"{study.review}"</blockquote>
        </>
      )}
    </article>
  )
}
