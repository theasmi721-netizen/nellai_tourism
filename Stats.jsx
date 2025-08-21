import React from 'react'

const stats = [
  { label: "Years of Experience", value: "20+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Countries Served", value: "50+" },
  { label: "Industry Certifications", value: "25+" },
]

export default function Stats() {
  return (
    <section id="stats" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="text-4xl font-extrabold tracking-tight text-primary">{s.value}</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
