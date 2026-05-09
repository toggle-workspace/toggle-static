'use client'

import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
  order: number
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const num = String(i + 1).padStart(2, '0')
        return (
          <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
            <div
              className="faq-question"
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              onKeyDown={(e) => e.key === 'Enter' && setOpenIndex(isOpen ? null : i)}
            >
              <div className="faq-q-left">
                <span className="faq-q-num">{num}</span>
                <span className="faq-q-text">{item.question}</span>
              </div>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer__inner">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
