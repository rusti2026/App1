import dynamic from "next/dynamic";
import { SiteNav } from "@/components/site/site-nav";
import { HeroSection } from "@/components/site/hero-section";
import { QuantumPromoSection } from "@/components/site/quantum-promo-section";
import { ExperiencesSection } from "@/components/site/experiences-section";

// Below-the-fold sections are split into their own chunks so the hero paints
// without waiting on pricing, dossier, case-study and form code.
const PricingSection = dynamic(() =>
  import("@/components/site/pricing-section").then((m) => m.PricingSection),
);
const CustomizationSection = dynamic(() =>
  import("@/components/site/customization-section").then(
    (m) => m.CustomizationSection,
  ),
);
const CaseStudiesSection = dynamic(() =>
  import("@/components/site/case-studies-section").then(
    (m) => m.CaseStudiesSection,
  ),
);
const BlogSection = dynamic(() =>
  import("@/components/site/blog-section").then((m) => m.BlogSection),
);
const TeamSection = dynamic(() =>
  import("@/components/site/team-section").then((m) => m.TeamSection),
);
const QuoteSection = dynamic(() =>
  import("@/components/site/quote-section").then((m) => m.QuoteSection),
);
const SiteFooter = dynamic(() =>
  import("@/components/site/site-footer").then((m) => m.SiteFooter),
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <QuantumPromoSection />
        <ExperiencesSection />
        <PricingSection />
        <CustomizationSection />
        <CaseStudiesSection />
        <BlogSection />
        <TeamSection />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}
