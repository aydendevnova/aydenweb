"use client"
import { ArrowUpRightFromSquareIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ContactFooter() {
  const pathname = usePathname();
  return (  
    <footer id="contact" className={`flex w-full flex-col gap-6 px-6 pt-[50px] pb-[160px] mx-auto md:gap-8 md:px-12 md:pt-[60px] md:pb-[240px] lg:px-[200px] lg:pt-[80px] lg:pb-[340px] ${pathname === "/work/red-block-labs" ? "max-w-7xl" : ""}`}>  
      <h2 className="font-heading text-[28px] font-semibold text-[var(--color-text)] md:text-[34px] lg:text-[40px]">
        Contact
      </h2>
      <div className="font-body flex flex-col gap-4">
        <a
          href="mailto:23aspringer3@gmail.com"
          className="text-[16px] text-[var(--color-link)] hover:underline"
        >
          23aspringer3@gmail.com
        </a>
        <Link
          href="https://github.com/aydendevnova"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-[var(--color-link)] hover:underline flex items-center gap-2"
        >
          github.com/aydendevnova <ArrowUpRightFromSquareIcon size={14} />
        </Link>
        <Link
          href="https://linkedin.com/in/ayden-springer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-[var(--color-link)] hover:underline flex items-center gap-2"
        >
          linkedin.com/in/ayden-springer <ArrowUpRightFromSquareIcon size={14} />
        </Link>
        <Link
          href="https://aydenweb.com/ayden-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
        >
          View Resume <ArrowUpRightFromSquareIcon size={14} />
        </Link>
      </div>
    </footer>
  )
}
