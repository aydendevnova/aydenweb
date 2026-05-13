"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface HighlightProps {
  color?: string
  children: ReactNode
}

export function Highlight({ color = "#ffd000", children }: HighlightProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-highlighted")
          observer.unobserve(el)
        }
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="highlight-mark"
      style={{
        "--highlight-color": color,
      } as React.CSSProperties}
    >
      {children}
    </span>
  )
}
