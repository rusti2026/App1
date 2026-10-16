// LSAI Quantum — shared content data.
// 100% sourced from https://lsaiquantum.com/ (verbatim where possible).
// No invented murder-mystery / escape-room content.

export type DomainKey = "ai-data" | "cloud-digital" | "quantum-security";

export const DOMAINS: { key: DomainKey; label: string; blurb: string }[] = [
  {
    key: "ai-data",
    label: "AI & Data",
    blurb: "Intelligent automation & predictive analytics",
  },
  {
    key: "cloud-digital",
    label: "Cloud & Digital",
    blurb: "Seamless cloud & end-to-end transformation",
  },
  {
    key: "quantum-security",
    label: "Quantum & Security",
    blurb: "Frontier compute & security-first systems",
  },
];

export type Service = {
  id: string;
  title: string;
  domain: DomainKey;
  body: string;
  accent: "primary" | "gold" | "rose";
};

export const SERVICES: Service[] = [
  {
    id: "ai-transformation",
    title: "AI Transformation",
    domain: "ai-data",
    body: "We leverage advanced AI and machine learning to optimize processes, enhance decision-making, and drive innovation.",
    accent: "primary",
  },
  {
    id: "gen-ai",
    title: "Gen AI",
    domain: "ai-data",
    body: "Generative AI to drive cutting-edge automation, innovation, and intelligent decision-making across various industries.",
    accent: "primary",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    domain: "ai-data",
    body: "We harness the power of Artificial Intelligence and Machine Learning to build smart, self-learning systems that drive innovation. From predictive analytics to intelligent automation, we turn complex data into actionable insights.",
    accent: "primary",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    domain: "ai-data",
    body: "Unlock hidden insights from your data to drive smarter decisions and business growth. Our data analytics solutions turn raw information into real-time, actionable intelligence.",
    accent: "primary",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    domain: "cloud-digital",
    body: "We provide seamless cloud integration, enabling businesses to scale efficiently with secure and high-performance infrastructure.",
    accent: "gold",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    domain: "cloud-digital",
    body: "We empower businesses to embrace the future with end-to-end digital transformation solutions. From legacy modernization to intelligent automation, we streamline operations, enhance customer experiences, and drive innovation.",
    accent: "gold",
  },
  {
    id: "managed-services",
    title: "Managed Services",
    domain: "cloud-digital",
    body: "Our dedicated team ensures round-the-clock support and continuous improvement to keep you future-ready.",
    accent: "gold",
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    domain: "quantum-security",
    body: "Quantum computing has the potential to address a wide range of challenges that impact people's lives.",
    accent: "rose",
  },
  {
    id: "block-chain",
    title: "Block Chain",
    domain: "quantum-security",
    body: "Blockchain and AI can be used together to create a variety of innovative applications. For example, blockchain can be used to secure and manage AI-powered systems, while AI can be used to optimize blockchain networks.",
    accent: "rose",
  },
  {
    id: "internet-of-things",
    title: "Internet Of Things",
    domain: "quantum-security",
    body: "The Internet of Things (IoT) is a rapidly growing network of interconnected devices that are equipped with sensors, software, and other technologies to collect and exchange data. This data can be used to improve the efficiency and effectiveness of a wide range of applications, from healthcare to manufacturing.",
    accent: "rose",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    domain: "quantum-security",
    body: "Our security-first approach ensures data protection, threat detection, and compliance with global security standards.",
    accent: "rose",
  },
];

export const WHY_CHOOSE_US: { title: string; body: string }[] = [
  {
    title: "Bridge your software development needs",
    body: "Bridge your software development needs with our deep pool of engineering talent.",
  },
  {
    title: "Time-zone aligned developers",
    body: "You work seamlessly with our time-zone aligned software developers and team.",
  },
  {
    title: "Accelerate without compromising quality",
    body: "You accelerate your development without compromising quality.",
  },
  {
    title: "Flexible delivery models",
    body: "You can easily scale your projects up or down with our flexible delivery models.",
  },
];

