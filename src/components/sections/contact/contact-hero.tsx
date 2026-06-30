import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

export function ContactHero() {
  return (
    <section className="hero-mesh pb-section relative overflow-hidden pt-40">
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <SectionLabel className="mb-4">Get In Touch</SectionLabel>
          <h1 className="font-display text-on-surface md:text-display-lg mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s Build the Future Together
          </h1>
          <h2 className="font-display text-headline-md text-secondary mb-8 font-semibold">
            Transform Your Business with AI, Cloud, Cybersecurity &amp; Digital
            Innovation
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Every successful transformation begins with a conversation. At
            Expervia Technologies, we partner with governments, enterprises, and
            healthcare organizations to solve complex challenges.
          </p>
        </div>
      </Container>
    </section>
  );
}
