// LSAI Quantum — shared content data for the corporate team-building platform.
// All brand content sourced/adapted from https://lsaiquantum.com/

export type SkillKey = "collaboration" | "leadership" | "creativity";

export const SKILLS: { key: SkillKey; label: string; blurb: string }[] = [
  {
    key: "collaboration",
    label: "Collaboration",
    blurb: "Shared problem-solving under pressure",
  },
  {
    key: "leadership",
    label: "Leadership",
    blurb: "Decisive delegation & communication",
  },
  {
    key: "creativity",
    label: "Creativity",
    blurb: "Divergent thinking & lateral leaps",
  },
];

export type Experience = {
  id: string;
  title: string;
  subtitle: string;
  skill: SkillKey;
  duration: string;
  capacity: string;
  image: string;
  accent: "primary" | "gold" | "rose";
  synopsis: string;
  outcomes: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "quantum-vault",
    title: "The Quantum Vault",
    subtitle: "A high-stakes data heist gone wrong",
    skill: "collaboration",
    duration: "90 min",
    capacity: "8–14 per room",
    image: "/images/exp-collab.jpg",
    accent: "primary",
    synopsis:
      "A prototype encryption vault has sealed itself shut after a suspicious outage. Your team must pool cipher fragments, mechanical clues and a brittle timeline to unlock it before the audit window closes.",
    outcomes: [
      "Cross-functional hand-offs",
      "Time-boxed consensus",
      "Distributed information sharing",
    ],
  },
  {
    id: "executive-decision",
    title: "The Executive Decision",
    subtitle: "A boardroom whodunnit with the clock ticking",
    skill: "leadership",
    duration: "105 min",
    capacity: "10–20 per cohort",
    image: "/images/exp-leadership.jpg",
    accent: "gold",
    synopsis:
      "A pivotal deal collapses mid-meeting and a key artifact disappears. One participant must coordinate investigators, assign leads and sequence reveals while managing competing hypotheses.",
    outcomes: [
      "Decisive delegation",
      "Bias-resistant reasoning",
      "Crisis communication",
    ],
  },
  {
    id: "innovation-lab",
    title: "The Innovation Lab",
    subtitle: "A creative sabotage in an R&D wing",
    skill: "creativity",
    duration: "75 min",
    capacity: "6–12 per cell",
    image: "/images/exp-creativity.jpg",
    accent: "rose",
    synopsis:
      "A breakthrough prototype has been quietly re-engineered. Teams must remix prompts, prototype sketches and lateral puzzles to reconstruct the original invention and unmask the saboteur.",
    outcomes: [
      "Divergent ideation",
      "Pattern reframing",
      "Prototype storytelling",
    ],
  },
  {
    id: "cipher-room",
    title: "The Cipher Room",
    subtitle: "Decoded signals, mixed motives",
    skill: "collaboration",
    duration: "80 min",
    capacity: "8–16 per room",
    image: "/images/exp-collab.jpg",
    accent: "primary",
    synopsis:
      "Intercepted transmissions point to a leak inside your own division. Decode layered ciphers together, reconcile contradicting witness statements and route the right clue to the right desk.",
    outcomes: ["Joint reasoning", "Conflict resolution", "Trust calibration"],
  },
  {
    id: "founder-directive",
    title: "The Founder's Directive",
    subtitle: "A succession puzzle with hidden clauses",
    skill: "leadership",
    duration: "95 min",
    capacity: "10–18 per cohort",
    image: "/images/exp-leadership.jpg",
    accent: "gold",
    synopsis:
      "A founder's sealed directive surfaces with ambiguous instructions. A rotating lead must sequence reveals, allocate scarce review cycles and protect the team from misleading trails.",
    outcomes: [
      "Prioritization under ambiguity",
      "Rotating leadership",
      "Stakeholder messaging",
    ],
  },
  {
    id: "remix-studio",
    title: "The Remix Studio",
    subtitle: "A campaign crime scene of clashing concepts",
    skill: "creativity",
    duration: "70 min",
    capacity: "6–12 per cell",
    image: "/images/exp-creativity.jpg",
    accent: "rose",
    synopsis:
      "A flagship campaign is sabotaged the night before launch. Reassemble fragmented storyboards, reverse-engineer the saboteur's logic and pitch a coherent rebrand in real time.",
    outcomes: ["Narrative recombination", "Rapid prototyping", "Bold pivots"],
  },
];

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  cohort: number;
  scenario: string;
  headline: string;
  quote: string;
  speaker: string;
  role: string;
  accent: "primary" | "gold" | "rose";
  metrics: { label: string; value: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "airbus",
    client: "AIRBUS",
    industry: "Aerospace & Defense",
    cohort: 64,
    scenario: "The Quantum Vault × 4 rooms",
    headline: "Cross-continental hand-offs, rehearsed.",
    quote:
      "LSAI Quantum offers a comprehensive suite of integration tools that span from the data layer to analytical visualization, which many of our developers truly appreciate — the team-building edition made those workflows feel second-nature.",
    speaker: "Program Lead, Digital Twins",
    role: "AIRBUS",
    accent: "primary",
    metrics: [
      { label: "Cohort", value: "64" },
      { label: "Rooms", value: "4" },
      { label: "NPS", value: "+72" },
    ],
  },
  {
    id: "honeywell",
    client: "Honeywell",
    industry: "Industrial Technology",
    cohort: 48,
    scenario: "The Executive Decision",
    headline: "Decisions rehearsed before they're live.",
    quote:
      "Leveraging LSAI Quantum alongside the integration of artificial intelligence and digital twins presents immense opportunities for exploration and growth — the mystery edition made our leaders rehearse real ambiguity in a safe room.",
    speaker: "Director, Innovation Programs",
    role: "Honeywell",
    accent: "gold",
    metrics: [
      { label: "Cohort", value: "48" },
      { label: "Sessions", value: "3" },
      { label: "Repeat", value: "Y2" },
    ],
  },
  {
    id: "abbott",
    client: "Abbott Lab",
    industry: "Healthcare & Life Sciences",
    cohort: 32,
    scenario: "The Innovation Lab",
    headline: "Service delivery, rehearsed as a story.",
    quote:
      "I believe that harnessing the capabilities of LSAI Quantum and generative AI can significantly improve service delivery for both our internal teams and external clients — the creative scenario made that tangible in a single afternoon.",
    speaker: "Head of Clinical Operations",
    role: "Abbott Lab",
    accent: "rose",
    metrics: [
      { label: "Cohort", value: "32" },
      { label: "Cells", value: "4" },
      { label: "CSAT", value: "4.9/5" },
    ],
  },
  {
    id: "kbr",
    client: "KBR",
    industry: "Defense & Engineering",
    cohort: 80,
    scenario: "The Founder's Directive × 5 cohorts",
    headline: "Predictive leaders, rehearsed under pressure.",
    quote:
      "Accelerating decision-making and enhancing predictive capabilities with LSAI Quantum is essential for the support we provide at Raytheon within the defense sector — the rotating-leader format surfaced our next bench instantly.",
    speaker: "VP, Engineering Excellence",
    role: "KBR",
    accent: "primary",
    metrics: [
      { label: "Cohort", value: "80" },
      { label: "Cohorts", value: "5" },
      { label: "Promotions", value: "11" },
    ],
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
  { name: "Erma Hansen", role: "Lead Experience Architect", initials: "EH" },
  { name: "Ignacio Goldner", role: "Head of Client Success", initials: "IG" },
  { name: "Cesar Schuster", role: "Director, Scenario Design", initials: "CS" },
];

