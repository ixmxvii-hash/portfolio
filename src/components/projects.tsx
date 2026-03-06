"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { CopeShowcase } from "./showcases/cope-showcase"
import { IcitShowcase } from "./showcases/icit-showcase"
import { OdooShowcase } from "./showcases/odoo-showcase"
import { FrameTheoryShowcase } from "./showcases/frame-theory-showcase"
import { PairioShowcase } from "./showcases/pairio-showcase"
import { FancyShowcase } from "./showcases/fancy-showcase"
import { SaneGirlShowcase } from "./showcases/sane-girl-showcase"

const projects = [
  {
    title: "COPE Insurance",
    description:
      "Independent insurance agency platform. Interactive product selection, animated stats, and a multi-step quote flow.",
    url: "https://cope-gamma.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "Drizzle"],
    showcase: "cope",
    bgClass: "bg-gradient-to-br from-slate-50 to-blue-50/50",
  },
  {
    title: "ICIT Solutions",
    description:
      "Cloud-first IT services company. Dark corporate theme with numbered service rows, motion animations, and CMS admin.",
    url: "https://icitsolutions.com/",
    tags: ["Next.js", "Motion", "Drizzle", "Dark Theme"],
    showcase: "icit",
    bgClass: "bg-[#0a0e1a]",
  },
  {
    title: "ICIT Odoo ERP",
    description:
      "ERP implementation partner portal with a live ROI calculator, animated numbers, and lead capture system.",
    url: "https://odoo.icitsolutions.com/",
    tags: ["Next.js", "Framer Motion", "Analytics", "CRM"],
    showcase: "odoo",
    bgClass: "bg-gradient-to-br from-slate-900 to-slate-800",
  },
  {
    title: "The Frame Theory",
    description:
      "Photography portfolio with glassmorphism design, session booking, integrated payments, and a community portal.",
    url: "https://theframetheory.co/",
    tags: ["Next.js", "Prisma", "Auth", "Payments"],
    showcase: "frametheory",
    bgClass: "bg-[#0b0c0f]",
  },
  {
    title: "The Only Sane Girl",
    description:
      "Personal blog and digital journal with elegant typography, warm cream aesthetic, and newsletter integration.",
    url: "https://the-only-sane-girl.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Blog", "Newsletter"],
    showcase: "sanegirl",
    bgClass: "bg-[#FAF7F2]",
  },
  {
    title: "Pairio",
    description:
      "macOS menu bar app that enables AirPods audio sharing on Mac. Select devices, adjust individual volumes, and share audio instantly.",
    url: "#",
    tags: ["Swift", "SwiftUI", "CoreAudio", "Bluetooth"],
    showcase: "pairio",
    bgClass: "bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a]",
  },
  {
    title: "Fancy Organizer",
    description:
      "macOS desktop app for Fancy Apartments that uses AI/ML to analyze property footage and automatically sort it.",
    url: "#",
    tags: ["Swift", "CoreML", "Vision", "macOS"],
    showcase: "fancy",
    bgClass: "bg-gradient-to-br from-violet-950 to-slate-900",
  },
]

function ShowcaseRenderer({ type }: { type: string }) {
  switch (type) {
    case "cope":
      return <CopeShowcase />
    case "icit":
      return <IcitShowcase />
    case "odoo":
      return <OdooShowcase />
    case "frametheory":
      return <FrameTheoryShowcase />
    case "sanegirl":
      return <SaneGirlShowcase />
    case "pairio":
      return <PairioShowcase />
    case "fancy":
      return <FancyShowcase />
    default:
      return null
  }
}

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      {/* Globe decoration */}
      <div className="pointer-events-none absolute -right-20 top-20 hidden opacity-[0.06] xl:block">
        <Image src="/assets/globe-network.png" alt="" width={400} height={400} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block font-mono text-sm text-accent">
            // Selected Work
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects I&apos;ve shipped.
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            Interactive recreations of real UI elements from each project.
            Click around &mdash; they&apos;re fully functional.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border border-border-subtle ${
                i === projects.length - 1 ? "lg:col-span-2 lg:max-w-lg lg:mx-auto" : ""
              }`}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border-subtle bg-surface/50 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 rounded-md bg-bg/60 px-3 py-1">
                  <span className="text-[11px] text-text-muted font-mono">
                    {project.url === "#" ? "Fancy Organizer.app" : project.url.replace("https://", "")}
                  </span>
                </div>
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Showcase content */}
              <div className={`p-4 ${project.bgClass}`}>
                <ShowcaseRenderer type={project.showcase} />
              </div>

              {/* Project info */}
              <div className="border-t border-border-subtle bg-bg-card px-5 py-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-semibold text-text-primary">{project.title}</h3>
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
                <p className="text-xs text-text-secondary mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-surface px-2 py-0.5 text-[10px] text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
