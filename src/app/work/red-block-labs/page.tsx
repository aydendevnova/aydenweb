import { ArrowLeft, ArrowUpRightFromSquareIcon } from "lucide-react"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { type Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"
import zeroAuthorityImg from "@/assets/rbl/zero-authority.jpg"
import bnsOneImg from "@/assets/rbl/bns-one.jpg"
import doctImg from "@/assets/rbl/doct.jpg"

export const metadata: Metadata = {
  title: "Red Block Labs — Ayden Springer",
  description:
    "Frontend development work across multiple Stacks ecosystem projects with Red Block Labs.",
}

const PROJECTS = [
  {
    title: "Zero Authority",
    description:
      "Complete frontend redesign for decentralized freelance platform. Built 25+ pages including project creation flows, escrow management, wallet integration, and analytics dashboards for the V2 launch.",
    href: "https://zeroauthoritydao.com/",
    linkLabel: "Live Site",
    image: zeroAuthorityImg,
  },
  {
    title: "BNS One",
    description:
      "Modern interface for Bitcoin Name System domain management. Developed search, registration, trading marketplace, and domain dashboard features with wallet connectivity.",
    href: "https://bns.one",
    linkLabel: "bns.one",
    image: bnsOneImg,
  },
  {
    title: "DocT Art Collection",
    description:
      'Landing page for "They Are Here" collection by pediatrician-artist DocT, featured at White Night of the Galleries in Romania. Gallery interface showcasing neo-expressionist works including the first human brain inscription on Bitcoin.',
    href: "https://doct-vite.vercel.app",
    linkLabel: "doct-vite.vercel.app",
    image: doctImg,
  },
]

export default function RedBlockLabsPage() {
  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pt-[80px] pb-[60px] md:gap-10 md:px-12 md:pt-[100px] md:pb-[80px] lg:gap-12 lg:px-[200px] lg:pt-[120px] lg:pb-[100px]">
        <FadeIn mobileEnabled>
          <Link
            href="/"
            className="font-body flex w-fit items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
          >
            <ArrowLeft size={16} /> Back
          </Link>
        </FadeIn>

        <FadeIn mobileEnabled>
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-[28px] font-semibold leading-tight text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
              Red Block Labs
            </h1>
            <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
              Red Block Labs is a development and design team led by Rocky Nguyen, specializing in frontend
              and design for our clients. Our team members also include Christa Vu (Designer), Tien Tran and John Ha. I contributed as the sole-developer on
              multiple client projects from 2023–2026, helping secure over
              $20,000 in grants and funding through shipped work.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project) => (
            <FadeIn key={project.title} mobileEnabled>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProjectCard({
  title,
  description,
  href,
  linkLabel,
  image,
}: {
  title: string
  description: string
  href: string
  linkLabel: string
  image: StaticImageData
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-[24px] font-semibold text-[var(--color-text)]">
          {title}
        </h2>
        <p className="font-body max-w-[600px] text-[16px] leading-[1.6] text-[var(--color-text)]">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
        >
          {linkLabel} <ArrowUpRightFromSquareIcon size={14} />
        </a>
      </div>
      <div className="h-[180px] w-full shrink-0 overflow-hidden rounded-xl border border-[#E8E4DF] md:h-[200px] md:max-w-[350px] lg:h-[220px] lg:w-[480px]">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={480}
          height={180}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 1024px) 100%, 480px"
        />
      </div>
    </div>
  )
}
