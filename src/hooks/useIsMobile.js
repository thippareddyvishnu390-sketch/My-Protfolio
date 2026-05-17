import { useEffect, useState } from 'react'

function getIsMobileViewport() {
  if (typeof window === 'undefined') {
    return false
  }
  return window.innerWidth < 768
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobileViewport)

  useEffect(() => {
    const checkMobile = () => setIsMobile(getIsMobileViewport())

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [])

  return isMobile
}
