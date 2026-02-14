import type { Metadata } from "next"
import { ProgressNavigation } from "@/components/ProgressNavigation"
import { FadeIn } from "@/components/FadeIn"
import { ArrowDown, ArrowRight, ArrowUpRightFromSquareIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import rockyImg from "@/assets/rocky.webp";
import michaelImg from "@/assets/michael.webp";
import manishImg from "@/assets/manish.webp";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ayden Springer — Developer",
  description:
    "Computer science student at UNF graduating Spring 2027. Built an AI product assistant at Elysium Health, a pixel art platform with Stripe, and won the Stacks embedded wallet hackathon. Available for full-time roles or contract work.",
  alternates: {
    canonical: "https://aydenweb.com",
  },
  openGraph: {
    title: "Ayden Springer — Developer",
    description:
      "Computer science student at UNF graduating Spring 2027. Built an AI product assistant at Elysium Health, a pixel art platform with Stripe, and won the Stacks embedded wallet hackathon.",
    url: "https://aydenweb.com",
  },
  twitter: {
    title: "Ayden Springer — Developer",
    description:
      "Computer science student at UNF graduating Spring 2027. Built an AI product assistant at Elysium Health, a pixel art platform with Stripe, and won the Stacks embedded wallet hackathon.",
  },
}

const NAV_SECTIONS = [
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "background", label: "Background" },
]

export default function HomePage() {
  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      <ProgressNavigation sections={NAV_SECTIONS} contactHref="#contact" />

      {/* Hero */}
      <FadeIn>
        <section id="hero" className="flex w-full flex-col gap-6 px-6 pt-[120px] pb-[60px] md:gap-8 md:px-12 md:pt-[150px] md:pb-[80px] lg:px-[200px] lg:pt-[180px] lg:pb-[100px]">
          <h1 className="font-heading text-[36px] font-semibold leading-tight tracking-[-1px] text-[var(--color-text)] md:text-[48px] lg:text-[60px]">
            Ayden Springer.
          </h1>
          <p className="font-body max-w-3xl text-base leading-[1.5] font-normal text-[var(--color-text)] md:text-lg">
          Computer Science student at UNF, graduating Spring 2027. <br/><br/>Developed an AI product assistant at Elysium Health, built a pixel art generation platform with Stripe, and won the Stacks embedded wallet hackathon. Available for full-time roles starting Summer 2027 or contract work.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <Link
              href="#contact"
              className="font-body flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
            >
              Contact <ArrowDown size={16} />
            </Link>
            <Link
              href="https://aydenweb.com/ayden-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
            >
              View Resume <ArrowUpRightFromSquareIcon size={14} />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Selected Work */}
      <section id="work" className="flex w-full flex-col gap-8 px-6 py-[50px] md:gap-12 md:px-12 md:py-[60px] lg:px-[200px] lg:py-[80px]">
        <FadeIn>
          <h2 className="font-heading text-[28px] font-semibold text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
            Selected Work
          </h2>
        </FadeIn>
        <div className="max-w-4xl flex flex-col gap-12">
          <FadeIn>
            <WorkCard key="pixelnova"
              title="PixelNova"
              description="Pixel art generation platform with custom WebAssembly processing module running on Fly.io. Built with Supabase and Stripe for payment processing. Launched in collaboration with Pixel Palette Nation and acquired over 600 users."
              href="https://pixelnova.app"
              linkLabel="View Live App"
              isExternalLink={true}
            />
          </FadeIn>
          <FadeIn>
            <WorkCard
              title="Red Block Labs"
              description="Frontend design and development for Stacks ecosystem projects. Created interfaces for Bitcoin naming systems through BNS One, redesigned the complete frontend for Zero Authority's decentralized freelance platform including escrow and wallet flows, and built landing pages for various clients. Work contributed to securing over $20,000 in grants for clients. Built with React, TypeScript, and Stacks."
              href="/work/red-block-labs"
              linkLabel="View Details"
              isExternalLink={false}
            />
          </FadeIn>
          <FadeIn>
            <WorkCard
              title="Elysium Health"
              description="Engineering internship building a React Native mobile app prototype and AI product assistant. Implemented health safeguards to avoid medical claims, integrated knowledge retrieval, and built tool-calling functionality for supplement recommendations."
              href="https://www.elysiumhealth.com/"
              linkLabel="View Company Site"
              isExternalLink={true}
            />
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="flex w-full flex-col gap-8 px-6 py-[50px] md:gap-12 md:px-12 md:py-[60px] lg:px-[200px] lg:py-[80px]">
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
        <section id="background" className="flex w-full flex-col gap-6 px-6 py-[50px] md:gap-8 md:px-12 md:py-[60px] lg:px-[200px] lg:py-[80px]">
          <h2 className="font-heading text-[28px] font-semibold text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
            Background
          </h2>
          <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
            I started building games in high school, shipping <Link className="text-[var(--color-link)] hover:underline" href="https://store.steampowered.com/app/1896630/Everplast/" target="_blank" rel="noopener noreferrer" >Everplast </Link> to Steam before graduation.
            <br /><br/>I transitioned to web development before starting college, working with startups and
            DAOs on products that secured grant funding. I recently completed an engineering internship at Elysium Health, building a mobile app prototype and AI-powered product assistant with a focus on safety and regulatory alignment. <br/><br/>After, I won an <Link className="text-[var(--color-link)] hover:underline" href="https://dorahacks.io/buidl/34660" target="_blank" rel="noopener noreferrer" >embedded wallet hackathon</Link>, later working on a @turnkey/stacks SDK with Stacks Labs and Turnkey. I am currently a third-year computer science student at the University of North Florida, graduating Spring 2027.
          </p>
        </section>
      </FadeIn>

    </main>
  );
}

function WorkCard({
  title,
  description,
  href,
  linkLabel,
  isExternalLink,
}: {
  title: string
  description: string | ReactNode
  href?: string
  linkLabel?: string
  isExternalLink: boolean
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-8">
      <h3 className="font-heading text-[24px] font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
        {typeof description === 'string' ? description : description}
      </p>
      {href && linkLabel && (
        href.startsWith("/") ? (
          <Link
            href={href}
            className="font-body flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
          >
            {linkLabel} {isExternalLink ? <ArrowUpRightFromSquareIcon size={14} /> : <ArrowRight size={14} />}
          </Link>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
          >
            {linkLabel} {isExternalLink ? <ArrowUpRightFromSquareIcon size={14} /> : <ArrowRight size={14} />}
          </a>
        )
      )}
    </div>
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
