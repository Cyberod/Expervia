import Link from "next/link";
import {
  Zap,
  CloudUpload,
  Bot,
  ShieldAlert,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const assessments: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: "AI Readiness",
    body: "Evaluate your data infrastructure and security posture for Azure OpenAI integration.",
  },
  {
    icon: CloudUpload,
    title: "Cloud Readiness",
    body: "Identify legacy workloads ready for migration and modernization on Azure.",
  },
  {
    icon: Bot,
    title: "Copilot Readiness",
    body: "Audit your Microsoft 365 environment and data permissions for secure AI deployment.",
  },
  {
    icon: ShieldAlert,
    title: "Cyber Risk",
    body: "A deep dive into your current security landscape and threat exposure.",
  },
];

export function MicrosoftAssessments() {
  return (
    <section className="bg-surface-container-lowest py-section">
      <Container>
        <div className="mb-16 max-w-3xl">
          <SectionLabel className="mb-4">Get Started</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            Complimentary Executive Assessments
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Get expert eyes on your environment. Our strategic assessments
            provide you with a detailed roadmap for modernization.
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
                className="text-primary group/link inline-flex items-center gap-2 font-bold hover:gap-3"
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
