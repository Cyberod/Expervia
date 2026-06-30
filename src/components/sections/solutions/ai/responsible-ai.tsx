import Image from "next/image";
import { ScanEye, Lock, Scale, UserCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ScanEye,
    title: "Transparency & Explainability",
    body: "Models you can interpret, audit, and trust — no black boxes in production.",
  },
  {
    icon: Lock,
    title: "Data Security & Privacy",
    body: "Your data stays yours, with Zero-Trust controls and regional residency.",
  },
  {
    icon: Scale,
    title: "Fairness & Bias Controls",
    body: "Continuous evaluation to detect and mitigate bias before it reaches users.",
  },
  {
    icon: UserCheck,
    title: "Human Oversight",
    body: "Humans-in-the-loop and clear guardrails for every high-stakes decision.",
  },
];

export function ResponsibleAi() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image slot — swap /public/images/ai-responsible.jpg and update src */}
          <div className="relative order-last aspect-square overflow-hidden rounded-3xl lg:order-first">
            <Image
              src="/images/ai-responsible.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="from-surface/40 absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>

          <div>
            <SectionLabel className="mb-4">Responsible AI</SectionLabel>
            <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
              Powerful AI, Built on Trust
            </h2>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Enterprise AI only delivers when it&apos;s safe, compliant, and
              accountable. We engineer governance in from day one.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {principles.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <span className="bg-primary/20 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-on-surface font-bold">{title}</h3>
                    <p className="text-on-surface-variant text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
