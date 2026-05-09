import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel'

interface Testimonial {
  id: string
  quote: string
  author: string
  avatar?: { url: string; alt?: string } | null
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: '"Their attention to detail and creative vision truly exceeded our expectations. The team delivered a refined, modern website that not only looks premium but also performs better than ever."',
    author: '@Steve Harrington',
  },
  {
    id: '2',
    quote: '"DigitalArc transformed our brand presence completely. From the initial concepts to final delivery, every touchpoint was thoughtful, intentional, and beautifully executed."',
    author: '@Maya Patel',
  },
  {
    id: '3',
    quote: '"Working with DigitalArc was a seamless experience. They understood our vision immediately and delivered a product that has become our greatest marketing asset."',
    author: "@James O'Brien",
  },
]

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const items = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section>
      <div className="dark-section-header">
        <div className="dark-section-label">
          <span className="section-label-dot" />
          What People Saying
        </div>
        <h2 className="section-title section-title--dark">Testimonials.</h2>
      </div>
      <div className="testimonials-logos">
        <div className="testimonial-logo-col"><span>afterpay&#8645;</span></div>
        <div className="testimonial-logo-col"><span>&#9737; Basecamp</span></div>
        <div className="testimonial-logo-col"><span>splunk&gt;</span></div>
        <div className="testimonial-logo-col"><span>&#8801; ghost</span></div>
      </div>
      <TestimonialsCarousel testimonials={items} />
    </section>
  )
}
