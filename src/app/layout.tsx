import "@/styles/globals.css";

import { type Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Ayden Springer",
  description: "Computer science student and developer. I build software that ships.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      <body className="h-full">{children}</body>
    </html>
  );
}
