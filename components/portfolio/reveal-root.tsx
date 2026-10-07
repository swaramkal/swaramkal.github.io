'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function PortfolioRevealRoot({ children }: Readonly<{ children: ReactNode }>) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      root.classList.add('reveal-active')
      elements.forEach((element) => element.setAttribute('data-visible', 'true'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.setAttribute('data-visible', 'true')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    root.classList.add('reveal-active')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return <div className="reveal-root" ref={rootRef}>{children}</div>
}

export default PortfolioRevealRoot
