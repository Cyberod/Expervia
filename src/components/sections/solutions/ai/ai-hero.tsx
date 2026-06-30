import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const capabilities = [
  "Generative AI",
  "Azure OpenAI",
  "Predictive ML",
  "Computer Vision",
  "NLP",
  "MLOps",
];

export function AiHero() {
  return (
    <section className="pb-section relative overflow-hidden pt-40">
      {/* Background image slot. Swap /public/images/ai-hero.jpg in and point
          `src` to it (you can drop `unoptimized` once it's a raster). */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ai-hero.svg"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="hero-mesh absolute inset-0" />
        <div className="from-surface via-surface/80 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-surface absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span className="border-primary/20 bg-primary/10 text-primary text-label-sm mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono tracking-wider uppercase">
            <Sparkles className="size-4" />
            Artificial Intelligence
          </span>
          <h1 className="font-display text-on-surface md:text-display-lg mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            Operationalize <span className="gradient-text">AI</span> that Drives
            Real Business Outcomes
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-xl">
            Generative AI, predictive analytics, and intelligent automation —
            designed, governed, and deployed securely. Expervia turns AI
            ambition into production-grade systems that move the metrics that
            matter.
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <span
                key={c}
                className="border-outline-variant bg-surface-container text-on-surface-variant rounded-full border px-3 py-1 text-xs font-medium"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="brand" size="pill" className="font-bold">
              <Link href="/contact">
                Speak with an AI Specialist
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="brandOutline"
              size="pill"
              className="font-bold"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
