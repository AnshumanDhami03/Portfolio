import SectionWrapper from './SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <ol className="group/list">
        {EXPERIENCES.map((exp, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {exp.year}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${exp.role} at ${exp.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">{exp.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {exp.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="mr-1.5 mt-2">
                      <Badge variant="secondary">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
