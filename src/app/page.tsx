import dynamic from "next/dynamic";
import { SiteNav } from "@/components/site/site-nav";
import { HeroSection } from "@/components/site/hero-section";
import { SolutionsSection } from "@/components/site/solutions-section";

// Lead capture and footer are split out so the hero and the offerings section
// paint without waiting on the form and map code.
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
        <SolutionsSection />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}
