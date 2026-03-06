"use client"

import { motion } from "motion/react"
import { skills } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block font-mono text-sm text-accent">
            // Toolkit
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What I work with.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-border-subtle bg-bg-card p-6"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
