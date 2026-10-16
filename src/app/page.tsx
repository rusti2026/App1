"use client";

import { SiteNav } from "@/components/site/site-nav";
import { HeroSection } from "@/components/site/hero-section";
import { ExperiencesSection } from "@/components/site/experiences-section";
import { PricingSection } from "@/components/site/pricing-section";
import { CustomizationSection } from "@/components/site/customization-section";
import { CaseStudiesSection } from "@/components/site/case-studies-section";
import { QuoteSection } from "@/components/site/quote-section";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <ExperiencesSection />
        <PricingSection />
        <CustomizationSection />
        <CaseStudiesSection />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}
