"use client"

import Image from "next/image"

interface ProjectHeroProps {
  title: string
  subtitle: string
  color: string
  thumbnail: string
  heroImage?: string
  thumbnailSecondary?: string
  splitHero?: boolean
}

export function ProjectHero({
  title,
  subtitle,
  color,
  thumbnail,
  heroImage,
  thumbnailSecondary,
  splitHero = true,
}: ProjectHeroProps) {
  const displayImage = heroImage ?? thumbnail
  const hasImage = displayImage && !displayImage.includes("placeholder")
  const hasSecondary =
    thumbnailSecondary && !thumbnailSecondary.includes("placeholder")
  const isSplit = hasImage && hasSecondary && splitHero

  return (
    <section
      className="relative flex min-h-[50vh] w-full flex-col items-center justify-end gap-6 overflow-hidden px-6 pt-[100px] pb-16 md:min-h-[60vh] md:px-12 lg:px-20"
      style={{ backgroundColor: color }}
    >
      {isSplit ? (
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="relative h-[240px] md:h-[380px] lg:h-[460px]">
            <div
              className="absolute inset-0 overflow-hidden rounded-l-xl"
              style={{
                clipPath: "polygon(0 0, 58% 0, 42% 100%, 0 100%)",
              }}
            >
              <Image
                src={displayImage}
                alt={`${title} — screenshot 1`}
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden rounded-r-xl"
              style={{
                clipPath: "polygon(58% 0, 100% 0, 100% 100%, 42% 100%)",
              }}
            >
              <Image
                src={thumbnailSecondary}
                alt={`${title} — screenshot 2`}
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${color}40 85%, ${color} 100%)`,
            }}
          />
        </div>
      ) : hasImage ? (
        <div className="relative mx-auto h-[240px] w-full max-w-3xl md:h-[320px] lg:h-[400px]">
          <Image
            src={displayImage}
            alt={title}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          />
        </div>
      ) : (
        <div className="flex h-[200px] w-full max-w-3xl items-center justify-center rounded-2xl border-2 border-dashed border-white/30 md:h-[280px] lg:h-[360px]">
          <span className="font-body text-sm text-white/50">
            Project mockup
          </span>
        </div>
      )}

      <div className="relative z-10 mt-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-tight text-white md:text-[44px] lg:text-[56px]">
          {title}
        </h1>
        <p className="font-body mx-auto mt-3 max-w-xl text-base text-white/80 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
