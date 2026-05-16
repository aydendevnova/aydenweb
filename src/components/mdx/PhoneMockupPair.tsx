import Image from "next/image"

interface PhoneMockupPairProps {
  src1: string
  src2: string
  alt1: string
  alt2: string
  caption?: string
}

export function PhoneMockupPair({
  src1,
  src2,
  alt1,
  alt2,
  caption,
}: PhoneMockupPairProps) {
  const isPlaceholder1 = !src1 || src1.startsWith("placeholder:")
  const isPlaceholder2 = !src2 || src2.startsWith("placeholder:")
  const label1 = isPlaceholder1 ? src1?.replace("placeholder:", "") ?? alt1 : ""
  const label2 = isPlaceholder2 ? src2?.replace("placeholder:", "") ?? alt2 : ""

  return (
    <figure className="my-16">
      <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-12">
        {isPlaceholder1 ? (
          <PhoneFrame>
            <PlaceholderScreen label={label1} />
          </PhoneFrame>
        ) : (
          <div className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[260px]">
            <Image
              src={src1}
              alt={alt1}
              width={393}
              height={852}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        )}
        {isPlaceholder2 ? (
          <PhoneFrame>
            <PlaceholderScreen label={label2} />
          </PhoneFrame>
        ) : (
          <div className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[260px]">
            <Image
              src={src2}
              alt={alt2}
              width={393}
              height={852}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="font-body mt-4 text-left text-sm text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[260px]">
      <div className="relative" style={{ aspectRatio: "393/940" }}>
        <div
          className="absolute overflow-hidden rounded-[8%]"
          style={{
            top: "9%",
            left: "3.3%",
            right: "3.3%",
            bottom: "6%",
          }}
        >
          {children}
        </div>
        <Image
          src="/projects/frame.png"
          alt=""
          fill
          className="pointer-events-none relative z-10 object-contain"
          unoptimized
          aria-hidden
        />
      </div>
    </div>
  )
}

function PlaceholderScreen({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-start justify-center bg-[#1c1c2e] p-3">
      <span className="font-body text-left text-[10px] leading-tight text-white/50 md:text-xs">
        {label}
      </span>
    </div>
  )
}
