"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';

export default function LeftColumn() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl mt-16 lg:mt-0">
              Anshuman
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl font-headline">
              Front end developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              I build exceptional and accessible digital experiences for the web.
            </p>
          </div>
          <Image
            src="https://placehold.co/128x128.png"
            alt="Anshuman's profile picture"
            className="rounded-full hidden lg:block"
            width={128}
            height={128}
            data-ai-hint="profile picture"
            priority
          />
        </div>

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a className="group flex items-center py-3" href={link.href}>
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-foreground motion-reduce:transition-none ${
                      activeSection === link.href.substring(1) ? 'w-16 bg-foreground' : ''
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground ${
                      activeSection === link.href.substring(1) ? 'text-foreground' : ''
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="mt-8 flex items-center" aria-label="Social media">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 text-muted-foreground hover:text-foreground transition-colors"
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
        <Button asChild className="mt-8">
            <a href="/anshuman-cv.pdf" download>Download CV</a>
        </Button>
      </div>
    </header>
  );
}
