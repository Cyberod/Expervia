import type { Metadata } from "next";
import { IndustriesHero } from "@/components/sections/industries/industries-hero";
import { IndustryGrid } from "@/components/sections/industries/industry-grid";
import { TransformationPriorities } from "@/components/sections/industries/transformation-priorities";
import { WhyChoose } from "@/components/sections/industries/why-choose";
import { IndustriesCta } from "@/components/sections/industries/industries-cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-focused AI, Cloud, and Cybersecurity solutions from Expervia — delivering measurable outcomes across finance, government, healthcare, education, telecom, manufacturing, energy, retail, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustryGrid />
      <TransformationPriorities />
      <WhyChoose />
      <IndustriesCta />
    </>
  );
}
