"use client"

import { motion } from "motion/react"

const services = [
  { number: "01", title: "Managed IT Services", description: "Proactive monitoring, maintenance, and support so your team stays productive." },
  { number: "02", title: "Cybersecurity", description: "Multi-layered protection including endpoint security and threat detection." },
  { number: "03", title: "Cloud Solutions", description: "Azure and AWS architecture, migration, and optimization." },
  { number: "04", title: "Business Solutions", description: "ERP, CRM, and workflow automation with Odoo and Microsoft 365." },
  { number: "05", title: "IT Consulting", description: "Strategic technology roadmaps and infrastructure audits." },
]

export function IcitShowcase() {
  return (
    <div className="space-y-5">
      {/* Hero - faithful to ICIT's actual hero */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Background with team image effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-60" />

        <div className="relative px-5 py-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/70 mb-2">
            Cloud-First IT Partner
          </p>
          <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
            Technology That Moves<br />Your Business Forward
          </h3>
          <p className="text-[11px] text-slate-400 mb-4 max-w-xs mx-auto leading-relaxed">
            Managed IT, cybersecurity, and cloud solutions that let you focus on what matters most.
          </p>
          <div className="flex gap-2 justify-center">
            <button className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-500 transition-colors">
              Schedule a Consultation
            </button>
            <button className="rounded-lg border border-white/20 px-3.5 py-1.5 text-[10px] font-medium text-white/80 hover:bg-white/5 transition-colors">
              Our Approach &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Services - faithful to ICIT's numbered row layout */}
      <div>
        <div className="mb-3">
          <span className="inline-block rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
            What We Do
          </span>
          <h4 className="mt-1.5 text-sm font-bold text-white">Services Built for Growth</h4>
        </div>

        <div className="h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            whileHover={{ x: 4 }}
            className="group cursor-pointer"
          >
            <div className="grid grid-cols-12 gap-2 items-center py-2.5">
              <span className="col-span-2 text-xl font-bold text-white/10 group-hover:text-blue-400/60 transition-colors">
                {service.number}
              </span>
              <h4 className="col-span-4 text-[11px] font-semibold text-white/80 group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="col-span-5 text-[10px] text-white/30 leading-relaxed">
                {service.description}
              </p>
              <div className="col-span-1 flex justify-end">
                <svg
                  className="w-3 h-3 text-white/15 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
            {i < services.length - 1 && (
              <div className="h-px bg-gradient-to-r from-white/8 via-white/8 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
