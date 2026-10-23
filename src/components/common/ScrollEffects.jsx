import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sections = document.querySelectorAll('main section, main article')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    sections.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 65}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
