import type { Metadata } from "next"
import { getFeaturedProjects, getAllProjects } from "@/lib/mdx"
import { ProjectThumbnail } from "@/components/ProjectThumbnail"
import { FadeIn } from "@/components/FadeIn"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A complete list of projects by Ayden Springer — frontend products, design systems, game development, and more.",
  alternates: {
    canonical: "https://aydenweb.com/work",
  },
}

export default function WorkPage() {
  const featured = getFeaturedProjects()
  const all = getAllProjects().filter((p) => !p.frontmatter.featured)

  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pt-[120px] pb-[60px] md:px-12 md:pt-[150px] md:pb-[80px] lg:px-20">
        <div>
          <FadeIn mobileEnabled>
            <Link
              href="/"
              className="font-body flex w-fit items-center gap-2 text-sm font-medium text-[var(--color-link)] hover:underline"
            >
              <ArrowLeft size={14} /> Home
            </Link>
          </FadeIn>

          <FadeIn mobileEnabled>
            <h1 className="font-heading mt-8 text-[32px] font-semibold leading-tight text-[var(--color-text)] md:text-[40px] lg:text-[48px]">
              All Projects
            </h1>
          </FadeIn>
        </div>

        {featured.length > 0 && (
          <FadeIn mobileEnabled>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[22px] font-semibold text-[var(--color-text)] md:text-[26px]">
                Featured
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((project) => (
                  <ProjectThumbnail
                    key={project.frontmatter.slug}
                    title={project.frontmatter.title}
                    slug={project.frontmatter.slug}
                    color={project.frontmatter.color}
                    thumbnail={project.frontmatter.thumbnail}
                    thumbnailFit={project.frontmatter.thumbnailFit}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn mobileEnabled>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[22px] font-semibold text-[var(--color-text)] md:text-[26px]">
              All Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {all.map((project) => (
                <ProjectThumbnail
                  key={project.frontmatter.slug}
                  title={project.frontmatter.title}
                  slug={project.frontmatter.slug}
                  color={project.frontmatter.color}
                  thumbnail={project.frontmatter.thumbnail}
                  thumbnailFit={project.frontmatter.thumbnailFit}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
