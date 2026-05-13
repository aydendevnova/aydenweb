import type { ReactNode } from "react"

interface CalloutQuoteProps {
  color?: string
  children: ReactNode
}

export function CalloutQuote({ color = "var(--color-link)", children }: CalloutQuoteProps) {
  return (
    <blockquote className="my-10 border-l-0 py-4 pl-0">
      <div
        className="font-heading text-[28px] leading-snug font-semibold italic md:text-[36px] lg:text-[42px]"
        style={{ color }}
      >
        {children}
      </div>
    </blockquote>
  )
}
