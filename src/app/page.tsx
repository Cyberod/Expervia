import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Solutions } from "@/components/sections/solutions";
import { Industries } from "@/components/sections/industries";
import { WhyExpervia } from "@/components/sections/why-expervia";
import { Community } from "@/components/sections/community";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <Solutions />
      <Industries />
      <WhyExpervia />
      <Community />
      <FinalCta />
    </>
  );
}
