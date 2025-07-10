import SectionWrapper from './SectionWrapper';
import { CATEGORIZED_TECH_STACK } from '@/lib/data';

export default function TechStackSection() {
  return (
    <SectionWrapper id="tech-stack" title="Tech Stack">
      <div className="flex flex-col gap-8">
        {CATEGORIZED_TECH_STACK.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {category.skills.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 transition-all hover:bg-secondary/70 hover:shadow-lg">
                  <div
                    className="h-10 w-10 mb-2 [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: tech.icon }}
                  />
                  <p className="text-sm font-medium text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
