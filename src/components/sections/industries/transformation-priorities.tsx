import {
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  BarChart3,
  Rocket,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";

const priorities: { icon: LucideIcon; label: string }[] = [
  { icon: BrainCircuit, label: "AI & Intelligence" },
  { icon: CloudCog, label: "Cloud Transformation" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: BarChart3, label: "Data & Analytics" },
  { icon: Rocket, label: "Digital Evolution" },
  { icon: LayoutGrid, label: "Microsoft Solutions" },
];

export function TransformationPriorities() {
  return (
    <section className="bg-surface py-section relative overflow-hidden">
      <Container className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-display text-on-surface text-headline-lg mb-4 font-bold">
            Core Transformation Priorities
          </h2>
          <p className="text-body-lg text-on-surface-variant mx-auto max-w-2xl">
            Expertise that spans sectors to deliver universal value across the
            enterprise landscape.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {priorities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-surface-container hover:bg-surface-container-high flex flex-col items-center rounded-xl p-6 text-center transition-colors"
            >
              <Icon className="text-primary mb-4 size-8" />
              <span className="text-body-md text-on-surface">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
