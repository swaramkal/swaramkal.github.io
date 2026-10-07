import { ArrowDown, ArrowRight, Mail, Phone } from 'lucide-react'

const marqueeItems = [
  'SOFTWARE DEVELOPMENT',
  'WEB DEVELOPMENT',
  'NETWORKING',
  'DATABASES',
  'ARTIFICIAL INTELLIGENCE',
  'APPLICATION DEVELOPMENT',
  'EMERGING TECHNOLOGIES',
]

function MarqueeItems() {
  return (
    <span className="marquee-copy">
      {marqueeItems.map((item) => (
        <span className="marquee-item" key={item}>
          <span aria-hidden="true" className="marquee-dot" />
          {item}
        </span>
      ))}
    </span>
  )
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="top">
      <div className="hero-container">
        <div className="hero-topline">
          <p className="hero-kicker">
            <span aria-hidden="true" className="hero-status-dot" />
            BCA UNDERGRADUATE <span aria-hidden="true">·</span> VISAKHAPATNAM, INDIA
          </p>
          <p className="hero-edition">PORTFOLIO <span>—</span> 2026</p>
        </div>

        <div className="hero-intro-grid">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              <span>KINTALI</span>
              <span className="hero-name-last">
                SWARAMKAL<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-role">
              BCA UNDERGRADUATE <span aria-hidden="true">/</span> ASPIRING SOFTWARE DEVELOPER
            </p>
            <p className="hero-description">
              Exploring software development, web development, databases, computer networking and emerging technologies through practical projects.
            </p>

            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#projects">
                EXPLORE PROJECTS <ArrowRight aria-hidden="true" />
              </a>
              <a className="hero-button hero-button-secondary" href="mailto:swaramkalkintali@gmail.com">
                <Mail aria-hidden="true" /> EMAIL ME
              </a>
              <a className="hero-button hero-button-text" href="tel:+919885059321">
                <Phone aria-hidden="true" /> CALL ME
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="hero-visual">
            <span className="hero-orbit hero-orbit-outer" />
            <span className="hero-orbit hero-orbit-inner" />
            <span className="hero-orbit-dot" />
            <div className="hero-visual-tile">
              <span className="hero-monogram">KS</span>
              <span className="hero-visual-caption">STUDENT · BUILDER</span>
            </div>
            <span className="hero-visual-tag hero-visual-tag-top">LEARNING IN PROGRESS</span>
            <span className="hero-visual-tag hero-visual-tag-bottom">PROGRAMMING · WEB · NETWORKS</span>
          </div>
        </div>

        <div className="hero-footer">
          <span>CURIOUS BY NATURE. BUILDING BY PRACTICE.</span>
          <a className="hero-scroll-link" href="#about">
            SCROLL TO EXPLORE <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function SkillsMarquee() {
  return (
    <div className="skills-marquee">
      <p className="sr-only">Software development, web development, networking, databases, artificial intelligence, application development, and emerging technologies.</p>
      <div aria-hidden="true" className="marquee-track">
        <MarqueeItems />
        <MarqueeItems />
      </div>
    </div>
  )
}
