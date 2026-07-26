"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { getLenis } from "./SmoothScroll"
import { LetsTalkButton } from "./LetsTalkButton"
import type { ProjectCategory } from "@/lib/mdx"

gsap.registerPlugin(ScrollTrigger)

const MD_BREAKPOINT = 768

interface ProjectData {
  title: string
  slug: string
  color: string
  thumbnail: string
  thumbnailFit?: "cover" | "contain"
  description?: string
  category: ProjectCategory
  order: number
}

interface HorizontalProjectsProps {
  projects: ProjectData[]
  showCta?: boolean
  title?: string
  subtitle?: string | null
}

export function HorizontalProjects({
  projects,
  showCta = true,
  title = "Case Studies",
  subtitle = "",
}: HorizontalProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null!)
  const cardsRef = useRef<HTMLDivElement>(null!)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= MD_BREAKPOINT)
    const onResize = () => setIsDesktop(window.innerWidth >= MD_BREAKPOINT)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (!isDesktop || !cardsRef.current || !sectionRef.current) return

    const section = sectionRef.current
    const cards = cardsRef.current
    const allCards = cards.querySelectorAll<HTMLElement>(".hp-card")
    if (allCards.length === 0) return

    const totalTrackWidth = cards.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollDistance = totalTrackWidth - viewportWidth + 120

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(cards, { x: -scrollDistance, ease: "none" })
    }, section)

    requestAnimationFrame(() => ScrollTrigger.refresh())

    let lastScroll = getLenis()?.scroll ?? window.scrollY
    let currentSkew = 0
    let velocityRaf: number
    let velocityRunning = true

    function tickVelocity() {
      if (!velocityRunning) return
      const scroll = getLenis()?.scroll ?? window.scrollY
      const delta = scroll - lastScroll
      lastScroll = scroll

      const targetSkew =
        Math.abs(delta) > 240 ? 0 : Math.max(-4, Math.min(4, delta * 0.04))
      currentSkew += (targetSkew - currentSkew) * 0.12

      if (Math.abs(currentSkew) > 0.01) {
        const existing = cards.style.transform?.replace(/skewX\([^)]*\)/, "") ?? ""
        cards.style.transform = `${existing} skewX(${currentSkew}deg)`.trim()
      }

      velocityRaf = requestAnimationFrame(tickVelocity)
    }
    velocityRaf = requestAnimationFrame(tickVelocity)

    const pointerCleanups: (() => void)[] = []
    allCards.forEach((card) => {
      const imageEl = card.querySelector<HTMLElement>(".hp-card-image")
      if (!imageEl) return

      let bounds: DOMRect
      let rafId: number | null = null

      function onEnter() {
        bounds = imageEl!.getBoundingClientRect()
      }

      function onMove(e: PointerEvent) {
        if (!bounds) bounds = imageEl!.getBoundingClientRect()
        const x = (e.clientX - bounds.left) / bounds.width
        const y = (e.clientY - bounds.top) / bounds.height
        const rotateY = (x - 0.5) * 8
        const rotateX = (0.5 - y) * 6

        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          imageEl!.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
        })
      }

      function onLeave() {
        if (rafId) cancelAnimationFrame(rafId)
        imageEl!.style.transform = ""
      }

      imageEl.addEventListener("pointerenter", onEnter)
      imageEl.addEventListener("pointermove", onMove)
      imageEl.addEventListener("pointerleave", onLeave)

      pointerCleanups.push(() => {
        imageEl.removeEventListener("pointerenter", onEnter)
        imageEl.removeEventListener("pointermove", onMove)
        imageEl.removeEventListener("pointerleave", onLeave)
        if (rafId) cancelAnimationFrame(rafId)
      })
    })

    return () => {
      velocityRunning = false
      cancelAnimationFrame(velocityRaf)
      pointerCleanups.forEach((fn) => fn())
      ctx.revert()
    }
  }, [isDesktop])

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`hp-section relative bg-(--color-text) will-change-transform ${isDesktop ? "h-svh overflow-hidden" : ""}`}
    >
      <div className="px-6 pt-12 pb-2 md:px-12 md:pt-16 md:pb-4 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="font-body max-w-105 text-[15px] leading-relaxed text-white/50">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {isDesktop ? (
        <div className="hp-track overflow-visible pt-10 pb-16">
          <div
            ref={cardsRef}
            className="flex items-start gap-16 pb-12 will-change-transform"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
            {showCta && <CtaCard />}
            <div className="h-1 shrink-0 grow-0 basis-[40vw]" aria-hidden="true" />
          </div>
        </div>
      ) : (
        <div className="px-6 pt-8 pb-16 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          {showCta && (
            <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-6 rounded-xl bg-(--color-link) px-8 py-16 text-center">
              <h3 className="font-heading text-[24px] font-semibold text-white md:text-[28px]">
                View all projects
              </h3>
              <LetsTalkButton href="/work" label="VIEW ALL CASE STUDIES" />
            </div>
          )}
          {!showCta && (
            <div className="mx-auto mt-10 max-w-7xl">
              <Link
                href="/work"
                className="font-body text-[15px] font-medium text-white/60 hover:text-white hover:underline"
              >
                View all projects &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

function CtaCard() {
  return (
    <div className="hp-card flex shrink-0 grow-0 basis-[min(50vw,480px)] items-center justify-center self-stretch">
      <div className="scale-[1.8]">
        <LetsTalkButton href="/work" label="VIEW ALL CASE STUDIES" />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const hasImage = project.thumbnail && !project.thumbnail.includes("placeholder")
  const num = String(index + 1).padStart(2, "0")

  return (
    <Link
      href={`/work/${project.slug}`}
      className="hp-card group flex shrink-0 grow-0 basis-full cursor-pointer flex-col gap-4 no-underline md:basis-[min(62vw,620px)]"
    >
      <div
        className="hp-card-image relative aspect-16/10 w-full overflow-hidden rounded-xl will-change-transform"
        style={{ backgroundColor: project.color }}
      >
        {hasImage ? (
          <div className="hp-card-image-inner absolute inset-0 transition-[filter] duration-500 ease-[cubic-bezier(0.35,0,0,1)] group-hover:brightness-[1.08]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className={`${project.thumbnailFit === "contain" ? "object-contain p-4" : "object-cover"}`}
              sizes="(max-width: 768px) 100vw, 62vw"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-white/20 p-6">
            <span className="font-body text-center text-sm text-white/40">
              Thumbnail
            </span>
          </div>
        )}
        <span className="font-body absolute left-5 top-5 text-xs font-medium tracking-[0.06em] text-white/40">
          {num}
        </span>
      </div>
      <div className="px-1">
        <span className="relative block overflow-hidden">
          <span className="absolute left-0 top-1/2 flex h-[1.4em] w-[1.4em] -translate-x-[1.8em] -translate-y-1/2 items-center justify-center text-(--color-link) opacity-0 transition-[transform,opacity] duration-350 ease-[cubic-bezier(0.35,0,0,1)] group-hover:translate-x-0 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="font-heading text-[24px] font-semibold leading-tight text-white transition-transform duration-350 ease-[cubic-bezier(0.35,0,0,1)] group-hover:translate-x-[1.6em] md:text-[32px]">
            {project.title}
          </h3>
        </span>
        {project.description && (
          <p className="font-body mt-1.5 max-w-md text-[20px] leading-normal text-white/60">
            {project.description}
          </p>
        )}
      </div>
    </Link>
  )
}
