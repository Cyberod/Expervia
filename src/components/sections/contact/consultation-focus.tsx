"use client";

import { useState } from "react";
import {
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const options: { icon: LucideIcon; label: string }[] = [
  { icon: Bot, label: "AI & Automation Advisory" },
  { icon: Cloud, label: "Cloud Infrastructure (Azure/AWS)" },
  { icon: ShieldCheck, label: "Cybersecurity Governance" },
  { icon: Database, label: "Microsoft Copilot Readiness" },
];

export function ConsultationFocus() {
  const [selected, setSelected] = useState<string>(options[0].label);

  return (
    <div className="sticky top-32">
      <h2 className="font-display text-on-surface text-headline-lg mb-8 font-bold">
        Strategic Consultation
      </h2>
      <p className="text-body-lg text-on-surface-variant mb-10">
        Select your area of strategic focus for a dedicated advisory session
        with our specialists.
      </p>
      <div
        role="radiogroup"
        aria-label="Area of strategic focus"
        className="space-y-4"
      >
        {options.map(({ icon: Icon, label }) => {
          const active = selected === label;
          return (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(label)}
              className={cn(
                "glass-card flex w-full items-center rounded-lg p-4 text-left transition-all",
                active ? "border-primary" : "hover:border-primary/50",
              )}
            >
              <Icon className="text-primary mr-4 size-6 shrink-0" />
              <span className="text-on-surface font-bold">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
