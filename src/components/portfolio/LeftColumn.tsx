
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SOCIAL_LINKS, ARTIST_NAV_LINKS, ARTIST_SOCIAL_LINKS } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { ProfileType } from '@/app/page';

const developerTitles = ['Front-End Developer', 'Data Analyst'];
const artistTitles = ['Digital Artist', 'Illustrator'];

type LeftColumnProps = {
  activeProfile: ProfileType;
  onProfileToggle: () => void;
};

export default function LeftColumn({ activeProfile, onProfileToggle }: LeftColumnProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const isDeveloper = activeProfile === 'developer';
  const titles = isDeveloper ? developerTitles : artistTitles;
  const navLinks = isDeveloper ? NAV_LINKS : ARTIST_NAV_LINKS;
  const socialLinks = isDeveloper ? SOCIAL_LINKS : ARTIST_SOCIAL_LINKS;

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
        const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
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
  }, [activeSection, navLinks]);
  
  useEffect(() => {
    // Reset typing animation when profile changes
    setTitleIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
    setCurrentTitle('');
  }, [activeProfile]);


  useEffect(() => {
    const handleTyping = () => {
      const currentWord = titles[titleIndex];
      if (!currentWord) return;

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
  }, [charIndex, isDeleting, titleIndex, titles]);


  return (
    <header className="lg:sticky lg:top-0 flex flex-col items-center text-center lg:max-h-screen w-full lg:w-3/4 py-12 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onProfileToggle}
                className="group relative [perspective:1000px] bg-transparent border-none p-0 cursor-pointer"
                aria-label="Flip Profile"
              >
                <div 
                  className={`relative w-32 h-32 transition-transform duration-700 [transform-style:preserve-3d] ${isDeveloper ? '' : '[transform:rotateY(180deg)]'}`}
                >
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-full border-2 border-[#4B0082] p-1 bg-background">
                     <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                            src="https://i.postimg.cc/sDNdQc39/Whats-App-Image-2024-11-05-at-21-45-17-a0cd1fbd.jpg"
                            alt="Anshuman's developer profile picture"
                            className="w-full h-full object-cover"
                            width={128}
                            height={128}
                            priority
                            data-ai-hint="profile picture"
                        />
                     </div>
                  </div>
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full border-2 border-[#4B0082] p-1 bg-background">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                            src="https://i.postimg.cc/sxZgMxxd/Anshuman-DP.jpg"
                            alt="Anshuman's artist profile picture"
                            className="w-full h-full object-cover"
                            width={128}
                            height={128}
                            data-ai-hint="artist avatar"
                        />
                      </div>
                  </div>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Switch to {isDeveloper ? 'Artist' : 'Developer'} Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>


        <h1 className="group font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl mt-4">
            Hey I'm Anshuman
            <span className="inline-block transition-transform group-hover:animate-wave ml-2">
            👋
            </span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl font-headline min-h-[28px]">
            {currentTitle}
            <span className="animate-ping">|</span>
        </h2>
        
        {isDeveloper ? (
            <>
                <p className="mt-4 max-w-lg leading-normal text-muted-foreground">
                    I'm a creative <span className="font-medium text-foreground">Frontend developer</span> based in <span className="font-medium text-foreground">India</span> 🇮🇳. I specialize in <span className="font-medium text-foreground">UI</span> design and <span className="font-medium text-foreground">TypeScript</span> crafting engaging user experiences with great attention to detail.
                </p>
                <p className="mt-4 max-w-lg leading-normal text-muted-foreground">
                    In addition to frontend development, I work with data to extract insights and support better decisions. I specialize in <span className="font-medium text-foreground">Excel</span>, <span className="font-medium text-foreground">SQL</span>, <span className="font-medium text-foreground">Python</span>, and <span className="font-medium text-foreground">Power BI</span>, and have used these tools to organize, analyze, and visualize datasets in practical projects.
                </p>
            </>
        ) : (
             <p className="mt-4 max-w-lg leading-normal text-muted-foreground">
                I'm a passionate <span className="font-medium text-foreground">digital artist</span> from <span className="font-medium text-foreground">India</span> 🇮🇳. My work blends vibrant colors with fantasy themes, bringing imaginative characters and worlds to life. I specialize in <span className="font-medium text-foreground">character design</span> and <span className="font-medium text-foreground">concept art</span>.
            </p>
        )}

        <nav className="hidden lg:block mt-8" aria-label="In-page jump links">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
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
              {isDeveloper ? (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={socialLinks.github}
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
                        href={socialLinks.linkedin}
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
                        href={socialLinks.instagram}
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
                </>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                   <a href={`mailto:${socialLinks.gmail}`} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" aria-label="Email">
                        <Mail className="h-6 w-6" />
                   </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{socialLinks.gmail}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
        {isDeveloper && (
            <Button asChild className="mt-8">
                <a href="https://drive.google.com/uc?export=download&id=1e6uSrytsS4Z3EkKFPuBoTLqsvVayfLSv" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
        )}
      </div>
    </header>
  );
}
