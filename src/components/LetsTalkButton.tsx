"use client"

import { useRef, useCallback, useEffect } from "react"
import gsap from "gsap"

interface LetsTalkButtonProps {
  href?: string
  label?: string
  maxMagneticOffset?: number
}

export function LetsTalkButton({
  href = "#contact",
  label = "Let's talk",
  maxMagneticOffset = 12,
}: LetsTalkButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = btnRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = Math.max(rect.width, rect.height)

      if (dist < radius) {
        const strength = 1 - dist / radius
        gsap.to(el, {
          x: dx * strength * (maxMagneticOffset / radius) * 2,
          y: dy * strength * (maxMagneticOffset / radius) * 2,
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" })
      }
    },
    [maxMagneticOffset],
  )

  const handleMouseLeave = useCallback(() => {
    const el = btnRef.current
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    const el = btnRef.current
    el?.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      el?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <a ref={btnRef} href={href} className="lets-talk-btn">
      <span className="lets-talk-container">
        <span className="lets-talk-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
            />
          </svg>
        </span>
        <span className="lets-talk-text">{label}</span>
        <span className="lets-talk-dots">
          <span className="lets-talk-dot" />
        </span>
      </span>
    </a>
  )
}
