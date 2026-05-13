"use client"

import { useEffect, useState } from "react"

interface HeadingEntry {
  id: string
  text: string
  level: number
}

export function SectionNav() {
  const [headings, setHeadings] = useState<HeadingEntry[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const article = document.querySelector("article")
    if (!article) return

    const els = article.querySelectorAll("h2[id], h3[id]")
    const entries: HeadingEntry[] = Array.from(els).map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: el.tagName === "H2" ? 2 : 3,
    }))
    setHeadings(entries)
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    for (const h of headings) {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-[100px] hidden h-fit w-[200px] shrink-0 xl:block">
      <ul className="flex flex-col gap-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`font-body block text-[13px] leading-snug transition-colors ${
                h.level === 3 ? "pl-3" : ""
              } ${
                activeId === h.id
                  ? "font-medium text-[var(--color-text)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
