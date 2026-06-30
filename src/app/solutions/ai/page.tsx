import type { Metadata } from "next";
import { AiHero } from "@/components/sections/solutions/ai/ai-hero";
import { AiCapabilities } from "@/components/sections/solutions/ai/ai-capabilities";
import { AiApproach } from "@/components/sections/solutions/ai/ai-approach";
import { AiUseCases } from "@/components/sections/solutions/ai/ai-use-cases";
import { ResponsibleAi } from "@/components/sections/solutions/ai/responsible-ai";
import { AiAssessments } from "@/components/sections/solutions/ai/ai-assessments";
import { AiCta } from "@/components/sections/solutions/ai/ai-cta";

export const metadata: Metadata = {
  title: "AI & Intelligence",
  description:
    "Enterprise AI from Expervia — generative AI, predictive analytics, computer vision, and intelligent automation, designed, governed, and deployed securely to drive measurable business outcomes.",
};

export default function AiSolutionsPage() {
  return (
    <>
      <AiHero />
      <AiCapabilities />
      <AiApproach />
      <AiUseCases />
      <ResponsibleAi />
      <AiAssessments />
      <AiCta />
    </>
  );
}
