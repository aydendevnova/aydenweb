"use client"

import { useRef, useEffect, useState } from "react"
import { useAudio } from "@/components/AudioContext"
import { Volume2, VolumeOff } from "lucide-react"

interface ProjectVideoProps {
  src: string
  alt?: string
  caption?: string
  poster?: string
  loop?: boolean
  aspectRatio?: string
}

export function ProjectVideo({
  src,
  alt,
  caption,
  poster,
  loop = true,
  aspectRatio = "16/9",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMuted, toggleMute } = useAudio()
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const isPlaceholder = !src || src.startsWith("placeholder:")

  useEffect(() => {
    if (isPlaceholder) return
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isPlaceholder])

  useEffect(() => {
    if (!videoRef.current) return
    if (isVisible) {
      videoRef.current.play().catch(() => {})
      setHasStarted(true)
    } else {
      videoRef.current.pause()
    }
  }, [isVisible])

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.muted = isMuted
  }, [isMuted])

  if (isPlaceholder) {
    const label = src?.replace("placeholder:", "") ?? alt ?? "Video"
    return (
      <figure className="my-8 w-full h-full">
        <div
          className="flex items-center justify-center rounded-xl border-2 border-dashed"
          style={{
            backgroundColor: "#1C1C2E15",
            borderColor: "#1C1C2E40",
            aspectRatio,
            maxHeight: "540px",
          }}
        >
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-muted)]">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="font-body text-sm text-[var(--color-muted)]">{label}</span>
          </div>
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
    <figure className="my-8" ref={containerRef}>
      <div className="group relative overflow-hidden rounded-xl border border-[#E8E4DF]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted={isMuted}
          playsInline
          preload="metadata"
          aria-label={alt}
          className="h-auto w-full"
          style={{ aspectRatio }}
        />
        {hasStarted && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
          >
            {isMuted ? <VolumeOff size={16} /> : <Volume2 size={16} />}
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="font-body mt-3 text-center text-sm text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
