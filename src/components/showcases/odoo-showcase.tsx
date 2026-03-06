"use client"

import { useState, useMemo } from "react"
import { motion } from "motion/react"

function calculateROI(revenue: number, employees: number) {
  const affectedEmployees = Math.min(40, Math.max(2, employees * 0.18))
  const manualHoursPerWeek = 15 * affectedEmployees
  const annualLaborCost = manualHoursPerWeek * 52 * 42
  const efficiencySavings = annualLaborCost * 0.42
  const errorSavings = Math.min(revenue * 0.01, 250000)
  const systemSavings = 4 * affectedEmployees * 650
  const annualSavings = efficiencySavings + errorSavings + systemSavings
  const implCost = Math.min(
    Math.max(10000 + employees * 480 + 4 * 2800 + Math.sqrt(revenue / 1000000) * 2400, 10000),
    125000
  )
  const paybackMonths = annualSavings > 0 ? (implCost / annualSavings) * 12 : 0
  const threeYearROI = ((annualSavings * 3 - implCost) / implCost) * 100
  const hoursSaved = manualHoursPerWeek * 0.42
  return { annualSavings, paybackMonths, threeYearROI, hoursSaved }
}

export function OdooShowcase() {
  const [revenue, setRevenue] = useState(5000000)
  const [employees, setEmployees] = useState(25)
  const results = useMemo(() => calculateROI(revenue, employees), [revenue, employees])

  const revenueLabel = revenue >= 1000000
    ? `$${(revenue / 1000000).toFixed(1)}M`
    : `$${(revenue / 1000).toFixed(0)}K`

  return (
    <div className="space-y-5">
      {/* Hero - faithful to Odoo Showcase's actual dark hero */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-center">
        <div className="absolute top-4 left-8 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-slate-800/80 px-3 py-1">
            <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium text-orange-400">Certified Odoo Partner</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">
            Streamline Your Business<br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-transparent bg-clip-text">
              with Odoo ERP
            </span>
          </h3>
          <p className="text-[11px] text-slate-300 mb-3">
            Go live in <span className="text-orange-400 font-semibold">90 days</span> with local support.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "90 Days", sub: "Implementation" },
              { label: "100%", sub: "Satisfaction" },
              { label: "50+", sub: "Projects" },
              { label: "24/7", sub: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl blur-lg group-hover:from-orange-500/20 transition-all" />
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-2 hover:border-orange-500/30 transition-all">
                  <div className="text-xs font-bold text-white">{stat.label}</div>
                  <div className="text-[8px] text-slate-400">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator - matching the actual white card style */}
      <div className="rounded-2xl bg-white overflow-hidden shadow-xl">
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Inputs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900">Your Business</h4>
            <div>
              <label className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-slate-600">Revenue</span>
                <span className="text-[11px] font-bold text-orange-600">{revenueLabel}</span>
              </label>
              <input
                type="range" min="250000" max="50000000" step="250000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
              />
            </div>
            <div>
              <label className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-slate-600">Employees</span>
                <span className="text-[11px] font-bold text-orange-600">{employees}</span>
              </label>
              <input
                type="range" min="3" max="200" step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900">Your Savings</h4>
            <motion.div
              key={`${revenue}-${employees}`}
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-3 shadow-lg"
            >
              <div className="text-[9px] font-semibold text-white/80">Annual Savings</div>
              <div className="text-xl font-bold text-white">
                ${Math.round(results.annualSavings).toLocaleString()}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-orange-50 p-2">
                <div className="text-[8px] text-slate-500">Payback</div>
                <div className="text-[11px] font-bold text-slate-900">{results.paybackMonths.toFixed(1)} mo</div>
              </div>
              <div className="rounded-lg bg-orange-50 p-2">
                <div className="text-[8px] text-slate-500">3-Year ROI</div>
                <div className="text-[11px] font-bold text-slate-900">{Math.round(results.threeYearROI)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
