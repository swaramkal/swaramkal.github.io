import { ArrowUpRight } from 'lucide-react'

type ProjectKind = 'bridge' | 'web' | 'taxi'

const projects: Array<{
  number: string
  title: string
  category: string
  description: string
  kind: ProjectKind
  featured?: boolean
}> = [
  {
    number: '01',
    title: 'Hire Bridge',
    category: 'PRODUCT CONCEPT',
    description: 'A technology-based project focused on connecting job seekers and employers, helping users discover opportunities and improving the hiring process.',
    kind: 'bridge',
    featured: true,
  },
  {
    number: '02',
    title: 'Web Development Projects',
    category: 'WEB DEVELOPMENT',
    description: 'Creating and experimenting with HTML-based websites and web applications, focusing on user interfaces and practical functionality.',
    kind: 'web',
  },
  {
    number: '03',
    title: 'MANA TAXI SERVICE',
    category: 'FULL WEB APP CONCEPT',
    description: 'Cab-booking web application concept with customer booking, admin dashboard, driver login, booking management and driver acceptance features.',
    kind: 'taxi',
  },
]

function ProjectArtwork({ kind }: { kind: ProjectKind }) {
  if (kind === 'bridge') {
    return (
      <div className="project-art project-art-bridge" aria-hidden="true">
        <div className="bridge-diagram">
          <div className="bridge-node">
            <span>CONNECT</span>
            <strong>JOB SEEKERS</strong>
          </div>
          <span className="bridge-link" />
          <div className="bridge-node bridge-node-accent">
            <span>DISCOVER</span>
            <strong>EMPLOYERS</strong>
          </div>
        </div>
        <span className="art-side-label">HIRE BRIDGE / CONCEPT</span>
      </div>
    )
  }

  if (kind === 'web') {
    return (
      <div className="project-art project-art-web" aria-hidden="true">
        <div className="browser-window">
          <div className="browser-toolbar">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="browser-content">
            <div className="browser-copy-lines">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-feature" />
          </div>
          <div className="browser-footer-lines"><span /><span /></div>
        </div>
        <span className="web-sticker">INTERFACE / PRACTICE</span>
      </div>
    )
  }

  return (
    <div className="project-art project-art-taxi" aria-hidden="true">
      <div className="taxi-route">
        <span className="taxi-road taxi-road-one" />
        <span className="taxi-road taxi-road-two" />
        <span className="taxi-route-line" />
        <span className="taxi-route-point taxi-route-point-start" />
        <span className="taxi-route-point taxi-route-point-end" />
        <div className="taxi-info-card">
          <span>APP CONCEPT</span>
          <strong>MANA TAXI SERVICE</strong>
          <small>BOOKING · DRIVER · MANAGEMENT</small>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title" className="page-section projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker">02 / SELECTED WORK</p>
            <h2 className="section-title" id="projects-title">
              Things I&apos;m
              <br />
              <span className="accent-text">building.</span>
            </h2>
          </div>
          <p className="section-side-note">Ideas, experiments<br />and work in progress.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              aria-label={`View my GitHub profile for ${project.title}`}
              className={`project-card${project.featured ? ' project-card-featured' : ''}`}
              data-reveal
              href="https://github.com/swaram888"
              key={project.number}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectArtwork kind={project.kind} />
              <div className="project-content">
                <div className="project-meta">
                  <span>PROJECT {project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-cta">
                  VIEW PROJECT <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
