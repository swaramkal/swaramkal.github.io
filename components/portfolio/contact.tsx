
'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'swaramkalkintali@gmail.com',
    href: 'mailto:swaramkalkintali@gmail.com',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/swaramkal-kintali',
    href: 'https://www.linkedin.com/in/swaramkal-kintali',
    external: true,
  },
  {
    label: 'GITHUB',
    value: 'github.com/swaramkal',
    href: 'https://github.com/swaramkal',
    external: true,
  },
  {
    label: 'INSTAGRAM',
    value: '@swaram888',
    href: 'https://www.instagram.com/swaram888',
    external: true,
  },
]

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swaramkal-kintali', external: true },
  { label: 'GitHub', href: 'https://github.com/swaramkal', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/swaram888', external: true },
  { label: 'Email', href: 'mailto:swaramkalkintali@gmail.com' },
  { label: 'Phone', href: 'tel:+919885059321' },
]

export function ContactSection() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus('')

    const form = event.currentTarget

    try {
      const response = await fetch('https://formspree.io/f/mkjjeypa', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('Message sent successfully! Thank you for contacting me.')
        form.reset()
      } else {
        setStatus('Unable to send your message. Please try again.')
      }
    } catch {
      setStatus('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section aria-labelledby="contact-title" className="page-section contact-section" id="contact">
      <div className="section-shell">
        <div className="contact-panel" data-reveal>
          <p className="contact-kicker">07 / CONTACT</p>

          <div className="contact-layout">
            <div className="contact-copy">
              <h2 id="contact-title">Let&apos;s build<br />something useful.</h2>
              <p>
                Interested in connecting, collaborating or discussing a project?
                Send me a message using the form.
              </p>

              <a className="conversation-link" href="mailto:swaramkalkintali@gmail.com">
                START A CONVERSATION <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="contact-form-area">
              <form className="portfolio-contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="contact-name">YOUR NAME</label>
                  <input id="contact-name" name="name" type="text"
                    placeholder="Enter your name" required maxLength={100} />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">EMAIL ADDRESS</label>
                  <input id="contact-email" name="email" type="email"
                    placeholder="you@example.com" required maxLength={150} />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">SUBJECT</label>
                  <input id="contact-subject" name="subject" type="text"
                    placeholder="What would you like to discuss?" required maxLength={150} />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">MESSAGE</label>
                  <textarea id="contact-message" name="message"
                    placeholder="Write your message here..." rows={5}
                    required maxLength={3000} />
                </div>

                <button className="contact-submit" type="submit" disabled={sending}>
                  {sending ? 'SENDING...' : 'SEND MESSAGE'}
                  <Send size={15} aria-hidden="true" />
                </button>

                <p className="form-status" role="status" aria-live="polite">
                  {status}
                </p>
              </form>
            </div>

            <ul className="contact-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a className="contact-link" href={link.href}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}>
                    <span className="contact-link-top">
                      <span>{link.label}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                    <span className="contact-link-value">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span aria-hidden="true" className="contact-decoration">KS.</span>
        </div>
      </div>
    </section>
  )
}

export function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <a aria-label="Back to top" className="footer-brand" href="#top">
          <span>KS</span>
          <span>KINTALI SWARAMKAL</span>
        </a>

        <p className="footer-credit">© 2026 Kintali Swaramkal · Built with curiosity.</p>

        <nav aria-label="Footer links" className="footer-links">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}
              rel={link.external ? 'noopener noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default ContactSection
