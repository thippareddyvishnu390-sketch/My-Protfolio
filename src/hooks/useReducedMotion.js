import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    // Older browsers (and some mobile browsers) use addListener/removeListener
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handleChange)
      return () => mq.removeEventListener('change', handleChange)
    }

    if (typeof mq.addListener === 'function') {
      mq.addListener(handleChange)
      return () => mq.removeListener(handleChange)
    }
    return undefined
  }, [])

  return prefersReducedMotion
}
