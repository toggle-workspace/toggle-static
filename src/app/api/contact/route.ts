import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, message } = body as {
    name?: string
    phone?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-submissions',
      data: { name, phone: phone || '', email, message },
    })

    const { data: notifData, error: notifError } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: process.env.RESEND_TO || 'delivered@resend.dev',
      subject: `New contact from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (notifError) {
      console.error('Notification email failed:', notifError.message)
    }

    const { error: confirmError } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: email,
      subject: 'We received your message — DigitalArc',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! We've received your message and will get back to you within 24 hours.</p>
        <p>Best,<br/>The DigitalArc Team</p>
      `,
    })

    if (confirmError) {
      console.error('Confirmation email failed:', confirmError.message)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
