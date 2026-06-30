import {
  Landmark,
  Stethoscope,
  Factory,
  ShoppingBag,
  Building2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionLabel } from "@/components/shared/section-label";

const useCases: { icon: LucideIcon; sector: string; useCase: string }[] = [
  {
    icon: Landmark,
    sector: "Financial Services",
    useCase: "Real-time fraud detection and credit risk scoring.",
  },
  {
    icon: Stethoscope,
    sector: "Healthcare",
    useCase: "Clinical document intelligence and diagnostic support.",
  },
  {
    icon: Factory,
    sector: "Manufacturing",
    useCase: "Predictive maintenance and automated quality inspection.",
  },
  {
    icon: ShoppingBag,
    sector: "Retail & Commerce",
    useCase: "Personalization engines and demand forecasting.",
  },
  {
    icon: Building2,
    sector: "Government",
    useCase: "Citizen-service assistants and document automation.",
  },
  {
    icon: Zap,
    sector: "Energy & Utilities",
    useCase: "Grid optimization and consumption forecasting.",
  },
];

export function AiUseCases() {
  return (
    <section className="bg-surface-container-lowest py-section">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionLabel className="mb-4">AI in Action</SectionLabel>
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            Outcomes Across Every Industry
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            We pair deep technical expertise with sector knowledge to apply AI
            where it creates measurable value.
          </p>
        </div>
        <div className="gap-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, sector, useCase }) => (
            <div
              key={sector}
              className="glass-card flex gap-4 rounded-xl p-6 transition-all hover:bg-white/5"
            >
              <span className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-on-surface mb-1 font-semibold">
                  {sector}
                </h3>
                <p className="text-on-surface-variant text-sm">{useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
