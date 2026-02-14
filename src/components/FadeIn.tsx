"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ReactNode } from "react"

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)")
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])
  return isMobile
}

export function FadeIn({
  children,
  className,
  mobileEnabled = false,
}: {
  children: ReactNode
  className?: string
  mobileEnabled?: boolean
}) {
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  if (prefersReduced || (isMobile && !mobileEnabled)) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
