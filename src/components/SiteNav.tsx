"use client"

import { ArrowLeft, FolderKanban, House, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const NAV_LINKS = [
  { href: "/work", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isProjectCaseStudy = pathname.startsWith("/work/") && pathname !== "/work"
  const contactHref = isHome ? "#contact" : "/#contact"
  const navRef = useRef<HTMLElement | null>(null)
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)

  useEffect(() => {
    function updateBottomNavVisibility() {
      const navHeight = navRef.current?.offsetHeight ?? 72
      setIsBottomNavVisible(window.scrollY > navHeight)
    }

    updateBottomNavVisibility()
    window.addEventListener("scroll", updateBottomNavVisibility, { passive: true })
    window.addEventListener("resize", updateBottomNavVisibility)

    return () => {
      window.removeEventListener("scroll", updateBottomNavVisibility)
      window.removeEventListener("resize", updateBottomNavVisibility)
    }
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`${isProjectCaseStudy ? "absolute top-0 left-0 z-50" : "z-40"} flex w-full items-center justify-between px-6 py-5 md:px-11 lg:px-11`}
      >
        <div className="rounded-full bg-[var(--color-bg)]/80 px-5 py-1 backdrop-blur-sm">
          <Link
            href={isProjectCaseStudy ? "/work" : "/"}
            className="font-heading text-[20px] font-semibold tracking-tight text-[var(--color-text)] hover:opacity-70 md:text-[22px]"
          >
            Ayden Springer
          </Link>
        </div>

        <div className="flex items-center gap-6 rounded-full bg-[var(--color-bg)]/80 px-5 py-2.5 backdrop-blur-sm md:gap-8">
          {NAV_LINKS.map((link) => {
            if (link.href === "#contact") {
              return (
                <Link
                  key={link.label}
                  href={contactHref}
                  className="font-body text-[13px] font-medium text-[var(--color-text)] transition-opacity hover:opacity-60 md:text-[14px]"
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[13px] font-medium text-[var(--color-text)] transition-opacity hover:opacity-60 md:text-[14px]"
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>

      <div
        className={`fixed bottom-5 left-1/2 z-50 w-auto -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isBottomNavVisible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0"}`}
      >
        <div className="flex items-center gap-1 rounded-full border border-white/40 bg-white/45 px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl backdrop-saturate-150">
          {isProjectCaseStudy ? (
            <>
              <Link
                href="/work"
                aria-label="Back to projects"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <ArrowLeft size={13} />
                Back
              </Link>
              <Link
                href="/"
                aria-label="Home"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <House size={13} />
                Home
              </Link>
              <a
                href="#contact"
                aria-label="Contact"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <Mail size={13} />
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                href="/"
                aria-label="Home"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <House size={13} />
                Home
              </Link>
              <Link
                href="/work"
                aria-label="Projects"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <FolderKanban size={13} />
                Projects
              </Link>
              <a
                href="#contact"
                aria-label="Contact"
                className="font-body flex h-9 items-center gap-1.5 rounded-full px-4 text-[12px] font-medium text-[var(--color-text)]/80 transition-colors hover:bg-white/50"
              >
                <Mail size={13} />
                Contact
              </a>
            </>
          )}
        </div>
      </div>
    </>
  )
}
