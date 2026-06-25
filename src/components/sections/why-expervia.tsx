import {
  Check,
  ShieldCheck,
  Handshake,
  Users,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Direct Partnership Status",
    description:
      "Direct access to Microsoft and Huawei engineering resources, ensuring priority support and early access to innovations.",
  },
  {
    title: "Security-First Methodology",
    description:
      "Every line of code and architectural design is vetted through our Zero-Trust framework before deployment.",
  },
  {
    title: "Local Execution, Global Standards",
    description:
      "We combine global ITIL/ISO standards with on-the-ground presence in Lagos to handle your most complex challenges.",
  },
];

const metrics: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: ShieldCheck, value: "99.9%", label: "Uptime SLA Guaranteed" },
  { icon: Handshake, value: "Platinum", label: "Tier Partner Status" },
  { icon: Users, value: "200+", label: "Certified Experts" },
  { icon: Globe, value: "5+", label: "Countries Served" },
];

export function WhyExpervia() {
  return (
    <section className="bg-surface-container-high py-section border-y border-white/5">
      <Container>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <SectionLabel className="mb-2">Why Expervia</SectionLabel>
            <h2 className="font-display text-on-surface text-headline-lg mb-8 font-bold">
              The Partner for{" "}
              <span className="text-primary">
                High-Stakes Digital Transformation.
              </span>
            </h2>
            <ul className="space-y-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <div className="bg-primary/20 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-primary size-4" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold">{r.title}</h4>
                    <p className="text-on-surface-variant text-sm">
                      {r.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={cn(
                  "bg-surface-container flex aspect-square flex-col justify-center rounded-2xl border border-white/5 p-8 text-center",
                  i === 1 && "mt-12",
                  i === 2 && "-mt-12",
                )}
              >
                <Icon className="text-primary mx-auto mb-4 size-9" />
                <h4 className="mb-2 font-bold">{value}</h4>
                <p className="text-on-surface-variant text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
