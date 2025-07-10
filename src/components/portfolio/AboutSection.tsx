import SectionWrapper from './SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About">
      <div className="space-y-4">
        <p>
          I’m a frontend developer with a background in Computer Science, interested in building clean, functional
          interfaces for the web. I’ve worked with technologies like React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </SectionWrapper>
  );
}
