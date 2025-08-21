import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Vision from './components/Vision.jsx'
import Stats from './components/Stats.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="text-slate-800">
      <Navbar />
      <Hero />
      <Vision />
      <Stats />
      <Partners />
      <Footer />
    </div>
  )
}
