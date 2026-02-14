"use client"

import { ArrowDown } from "lucide-react"
import { useState } from "react"

interface ViewMoreProps {
  children: React.ReactNode
}

export function ViewMore({ children }: ViewMoreProps) {
  const [expanded, setExpanded] = useState(false)

  if (expanded) {
    return <>{children}</>
  }

  return (
    <button
      onClick={() => setExpanded(true)}
      className="font-body flex items-center gap-2 mx-auto cursor-pointer border-none bg-transparent text-[16px] font-medium text-[var(--color-link)] hover:underline"
    >
      View More <ArrowDown size={14} />
    </button>
  )
}
