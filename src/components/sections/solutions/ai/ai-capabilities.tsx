import Image from "next/image";
import {
  Sparkles,
  TrendingUp,
  Eye,
  MessagesSquare,
  Workflow,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

type Capability = {
  name: string;
  icon: LucideIcon;
  description: string;
  span: string;
  eyebrow?: string;
  featured?: boolean;
  tags?: string[];
};

const capabilities: Capability[] = [
  {
    name: "Generative AI & LLMs",
    icon: Sparkles,
    eyebrow: "Grounded in your data",
    description:
      "Custom copilots, retrieval-augmented generation over your knowledge base, and Azure OpenAI deployments that stay secure and on-brand.",
    span: "lg:col-span-2",
    featured: true,
    tags: ["Azure OpenAI", "RAG", "Copilots"],
  },
  {
    name: "Predictive Analytics & ML",
    icon: TrendingUp,
    description:
      "Forecasting, demand planning, churn and risk models that anticipate what happens next.",
    span: "lg:col-span-1",
  },
  {
    name: "Computer Vision",
    icon: Eye,
    description:
      "Automated quality inspection, OCR, and object detection that bring intelligence to the physical world.",
    span: "lg:col-span-1",
  },
  {
    name: "Natural Language Processing",
    icon: MessagesSquare,
    description:
      "Document intelligence, conversational assistants, and sentiment analysis at enterprise scale.",
    span: "lg:col-span-1",
  },
  {
    name: "Intelligent Automation",
    icon: Workflow,
    description:
      "Combine AI with workflow automation to remove manual toil across end-to-end processes.",
    span: "lg:col-span-1",
  },
  {
    name: "AI Strategy & Governance",
    icon: ShieldCheck,
    eyebrow: "Scale with confidence",
    description:
      "Use-case roadmaps, MLOps foundations, and responsible-AI frameworks that turn pilots into production at scale.",
    span: "lg:col-span-3",
  },
];

export function AiCapabilities() {
  return (
    <section className="bg-surface-container-low py-section">
      <Container>
        <div className="mb-16 text-center">
          <SectionLabel className="mb-4">What We Build</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg font-bold">
            Enterprise AI Capabilities
          </h2>
        </div>

        <div className="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(
            ({
              name,
              icon: Icon,
              description,
              span,
              eyebrow,
              featured,
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
                    /public/images/ai-generative.jpg and update `src`. */}
                {featured && (
                  <div className="absolute inset-0">
                    <Image
                      src="/images/ai-generative.svg"
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
