import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" />
      <section className="contact-page-section">
        <div className="contact-page-inner">
          <div className="contact-layout">
            <ContactForm />
            <div className="contact-info-card">
              <h3 className="contact-info-card__title">Get in touch</h3>
              <p className="contact-info-card__sub">
                Have a project in mind? We&apos;d love to hear about it.
                Drop us a message and we&apos;ll get back to you within 24 hours.
              </p>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <span className="contact-icon">📞</span>
                  +1 (555) 000-0000
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon">✉️</span>
                  hello@digitalarc.com
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon">📍</span>
                  123 Design Street, San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
