import type { Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"
import { ArrowDown, ArrowUpRightFromSquareIcon } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import rockyImg from "@/assets/rocky.webp"
import michaelImg from "@/assets/michael.webp"
import manishImg from "@/assets/manish.webp"
import { ProjectThumbnail } from "@/components/ProjectThumbnail"
import { Highlight } from "@/components/mdx/Highlight"
import { getFeaturedProjects } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Ayden Springer — Developer",
  description:
    "Developer building frontend products and design systems. Won the Stacks embedded wallet hackathon, shipped production apps across the Stacks ecosystem, and built a pixel art platform with 600+ users.",
  alternates: {
    canonical: "https://aydenweb.com",
  },
  openGraph: {
    title: "Ayden Springer — Developer",
    description:
      "Developer building frontend products and design systems. Won the Stacks embedded wallet hackathon, shipped production apps across the Stacks ecosystem, and built a pixel art platform with 600+ users.",
    url: "https://aydenweb.com",
  },
  twitter: {
    title: "Ayden Springer — Developer",
    description:
      "Developer building frontend products and design systems. Won the Stacks embedded wallet hackathon, shipped production apps across the Stacks ecosystem, and built a pixel art platform with 600+ users.",
  },
}

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      {/* Hero */}
      <FadeIn>
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 pt-[120px] pb-[60px] md:gap-6 md:px-12 md:pt-[150px] md:pb-[80px] lg:px-20 lg:pt-[180px] lg:pb-[100px]">
          <h1 className="font-heading max-w-3xl text-[32px] font-semibold leading-[1.15] tracking-[-0.5px] text-[var(--color-text)] md:text-[44px] lg:text-[56px]">
            Shipping software before I could even drive a car.
          </h1>
          <p className="font-body max-w-xl text-[15px] leading-[1.6] text-[var(--color-muted)] md:text-base">

            <Highlight>Shipped a game at 16</Highlight>, built an AI product assistant at Elysium Health, and <Highlight>won the Stacks embedded wallet hackathon</Highlight>.
          </p>

          <p className="font-body text-[15px] leading-[1.6] text-[var(--color-muted)] md:text-base">Computer Science student at UNF, graduating Spring 2027.  <br/>Available for full-time roles starting Summer 2027 or contract work.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-2">
            <Link
              href="#contact"
              className="font-body flex items-center gap-2 text-[15px] font-medium text-[var(--color-link)] hover:underline"
            >
              Contact <ArrowDown size={16} />
            </Link>
            <Link
              href="https://aydenweb.com/ayden-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex items-center gap-2 text-[15px] font-medium text-[var(--color-link)] hover:underline"
            >
              Resume <ArrowUpRightFromSquareIcon size={14} />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Selected Work — Thumbnail Grid */}
      <section id="work" className="mx-auto w-full max-w-7xl px-6 py-[50px] md:px-12 md:py-[60px] lg:px-20 lg:py-[80px]">
        <FadeIn>
          <h2 className="font-heading mb-8 text-[28px] font-semibold text-[var(--color-text)] md:mb-12 md:text-[34px] lg:text-[40px]">
            Selected Work
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectThumbnail
                key={project.frontmatter.slug}
                title={project.frontmatter.title}
                slug={project.frontmatter.slug}
                color={project.frontmatter.color}
                thumbnail={project.frontmatter.thumbnail}
              />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/work"
              className="font-body text-[15px] font-medium text-[var(--color-link)] hover:underline"
            >
              View all projects &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-[50px] md:gap-12 md:px-12 md:py-[60px] lg:px-20 lg:py-[80px]">
        <FadeIn>
          <h2 className="font-heading text-[28px] font-semibold text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
            Testimonials
          </h2>
        </FadeIn>

        <FadeIn>
          <Testimonial
            quote={`"Ayden Springer is the kind of Full Stack Developer every team dreams of having. His dedication to the craft and consistent success in delivering exceptional digital products makes him a valuable asset. I highly recommend Ayden Springer for any tech project."`}
            name="Rocky Nguyen"
            image={rockyImg}
            link="https://www.linkedin.com/in/rockynhatnguyen/"
            role="Engineering Manager at Elysium Health"
          />
        </FadeIn>
        <FadeIn>
          <Testimonial
            quote={`"If you need a Dev who talks with their keyboard instead of prolonging the Zoom call, Ayden will kick out your project faster than 90% of the over-confident 'code crafters' out there. Ayden gets it DONE."`}
            name="Michael Jagdeo"
            image={michaelImg}
            link="https://www.linkedin.com/in/jagdeoholdings/"
            role="Recruiter at Delmi Training"
          />
        </FadeIn>
        <FadeIn>
          <Testimonial
            quote={`"Ayden is an amazingly talented developer. His contribution to the project Avalanche from The New Dev Order was crucial to completing the most difficult task that saw the team home. He is gonna be the best find for any Hiring Manager."`}
            name="Manish Andankar"
            image={manishImg}
            link="https://www.linkedin.com/in/manishandankar/"
            role="Founder & CEO at Worthum"
          />
        </FadeIn>
      </section>

      {/* Background */}
      <FadeIn>
        <section id="background" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-[50px] md:gap-10 md:px-12 md:py-[60px] lg:px-20 lg:py-[80px]">
          <h2 className="font-heading text-[28px] font-semibold text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
            Background
          </h2>

          <div className="flex max-w-[800px] flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-[22px] font-semibold text-[var(--color-text)]">
                Everplast
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-[var(--color-text)]">
                I started building software in high school, teaching myself C# and Unity to build Everplast — <Highlight>a full-length action-adventure game that I shipped to Steam at 16</Highlight>. The project took over a year of solo development: level design, combat systems, UI, and managing the entire Steam publishing pipeline. It was a crash course in shipping something real, dealing with player feedback, and pushing through the long stretch between &ldquo;this is fun to build&rdquo; and &ldquo;this is done.&rdquo;
              </p>

              {/* Everplast image placeholders */}
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-border)]" style={{ backgroundColor: "#2C241608" }}>
                  <span className="font-body text-sm text-[var(--color-muted)]">Everplast gameplay screenshot</span>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-border)]" style={{ backgroundColor: "#2C241608" }}>
                  <span className="font-body text-sm text-[var(--color-muted)]">Steam store page</span>
                </div>
              </div>

              <p className="font-body text-[16px] leading-[1.7] text-[var(--color-text)]">
                <Link className="text-[var(--color-link)] hover:underline inline-flex items-center gap-1" href="https://store.steampowered.com/app/1896630/Everplast/" target="_blank" rel="noopener noreferrer">
                  View on Steam <ArrowUpRightFromSquareIcon size={12} />
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-[22px] font-semibold text-[var(--color-text)]">
                Elysium Health
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-[var(--color-text)]">
                I completed an engineering internship at Elysium Health, building <Highlight>a React Native mobile app prototype and an AI-powered product assistant</Highlight>. The AI system required careful implementation of health safeguards to avoid medical claims, integrated knowledge retrieval for their supplement line, and tool-calling functionality for personalized recommendations. The work bridged product, engineering, and regulatory requirements — a useful education in building things that need to be both useful and careful.
              </p>
              <p className="font-body text-[16px] leading-[1.7] text-[var(--color-text)]">
                <Link className="text-[var(--color-link)] hover:underline inline-flex items-center gap-1" href="https://www.elysiumhealth.com/" target="_blank" rel="noopener noreferrer">
                  elysiumhealth.com <ArrowUpRightFromSquareIcon size={12} />
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-[22px] font-semibold text-[var(--color-text)]">
                Currently
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-[var(--color-text)]">
                I am a third-year computer science student at the University of North Florida, graduating Spring 2027. Available for full-time roles starting Summer 2027 or contract work now.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}

function Testimonial({
  quote,
  name,
  image,
  link,
  role,
}: {
  quote: string
  name: string
  image: StaticImageData
  link: string
  role: string
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-8">
      <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-body flex items-center gap-2 text-[16px] font-semibold text-[var(--color-text)] hover:underline">
            {name} <ArrowUpRightFromSquareIcon size={14} />
          </a>
          <span className="font-body text-[14px] text-[var(--color-muted)]">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}
