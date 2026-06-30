import { ArrowRight, BadgeCheck } from "lucide-react";
import { Container } from "@/components/shared/container";

const assessments = [
  {
    title: "AI Readiness",
    description:
      "Analyze your data architecture and governance to identify AI deployment opportunities.",
  },
  {
    title: "Cloud Readiness",
    description:
      "Review legacy infrastructure for optimization and seamless hybrid-cloud migration.",
  },
  {
    title: "Cybersecurity Risk",
    description:
      "A deep dive into your vulnerability landscape and incident response capabilities.",
  },
  {
    title: "Digital Maturity",
    description:
      "Benchmarking your organization against industry-leading digital transformation models.",
  },
];

function RequestLink() {
  return (
    <button
      type="button"
      className="text-primary group/btn flex items-center gap-2 font-bold transition-all hover:gap-3"
    >
      Request Assessment
      <ArrowRight className="size-4" />
    </button>
  );
}

export function Assessments() {
  return (
    <section className="bg-surface-container-lowest py-section">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            Request a Complimentary Assessment
          </h2>
          <p className="text-on-surface-variant mx-auto max-w-2xl">
            Evaluate your current posture and readiness for future-scale
            technologies with our expert-led diagnostics.
          </p>
        </div>
        <div className="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {assessments.map((a) => (
            <div key={a.title} className="glass-card hover-lift rounded-xl p-8">
              <h4 className="font-display text-on-surface text-headline-md mb-4 font-semibold">
                {a.title}
              </h4>
              <p className="text-on-surface-variant mb-6">{a.description}</p>
              <RequestLink />
            </div>
          ))}

          {/* Microsoft Copilot — spans two columns with an icon panel */}
          <div className="glass-card hover-lift rounded-xl p-8 lg:col-span-2">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div>
                <h4 className="font-display text-on-surface text-headline-md mb-4 font-semibold">
                  Microsoft Copilot Readiness
                </h4>
                <p className="text-on-surface-variant mb-6">
                  Ensure your tenant is secure and your data is properly
                  permissioned for GenAI adoption.
                </p>
                <RequestLink />
              </div>
              <div className="bg-primary/20 flex h-32 w-full items-center justify-center rounded-lg md:w-1/2">
                <BadgeCheck className="text-primary size-16" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
