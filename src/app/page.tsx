import LeftColumn from '@/components/portfolio/LeftColumn';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import AnimatedSection from '@/components/portfolio/AnimatedSection';
import Navbar from '@/components/portfolio/Navbar';

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
              <p>
                Design inspired by{' '}
                <a
                  href="https://duyle.dev/"
                  className="font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Duy Le
                </a>
                . Built with Next.js & Tailwind CSS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
