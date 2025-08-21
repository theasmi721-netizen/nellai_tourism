import React from 'react'

const logos = [
  "cylangas.svg","dragon.svg","hyundai.svg","johnson.svg","kipic.svg","petrofac.svg"
]

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-lg font-bold">OUR PARTNERS</h2>
        <div className="mx-auto mt-2 mb-8 h-1 w-12 bg-primary rounded-full"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
          {logos.map((src) => (
            <img key={src} src={`/public/logos/${src}`} alt="" className="opacity-70 hover:opacity-100 transition h-10 object-contain mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
