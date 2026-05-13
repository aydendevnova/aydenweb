import Image from "next/image"
import Link from "next/link"

interface ProjectThumbnailProps {
  title: string
  slug: string
  color: string
  thumbnail: string
}

export function ProjectThumbnail({ title, slug, color, thumbnail }: ProjectThumbnailProps) {
  const hasImage = thumbnail && !thumbnail.includes("placeholder")

  return (
    <Link href={`/work/${slug}`} className="group block">
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundColor: color }}
      >
        {hasImage ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-white/20 p-6">
            <span className="font-body text-center text-sm text-white/40">
              Thumbnail
            </span>
          </div>
        )}
      </div>
      <h3 className="font-heading mt-3 text-[18px] font-semibold text-[var(--color-text)] md:text-[20px]">
        {title}
      </h3>
    </Link>
  )
}
