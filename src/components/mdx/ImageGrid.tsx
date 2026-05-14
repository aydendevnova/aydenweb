import type { ReactNode } from "react"

interface ImageGridProps {
  columns?: 2 | 3
  uniform?: boolean
  children: ReactNode
}

export function ImageGrid({ columns = 2, uniform = false, children }: ImageGridProps) {
  return (
    <div
      className={`image-grid ${uniform ? "image-grid-uniform" : ""} my-8 grid gap-4 ${
        columns === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2"
      }`}
    >
      {children}
    </div>
  )
}
