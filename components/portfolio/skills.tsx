const skillGroups = [
  { number: '01', title: 'Programming', items: ['C', 'C++', 'Java', 'Python','(learning)'] },
  { number: '02', title: 'Web Development', items: ['HTML', 'Basic Web Development'] },
  { number: '03', title: 'Database', items: ['MySQL'] },
  { number: '04', title: 'Networking', items: ['Computer Networks', 'Cisco Packet Tracer', 'OSI Model', 'TCP/IP'] },
  { number: '05', title: 'Operating Systems', items: ['Linux', 'Windows'] },
  { number: '06', title: 'Tools', items: ['Git', 'GitHub', 'Canva'] },
  { number: '07', title: 'Emerging Technology', items: ['Artificial Intelligence', 'AI Tools'] },
  { number: '08', title: 'Soft Skills', items: ['Problem Solving', 'Quick Learning', 'Communication', 'Teamwork', 'Adaptability', 'Creativity', 'Self-Learning', 'Time Management'] },
]

const interests = [
  'Software Development',
  'Web Development',
  'Computer Networking',
  'Database Management',
  'Artificial Intelligence',
  'Application Development',
  'Emerging Technologies',
]

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-title" className="page-section skills-section" id="skills">
      <div className="section-shell">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker">03 / TOOLKIT</p>
            <h2 className="section-title" id="skills-title">
              My technical
              <br />
              <span className="accent-text">toolkit.</span>
            </h2>
          </div>
          <p className="section-side-note">A growing set of skills<br />for ideas worth building.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" data-reveal key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span aria-hidden="true" className="skill-mark">+</span>
              </div>
              <h3>{group.title}</h3>
              <ul className="skill-tags">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div aria-labelledby="interests-title" className="interests-block">
        <div className="section-shell interests-layout">
          <div data-reveal>
            <p className="section-kicker">CURIOSITY, DIRECTED</p>
            <h2 className="interests-title" id="interests-title">What interests me.</h2>
          </div>
          <ul className="interest-tags" data-reveal>
            {interests.map((interest) => (
              <li key={interest}><span>{interest}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
