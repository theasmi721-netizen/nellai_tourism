import React from 'react'
import hero from '/public/images/hero.jpg'

const features = [
  "Lorem ipsam dolor sit",
  "Lorem ipsam dolor sit",
  "Lorem ipsam dolor sit",
  "Lorem ipsam dolor sit",
]

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[360px,1fr] gap-8 px-4 pt-10">
        <div className="space-y-4">
          <img src={hero} alt="Tropical coastline" className="rounded-xl shadow-md aspect-[4/5] object-cover" />
          <button className="text-[10px] uppercase tracking-wider px-4 py-2 rounded bg-primary text-white w-max shadow">
            Our approach is rooted in collaboration
          </button>
        </div>

        <div className="pt-2">
          <p className="text-[12px] uppercase tracking-widest text-slate-500 mb-2">Company overview</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">NELLAI TOURISM</h1>
          <p className="text-sm text-slate-500 -mt-1 mb-4">Explore the world</p>

          <p className="text-sm leading-6 text-slate-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec urna at lacus hendrerit facilisis.
            Integer non augue lacus. Aenean sagittis, nibh vel fringilla placerat, lectus nibh posuere arcu, et facilisis velit
            ligula. Aenean quis ligula lobortis odio eu amet laoreet bibendum.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-[12px]">
                <div className="mt-1 h-2 w-2 rounded-full bg-accent"></div>
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <img src="/public/images/hall.jpg" alt="Indoor waterfall" className="w-full max-h-[520px] object-cover" />
      </div>
    </section>
  )
}
