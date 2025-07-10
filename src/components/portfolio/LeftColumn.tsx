"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';

const titles = ['Front end developer', 'Data Analyst'];

export default function LeftColumn() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          if (activeSection !== section.id) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = titles[titleIndex];
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        setCurrentTitle(currentWord.substring(0, charIndex - 1));
        if (charIndex === 1) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCharIndex((prev) => prev + 1);
        setCurrentTitle(currentWord.substring(0, charIndex + 1));
        if (charIndex === currentWord.length -1) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);


  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h1 className="group font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl mt-16 lg:mt-0">
              Hey I'm Anshuman
              <span className="inline-block transition-transform group-hover:animate-wave ml-2">
                👋
              </span>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl font-headline min-h-[28px]">
              {currentTitle}
              <span className="animate-ping">|</span>
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              I'm a creative <span className="font-medium text-foreground">Frontend developer</span>. I specialize in <span className="font-medium text-foreground">UI</span> design and <span className="font-medium text-foreground">TypeScript</span> crafting engaging user experiences with great attention to detail.
            </p>
          </div>
          <Image
            src="https://i.postimg.cc/sDNdQc39/Whats-App-Image-2024-11-05-at-21-45-17-a0cd1fbd.jpg"
            alt="Anshuman's profile picture"
            className="rounded-full object-cover mt-16 lg:mt-0"
            width={128}
            height={128}
            priority
            data-ai-hint="profile picture"
          />
        </div>

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  className="group flex items-center py-3" 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
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
