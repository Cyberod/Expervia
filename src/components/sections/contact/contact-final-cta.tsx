import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function ContactFinalCta() {
  return (
    <section className="py-section text-center">
      <Container>
        <h2 className="font-display text-on-surface md:text-display-lg mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Ready to Start Your Transformation Journey?
        </h2>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <Button variant="brand" size="pill" className="font-bold">
            Book a Consultation
          </Button>
          <Button variant="brandOutline" size="pill" className="font-bold">
            Request an Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
