
"use client";

import { useState } from 'react';
import LeftColumn from '@/components/portfolio/LeftColumn';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import AnimatedSection from '@/components/portfolio/AnimatedSection';
import Navbar from '@/components/portfolio/Navbar';
import { SOCIAL_LINKS, ARTIST_SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin, Mail, Instagram, Brush } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import DataAnalysisProjectsSection from '@/components/portfolio/DataAnalysisProjectsSection';
import ArtistAboutSection from '@/components/portfolio/ArtistAboutSection';
import ArtistGallerySection from '@/components/portfolio/ArtistGallerySection';
import ContactMeSection from '@/components/portfolio/ContactMeSection';

export type ProfileType = 'developer' | 'artist';

export default function Home() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>('developer');

  const handleProfileToggle = () => {
    setActiveProfile(prev => prev === 'developer' ? 'artist' : 'developer');
  };

  const currentSocials = activeProfile === 'developer' ? SOCIAL_LINKS : ARTIST_SOCIAL_LINKS;

  return (
    <>
      <Navbar activeProfile={activeProfile} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="flex flex-col items-center">
          <LeftColumn 
            activeProfile={activeProfile} 
            onProfileToggle={handleProfileToggle} 
          />
          <main id="content" className="pt-12 lg:pt-24 lg:w-3/4 w-full">
            {activeProfile === 'developer' ? (
              <>
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
                <AnimatedSection>
                  <DataAnalysisProjectsSection />
                </AnimatedSection>
              </>
            ) : (
              <>
                <AnimatedSection>
                  <ArtistAboutSection />
                </AnimatedSection>
                <AnimatedSection>
                  <ArtistGallerySection />
                </AnimatedSection>
                <AnimatedSection>
                  <ContactMeSection />
                </AnimatedSection>
              </>
            )}

            <footer className="mt-16 text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-4" aria-label="Social media">
                <TooltipProvider>
                  {activeProfile === 'developer' ? (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={currentSocials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="h-6 w-6" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={currentSocials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-6 w-6" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </>
                  ) : (
                    <>
                       <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={currentSocials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="h-6 w-6" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Instagram</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={currentSocials.deviantArt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="DeviantArt"
                          >
                            <Brush className="h-6 w-6" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>DeviantArt</p>
                        </TooltipContent>
                      </Tooltip>
                    </>
                  )}
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <a href={`mailto:${currentSocials.gmail}`} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" aria-label="Email">
                        <Mail className="h-6 w-6" />
                       </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{currentSocials.gmail}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
