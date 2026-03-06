"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating crystal - left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-[5%] top-[20%] hidden lg:block"
      >
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image src="/assets/hero-crystal.png" alt="" width={180} height={180} className="opacity-50" />
        </motion.div>
      </motion.div>

      {/* Floating code brackets - right */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[5%] bottom-[25%] hidden lg:block"
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <Image src="/assets/code-brackets.png" alt="" width={150} height={150} className="opacity-40" />
        </motion.div>
      </motion.div>

      {/* Glow orbs - scattered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="pointer-events-none absolute right-[15%] top-[15%] hidden lg:block"
      >
        <motion.div animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Image src="/assets/glow-orb.png" alt="" width={40} height={40} className="opacity-60" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1.3 }}
        className="pointer-events-none absolute left-[12%] bottom-[30%] hidden lg:block"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <Image src="/assets/glow-orb.png" alt="" width={28} height={28} className="opacity-40" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-card/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-text-muted">Available for projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block text-text-primary">I build things</span>
          <span className="block bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
            for the web.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          Full-stack developer, entrepreneur &amp; Computer Networking
          student at the University of St. Thomas in Houston, TX.
          I design and ship websites, platforms, and business tools
          that look sharp and work even harder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group relative rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-hover"
          >
            View My Work
            <div className="absolute inset-0 -z-10 rounded-xl bg-accent opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border px-8 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-border hover:bg-surface hover:text-text-primary"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
