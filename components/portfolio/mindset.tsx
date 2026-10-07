import { FaqAccordion } from './faq'

const learningStats = [
  { value: 'BCA', label: 'Current academic path' },
  { value: '7+', label: 'Core technical areas explored' },
  { value: '∞', label: 'Curiosity to learn', infinity: true },
]

export function MindsetSection() {
  return (
    <section aria-labelledby="mindset-title" className="page-section mindset-section" id="mindset">
      <div className="section-shell">
        <p className="section-kicker" data-reveal>05 / MINDSET</p>
        <div className="mindset-layout">
          <div className="mindset-heading" data-reveal>
            <h2 className="section-title" id="mindset-title">
              Always
              <br />
              <span className="accent-text">learning.</span>
            </h2>
            <p className="mindset-tagline">Stay curious.<br />Keep building.</p>
          </div>
          <div className="career-objective" data-reveal>
            <p className="objective-label">CAREER OBJECTIVE</p>
            <p>
              To begin my career in the technology field where I can apply my programming and technical knowledge, gain practical industry experience, learn new technologies, and contribute to real-world projects while continuously improving my professional skills.
            </p>
          </div>
        </div>

        <div className="learning-stats">
          {learningStats.map((stat, index) => (
            <article className="learning-stat" data-reveal key={stat.label}>
              <span className="stat-index">0{index + 1} / LEARNING</span>
              <strong className={stat.infinity ? 'stat-value stat-value-infinity' : 'stat-value'}>{stat.value}</strong>
              <span className="stat-label">{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="faq-layout" id="faq">
          <div className="faq-heading" data-reveal>
            <p className="section-kicker">06 / FAQ</p>
            <h2 className="faq-title">A few things<br />about me.</h2>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </section>
  )
}

export default MindsetSection
