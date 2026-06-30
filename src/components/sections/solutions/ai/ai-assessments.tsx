import Link from "next/link";
import {
  Gauge,
  Database,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const assessments: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Gauge,
    title: "AI Readiness",
    body: "Benchmark your data, infrastructure, and skills against AI deployment requirements.",
  },
  {
    icon: Database,
    title: "Data Foundation",
    body: "Evaluate data quality, pipelines, and governance for analytics and ML.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Readiness",
    body: "Audit your environment and permissions for secure, grounded GenAI rollout.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible-AI Audit",
    body: "Review models and processes against fairness, privacy, and compliance standards.",
  },
];

export function AiAssessments() {
  return (
    <section className="bg-surface-container-low py-section">
      <Container>
        <div className="mb-16 max-w-3xl">
          <SectionLabel className="mb-4">Get Started</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            Complimentary AI Assessments
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Get expert eyes on your environment and a clear, prioritized roadmap
            to production AI.
          </p>
        </div>
        <div className="gap-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {assessments.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-card flex h-full flex-col rounded-2xl p-8 transition-all hover:bg-white/5"
            >
              <Icon className="text-primary mb-6 size-9" />
              <h3 className="font-display text-on-surface text-headline-md mb-2 font-semibold">
                {title}
              </h3>
              <p className="text-on-surface-variant mb-6 grow text-sm">
                {body}
              </p>
              <Link
                href="/contact"
                className="text-primary inline-flex items-center gap-2 font-bold hover:gap-3"
              >
                Request
                <ArrowRight className="size-4 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
