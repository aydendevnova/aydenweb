import Image from "next/image"

interface ProjectImageProps {
  src: string
  alt: string
  caption?: string
  fallbackColor?: string
  width?: number
  height?: number
}

export function ProjectImage({
  src,
  alt,
  caption,
  fallbackColor = "#E8E4DF",
  width = 960,
  height = 540,
}: ProjectImageProps) {
  const isPlaceholder = !src || src.startsWith("placeholder:")

  if (isPlaceholder) {
    const label = src?.replace("placeholder:", "") ?? alt
    return (
      <figure className="my-8">
        <div
          className="flex items-center justify-center rounded-xl border-2 border-dashed"
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
          <figcaption className="font-body mt-3 text-center text-sm text-[var(--color-muted)]">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-[#E8E4DF]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="font-body mt-3 text-center text-sm text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
