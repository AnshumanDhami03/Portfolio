import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36" aria-label={title}>
      <div className="w-full mb-8">
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground text-center font-headline sm:text-xl md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="text-center">
        {children}
      </div>
    </section>
  );
}
