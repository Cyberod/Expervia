import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const benefits = [
  "Technical Webinars",
  "Industry Insights",
  "Microsoft AI & Azure Updates",
  "Career Development",
  "Networking Opportunities",
  "Technology Events",
  "Learning Resources",
  "Collaboration Opportunities",
];

export function CommunityCta() {
  return (
    <section className="px-margin-mobile py-section md:px-margin-desktop">
      <Container className="px-0">
        <div className="glass-card group relative overflow-hidden rounded-3xl">
          {/* Ambient backdrop — placeholder for the community image */}
          <div className="bg-primary/5 absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-12 p-12 md:flex-row lg:p-20">
            <div className="max-w-xl">
              <h2 className="font-display text-on-surface text-headline-lg mb-6 font-bold">
                Join the Expervia AI &amp; Cloud Community
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CircleCheck className="text-primary size-5 shrink-0" />
                    <span className="text-on-surface">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant="brand"
              size="pill"
              className="primary-glow shrink-0 font-bold"
            >
              Join the Community
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
