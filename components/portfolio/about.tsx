const profileFacts = [
  {
    label: 'LOCATION',
    value: 'Visakhapatnam',
    detail: 'Andhra Pradesh, India',
  },
  {
    label: 'EDUCATION',
    value: 'BCA · 2025–Present',
    detail: 'Vaishnavi College',
  },
  {
    label: 'FOCUS',
    value: 'Software Development',
    detail: 'Building practical knowledge',
  },
  {
    label: 'LANGUAGES',
    value: 'English · Telugu',
    detail: 'Communication & collaboration',
  },
]

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="page-section about-section" id="about">
      <div className="section-shell">
        <p className="section-kicker" data-reveal>01 / ABOUT</p>
        <div className="about-layout">
          <div className="about-copy" data-reveal>
            <h2 className="section-title" id="about-title">
              Curious by nature.
              <br />
              <span className="accent-text">Builder</span> by choice.
            </h2>
            <p>
              I&apos;m a BCA undergraduate developing practical knowledge across programming, web development, databases, computer networking and AI tools.
            </p>
          </div>
          <div className="profile-facts">
            {profileFacts.map((fact, index) => (
              <article className="profile-fact" data-reveal key={fact.label}>
                <div className="profile-fact-top">
                  <span className="profile-fact-index">0{index + 1}</span>
                  <span aria-hidden="true" className="profile-fact-dot" />
                </div>
                <p className="profile-fact-label">{fact.label}</p>
                <h3>{fact.value}</h3>
                <p className="profile-fact-detail">{fact.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <section aria-labelledby="summary-title" className="summary-panel" data-reveal>
          <div className="summary-label">
            <p className="section-kicker">A LITTLE ABOUT ME</p>
            <span aria-hidden="true" className="summary-rule" />
          </div>
          <div className="summary-copy">
            <h3 id="summary-title">A little about me.</h3>
            <p>
              Motivated BCA undergraduate student with an interest in <strong>software development, web development, databases, computer networking, and emerging technologies.</strong> Currently developing practical knowledge in <strong>C, C++, Java, Python, HTML, MySQL, Linux, and computer networking.</strong>
            </p>
            <p>
              Interested in building real-world applications and gaining practical industry experience. A quick learner who enjoys exploring new technologies, solving technical problems, and developing practical projects.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutSection
