import { useEffect, useState } from 'react'

export default function TestimonialSlider({ items }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="testimonial-slider reveal-item">
      <blockquote>{items[active].quote}</blockquote>
      <p className="author">- {items[active].author}</p>
      <div className="dots" aria-label="testimonial navigation">
        {items.map((item, idx) => (
          <button
            key={`${item.author}-${idx}`}
            type="button"
            className={idx === active ? 'dot active' : 'dot'}
            onClick={() => setActive(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
