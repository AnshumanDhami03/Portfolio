import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36" aria-label={title}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/80 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground text-center font-headline">
          {title}
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-foreground mb-8 hidden lg:block font-headline">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
