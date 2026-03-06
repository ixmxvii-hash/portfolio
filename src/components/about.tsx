"use client"

import { motion } from "motion/react"
import { experience } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block font-mono text-sm text-accent">
            // About
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A bit about me.
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m Logan, a developer and entrepreneur based in Houston, TX,
                currently studying{" "}
                <span className="text-text-primary font-medium">Computer Networking</span>{" "}
                at the{" "}
                <span className="text-text-primary font-medium">University of St. Thomas</span>.
                I build digital products that sit at the intersection of clean design
                and real business impact.
              </p>
              <p>
                My work spans the full stack &mdash; from pixel-perfect frontends
                to cloud infrastructure. I work at{" "}
                <span className="text-text-primary font-medium">ICIT Solutions</span>,
                where we handle managed IT, cybersecurity, and Odoo ERP
                implementations for businesses across Texas. I also built and run{" "}
                <span className="text-text-primary font-medium">The Frame Theory</span>,
                a photography brand with its own booking platform.
              </p>
              <p>
                I care deeply about craft &mdash; whether that&apos;s the way a hover
                animation feels, the architecture of a backend, or the composition of
                a photograph. I believe the best work happens when you refuse to cut
                corners.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="relative border-l border-border-subtle pl-5"
                >
                  <div className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <p className="text-sm font-medium text-text-primary">
                    {exp.role}
                  </p>
                  <p className="mb-1 text-sm text-accent">{exp.company}</p>
                  <p className="text-xs text-text-muted">{exp.period}</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
