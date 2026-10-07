const education = [
  {
    period: '2025 – PRESENT',
    status: 'CURRENT',
    title: 'BCA — UNDERGRADUATE',
    institution: 'Vaishnavi College',
  },
  {
    period: '2023 – 2025',
    status: '',
    title: 'INTERMEDIATE / 12TH STANDARD',
    institution: 'Dr. Lankapalli Bullayya College',
  },
  {
    period: '2022 – 2023',
    status: '',
    title: '10TH STANDARD',
    institution: 'Ravindra Bharathi School',
  },
]

export function EducationSection() {
  return (
    <section aria-labelledby="education-title" className="page-section education-section" id="education">
      <div className="section-shell">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker">04 / EDUCATION</p>
            <h2 className="section-title" id="education-title">
              Learning
              <br />
              <span className="accent-text">in progress.</span>
            </h2>
          </div>
          <p className="section-side-note">Every step adds<br />another layer of understanding.</p>
        </div>

        <ol className="education-timeline">
          {education.map((item) => (
            <li className="timeline-item" data-reveal key={item.title}>
              <span aria-hidden="true" className="timeline-marker" />
              <article className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  {item.status && <span className="timeline-current">{item.status}</span>}
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default EducationSection
