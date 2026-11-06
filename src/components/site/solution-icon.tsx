import {
  Atom,
  Bot,
  BrainCircuit,
  Dna,
  Drone,
  Factory,
  Ship,
} from "lucide-react";
import type { SolutionIconKey } from "@/lib/solutions";

const ICONS = {
  quantum: Atom,
  agents: BrainCircuit,
  humanoid: Bot,
  industrial: Factory,
  drone: Drone,
  shipping: Ship,
  medical: Dna,
} satisfies Record<SolutionIconKey, typeof Atom>;

export function SolutionIcon({
  name,
  className,
}: {
  name: SolutionIconKey;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Atom;
  return <Icon className={className} aria-hidden="true" />;
}
