import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx"
import { mdxComponents } from "@/components/mdx"
import { SectionNav } from "@/components/mdx/SectionNav"
import { MetadataSidebar } from "@/components/mdx/MetadataSidebar"
import { ProjectHero } from "@/components/mdx/ProjectHero"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const { title, subtitle } = project.frontmatter
  return {
    title,
    description: subtitle,
    alternates: { canonical: `https://aydenweb.com/work/${slug}` },
    openGraph: {
      title: `${title} — Ayden Springer`,
      description: subtitle,
      url: `https://aydenweb.com/work/${slug}`,
    },
    twitter: {
      title: `${title} — Ayden Springer`,
      description: subtitle,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { frontmatter, content } = project

  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      <ProjectHero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        color={frontmatter.color}
        thumbnail={frontmatter.thumbnail}
        thumbnailSecondary={frontmatter.thumbnailSecondary}
        splitHero={frontmatter.splitHero}
      />

      <div className="mx-auto flex w-full  gap-6 px-6 py-8 md:px-10 lg:gap-10 lg:px-16">
        <SectionNav />

        <article className="min-w-0 flex-1">


          <div className="mb-8 lg:hidden">
            <MetadataSidebar
              role={frontmatter.role}
              timeline={frontmatter.timeline}
              team={frontmatter.team}
              collaborators={frontmatter.collaborators}
              tools={frontmatter.tools}
            />
          </div>

          <div className="prose-custom max-w-6xl mx-auto">
          <Link
            href="/#work"
            className="font-body mb-6 flex w-fit items-center gap-2 text-sm font-medium text-[var(--color-link)] hover:underline"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </article>

        <aside className="sticky top-[100px] hidden h-fit w-[200px] shrink-0 border-l border-[var(--color-border)] pl-8 lg:block">
          <MetadataSidebar
            role={frontmatter.role}
            timeline={frontmatter.timeline}
            team={frontmatter.team}
            collaborators={frontmatter.collaborators}
            tools={frontmatter.tools}
          />
        </aside>
      </div>
    </main>
  )
}
