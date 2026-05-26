import { useState, useEffect, useCallback } from "react"
import { cn } from "../lib/utils"

const testimonials = [
  {
    src: "https://www.image2url.com/r2/default/images/1777348047780-938afe8f-ae6f-4f39-b75d-e86a6465131d.jpg",
    alt: "Depoimento 1",
  },
  {
    src: "https://www.image2url.com/r2/default/images/1777348095220-effe1396-06b8-4b8a-883e-fdc4ad9eea68.jpg",
    alt: "Depoimento 2",
  },
  {
    src: "https://www.image2url.com/r2/default/images/1777348150925-d371dbb9-e5a1-49b0-9d4f-6419392be045.jpg",
    alt: "Depoimento 3",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-black mb-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <img
            key={i}
            src={t.src}
            alt={t.alt}
            className="w-full flex-shrink-0 object-cover"
            loading="lazy"
          />
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current ? "w-6 bg-white" : "w-2 bg-white/50"
            )}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
