import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactChannels } from "@/components/sections/contact/contact-channels";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { Assessments } from "@/components/sections/contact/assessments";
import { Faq } from "@/components/sections/contact/faq";
import { CommunityCta } from "@/components/sections/contact/community-cta";
import { ContactFinalCta } from "@/components/sections/contact/contact-final-cta";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Expervia Technologies. Reach our sales, partnership, and support teams, request a complimentary assessment, or tell us about your AI, Cloud, and Cybersecurity project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ContactFormSection />
      <Assessments />
      <Faq />
      <CommunityCta />
      <ContactFinalCta />
    </>
  );
}
