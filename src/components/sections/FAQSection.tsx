import { FAQAccordion } from '@/components/ui/FAQAccordion'

interface FAQItem {
  id: string
  question: string
  answer: string
  order: number
}

const defaultFAQs: FAQItem[] = [
  { id: '1', order: 1, question: 'What services do you offer?', answer: 'We offer a full suite of creative and digital services including app design, web design, product design, brand identity, video production, and digital strategy consulting. Each project is customized to meet your specific business goals.' },
  { id: '2', order: 2, question: 'How long does a typical project take?', answer: 'Project timelines vary by scope. A brand identity project typically takes 3–5 weeks, a full website design 6–10 weeks, and a product design engagement 8–16 weeks. We\'ll provide a precise timeline during our discovery call.' },
  { id: '3', order: 3, question: 'Do you offer custom-design or use templates?', answer: 'Everything we create is custom-built from scratch. We never use generic templates. Each project begins with deep research into your brand, audience, and competitive landscape before a single pixel is placed.' },
  { id: '4', order: 4, question: 'How much does your service cost?', answer: 'Pricing depends on the scope, complexity, and timeline of your project. Brand identity packages start at $3,500, web design projects at $6,000, and product design engagements from $10,000. Contact us for a detailed proposal.' },
  { id: '5', order: 5, question: 'Can I revise your work multiple times?', answer: 'Yes. All packages include a defined number of revision rounds (typically 2–3). We encourage open feedback throughout the process so revisions are minimal and targeted rather than wholesale changes late in the project.' },
  { id: '6', order: 6, question: 'Can I see more by WrapPixel?', answer: 'Absolutely. WrapPixel has an extensive portfolio of premium design templates and UI kits available for both developers and designers. You can explore their full catalog on their official website.' },
]

export function FAQSection({ items }: { items: FAQItem[] }) {
  const faqs = items.length > 0 ? items : defaultFAQs

  return (
    <section>
      <div className="section-header-row">
        <div className="section-label">
          <span className="section-label-dot" />
          Have a Question
        </div>
        <h2 className="section-title">FAQ.</h2>
      </div>
      <div className="faq-section">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  )
}
