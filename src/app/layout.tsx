import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Logan Allen | Developer & Entrepreneur",
  description:
    "Full-stack developer and entrepreneur from Houston, TX. Building websites, platforms, and business tools.",
  openGraph: {
    title: "Logan Allen | Developer & Entrepreneur",
    description:
      "Full-stack developer and entrepreneur from Houston, TX. Building websites, platforms, and business tools.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
