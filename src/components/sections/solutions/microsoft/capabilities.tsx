import Image from "next/image";
import {
  Cloud,
  Bot,
  Users,
  Lock,
  Briefcase,
  Workflow,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  icon: LucideIcon;
  description: string;
  span: string;
  eyebrow?: string;
  featured?: boolean;
  features?: string[];
  tags?: string[];
};

const products: Product[] = [
  {
    name: "Microsoft Azure",
    icon: Cloud,
    eyebrow: "Build, Innovate & Scale",
    description:
      "Cloud strategy, seamless migration, and multi-layered security architecture on the world's most trusted cloud.",
    span: "lg:col-span-2",
    featured: true,
    tags: ["Migration", "IaaS / PaaS", "Azure OpenAI"],
  },
  {
    name: "Microsoft Copilot",
    icon: Bot,
    description:
      "Transform productivity with AI through readiness assessments and strategic implementation.",
    span: "lg:col-span-1",
    features: ["AI Adoption Roadmap", "Data Governance"],
  },
  {
    name: "Microsoft 365",
    icon: Users,
    description:
      "Empower your workforce with Teams, SharePoint, and Defender for advanced, secure collaboration.",
    span: "lg:col-span-1",
  },
  {
    name: "Microsoft Security",
    icon: Lock,
    description:
      "Security built for the modern enterprise, featuring Defender, Sentinel, and Purview.",
    span: "lg:col-span-1",
    tags: ["Defender", "Sentinel", "Purview"],
  },
  {
    name: "Dynamics 365",
    icon: Briefcase,
    description:
      "Unify CRM and ERP across sales, service, and operations with intelligent business applications.",
    span: "lg:col-span-1",
  },
  {
    name: "Power Platform",
    icon: Workflow,
    eyebrow: "Automate & Analyze",
    description:
      "Low-code apps, automated workflows, and Power BI analytics that turn raw data into decisions.",
    span: "lg:col-span-3",
  },
];

export function Capabilities() {
  return (
    <section className="bg-surface-container-low py-section">
      <Container>
        <div className="mb-16 text-center">
          <SectionLabel className="mb-4">Enterprise Ecosystem</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg font-bold">
            Future-Proof Microsoft Solutions
          </h2>
        </div>

        <div className="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map(
            ({
              name,
              icon: Icon,
              description,
              span,
              eyebrow,
              featured,
              features,
              tags,
            }) => (
              <article
                key={name}
                className={cn(
                  "glass-card hover:border-primary/50 relative flex flex-col overflow-hidden rounded-2xl p-8 transition-all",
                  span,
                  featured &&
                    "from-primary/10 bg-gradient-to-br to-transparent",
                )}
              >
                {/* Background image slot (featured card only). Swap in
                    /public/images/microsoft-azure.jpg and update `src`. */}
                {featured && (
                  <div className="absolute inset-0">
                    <Image
                      src="/images/microsoft-azure.svg"
                      alt=""
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover opacity-25"
                    />
                    <div className="from-surface-container/90 absolute inset-0 bg-gradient-to-t to-transparent" />
                  </div>
                )}

                <div className="relative z-10 flex grow flex-col">
                  <div className="bg-primary/10 text-primary mb-6 flex size-12 items-center justify-center rounded-lg">
                    <Icon className="size-6" />
                  </div>
                  {eyebrow && (
                    <span className="text-label-sm text-primary mb-2 font-mono tracking-wider uppercase">
                      {eyebrow}
                    </span>
                  )}
                  <h3
                    className={cn(
                      "font-display text-on-surface mb-2 font-semibold",
                      featured ? "text-headline-lg" : "text-headline-md",
                    )}
                  >
                    {name}
                  </h3>
                  <p className="text-on-surface-variant max-w-md">
                    {description}
                  </p>

                  {features && (
                    <ul className="mt-6 space-y-2 border-t border-white/5 pt-4 text-sm">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="text-on-surface-variant flex items-center gap-2"
                        >
                          <CircleCheck className="text-primary size-4 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tags && (
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] tracking-wider uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
