"use client"

import { useState } from "react"
import { motion } from "motion/react"

const posts = [
  { title: "The Art of Overthinking Everything", date: "Mar 2, 2026", tag: "Life" },
  { title: "Why I Stopped Apologizing for Being Myself", date: "Feb 18, 2026", tag: "Growth" },
  { title: "Dating in Houston: A Survival Guide", date: "Feb 4, 2026", tag: "Humor" },
]

export function SaneGirlShowcase() {
  const [activeNav, setActiveNav] = useState("Writing")
  const [emailFocused, setEmailFocused] = useState(false)

  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#FAF7F2", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "#E8E2D9" }}>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: "16px", color: "#2C2C2C" }} className="font-bold">
          the only sane girl
        </span>
        <div className="flex gap-3">
          {["Writing", "Gallery", "About"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`text-[10px] font-medium transition-colors ${
                activeNav === item ? "text-[#2C2C2C]" : "text-[#2C2C2C]/40 hover:text-[#2C2C2C]/70"
              }`}
            >
              {item}
            </button>
          ))}
          <button className="text-[10px] font-semibold text-[#2C2C2C] bg-[#2C2C2C]/5 px-2.5 py-0.5 rounded-full hover:bg-[#2C2C2C]/10 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="px-5 py-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2C2C2C" }}
          className="text-2xl font-light leading-tight mb-2"
        >
          Navigating my 20s,<br />
          <em>one unhinged story at a time</em>
        </motion.h1>
        <p className="text-[11px] text-[#2C2C2C]/50 leading-relaxed max-w-xs mx-auto">
          A journal about growing up, messing up, and figuring it out &mdash; with questionable grace.
        </p>
      </div>

      {/* Featured posts */}
      <div className="px-5 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#2C2C2C]/30">
            From the Journal
          </span>
          <span className="text-[9px] text-[#2C2C2C]/30">View all &rarr;</span>
        </div>
        <div className="space-y-2">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              whileHover={{ x: 3 }}
              className="group flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2C2C2C]/[0.03] transition-colors"
              style={{ borderBottom: i < posts.length - 1 ? "1px solid #E8E2D9" : "none" }}
            >
              <div>
                <h3
                  className="text-xs font-medium text-[#2C2C2C] group-hover:text-[#2C2C2C]/80 transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[9px] text-[#2C2C2C]/30">{post.date}</span>
                  <span className="text-[9px] text-[#2C2C2C]/40 bg-[#2C2C2C]/5 px-1.5 py-0.5 rounded">{post.tag}</span>
                </div>
              </div>
              <svg className="w-3 h-3 text-[#2C2C2C]/20 group-hover:text-[#2C2C2C]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscribe CTA */}
      <div className="px-5 pb-5">
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#2C2C2C" }}>
          <p
            className="text-sm text-white/90 mb-1"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Join the Journey
          </p>
          <p className="text-[9px] text-white/40 mb-3">New stories delivered to your inbox</p>
          <div className="flex gap-1.5 max-w-[220px] mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className={`flex-1 rounded-lg px-3 py-1.5 text-[10px] bg-white/10 border text-white placeholder:text-white/25 outline-none transition-colors ${
                emailFocused ? "border-white/30" : "border-white/10"
              }`}
            />
            <button className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-semibold text-[#2C2C2C] hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
