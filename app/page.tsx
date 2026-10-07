import PortfolioNav from '@/components/portfolio-nav'
import { AboutSection } from '@/components/portfolio/about'
import { ContactSection, PortfolioFooter } from '@/components/portfolio/contact'
import { EducationSection } from '@/components/portfolio/education'
import { HeroSection, SkillsMarquee } from '@/components/portfolio/hero'
import { MindsetSection } from '@/components/portfolio/mindset'
import { ProjectsSection } from '@/components/portfolio/projects'
import PortfolioRevealRoot from '@/components/portfolio/reveal-root'
import { SkillsSection } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <PortfolioRevealRoot>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PortfolioNav />
      <main id="main-content">
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <MindsetSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </PortfolioRevealRoot>
  )
}

