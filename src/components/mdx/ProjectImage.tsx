import Image from "next/image"

interface ProjectImageProps {
  src: string
  alt: string
  caption?: string
  fallbackColor?: string
  width?: number
  height?: number
  pixelated?: boolean
}

export function ProjectImage({
  src,
  alt,
  caption,
  fallbackColor = "#E8E4DF",
  width = 960,
  height = 540,
  pixelated = false,
}: ProjectImageProps) {
  const isPlaceholder = !src || src.startsWith("placeholder:")

  if (isPlaceholder) {
    const label = src?.replace("placeholder:", "") ?? alt
    return (
      <figure className="my-8">
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: fallbackColor + "15",
            borderColor: fallbackColor + "40",
            aspectRatio: `${width}/${height}`,
            maxHeight: "540px",
          }}
        >
          <span className="font-body px-4 text-center text-sm text-[var(--color-muted)]">
            {label}
          </span>
        </div>
        {caption && (
          <figcaption className="font-body mt-3 text-left text-sm text-[var(--color-muted)]">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  const pixelClass = pixelated ? " [image-rendering:pixelated]" : ""

  return (
    <figure className="my-8 in-[.image-grid]:my-0">
      <div className="relative overflow-hidden  in-[.image-grid-uniform]:aspect-square">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`block h-auto max-h-[700px] w-full object-contain object-left in-[.image-grid-uniform]:absolute in-[.image-grid-uniform]:inset-0 in-[.image-grid-uniform]:h-full in-[.image-grid-uniform]:object-cover in-[.image-grid-uniform]:object-center${pixelClass}`}
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="font-body mt-3 text-left text-sm text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
