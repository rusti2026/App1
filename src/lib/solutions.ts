// Frontier solution verticals.
// Original copy written for LSAI Quantum — no invented clients, metrics or
// case studies. Client proof elsewhere in the site remains verbatim.

export type SolutionIconKey =
  | "quantum"
  | "agents"
  | "humanoid"
  | "industrial"
  | "drone"
  | "shipping"
  | "medical";

export type SolutionAccent = "primary" | "gold" | "rose";

export type SolutionCapability = {
  title: string;
  body: string;
};

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  icon: SolutionIconKey;
  accent: SolutionAccent;
  tagline: string;
  summary: string;
  overview: string[];
  capabilities: SolutionCapability[];
  useCases: string[];
  industries: string[];
  outcomes: string[];
  relatedServiceIds: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "quantum-computing",
    title: "Quantum Computing",
    shortTitle: "Quantum",
    eyebrow: "Frontier Compute",
    icon: "quantum",
    accent: "primary",
    tagline: "Solve the problems classical computers were never built for.",
    summary:
      "Quantum algorithms, simulation and hybrid pipelines — translated into practical programs you can pilot, measure and scale.",
    overview: [
      "Quantum advantage will not arrive as a single product. It arrives as a portfolio of problem-specific algorithms, hardware partnerships and hybrid classical-quantum workflows. LSAI Quantum helps you identify the problems worth solving, prototype them on today's quantum systems, and build the classical scaffolding that makes the results usable.",
      "We work across quantum simulation, optimization and security readiness — so your team can evaluate the opportunity without rebuilding its entire data stack.",
    ],
    capabilities: [
      {
        title: "Quantum algorithm design",
        body: "Map high-value problems to gate-based, annealing or hybrid algorithms with a clear path to verification.",
      },
      {
        title: "Quantum simulation",
        body: "Model molecular, material and quantum-system behaviour to explore candidates faster than brute-force methods.",
      },
      {
        title: "Hybrid classical-quantum pipelines",
        body: "Orchestrate quantum kernels inside existing data, HPC and cloud workflows — with classical baselines for every result.",
      },
      {
        title: "Quantum-safe security readiness",
        body: "Assess post-quantum exposure and plan migration for long-lived data, keys and infrastructure.",
      },
    ],
    useCases: [
      "Drug and materials discovery",
      "Logistics and portfolio optimization",
      "Cryptographic readiness",
      "Quantum algorithm R&D",
    ],
    industries: [
      "Life sciences",
      "Logistics",
      "Finance",
      "Energy",
      "Public sector",
    ],
    outcomes: [
      "A validated problem shortlist",
      "Benchmarks against classical baselines",
      "A hardware-agnostic prototype",
      "A quantum-safe migration plan",
    ],
    relatedServiceIds: [
      "quantum-computing",
      "cyber-security",
      "data-analytics",
      "cloud-engineering",
    ],
  },
  {
    slug: "enterprise-ai-agents",
    title: "Enterprise AI Agents",
    shortTitle: "AI Agents",
    eyebrow: "Autonomous Operations",
    icon: "agents",
    accent: "gold",
    tagline: "Agents that reason, plan and act across your enterprise systems.",
    summary:
      "Multi-step AI agents with tools, memory, permissions and evaluation — deployed where they create operational leverage.",
    overview: [
      "Most copilots stop at answering questions. Enterprise agents go further: they retrieve context, call tools, follow policy and complete multi-step work. The difference is architecture — orchestration, permissions, memory and evaluation all have to be designed, not prompted.",
      "We build agents as governed operators: every action is scoped, observable and reversible where it matters, with a human able to step in at the right moment.",
    ],
    capabilities: [
      {
        title: "Agent architecture & orchestration",
        body: "Design single- and multi-agent systems with clear roles, delegation rules and failure paths.",
      },
      {
        title: "Tool & API integration",
        body: "Connect agents to CRM, ERP, ticketing, data warehouses and internal services through typed tools.",
      },
      {
        title: "Retrieval, memory & RAG",
        body: "Ground answers in your documents and systems with permission-aware retrieval and durable working memory.",
      },
      {
        title: "Guardrails & human-in-the-loop",
        body: "Policy checks, action limits and approval gates for anything that changes money, data or customer state.",
      },
      {
        title: "Agent evaluation & observability",
        body: "Trace decisions, measure task success and catch regressions before an agent reaches production.",
      },
      {
        title: "Workflow automation",
        body: "Move from a single assistant to reliable end-to-end workflows across teams and systems.",
      },
    ],
    useCases: [
      "IT and operations triage",
      "Customer support resolution",
      "Document-heavy back office",
      "Procurement and vendor workflows",
      "Sales research and CRM hygiene",
    ],
    industries: [
      "Financial services",
      "IT services",
      "Manufacturing",
      "Healthcare administration",
      "Professional services",
    ],
    outcomes: [
      "Faster cycle time per task",
      "Fewer manual handoffs",
      "Auditable agent actions",
      "Human control at critical steps",
    ],
    relatedServiceIds: [
      "gen-ai",
      "machine-learning",
      "data-analytics",
      "managed-services",
    ],
  },
  {
    slug: "humanoid-robotics",
    title: "Physical AI — Humanoid Robotics",
    shortTitle: "Humanoids",
    eyebrow: "Embodied AI",
    icon: "humanoid",
    accent: "rose",
    tagline: "Humanoid robots that take on the household work.",
    summary:
      "Perception, manipulation and embodied policies for household robots that clean, cook, tidy and assist — trained in simulation, validated in the real world.",
    overview: [
      "A humanoid robot is general-purpose by design: the same platform can load a dishwasher, prepare a meal, fold laundry, move a box or assist a resident. The hard part is not the hardware; it is the embodied intelligence that turns sensors into safe, reliable household action.",
      "We build the perception, control and learning stack around the robot — with simulation-first training, real-world validation and fleet telemetry that keeps improving the policy after deployment.",
    ],
    capabilities: [
      {
        title: "Multimodal perception",
        body: "Fuse vision, depth, force and proprioception into a usable model of the surrounding world.",
      },
      {
        title: "Dexterous manipulation",
        body: "Grasp, place, open, pour and hand over objects with policies that tolerate real-world variation.",
      },
      {
        title: "Embodied policy learning",
        body: "Train task policies from demonstration, reinforcement and synthetic data — with clear success criteria.",
      },
      {
        title: "Simulation & sim-to-real",
        body: "Build high-fidelity training environments and close the gap between simulated and physical performance.",
      },
      {
        title: "Safety & compliance",
        body: "Human-aware motion, force limits, emergency behaviour and the documentation needed for deployment.",
      },
      {
        title: "Fleet telemetry & OTA updates",
        body: "Monitor task success, collect edge cases and ship improved skills across a deployed fleet.",
      },
    ],
    useCases: [
      "Everyday household chores",
      "Cooking and kitchen tasks",
      "Cleaning, laundry and tidying",
      "Eldercare and daily assistance",
    ],
    industries: [
      "Consumer robotics",
      "Facilities management",
      "Healthcare",
      "Hospitality",
    ],
    outcomes: [
      "Shorter skill development cycles",
      "Safer human-robot handover",
      "Measured task success",
      "Scalable fleet operations",
    ],
    relatedServiceIds: [
      "internet-of-things",
      "machine-learning",
      "cloud-engineering",
      "cyber-security",
    ],
  },
  {
    slug: "industrial-ai",
    title: "Industrial AI — Manufacturing",
    shortTitle: "Industrial AI",
    eyebrow: "Manufacturing Intelligence",
    icon: "industrial",
    accent: "primary",
    tagline: "AI machines that see, predict and optimize the factory floor.",
    summary:
      "Machine vision, predictive maintenance and digital twins for manufacturing — connected to OT/IT systems and built for production, not the lab.",
    overview: [
      "Factory AI fails when it is treated as a model problem. It is an operational problem: sensors are noisy, lines cannot stop, and every recommendation has to survive a shift change. We build industrial AI around the constraints of the plant.",
      "From camera-based inspection to predictive maintenance and production scheduling, our systems connect to the equipment you already run and produce evidence your engineers can act on.",
    ],
    capabilities: [
      {
        title: "Machine vision & quality inspection",
        body: "Detect defects, classify parts and measure tolerances at line speed with edge inference.",
      },
      {
        title: "Predictive maintenance",
        body: "Forecast equipment degradation from vibration, thermal and process signals before failure.",
      },
      {
        title: "Digital twins & simulation",
        body: "Model line behaviour to test changes, tune parameters and evaluate throughput scenarios.",
      },
      {
        title: "Production scheduling & optimization",
        body: "Balance orders, changeovers, maintenance windows and energy costs across the plant.",
      },
      {
        title: "Edge inference",
        body: "Run low-latency models on the shop floor with central training and controlled model rollout.",
      },
      {
        title: "OT/IT integration & cyber security",
        body: "Connect PLC, SCADA and MES data to enterprise systems without weakening operational security.",
      },
    ],
    useCases: [
      "Automated quality inspection",
      "Unplanned downtime reduction",
      "Throughput and yield optimization",
      "Energy and utilities monitoring",
      "Supply-chain synchronization",
    ],
    industries: [
      "Automotive",
      "Electronics",
      "Aerospace",
      "Pharmaceutical manufacturing",
      "Heavy industry",
    ],
    outcomes: [
      "Lower scrap and rework",
      "Fewer unplanned stops",
      "Higher line throughput",
      "Auditable quality records",
    ],
    relatedServiceIds: [
      "machine-learning",
      "internet-of-things",
      "data-analytics",
      "managed-services",
    ],
  },
  {
    slug: "delivery-drones",
    title: "Delivery Drones",
    shortTitle: "Drones",
    eyebrow: "Aerial Logistics",
    icon: "drone",
    accent: "gold",
    tagline: "Autonomous delivery across the last mile and beyond.",
    summary:
      "Flight autonomy, weather-aware routing and fleet operations for drone delivery programs.",
    overview: [
      "Drone delivery is an operations problem as much as an aviation one. Aircraft must reason about weather, airspace, payload, handoff and recovery — while a ground team needs visibility and control.",
      "We build the autonomy and operations layer: route planning, weather-aware dispatch, safe handoff and a fleet console that shows what every aircraft is doing and why.",
    ],
    capabilities: [
      {
        title: "Autonomous flight & navigation",
        body: "Perception, localisation and obstacle avoidance for reliable flight in unstructured environments.",
      },
      {
        title: "Route planning & deconfliction",
        body: "Plan safe corridors, avoid conflicts and replan in flight when conditions change.",
      },
      {
        title: "Weather-aware dispatch",
        body: "Read wind, rain and visibility forecasts to choose launch windows and fallback options.",
      },
      {
        title: "Payload & handoff systems",
        body: "Design secure payload release, landing-zone selection and recipient verification.",
      },
      {
        title: "BVLOS readiness",
        body: "Prepare the documentation, telemetry and containment behaviour needed for beyond-visual-line-of-sight operations.",
      },
      {
        title: "Fleet operations & telemetry",
        body: "Track aircraft health, missions and incidents from a single operations console.",
      },
    ],
    useCases: [
      "Last-mile consumer delivery",
      "Medical and time-critical supplies",
      "Warehouse inventory",
      "Infrastructure inspection",
    ],
    industries: [
      "Logistics",
      "Healthcare",
      "Retail",
      "Utilities",
      "Public safety",
    ],
    outcomes: [
      "Reliable dispatch windows",
      "Safer route decisions",
      "Clear operational visibility",
      "Scalable fleet control",
    ],
    relatedServiceIds: [
      "internet-of-things",
      "machine-learning",
      "cloud-engineering",
      "cyber-security",
    ],
  },
  {
    slug: "quantum-shipping-scm",
    title: "Quantum Shipping & Supply Chain",
    shortTitle: "Shipping & SCM",
    eyebrow: "Maritime & Supply Chain",
    icon: "shipping",
    accent: "primary",
    tagline:
      "Weather-aware routes, the nearest harbour, and quantum-optimized supply chains.",
    summary:
      "AI that reads weather and sea state, picks the shortest safe route, recommends the nearest harbour or docking station, and optimizes SCM.",
    overview: [
      "A ship's most expensive decision is often its route. Weather, fuel, port congestion, canal queues and docking availability interact in ways static planning cannot capture. We combine live metocean intelligence with optimization and quantum-inspired solvers to recommend routes, harbours and schedules that hold up in operation.",
      "The same optimization layer extends inland: inventory, warehouse flows and carrier selection can be planned against the same forecast and capacity signals.",
    ],
    capabilities: [
      {
        title: "Weather & sea-state detection",
        body: "Fuse forecast, current, wave and visibility data into route decisions that update in near real time.",
      },
      {
        title: "Shortest & safest route optimization",
        body: "Balance distance, fuel, time, emissions and risk across alternative routes and speeds.",
      },
      {
        title: "Nearest harbour & docking recommendation",
        body: "Rank diversion options by distance, berth availability, draft constraints and onward logistics.",
      },
      {
        title: "Supply-chain (SCM) optimization",
        body: "Optimize inventory, carrier mix and distribution against demand and capacity uncertainty.",
      },
      {
        title: "ETA & fuel modelling",
        body: "Produce explainable arrival estimates and consumption ranges instead of single-point guesses.",
      },
      {
        title: "Port congestion analytics",
        body: "Track queues, turnaround times and terminal throughput to plan arrivals and handoffs.",
      },
    ],
    useCases: [
      "Ocean freight routing",
      "Port and terminal operations",
      "Cold-chain and perishables",
      "Humanitarian and relief logistics",
      "Bulk commodity supply chains",
    ],
    industries: [
      "Shipping and maritime",
      "Ports and terminals",
      "Freight forwarding",
      "Retail supply chain",
      "Energy logistics",
    ],
    outcomes: [
      "Lower fuel and emissions",
      "More reliable ETAs",
      "Better harbour decisions",
      "End-to-end supply-chain visibility",
    ],
    relatedServiceIds: [
      "quantum-computing",
      "data-analytics",
      "internet-of-things",
      "digital-transformation",
    ],
  },
  {
    slug: "medical-ai-drug-discovery",
    title: "Medical AI — Drug Discovery & R&D",
    shortTitle: "Medical AI",
    eyebrow: "Life Sciences",
    icon: "medical",
    accent: "rose",
    tagline: "Compress discovery timelines with AI-first research pipelines.",
    summary:
      "Target discovery, molecular design, protein structure and clinical data — accelerated by models your scientists can trust.",
    overview: [
      "Drug discovery is a sequence of expensive guesses. AI does not remove the science, but it can narrow the search: better targets, better molecules, better experiments and better use of every dataset you already hold.",
      "We build research pipelines that keep scientists in control and evidence traceable — from target identification through candidate selection and clinical data analysis.",
    ],
    capabilities: [
      {
        title: "Target identification & validation",
        body: "Combine omics, literature and pathway evidence to prioritise targets with defensible rationale.",
      },
      {
        title: "Molecular design & generative chemistry",
        body: "Generate and rank candidate molecules against activity, selectivity and developability constraints.",
      },
      {
        title: "Protein structure prediction",
        body: "Use AlphaFold-class models to explore structure and interactions where experimental structures are unavailable.",
      },
      {
        title: "Omics & clinical data analytics",
        body: "Turn multi-modal research and trial data into analysis-ready datasets with lineage intact.",
      },
      {
        title: "Lab automation & experiment planning",
        body: "Close the loop between model predictions and the next set of experiments.",
      },
      {
        title: "Regulatory documentation support",
        body: "Keep model assumptions, training data and decisions documented for internal and regulatory review.",
      },
    ],
    useCases: [
      "Small-molecule discovery",
      "Biologics and antibody design",
      "Diagnostics and biomarkers",
      "Clinical trial analytics",
      "R&D knowledge management",
    ],
    industries: [
      "Pharmaceuticals",
      "Biotechnology",
      "Contract research",
      "Diagnostics",
      "Academic research",
    ],
    outcomes: [
      "Shorter candidate lists",
      "Fewer wasted experiments",
      "Traceable model evidence",
      "Faster R&D decisions",
    ],
    relatedServiceIds: [
      "quantum-computing",
      "machine-learning",
      "data-analytics",
      "gen-ai",
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export function solutionHref(slug: string): string {
  return `/solutions/${slug}`;
}