export const CONTACT = {
  phone: "+1 734.456.6599",
  phoneHref: "tel:+17344566599",
  email: "liza@lsaiquantum.com",
  emailAlt: "steve@lsaiquantum.com",
  addressLines: [
    "#27 Bissenden House, Selbourne Avenue",
    "Hounslow, London, England TW3 1DY",
  ],
  region: "Also: LSAI Quantum Inc, Dallas, Texas",
  hotline: "Hotline 24/7",
};

export const PRICING_TIERS = [
  { min: 10, max: 19, perHead: 89, tier: "Squad" },
  { min: 20, max: 39, perHead: 79, tier: "Crew" },
  { min: 40, max: 69, perHead: 69, tier: "Division" },
  { min: 70, max: 99, perHead: 62, tier: "Enterprise" },
  { min: 100, max: 200, perHead: 54, tier: "Global" },
];

export function priceForTeam(size: number) {
  const tier =
    PRICING_TIERS.find((t) => size >= t.min && size <= t.max) ??
    PRICING_TIERS[PRICING_TIERS.length - 1];
  const headCount = Math.max(size, 10);
  const perHead = tier.perHead;
  const subtotal = headCount * perHead;
  const facilitation = headCount > 40 ? 1200 : 800;
  const brandedDossier = 450;
  const total = subtotal + facilitation + brandedDossier;
  return {
    tier: tier.tier,
    perHead,
    subtotal,
    facilitation,
    brandedDossier,
    total,
  };
}
