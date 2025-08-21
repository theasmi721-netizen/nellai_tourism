import React from 'react'

export default function Vision() {
  return (
    <section id="vision" className="relative -mt-24">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl grid md:grid-cols-3 overflow-hidden">
        <div className="col-span-1 bg-slate-50 p-6 md:p-8 border-r">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Our Vision</h3>
          <p className="text-xs text-slate-500 mt-2">Clear goals to delight travelers with memorable experiences.</p>
          <div className="mt-6 h-px bg-slate-200" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mt-6">Our Mission</h3>
          <p className="text-xs text-slate-500 mt-2">Sustainable tourism, local collaboration, and safety-first policies.</p>
        </div>
        <div className="md:col-span-2 p-6 md:p-10">
          <h2 className="text-xl font-bold mb-3">OUR VISION</h2>
          <p className="text-sm text-slate-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec urna at lacus hendrerit facilisis. Integer
            non augue lacus. Aenean sagittis, nibh vel fringilla placerat, lectus nibh posuere arcu, et facilisis velit ligula.
            Aenean quis ligula lobortis odio eu amet laoreet bibendum. Nullam eu erat a lacus hendrerit luctus.
          </p>
          <div className="mt-6 h-0.5 bg-primary/70 rounded-full max-w-xl" />
        </div>
      </div>
    </section>
  )
}
