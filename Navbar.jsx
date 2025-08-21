import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary"></div>
          <span className="font-bold tracking-wide">NELLAI TOURISM</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-primary" href="#vision">Vision</a>
          <a className="hover:text-primary" href="#stats">Experience</a>
          <a className="hover:text-primary" href="#partners">Partners</a>
          <a className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-slate-50" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
