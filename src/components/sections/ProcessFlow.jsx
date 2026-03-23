export default function ProcessFlow({ steps }) {
  return (
    <div className="process-flow">
      {steps.map((step, idx) => (
        <article key={step.title} className="process-step">
          <p className="process-index">0{idx + 1}</p>
          <h3>{step.title}</h3>
          <p>{step.detail}</p>
        </article>
      ))}
    </div>
  )
}
