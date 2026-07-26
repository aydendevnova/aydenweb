import type { Metadata } from "next"
import { getAllProjects } from "@/lib/mdx"
import { HorizontalProjects } from "@/components/HorizontalProjects"

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A complete list of projects by Ayden Springer — frontend products, design systems, game development, and more.",
  alternates: {
    canonical: "https://aydenweb.com/work",
  },
}

export default function WorkPage() {
  const all = getAllProjects()

  return (
    <main className="min-h-full bg-(--color-bg)">
      <HorizontalProjects
        title="All Projects"
        subtitle=""
        showCta={false}
        projects={all.map((p) => ({
          title: p.frontmatter.title,
          slug: p.frontmatter.slug,
          color: p.frontmatter.color,
          thumbnail: p.frontmatter.thumbnail,
          thumbnailFit: p.frontmatter.thumbnailFit,
          description: p.frontmatter.description,
          category: p.frontmatter.category,
          order: p.frontmatter.order,
        }))}
      />
    </main>
  )
}
