"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const devices = [
  { id: 1, name: "Logan's AirPods Pro", isAirPods: true, battery: 87 },
  { id: 2, name: "AirPods Max", isAirPods: true, battery: 62 },
  { id: 3, name: "MacBook Pro Speakers", isAirPods: false, battery: null },
]

function AirPodsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.5 4C4.567 4 3 5.567 3 7.5v4C3 13.433 4.567 15 6.5 15H7v4a1 1 0 102 0v-4h.5c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5H6.5zM14.5 4c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h.5v4a1 1 0 102 0v-4h.5c1.933 0 3.5-1.567 3.5-3.5v-4C21 5.567 19.433 4 17.5 4h-3z" />
    </svg>
  )
}

function SpeakerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  )
}

export function PairioShowcase() {
  const [selected, setSelected] = useState<Set<number>>(new Set([1]))
  const [sharing, setSharing] = useState(false)
  const [volumes, setVolumes] = useState<Record<number, number>>({ 1: 75, 2: 80, 3: 50 })

  const toggleDevice = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleShare = () => {
    if (selected.size >= 2) {
      setSharing(true)
      setTimeout(() => setSharing(false), 2000)
    }
  }

  return (
    <div className="mx-auto max-w-[320px]">
      {/* macOS menu bar popover style */}
      <div className="rounded-xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <AirPodsIcon className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-white">Pairio</span>
          </div>
          <AnimatePresence>
            {sharing && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[10px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full"
              >
                Sharing Audio
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* AirPods section */}
        <div className="px-3 pt-3 pb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30 px-1">
            AirPods
          </span>
        </div>
        <div className="px-2 space-y-0.5">
          {devices.filter(d => d.isAirPods).map((device) => {
            const isSelected = selected.has(device.id)
            return (
              <motion.button
                key={device.id}
                onClick={() => toggleDevice(device.id)}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  isSelected ? "bg-blue-500/15" : "hover:bg-white/5"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isSelected ? "bg-blue-500/20" : "bg-white/5"
                }`}>
                  <AirPodsIcon className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-white/40"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium truncate ${isSelected ? "text-blue-300" : "text-white/80"}`}>
                    {device.name}
                  </p>
                  <p className="text-[10px] text-white/30">{device.battery}% battery</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-blue-400 bg-blue-400" : "border-white/20"
                }`}>
                  {isSelected && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Other devices */}
        <div className="px-3 pt-3 pb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30 px-1">
            Other
          </span>
        </div>
        <div className="px-2 pb-2">
          {devices.filter(d => !d.isAirPods).map((device) => {
            const isSelected = selected.has(device.id)
            return (
              <motion.button
                key={device.id}
                onClick={() => toggleDevice(device.id)}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  isSelected ? "bg-blue-500/15" : "hover:bg-white/5"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isSelected ? "bg-blue-500/20" : "bg-white/5"
                }`}>
                  <SpeakerIcon className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-white/40"}`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium ${isSelected ? "text-blue-300" : "text-white/80"}`}>
                    {device.name}
                  </p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-blue-400 bg-blue-400" : "border-white/20"
                }`}>
                  {isSelected && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Volume slider for selected */}
        <AnimatePresence>
          {selected.size > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2">
                {Array.from(selected).map((id) => {
                  const device = devices.find(d => d.id === id)
                  if (!device) return null
                  return (
                    <div key={id} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                      </svg>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volumes[id] ?? 75}
                        onChange={(e) => setVolumes(prev => ({ ...prev, [id]: Number(e.target.value) }))}
                        className="flex-1 h-1 rounded-full appearance-none bg-white/10 accent-blue-400 cursor-pointer"
                      />
                      <span className="text-[10px] text-white/40 w-7 text-right">{volumes[id] ?? 75}%</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Share button */}
        <div className="border-t border-white/10 px-3 py-3">
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={selected.size < 2}
            className={`w-full rounded-lg py-2 text-xs font-semibold transition-all ${
              selected.size >= 2
                ? "bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-white/20 cursor-not-allowed"
            }`}
          >
            {sharing ? "Sharing..." : selected.size >= 2 ? "Share Audio" : "Select 2+ devices to share"}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
