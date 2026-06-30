import {
  BrainCircuit,
  ShieldCheck,
  Factory,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const values: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BrainCircuit,
    title: "AI & Cloud Specialists",
    body: "Deep expertise in Azure OpenAI and custom LLM deployments for the enterprise.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    body: "Zero-Trust architectures built into every cloud environment we deploy.",
  },
  {
    icon: Factory,
    title: "Industry-Focused",
    body: "Customized solutions for manufacturing, finance, and healthcare sectors.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Growth",
    body: "Leveraging the full Power Platform to turn raw data into strategic decisions.",
  },
];

export function WhyPartner() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <div className="gap-gutter grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionLabel className="mb-4">Why Expervia</SectionLabel>
            <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
              Your Trusted Microsoft Partner
            </h2>
            <p className="text-on-surface-variant text-body-lg">
              We don&apos;t just implement software; we engineer competitive
              advantages using the world&apos;s most powerful ecosystem.
            </p>
          </div>
          <div className="gap-gutter grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-surface-container hover:border-primary/40 space-y-4 rounded-xl border border-white/5 p-8 transition-colors"
              >
                <Icon className="text-primary size-8" />
                <h3 className="font-display text-on-surface text-headline-md font-semibold">
                  {title}
                </h3>
                <p className="text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
