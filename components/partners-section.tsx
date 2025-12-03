"use client"

import { useRef } from "react"

const partners = [
  { name: "NedZink", logo: "/images/partners/partner-nedzink.jpg" },
  { name: "dormakaba", logo: "/images/partners/partner-dormakaba.png" },
  { name: "TECHNORAILL", logo: "/images/partners/partner-technoraill.png" },
  { name: "HAWORTH", logo: "/images/partners/partner-haworth.png" },
  { name: "HunterDouglas", logo: "/images/partners/partner-hunterdouglas.png" },
  { name: "Zinc", logo: "/images/partners/partner-zinc.png" },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="partners" className="py-20 bg-[#2c2c2c] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#8a8a8a] text-lg">Collaborating with industry leaders worldwide</p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2c2c2c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2c2c2c] to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden" ref={scrollRef}>
            {/* First set of logos */}
            <div className="flex animate-scroll-left">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: "200px", height: "100px" }}
                >
                  <div className="bg-white/90 rounded-lg p-6 hover:bg-white transition-colors duration-300 w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll-left">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: "200px", height: "100px" }}
                >
                  <div className="bg-white/90 rounded-lg p-6 hover:bg-white transition-colors duration-300 w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#8a8a8a]">
            <div className="w-12 h-px bg-[#d4af37]"></div>
            <span className="text-sm uppercase tracking-wider">Trusted by 50+ Global Partners</span>
            <div className="w-12 h-px bg-[#d4af37]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
