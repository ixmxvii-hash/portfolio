"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const testimonials = [
  { name: "Sarah M.", text: "Absolutely stunning photos. Logan captured every moment perfectly.", stars: 5 },
  { name: "James K.", text: "Professional, creative, and easy to work with. Highly recommend!", stars: 5 },
  { name: "Maria L.", text: "The best photographer in Houston. The attention to detail is incredible.", stars: 5 },
]

export function FrameTheoryShowcase() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      {/* Hero - faithful to Frame Theory's actual glassmorphism hero */}
      <div className="relative">
        {/* Parallax accent glow */}
        <div className="absolute -top-8 right-4 h-36 w-36 rounded-full bg-[#D4A853]/15 blur-3xl" />
        <div className="absolute -bottom-8 left-4 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

        <div
          className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/20 px-6 py-6 backdrop-blur-xl"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(212,168,83,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
          }}
        >
          <h3 className="text-2xl font-bold text-[#D4A853] text-center mb-2">
            Stories in Light
          </h3>
          <p className="text-xs text-white/40 text-center leading-relaxed mb-4">
            Clean, emotive photography that tells your story. Specializing in portraits, events, and product work across the Houston area.
          </p>
          <div className="flex gap-2 justify-center">
            <button className="rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-black hover:bg-white/90 transition-colors">
              Book a Session
            </button>
            <button className="rounded-full border border-white/20 bg-transparent px-4 py-1.5 text-[11px] font-medium text-white/80 hover:bg-white/5 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Services - matching Frame Theory's service section */}
      <div>
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-white/40">
            <span className="h-1 w-1 rounded-full bg-[#D4A853]" />
            Services
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Portrait", "Event", "Product"].map((service) => (
            <motion.div
              key={service}
              whileHover={{ y: -2, borderColor: "rgba(212,168,83,0.3)" }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center cursor-pointer backdrop-blur-sm transition-colors"
            >
              <h4 className="text-xs font-medium text-white mb-0.5">{service}</h4>
              <p className="text-[9px] text-white/30">Photography</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials - matching Frame Theory's testimonial section */}
      <div>
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-white/40">
            <span className="h-1 w-1 rounded-full bg-[#D4A853]" />
            Testimonials
          </span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm min-h-[80px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-white/50 italic leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>
              <p className="text-[10px] text-white/25 mt-1.5">
                &mdash; {testimonials[activeTestimonial].name}, Google Review
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-1 mt-3 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1 rounded-full transition-all ${
                  i === activeTestimonial ? "w-4 bg-[#D4A853]" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