export const TRUSTED_PARTNER: { title: string; body: string }[] = [
  {
    title: "Quantum Computing",
    body: "Quantum computing has the potential to address a wide range of challenges that impact people's lives.",
  },
  {
    title: "AI & Automation",
    body: "We leverage advanced AI and machine learning to optimize processes, enhance decision-making, and drive innovation.",
  },
  {
    title: "Gen AI",
    body: "Generative AI to drive cutting-edge automation, innovation, and intelligent decision-making across various industries.",
  },
  {
    title: "Block Chain",
    body: "Blockchain and AI can be used together to create a variety of innovative applications. Blockchain can secure and manage AI-powered systems, while AI can optimize blockchain networks.",
  },
  {
    title: "Internet Of Things",
    body: "A rapidly growing network of interconnected devices equipped with sensors, software, and other technologies to collect and exchange data — improving efficiency across healthcare to manufacturing.",
  },
  {
    title: "Robust Cybersecurity Solutions",
    body: "Our security-first approach ensures data protection, threat detection, and compliance with global security standards.",
  },
  {
    title: "Cloud-Powered Scalability",
    body: "We provide seamless cloud integration, enabling businesses to scale efficiently with secure and high-performance infrastructure.",
  },
  {
    title: "Proven Track Record of Excellence",
    body: "With a strong portfolio of successful projects, we help businesses transform and stay ahead of the curve.",
  },
  {
    title: "24/7 Support & Continuous Innovation",
    body: "Our dedicated team ensures round-the-clock support and continuous improvement to keep you future-ready.",
  },
];

export type Product = {
  id: string;
  title: string;
  body: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "mvp",
    title: "Minimum Viable Product",
    body: "We help you build a lean, functional MVP to quickly validate your product idea with real users. Launch faster, reduce risk, and gather feedback early to shape the perfect market-fit solution. From concept to launch, we ensure every product is scalable, secure, and built for success.",
  },
  {
    id: "new-product",
    title: "New Product Development",
    body: "We transform innovative ideas into market-ready products through agile development and user-centric design.",
  },
  {
    id: "redesign",
    title: "Redesigning Existing Product",
    body: "We revamp existing products with modern design, enhanced UX, and optimized performance to meet evolving user needs. Our redesign approach breathes new life into your product — boosting usability, engagement, and business value.",
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    body: "We harness the power of Artificial Intelligence and Machine Learning to build smart, self-learning systems that drive innovation. From predictive analytics to intelligent automation, we turn complex data into actionable insights.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    body: "Unlock hidden insights from your data to drive smarter decisions and business growth. Our data analytics solutions turn raw information into real-time, actionable intelligence.",
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    body: "Quantum computing has the potential to address a wide range of challenges that impact people's lives.",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    body: "We empower businesses to embrace the future with end-to-end digital transformation solutions. From legacy modernization to intelligent automation, we streamline operations, enhance customer experiences, and drive innovation.",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    body: "Our security-first approach ensures data protection, threat detection, and compliance with global security standards.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    body: "We build high-performance applications with seamless user experiences. From concept to deployment, our solutions are scalable, secure, and built to engage.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  body: string;
};

export const ALPHAFOLD_TIMELINE: Milestone[] = [
  {
    year: "2018",
    title: "Healthcare: DeepMind's AlphaFold",
    body: "Protein folding — predicting the 3D shape of proteins from their amino-acid sequences — was a grand challenge in biology. This process is crucial for understanding diseases and developing new drugs. Demonstrated significant progress in protein structure prediction.",
  },
  {
    year: "2019",
    title: "AlphaFold 1",
    body: "Beginning of journey.",
  },
  {
    year: "2020",
    title: "AlphaFold 2",
    body: "Marked a continuous innovation, a commitment to excellence.",
  },
  {
    year: "2022",
    title: "AlphaFold Database release",
    body: "DeepMind released a database of over 200 million predicted protein structures.",
  },
  {
    year: "2024",
    title: "AlphaFold 3 & Research",
    body: "Expanded prediction capability to include interactions of proteins with other molecules. Impact: Accelerated drug discovery and biological research.",
  },
];

