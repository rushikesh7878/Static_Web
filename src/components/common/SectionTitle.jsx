export default function SectionTitle({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
