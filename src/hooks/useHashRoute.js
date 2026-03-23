import { useCallback, useEffect, useState } from 'react'

export function useHashRoute(validRoutes, fallbackRoute = 'home') {
  const normalize = useCallback(
    (raw) => {
      const value = raw.replace('#', '').trim()
      return validRoutes.includes(value) ? value : fallbackRoute
    },
    [fallbackRoute, validRoutes],
  )

  const [route, setRoute] = useState(() => normalize(window.location.hash || `#${fallbackRoute}`))

  useEffect(() => {
    const onHashChange = () => setRoute(normalize(window.location.hash))
    window.addEventListener('hashchange', onHashChange)

    if (!window.location.hash || !validRoutes.includes(window.location.hash.replace('#', ''))) {
      window.location.hash = fallbackRoute
    }

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [fallbackRoute, normalize, validRoutes])

  return route
}
