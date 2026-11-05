import { MapPin } from "lucide-react";
import { CONTACT } from "@/lib/content";

export function OfficeMap() {
  return (
    <section
      aria-labelledby="office-map-title"
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            id="office-map-title"
            className="text-lg font-semibold text-foreground"
          >
            Dallas on the map
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {CONTACT.dallasOffice}
          </p>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Dallas%2C%20Texas"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <MapPin className="h-4 w-4" />
          Get directions
        </a>
      </div>
      <iframe
        title="Map showing Dallas, Texas"
        src="https://maps.google.com/maps?q=Dallas%2C%20Texas&z=12&output=embed"
        className="h-72 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
