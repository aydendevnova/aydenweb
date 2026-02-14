import "@/styles/globals.css";

import { type Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import { ContactFooter } from "@/components/ContactFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://aydenweb.com"),
  title: {
    default: "Ayden Springer — Developer",
    template: "%s — Ayden Springer",
  },
  description:
    "Computer science student and developer. Built AI products at Elysium Health, pixel art platforms with Stripe, and won the Stacks embedded wallet hackathon. Available for full-time roles starting Summer 2027.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aydenweb.com",
    siteName: "Ayden Springer",
    title: "Ayden Springer — Developer",
    description:
      "Computer science student and developer. Built AI products at Elysium Health, pixel art platforms with Stripe, and won the Stacks embedded wallet hackathon.",
  },
  twitter: {
    card: "summary",
    title: "Ayden Springer — Developer",
    description:
      "Computer science student and developer. Built AI products at Elysium Health, pixel art platforms with Stripe, and won the Stacks embedded wallet hackathon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://aydenweb.com",
  },
};

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable} h-full`}>
      <body className="h-full bg-[var(--color-bg)]">
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
