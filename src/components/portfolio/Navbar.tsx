
"use client";

import { useState, useEffect } from 'react';
import { NAV_LINKS, ARTIST_NAV_LINKS } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import type { ProfileType } from '@/app/page';

type NavbarProps = {
  activeProfile: ProfileType;
}

export default function Navbar({ activeProfile }: NavbarProps) {
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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsSheetOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col">
            <a href="#" className="text-xl font-bold font-headline text-foreground">
              WELCOME to <span style={{ color: '#4B0082' }}>ANSHU's</span> Portfolio
            </a>
            <p className="text-xs text-muted-foreground">Click the <span style={{ color: '#4B0082', fontWeight: 'bold' }}>PHOTO</span> to uncover a fun twist</p>
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
          
          <div className="sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 pt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block py-2 text-lg font-medium ${
                        activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
