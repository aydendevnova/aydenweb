"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./ProgressNavigation.module.css"

interface NavSection {
  id: string
  label: string
}

interface ProgressNavigationProps {
  sections: NavSection[]
  contactHref?: string
  contactLabel?: string
}

export function ProgressNavigation({
  sections,
  contactHref = "#contact",
  contactLabel = "Contact",
}: ProgressNavigationProps) {
  const navListRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const navList = navListRef.current
    const indicator = indicatorRef.current
    if (!navList || !indicator) return

    const updateIndicator = (activeLink: HTMLElement) => {
      const parentWidth = navList.offsetWidth
      const parentHeight = navList.offsetHeight
      const parentRect = navList.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      const linkPos = {
        left: linkRect.left - parentRect.left,
        top: linkRect.top - parentRect.top,
      }

      const linkWidth = activeLink.offsetWidth
      const linkHeight = activeLink.offsetHeight

      const leftPercent = (linkPos.left / parentWidth) * 100
      const topPercent = (linkPos.top / parentHeight) * 100
      const widthPercent = (linkWidth / parentWidth) * 100
      const heightPercent = (linkHeight / parentHeight) * 100

      indicator.style.left = leftPercent + "%"
      indicator.style.top = topPercent + "%"
      indicator.style.width = widthPercent + "%"
      indicator.style.height = heightPercent + "%"
    }

    const contactId = contactHref.replace("#", "")
    const allSections = [...sections, { id: contactId, label: contactLabel }]
    const triggers: ScrollTrigger[] = []

    allSections.forEach((section) => {
      const anchor = document.getElementById(section.id)
      if (!anchor) return

      const trigger = ScrollTrigger.create({
        trigger: anchor,
        start: "0% 50%",
        end: "100% 50%",
        onEnter: () => {
          const activeLink = navList.querySelector(
            `[data-target="#${section.id}"]`,
          )!
          if (activeLink) {
            navList
              .querySelectorAll("[data-target]")
              .forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink as HTMLElement)
          }
        },
        onEnterBack: () => {
          const activeLink = navList.querySelector(
            `[data-target="#${section.id}"]`,
          )!
          if (activeLink) {
            navList
              .querySelectorAll("[data-target]")
              .forEach((el) => el.classList.remove("is-active"))
            activeLink.classList.add("is-active")
            updateIndicator(activeLink as HTMLElement)
          }
        },
      })
      triggers.push(trigger)
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [sections, contactHref, contactLabel])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8 md:py-6">
      <div className="relative flex items-center justify-center gap-4">
        {/* Pill nav */}
        <div className="rounded-full border border-(--color-border)/40 bg-(--color-bg)/80 p-1 backdrop-blur-sm">
          <div
            ref={navListRef}
            className="relative flex items-center justify-start overflow-hidden rounded-full"
          >
            <div ref={indicatorRef} className={styles.navIndicator} />
            <div
              className={`${styles.navBtn} ${styles.isBefore}`}
              data-target="#top"
            />
            {[...sections, { id: contactHref.replace("#", ""), label: contactLabel }].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                data-target={`#${section.id}`}
                className={`${styles.navBtn} font-body relative z-3 flex h-[2.2em] cursor-pointer items-center justify-center overflow-hidden border-none bg-transparent px-2.5 text-xs font-medium text-(--color-text) no-underline md:h-[2.5em] md:px-4 md:text-sm`}
                onClick={(e) => handleNavClick(e, section.id)}
              >
                <span className={styles.btnText}>{section.label}</span>
                <span className={`${styles.btnText} ${styles.isDuplicate}`}>
                  {section.label}
                </span>
              </a>
            ))}
            <div
              className={`${styles.navBtn} ${styles.isAfter}`}
              data-target="#bottom"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
