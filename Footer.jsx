import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Nellai Tourism. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  )
}
