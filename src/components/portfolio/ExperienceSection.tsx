import SectionWrapper from './SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <Accordion type="single" collapsible className="w-full">
        {EXPERIENCES.map((exp, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b-0 mb-4">
             <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-lg hover:bg-secondary/50 p-4">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {exp.year}
                </header>
                <div className="z-10 sm:col-span-6">
                  <AccordionTrigger className="w-full p-0 hover:no-underline">
                      <h3 className="font-medium leading-snug text-foreground text-left">
                          <span className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base">
                            <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                          </span>
                      </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">{exp.description}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="mr-1.5 mt-2">
                          <Badge variant="secondary">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