export type Testimonial = {
  id: string;
  client: string;
  industry: string;
  quote: string;
  accent: "primary" | "gold" | "rose";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "airbus",
    client: "AIRBUS",
    industry: "Aerospace & Defense",
    quote:
      "LSAI Quantum offers a comprehensive suite of AI integration tools that span from the data layer to analytical visualization, which many of our developers truly appreciate.",
    accent: "primary",
  },
  {
    id: "honeywell",
    client: "Honeywell",
    industry: "Industrial Technology",
    quote:
      "Leveraging LSAI Quantum alongside the integration of artificial intelligence and digital twins presents immense opportunities for exploration and growth.",
    accent: "gold",
  },
  {
    id: "abbott",
    client: "Abbott Lab",
    industry: "Healthcare & Life Sciences",
    quote:
      "I believe that harnessing the capabilities of LSAI Quantum and generative AI can significantly improve service delivery for both our internal teams and external clients.",
    accent: "rose",
  },
  {
    id: "kbr",
    client: "KBR",
    industry: "Defense & Engineering",
    quote:
      "Accelerating decision-making and enhancing predictive capabilities with LSAI Quantum is essential for the support we provide at Raytheon within the defense sector.",
    accent: "primary",
  },
];

export const TRUSTED_BY: string[] = [
  "AIRBUS",
  "Honeywell",
  "Abbott Lab",
  "KBR",
  "Boeing",
  "Verizon",
  "Mastercard",
  "Statestreet Bank",
];

export const TEAM = [
  { name: "Jamie Veum", role: "Founder & CEO", initials: "JV" },
  { name: "Erma Hansen", role: "SCSK Event", initials: "EH" },
  { name: "Ignacio Goldner", role: "London Chamber Event", initials: "IG" },
  { name: "Cesar Schuster", role: "Debt Management", initials: "CS" },
];

export const BLOG_POSTS = [
  {
    id: "financial-health",
    title: "Actionable Insights to Strengthen Your Business's Financial Health",
    excerpt:
      "Optimizing — Whether you're a startup or an established company, having the right financial strategies is essential to long-term success.",
    author: "Alex Roy",
    date: "8 December 2025",
  },
  {
    id: "sound-practices",
    title: "Building a Stronger Business with Sound Financial Practices",
    excerpt:
      "Mastering Financial — The world of business finance is evolving rapidly. Our blog keeps you ahead of the curve by exploring the latest trends.",
    author: "Alex Roy",
    date: "8 December 2025",
  },
];

export const CONTACT = {
  phone: "+1 734.456.6599",
  phoneHref: "tel:+17344566599",
  email: "liza@lsaiquantum.com",
  emailAlt: "steve@lsaiquantum.com",
  website: "www.lsaiquantum.com",
  websiteHref: "https://lsaiquantum.com",
  addressLines: [
    "#27 Bissenden House, Selbourne Avenue",
    "Hounslow, London, England TW3 1DY",
  ],
  region: "Also: LSAI Quantum Inc, Dallas, Texas",
  hotline: "Hotline 24/7",
};

export const FOOTER_LINKS = [
  "Who We Are",
  "Case Study",
  "Policies",
  "FAQ",
  "Contact Us",
];

// Delivery tiers — a faithful visualization of LSAI's "scale up or down with
// flexible delivery models" pitch. No invented prices; just engineer count
// and the delivery model that applies at each scale.
export const DELIVERY_TIERS = [
  {
    min: 10,
    max: 19,
    tier: "Core Team",
    blurb: "Time-zone aligned developers embedded in your workflow.",
  },
  {
    min: 20,
    max: 39,
    tier: "Extended Team",
    blurb: "Scaled squad with shared rituals, tooling and codebase.",
  },
  {
    min: 40,
    max: 69,
    tier: "Dedicated Pod",
    blurb: "Cross-functional pod with its own cadence and ownership.",
  },
  {
    min: 70,
    max: 99,
    tier: "Scaled Program",
    blurb: "Multiple pods orchestrated around shared outcomes.",
  },
  {
    min: 100,
    max: 200,
    tier: "Enterprise Engagement",
    blurb: "Program-level delivery with governance and reporting.",
  },
];

export function tierForSize(size: number) {
  const tier =
    DELIVERY_TIERS.find((t) => size >= t.min && size <= t.max) ??
    DELIVERY_TIERS[DELIVERY_TIERS.length - 1];
  return tier;
}
