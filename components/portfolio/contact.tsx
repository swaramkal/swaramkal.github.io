import { ArrowUpRight } from 'lucide-react'

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
    value: 'github.com/swaram888',
    href: 'https://github.com/swaram888',
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
  { label: 'GitHub', href: 'https://github.com/swaram888', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/swaram888', external: true },
  { label: 'Email', href: 'mailto:swaramkalkintali@gmail.com' },
  { label: 'Phone', href: 'tel:+919885059321' },
]

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="page-section contact-section" id="contact">
      <div className="section-shell">
        <div className="contact-panel" data-reveal>
          <p className="contact-kicker">07 / CONTACT</p>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2 id="contact-title">Let&apos;s build<br />something useful.</h2>
              <p>
                Interested in connecting, collaborating or discussing a project? Reach me through email or social platforms.
              </p>
              <a className="conversation-link" href="mailto:swaramkalkintali@gmail.com">
                START A CONVERSATION <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <ul className="contact-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="contact-link"
                    href={link.href}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
                  >
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
            <a
              href={link.href}
              key={link.label}
              rel={link.external ? 'noopener noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default ContactSection
