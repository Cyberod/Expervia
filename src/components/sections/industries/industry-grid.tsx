import {
  Landmark,
  Building2,
  Stethoscope,
  GraduationCap,
  RadioTower,
  Factory,
  Zap,
  ShoppingBag,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";

type Industry = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  solutions: string[];
  outcome: string;
};

const industries: Industry[] = [
  {
    icon: Landmark,
    title: "Financial Services",
    tagline: "Building the Future of Digital Finance",
    description:
      "Modernizing legacy banking cores and enabling secure, real-time transaction processing with AI-driven fraud detection and regulatory compliance automation.",
    solutions: ["Secure Cloud", "AI Fraud Detection"],
    outcome: "Compliance & Trust",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    tagline: "Enabling Digital Government",
    description:
      "Accelerating citizen-centric services through secure cloud migration and data sovereignty solutions that prioritize privacy and accessibility.",
    solutions: ["Citizen Portals", "Secure Data"],
    outcome: "Efficiency & Accessibility",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    tagline: "Driving Better Healthcare Through Tech",
    description:
      "Empowering providers with interoperable data systems and AI-powered diagnostic support while maintaining the highest levels of patient data security.",
    solutions: ["Telehealth", "HISP Compliance"],
    outcome: "Patient Outcomes",
  },
  {
    icon: GraduationCap,
    title: "Education",
    tagline: "Empowering Learning in the Digital Age",
    description:
      "Creating modern hybrid learning environments with scalable infrastructure and AI-driven personalized learning paths for students and faculty.",
    solutions: ["LMS Integration", "Virtual Labs"],
    outcome: "Global Engagement",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    tagline: "Enabling Connectivity and Innovation",
    description:
      "Optimizing network operations through edge computing and AI-powered predictive maintenance, ensuring high-speed connectivity and lower churn.",
    solutions: ["5G Optimization", "IoT Mesh"],
    outcome: "Network Resilience",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    tagline: "Intelligent Manufacturing for the Future",
    description:
      "Implementing Industry 4.0 standards with digital twins and real-time shop floor visibility to reduce waste and maximize throughput.",
    solutions: ["Smart Factory", "Supply Chain"],
    outcome: "Operational Speed",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    tagline: "Powering Smarter Operations",
    description:
      "Managing smart grids and distributed energy resources with data analytics that optimize consumption patterns and grid stability.",
    solutions: ["Grid Analytics", "Renewables AI"],
    outcome: "Sustainability",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    tagline: "Transforming Customer Experiences",
    description:
      "Unifying physical and digital storefronts with omnichannel commerce platforms and hyper-personalized customer engagement engines.",
    solutions: ["Omnichannel", "AI Inventory"],
    outcome: "Customer Loyalty",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    tagline: "Modernizing Service Delivery",
    description:
      "Optimizing billable utilization and project delivery with integrated cloud collaboration tools and automated business processes.",
    solutions: ["Cloud ERP", "Secure Docs"],
    outcome: "Profitability",
  },
];

export function IndustryGrid() {
  return (
    <section className="bg-surface-container-lowest py-section">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
              Transforming Your Sector
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              We bring deep domain expertise to help you navigate specific
              digital transitions within your industry landscape.
            </p>
          </div>
          <div className="text-label-sm text-on-surface-variant bg-surface-container shrink-0 rounded-full border border-white/5 px-4 py-2 font-mono tracking-widest uppercase">
            {industries.length} Core Specializations
          </div>
        </div>

        <div className="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(
            ({
              icon: Icon,
              title,
              tagline,
              description,
              solutions,
              outcome,
            }) => (
              <article
                key={title}
                className="glass-card flex h-full flex-col rounded-xl p-8"
              >
                <Icon className="text-primary mb-6 size-9" />
                <h3 className="font-display text-on-surface text-headline-md mb-1 font-semibold">
                  {title}
                </h3>
                <p className="text-label-sm text-secondary mb-4 font-mono">
                  {tagline}
                </p>
                <p className="text-body-md text-on-surface-variant mb-6 grow">
                  {description}
                </p>
                <div className="space-y-4 border-t border-white/5 pt-4">
                  <div>
                    <span className="text-label-sm text-on-surface/60 mb-2 block font-mono uppercase">
                      Solutions Include
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {solutions.map((s) => (
                        <span
                          key={s}
                          className="bg-surface-container-high text-on-surface-variant rounded px-2 py-1 text-[10px] font-bold uppercase"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-label-sm text-on-surface/60 mb-2 block font-mono uppercase">
                      Outcomes
                    </span>
                    <p className="text-primary text-body-md font-medium">
                      {outcome}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
