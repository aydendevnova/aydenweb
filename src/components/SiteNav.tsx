"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/work", label: "Projects" },
  { href: "https://aydenweb.com/ayden-resume.pdf", label: "Resume", external: true },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-11 lg:px-11">
      <div className="rounded-full bg-[var(--color-bg)]/80 px-5 py-1 backdrop-blur-sm">
        <Link
          href="/"
          className="font-heading text-[20px] font-semibold tracking-tight text-[var(--color-text)] hover:opacity-70 md:text-[22px]"
        >
          Ayden Springer
        </Link>
      </div>

      <div className="flex items-center gap-6 rounded-full bg-[var(--color-bg)]/80 px-5 py-2.5 backdrop-blur-sm md:gap-8">
        {NAV_LINKS.map((link) => {
          if (link.external) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] font-medium text-[var(--color-text)] transition-opacity hover:opacity-60 md:text-[14px]"
              >
                {link.label}
              </a>
            )
          }

          if (link.href === "#contact") {
            const contactHref = isHome ? "#contact" : "/#contact"
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
  )
}
