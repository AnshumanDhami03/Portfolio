
'use client';

import SectionWrapper from './SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from 'next/image';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function ExperienceSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [activeAccordionItem, setActiveAccordionItem] = useState<string | undefined>(undefined);

  if (isMobile) {
    return (
      <SectionWrapper id="experience" title="Experience">
        <Accordion 
            type="single" 
            collapsible 
            className="w-full text-left" 
            value={activeAccordionItem}
            onValueChange={setActiveAccordionItem}
        >
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-lg p-4"
            >
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 text-left">
                {exp.year}
              </header>
              <div className="z-10 sm:col-span-6">
                <AccordionItem value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="w-full p-0 hover:no-underline">
                      <h3 className="font-medium leading-snug text-foreground text-left">
                          <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary group/link text-base">
                            <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                          </span>
                      </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="mt-2 text-sm leading-normal text-muted-foreground text-left">{exp.description}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="mr-1.5 mt-2">
                          <Badge variant="secondary">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                    {exp.certificateUrl && exp.certificateUrl !== '#' && (
                      <div className="text-left mt-4">
                        <Button asChild size="sm">
                            <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                                Certificate <ExternalLink className="ml-1.5 h-4 w-4" />
                            </a>
                        </Button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          ))}
        </Accordion>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="experience" title="Experience">
      <Accordion type="single" collapsible className="w-full text-left" value={hoveredItem || undefined}>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(`item-${index}`)}
            onMouseLeave={() => setHoveredItem(null)}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-lg hover:bg-secondary/50 p-4"
          >
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 text-left">
              {exp.year}
            </header>
            <div className="z-10 sm:col-span-6">
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger hideChevron className="w-full p-0 hover:no-underline cursor-default">
                    <h3 className="font-medium leading-snug text-foreground text-left">
                        <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary group/link text-base">
                          <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                        </span>
                    </h3>
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <p className="mt-2 text-sm leading-normal text-muted-foreground text-left">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mr-1.5 mt-2">
                        <Badge variant="secondary">{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                  {exp.certificateUrl && exp.certificateUrl !== '#' && (
                    <div className="text-left mt-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button asChild size="sm">
                                <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                                    Certificate <ExternalLink className="ml-1.5 h-4 w-4" />
                                </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <Image src={exp.certificateImageUrl} alt={`${exp.company} certificate`} width={200} height={140} className="rounded-md" data-ai-hint="certificate document"/>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </div>
          </div>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
