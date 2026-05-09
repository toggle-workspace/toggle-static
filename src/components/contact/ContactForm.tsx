'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name <sup>*</sup>
          </label>
          <input
            className="form-input"
            id="name"
            type="text"
            placeholder="John Smith"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number <sup>*</sup>
          </label>
          <input
            className="form-input"
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>
      </div>
      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="email">
          Email Address <sup>*</sup>
        </label>
        <input
          className="form-input"
          id="email"
          type="email"
          placeholder="hello@company.com"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </div>
      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <label className="form-label" htmlFor="message">
          Message <sup>*</sup>
        </label>
        <textarea
          className="form-textarea"
          id="message"
          placeholder="Tell us about your project..."
          required
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        className="btn btn--dark contact-submit-btn"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p style={{ marginTop: '1rem', color: 'green', fontSize: '14px' }}>
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p style={{ marginTop: '1rem', color: 'red', fontSize: '14px' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
