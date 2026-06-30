import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const steps = [
  {
    title: "Assess",
    body: "Identify high-value use cases and evaluate your data, infrastructure, and governance readiness.",
  },
  {
    title: "Prototype",
    body: "Rapidly build a proof-of-concept to validate measurable impact before committing to scale.",
  },
  {
    title: "Productionize",
    body: "Engineer secure, monitored, production-grade AI systems with full MLOps lifecycle support.",
  },
  {
    title: "Govern & Scale",
    body: "Embed responsible-AI guardrails and roll out across teams, regions, and workloads.",
  },
];

export function AiApproach() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionLabel className="mb-4">How We Deliver</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            From Idea to Production, De-Risked
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            A staged approach that proves value early and scales responsibly —
            so AI becomes an operational capability, not a science experiment.
          </p>
        </div>
        <ol className="gap-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="bg-surface-container hover:border-primary/40 relative rounded-xl border border-white/5 p-8 transition-colors"
            >
              <div className="font-display text-primary/30 mb-4 text-5xl font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-on-surface text-headline-md mb-2 font-semibold">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
