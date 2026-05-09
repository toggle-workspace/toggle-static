'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  quote: string
  author: string
  avatar?: { url: string; alt?: string } | null
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)

  if (!testimonials.length) return null

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]!

  return (
    <div className="testimonials-body">
      <div className="testimonial-item active">
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">{t.quote}</blockquote>
          <div>
            <p className="testimonial-author">{t.author}</p>
            <div className="testimonial-nav">
              <button className="arrow-btn" onClick={prev} aria-label="Previous">←</button>
              <button className="arrow-btn" onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </div>
        <div className="testimonial-portrait">
          {t.avatar?.url ? (
            <Image
              src={t.avatar.url}
              alt={t.avatar.alt || t.author}
              width={320}
              height={400}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              src={`https://picsum.photos/seed/testi${current + 1}/400/500`}
              alt={t.author}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  )
}
