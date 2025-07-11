"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const titles = ['Front end developer', 'Data Analyst'];

export default function LeftColumn() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
        const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1)));
        const scrollPosition = window.scrollY + window.innerHeight / 2;
    
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
                if (activeSection !== section.id) {
                    setActiveSection(section.id);
                }
                return;
            }
        }
    
        if (window.scrollY < 200 && activeSection !== 'about') {
            setActiveSection('about');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);


  return (
    <header className="lg:sticky lg:top-0 flex flex-col items-center text-center lg:max-h-screen w-full lg:w-3/4 py-12 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <Image
            src="https://i.postimg.cc/sDNdQc39/Whats-App-Image-2024-11-05-at-21-45-17-a0cd1fbd.jpg"
            alt="Anshuman's profile picture"
            className="rounded-full object-cover mb-4"
            width={128}
            height={128}
            priority
            data-ai-hint="profile picture"
        />
        <h1 className="group font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hey I'm Anshuman
            <span className="inline-block transition-transform group-hover:animate-wave ml-2">
            👋
            </span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl font-headline min-h-[28px]">
            {currentTitle}
            <span className="animate-ping">|</span>
        </h2>
        <p className="mt-4 max-w-lg leading-normal text-muted-foreground">
            I'm a creative <span className="font-medium text-foreground">Frontend developer</span>. I specialize in <span className="font-medium text-foreground">UI</span> design and <span className="font-medium text-foreground">TypeScript</span> crafting engaging user experiences with great attention to detail.
        </p>

        <nav className="hidden lg:block mt-8" aria-label="In-page jump links">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  className="group flex flex-col items-center py-2" 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span
                    className={`nav-text text-sm font-medium uppercase tracking-widest transition-colors ${
                      activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </span>
                   <span
                    className={`nav-indicator mt-1 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                      activeSection === link.href.substring(1) ? 'w-full' : ''
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <div className="flex items-center gap-4" aria-label="Social media">
           <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={SOCIAL_LINKS.github}
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
                    href={SOCIAL_LINKS.linkedin}
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{SOCIAL_LINKS.gmail}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
        <Button asChild className="mt-8">
            <a href="https://drive.google.com/uc?export=download&id=1e6uSrytsS4Z3EkKFPuBoTLqsvVayfLSv" target="_blank" rel="noopener noreferrer">Download CV</a>
        </Button>
      </div>
    </header>
  );
}
