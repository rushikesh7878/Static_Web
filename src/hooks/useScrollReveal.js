import { useEffect } from 'react'

export function useScrollReveal(trigger) {
  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealNodes.length) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const revealIfInViewport = (node) => {
      const rect = node.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const visibleTop = rect.top <= viewportHeight * 0.88
      const visibleBottom = rect.bottom >= 0

      if (visibleTop && visibleBottom) {
        node.classList.add('is-visible')
        return true
      }

      node.classList.remove('is-visible')
      return false
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    revealNodes.forEach((node) => {
      if (!revealIfInViewport(node)) {
        observer.observe(node)
      }
    })

    return () => observer.disconnect()
  }, [trigger])
}
