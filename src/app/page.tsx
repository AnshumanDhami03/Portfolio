import LeftColumn from '@/components/portfolio/LeftColumn';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import AnimatedSection from '@/components/portfolio/AnimatedSection';
import Navbar from '@/components/portfolio/Navbar';
import { SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="flex flex-col items-center">
          <LeftColumn />
          <main id="content" className="pt-12 lg:pt-24 lg:w-3/4 w-full">
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
            <AnimatedSection>
              <ExperienceSection />
            </AnimatedSection>
            <AnimatedSection>
              <TechStackSection />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectsSection />
            </AnimatedSection>

            <footer className="mt-16 text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-4" aria-label="Social media">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.gmail}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
