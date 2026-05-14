import Image from "next/image"
import Link from "next/link"

interface ProjectThumbnailProps {
  title: string
  slug: string
  color: string
  thumbnail: string
  thumbnailFit?: "cover" | "contain"
  description?: string
}

export function ProjectThumbnail({ title, slug, color, thumbnail, thumbnailFit = "cover", description }: ProjectThumbnailProps) {
  const hasImage = thumbnail && !thumbnail.includes("placeholder")

  return (
    <Link href={`/work/${slug}`} className="group flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left lg:block">
      <div
        className="relative flex aspect-[4/3] w-full max-w-[240px] shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02] sm:w-[180px] sm:max-w-none lg:w-full"
        style={{ backgroundColor: color }}
      >
        {hasImage ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className={`object-center transition-transform duration-500 group-hover:scale-105 ${thumbnailFit === "contain" ? "object-contain p-4" : "object-cover"}`}
            sizes="(max-width: 1024px) 180px, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-white/20 p-6">
            <span className="font-body text-center text-sm text-white/40">
              Thumbnail
            </span>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-heading text-[18px] font-semibold text-[var(--color-text)] md:text-[20px] lg:mt-3">
          {title}
        </h3>
        {description && (
          <p className="font-body mt-1 text-[14px] leading-[1.5] text-[var(--color-muted)] lg:hidden max-w-md">
            {description}
          </p>
        )}
      </div>
    </Link>
  )
}
