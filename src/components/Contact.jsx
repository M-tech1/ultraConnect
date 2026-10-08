import { useState } from 'react'
import { company, services } from '../data'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

const channels = [
  { icon: <PhoneIcon />, label: 'Call', value: company.phone, href: company.phoneHref },
  { icon: <WhatsAppIcon />, label: 'WhatsApp', value: 'Chat with us', href: company.whatsapp, external: true },
  { icon: <MailIcon />, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: <PinIcon />, label: 'Visit', value: company.location },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: send the enquiry as a pre-filled WhatsApp message
  const submit = (e) => {
    e.preventDefault()
    const text = `Hello UltraConnect, my name is ${form.name}.${form.service ? ` I'm interested in ${form.service}.` : ''}\n\n${form.message}`
    window.open(`${company.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="thanks" data-reveal>
          <div className="thanks__block" aria-hidden="true" />
          <div className="thanks__card">
            <p className="thanks__kicker">09 — Contact Us</p>
            <h2>
              Let’s build what <em>scales.</em>
            </h2>
          </div>
        </div>

        <div className="contact__grid">
          <ul className="channels" data-reveal>
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="channels__icon">{c.icon}</span>
                  <span>
                    <small>{c.label}</small>
                    {c.value}
                  </span>
                </>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} {...(c.external && { target: '_blank', rel: 'noreferrer' })}>
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <form className="enquiry" onSubmit={submit} data-reveal>
            <p className="enquiry__title">Tell us about your project</p>
            <label>
              Your name
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label>
              Service
              <select name="service" value={form.service} onChange={update}>
                <option value="">Select a service (optional)</option>
                {services.map((s) => (
                  <option key={s.title.join(' ')}>{s.title.join(' ')}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="4" value={form.message} onChange={update} required />
            </label>
            <button className="slant-btn" type="submit">
              <WhatsAppIcon /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
