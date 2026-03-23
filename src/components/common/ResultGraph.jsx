export default function ResultGraph({ points }) {
  return (
    <div className="result-graph" aria-label="Result trend graph">
      {points.map((point, index) => (
        <div key={`${point}-${index}`} className="bar-wrap">
          <div className="bar" style={{ height: `${point}%` }} />
        </div>
      ))}
    </div>
  )
}
