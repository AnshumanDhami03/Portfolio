
"use client";

import { useState, useEffect } from 'react';
import { NAV_LINKS, ARTIST_NAV_LINKS } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import type { ProfileType } from '@/app/page';

type NavbarProps = {
  activeProfile: ProfileType;
  onProfileToggle: () => void;
}

export default function Navbar({ activeProfile, onProfileToggle }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = activeProfile === 'developer' ? NAV_LINKS : ARTIST_NAV_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.href.substring(1)));
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
  }, [activeSection, navLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    setIsSheetOpen(false);
  };

  return (
    <nav className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col">
            <a href="#" className="text-xl font-bold font-headline text-foreground">
              WELCOME to <span style={{ color: '#4B0082' }}>ANSHU's</span> Portfolio
            </a>
            <p className="text-xs text-muted-foreground">Click the <button onClick={onProfileToggle} className="font-bold p-0 m-0 h-auto bg-transparent hover:bg-transparent text-primary">PHOTO</button> to uncover a fun twist</p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </nav>
  );
}
