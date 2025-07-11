import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { DATA_ANALYSIS_PROJECTS } from '@/lib/data';

export default function DataAnalysisProjectsSection() {
  return (
    <SectionWrapper id="data-analysis" title="Data Analysis Projects">
      <ul className="group/list">
        {DATA_ANALYSIS_PROJECTS.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6 text-left">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={project.title}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{project.title}</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">{project.description}</p>
                <div className="mt-2 flex items-center gap-4">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}
                </div>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((tech, techIndex) => (
                        <li key={techIndex} className="mr-1.5 mt-2">
                            <Badge variant="secondary">{tech}</Badge>
                        </li>
                    ))}
                </ul>
              </div>
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 mx-auto"
                width={200}
                height={48}
                data-ai-hint={project.imageHint}
              />
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
