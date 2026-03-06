"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const animate = useCallback(() => {
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / 2000, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted, animate])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export function CopeShowcase() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="space-y-5">
      {/* Hero - faithful to actual COPE hero */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0051BA] via-[#003d8f] to-[#002a66] p-6 text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-60" />
        <div className="relative">
          {/* Trust badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1">
            <svg className="w-3 h-3 text-[#0051BA]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] font-semibold text-[#0051BA]">Trusted by 10,000+ Customers</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">Insurance That Fits Your Life</h3>
          <p className="text-[11px] text-blue-100/80 mb-4 max-w-xs mx-auto leading-relaxed">
            Expert guidance for auto, home, renters, and commercial coverage &mdash; personalized to protect what matters most.
          </p>

          <div className="flex gap-2 justify-center">
            <button className="rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-[#0051BA] hover:bg-blue-50 transition-colors flex items-center gap-1">
              Get Your Free Quote
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-white/20 transition-colors">
              Coverage Options
            </button>
          </div>

          {/* Avatars + rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#003d8f] bg-gradient-to-br from-blue-200 to-blue-300" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[9px] text-blue-100/60">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product cards - matching the actual COPE card style */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { slug: "auto", label: "Auto", color: "bg-blue-50 text-blue-600" },
          { slug: "home", label: "Home", color: "bg-emerald-50 text-emerald-600" },
          { slug: "renters", label: "Renters", color: "bg-amber-50 text-amber-600" },
          { slug: "commercial", label: "Commercial", color: "bg-violet-50 text-violet-600" },
        ].map((product) => {
          const isSelected = selected === product.slug
          return (
            <motion.button
              key={product.slug}
              onClick={() => setSelected(isSelected ? null : product.slug)}
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-2xl border bg-white p-3.5 text-left transition-all duration-300 ${
                isSelected
                  ? "border-[#0051BA] ring-2 ring-[#0051BA] shadow-lg"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm"
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${product.color}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-slate-900">{product.label} Insurance</h4>
              <div className="flex items-center gap-1 mt-2 pt-2 border-t border-slate-100">
                <span className={`text-[10px] font-semibold ${isSelected ? "text-emerald-600" : "text-[#0051BA]"}`}>
                  {isSelected ? "Selected" : "Select coverage"}
                </span>
                <svg className="w-2.5 h-2.5 text-[#0051BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Stats row - matching COPE stat cards */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { value: 10000, suffix: "+", label: "Clients" },
          { value: 500, prefix: "$", suffix: "M+", label: "Coverage" },
          { value: 98, suffix: "%", label: "Satisfaction" },
          { value: 24, suffix: "hr", label: "Response" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white border border-slate-100 p-2 text-center">
            <div className="text-sm font-bold text-[#0051BA]">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
            <div className="text-[9px] text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
