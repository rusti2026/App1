# LSAI Quantum — Corporate Team-Building Mystery Platform | Worklog

This file tracks all agent work for the LSAI Quantum corporate murder-mystery & escape-room booking platform.

## Project Brief
- **Brand**: LSAI Quantum (sourced from https://lsaiquantum.com/)
- **Theme**: Corporate team-building murder-mystery & escape-room booking platform
- **Vibe**: Professional, polished, with a hint of game-night fun (NOT noir — engaging)
- **Color restriction**: NO indigo or blue. Use emerald/teal + amber/gold + soft rose palette
- **Single visible route**: `/` only

## Brand Content (from lsaiquantum.com)
- **Name**: LSAI - Quantum (use "LSAI Quantum")
- **Tagline style**: "Empowering businesses with AI-driven solutions" → adapt to team-building
- **Contact**: +1 734.456.6599, liza@lsaiquantum.com, #27 Bissenden House, Selbourne Avenue, Hounslow, London, England TW3 1DY; also LSAI Quantum Inc, Dallas, Texas
- **Testimonials (clients)**:
  - AIRBUS: "LSAI Quantum offers a comprehensive suite of AI integration tools that span from the data layer to analytical visualization, which many of our developers truly appreciate." (adapt to team-building)
  - Honeywell: "Leveraging LSAI Quantum alongside the integration of artificial intelligence and digital twins presents immense opportunities for exploration and growth."
  - Abbott Lab: "I believe that harnessing the capabilities of LSAI Quantum and generative AI can significantly improve service delivery for both our internal teams and external clients."
  - KBR (Raytheon): "Accelerating decision-making and enhancing predictive capabilities with LSAI Quantum is essential for the support we provide at Raytheon within the defense sector."
- **Other clients**: Boeing, Verizon, Mastercard, Statestreet Bank
- **Team**: Jamie Veum (Founder & CEO), Erma Hansen, Ignacio Goldner, Cesar Schuster
- **Case study timeline style**: AlphaFold-style milestone timeline (2018→2024)
- **Why Choose Us**: bridge talent, time-zone aligned, accelerate without compromising quality, flexible scale

## Page Structure
1. Hero — happy team mid-discussion around a board (parallax on cursor move)
2. Experiences — scenarios tagged collaboration/leadership/creativity (glow + 350ms reorder)
3. For Companies — pricing slider for groups 10–100+ (animated tick counter)
4. Customization — faux dossier builder with company logo overlaid
5. Case Studies — expandable cards with speech-mark quote animation
6. Request a Quote — slide-in confirmation
7. Sticky footer with contact info

---
Task ID: 1
Agent: main
Task: Initialize worklog, set theme tokens in globals.css, plan brand palette

Work Log:
- Fetched and analyzed lsaiquantum.com content (brand, testimonials, team, contact, timeline style)
- Decided palette: deep emerald/teal primary, warm amber/gold accent, soft rose tertiary, cream background — no indigo/blue
- Will set up CSS custom properties and global styles next

Stage Summary:
- Worklog initialized
- Brand content catalogued above for all subagents to reuse
- Palette locked: emerald + amber + rose on cream

---
Task ID: 2-10
Agent: main
Task: Build all page sections, run lint, perform end-to-end Agent Browser verification

Work Log:
- Generated 4 images via Image Generation skill: hero-team.jpg, exp-collab.jpg, exp-leadership.jpg, exp-creativity.jpg
- Set brand palette in globals.css: deep emerald/teal primary, warm gold/amber accent, soft rose tertiary, cream background (NO indigo/blue)
- Created src/lib/content.ts with LSAI Quantum brand content: experiences, case studies (Airbus/Honeywell/Abbott/KBR), team, contact, pricing tiers
- Built 8 components in src/components/site/:
  - site-nav.tsx (sticky nav with mobile hamburger)
  - hero-section.tsx (cursor-move parallax with 3 depth layers + floating clue cards)
  - experiences-section.tsx (glowing skill tags + 350ms framer-motion layout reordering)
  - pricing-section.tsx (custom range slider with tier ticks + requestAnimationFrame count-up counter)
  - customization-section.tsx (live dossier builder: company name → monogram initials, logo upload/presets, scenario + skill pickers, red-string motif, confidential stamp)
  - case-studies-section.tsx (accordion expand cards with speech-mark animation + metrics)
  - quote-section.tsx (form with slide-in-confirm panel + side contact card)
  - site-footer.tsx (sticky bottom footer with full LSAI Quantum contact info)
- Updated layout.tsx metadata for LSAI Quantum brand
- Composed all sections in src/app/page.tsx with min-h-screen flex flex-col wrapper (sticky footer)
- Ran `bun run lint`: 0 errors, cleaned 2 unused eslint-disable warnings

Agent Browser Verification (all golden paths confirmed):
- Page loads 200, no console errors, no runtime errors, no hydration mismatches
- Skill-tag hover reordering: hovering "Leadership" moves "The Executive Decision" + "The Founder's Directive" to top (350ms)
- Pricing slider: total ticks $5,990 (70 @ $62 Enterprise) → $9,750 (150 @ $54 Global) with correct per-head math
- Customization dossier: "Northwind Dynamics" → monogram "ND", dossierId "LSQ-northwind-dynamics-1858", scenario switch updates title live
- Case study expand: clicking Honeywell reveals quote "Leveraging LSAI Quantum..." with 2 animated speech marks
- Request a Quote: form fill + submit → slide-in-confirm panel appears with "Quote request received"
- Footer present at bottom (body height 7190px, content-rich); mobile hamburger nav present at 390x844
- VLM visual analysis confirms: page renders with full visible content (NOT blank), hero with team photo + headline "Empowering teams with immersive mystery experiences", professional cream/emerald/charcoal palette, distinct Experiences/Pricing/Case Studies sections, no rendering errors or broken images

Stage Summary:
- Production-ready single-route Next.js 16 platform built and verified end-to-end
- All 6 specified interactions functional: hero parallax, skill-tag glow+reorder, animated pricing slider, live dossier builder, expandable case-study cards with speech marks, slide-in quote confirmation
- Brand content from lsaiquantum.com reused: name, testimonials (Airbus/Honeywell/Abbott/KBR + Boeing/Verizon/Mastercard/Statestreet), team (Jamie Veum, Erma Hansen, Ignacio Goldner, Cesar Schuster), contact (+1 734.456.6599, liza@lsaiquantum.com, London address), "Free Rapid Discovery" CTA, "Hotline 24/7", "Why Choose Us" reasons
- Palette compliant: emerald + gold + rose on cream, zero indigo/blue

---
Task ID: R1
Agent: main
Task: Retheme entire site to use ONLY content from lsaiquantum.com — remove all invented murder-mystery/escape-room content

Decision:
- Keep page structure + interactions (hero parallax, domain-tag glow+reorder, scale slider with tick counter, solution-brief builder, expandable case-study cards with speech marks, slide-in consultation confirmation, sticky footer)
- Replace ALL text with verbatim LSAI Quantum content: hero tagline, 11 services, 9 product-driven-engagement products, 4 why-choose-us reasons, 10 trusted-technology-partner features, AlphaFold 2018-2024 timeline, 4 verbatim testimonials (Airbus/Honeywell/Abbott/KBR — no invented speaker names/metrics), 2 blog posts (Alex Roy), 4 team members, real contact + footer quick links
- Remove invented: murder-mystery scenario names, dollar pricing, fake speaker roles, fake metrics, fake cohort numbers
- Slider reframed from "team-size pricing" -> "scale your engineering team" (engineer count 10-200, delivery-model tiers) — faithful to LSAI's "scale up or down with flexible delivery models"
- Customization reframed from "murder dossier" -> "solution brief" (Product Driven Engagement)
- Service cards switch from photos to icon-led gradient headers (cleaner B2B consulting feel; no invented imagery)
- Hero team photo retained (collaboration fits consulting)

Stage Summary: planning complete, executing content + component rewrites

---
Task ID: R2
Agent: main
Task: Execute full content retheme to 100% LSAI Quantum content + verify end-to-end

Work Log:
- Rewrote src/lib/content.ts with verbatim LSAI content: 11 services (AI Transformation, Gen AI, ML, Data Analytics, Cloud Engineering, Digital Transformation, Managed Services, Quantum Computing, Block Chain, IoT, Cyber Security), 9 product-driven-engagement products, 4 why-choose-us reasons, 10 trusted-technology-partner features, AlphaFold 2018-2024 timeline, 4 verbatim testimonials (no invented speakers/metrics), 2 blog posts (Alex Roy, 8 Dec 2025), 4 team members, real contact + footer links, delivery tiers (no prices)
- Hero: "Empowering businesses with AI-driven solutions" / "From intelligent automation to predictive analytics" / "Explore Our Services" + "Free Rapid Discovery - POC" CTAs; floating cards reframed to "Service: AI Transformation" + "Solution Brief: Acme Corp × LSAI"
- Experiences → "What We Do": 11 services tagged by 3 domains (AI & Data / Cloud & Digital / Quantum & Security), icon-led cards (BrainCircuit, Atom, ShieldCheck, etc.), glow+350ms reorder kept
- Pricing → "Why Choose Us": 4 reasons + team-scale slider (engineers 10-200, Core/Extended/Dedicated/Scaled/Enterprise tiers, NO prices, tick counter on engineer count) + Trusted Technology Partner 9-feature grid
- Customization → "Product Driven Engagement": solution-brief builder (company + product type + logo style), network-node motif replaces detective red-string, "Solution Brief" stamp replaces "Confidential"
- Case Studies: AlphaFold 2018-2024 horizontal timeline + expandable verbatim testimonial cards (Airbus/Honeywell/Abbott/KBR) with speech-mark animation; removed invented metrics/speaker roles
- NEW Blog section: 2 Alex Roy posts ("Actionable Insights..." / "Building a Stronger Business...")
- NEW Team section: Jamie Veum (Founder & CEO), Erma Hansen (SCSK Event), Ignacio Goldner (London Chamber Event), Cesar Schuster (Debt Management)
- Quote → "Schedule a Consultation" / "Book your free rapid discovery" / "Start Your Journey" CTA; slide-in confirmation "Consultation request received"
- Footer: real LSAI quick links (Who We Are, Case Study, Policies, FAQ, Contact Us), full contact incl. www.lsaiquantum.com, verbatim copyright "© Copyright 2025 - LSAI Quantum Inc., All Right Reserved."
- Nav updated: What We Do / Why Choose Us / Engagement / Case Studies / Book Appointment
- Updated layout.tsx metadata to LSAI positioning
- Lint: clean (0 errors, 0 warnings); dev.log: all 200, no errors

Agent Browser Verification (all golden paths confirmed):
- Page title: "LSAI Quantum — Empowering businesses with AI-driven solutions"
- No console/runtime errors, no hydration mismatches
- Domain-tag reorder: hovering "Quantum & Security" moves Quantum Computing/Block Chain/IoT/Cyber Security to top
- Team-scale slider: at 100 → "Enterprise Engagement · flexible delivery models", count ticks to 100
- Solution brief: "Northwind Dynamics" → briefId "LSQ-northwind-dynamics-1844", product "New Product Development" updates live
- Case study expand: Honeywell verbatim quote appears with 2 speech marks
- Consultation form: fill + "Start Your Journey" → slide-in-confirm panel "Consultation request received"
- VLM visual: page renders (not blank), hero text correct, services grid present (AI Transformation/Quantum/Cyber Security), testimonials with AIRBUS/HONEYWELL, NO leftover murder-mystery/escape-room content

Stage Summary:
- Site is now 100% LSAI Quantum content (verbatim services, products, reasons, AlphaFold timeline, testimonials, blog, team, contact, footer) — zero invented murder-mystery/escape-room content
- All 6 polished interactions preserved and verified working: hero parallax, domain-tag glow+350ms reorder, team-scale slider with tick counter, solution-brief builder, expandable case-study cards with speech marks, slide-in consultation confirmation
- Sticky footer + responsive nav verified

---

Task ID: 11
Agent: opencode
Task: Hero readability, palette unification, responsive fixes, hero-video compression, dependency cleanup, Windows build fixes

Work Log:
- Hero: darker left-to-right + top-to-bottom scrims (92/78/55), tightened H1 scale (3xl/4xl/5xl/6xl), max-w-2xl column, white primary CTA, gold heading underline, wider trusted-client strip with smaller mobile type
- Palette: removed violet/purple from hero + quantum promo (cyan->sky->blue gradients); promo glows now blue + gold; second orbit/satellite now gold; --rose token moved from purple (hue 305) to warm rose (hue 20) in both themes + chart-3
- Responsive: full nav links now show at lg (1024) with hamburger below, preventing 768-1023px crowding; footer grid reflows 2 -> 3 -> 5 cols (brand spans full width on tablet); verified no horizontal overflow at 360/390/414/768/820/1024/1280
- Contact page: added Email card + notes, London HQ and Dallas office cards, incoming CTA panel to /#quote, map heading renamed to "Dallas on the map"
- Footer: dynamic copyright year (2026), Contact us link uses map-pin icon
- Typography/sections: global smooth scroll with scroll-padding-top 5rem, reduced-motion override
- Performance: hero video re-encoded with ffmpeg (1080x1920 retained, 30fps, CRF 27, audio stripped) 34.68 MB -> 2.04 MB; poster frame added at /videos/hero-poster.jpg; video pauses under prefers-reduced-motion
- Page is now a Server Component; 7 below-the-fold sections code-split with next/dynamic (Pricing, Customization, CaseStudies, Blog, Team, Quote, Footer)
- Removed 17 unused dependencies (@tanstack/*, @dnd-kit/*, @mdxeditor/editor, next-auth, next-intl, zod, zustand, react-markdown, react-syntax-highlighter, date-fns, uuid, z-ai-web-dev-sdk, @hookform/resolvers, @reactuses/core)
- next.config.ts: pinned turbopack.root to process.cwd() (OneDrive path previously caused a workspace-root panic)
- .env: DATABASE_URL changed from Linux absolute path to file:../db/custom.db; ran prisma generate
- tsconfig: excluded examples/ (standalone websocket samples needing socket.io) so tsc --noEmit is clean
- Fixed Windows lock issue: .next/build had ReadOnly+ReparsePoint attributes from OneDrive, blocking build; cleared attributes and rebuilt

Verification:
- bun run lint: clean; bunx tsc --noEmit: exit 0; bun run build: success (/, /contact static, /api dynamic)
- Home + /contact: 0 console errors, 0 failed requests; hero video 2.04 MB and playing; poster served
- Quote form submit still returns the slide-in confirmation; nav anchors scroll correctly

Stage Summary:
- Hero paints ~94% lighter media without losing resolution, and reads clearly over the video
- One blue/cyan + gold + warm-rose palette across dark and light sections
- Responsive nav/footer fixed for tablet widths; no horizontal overflow at any tested width
- Original 34.7 MB source kept at upload/hero-portfolio-source.mp4 for future re-encoding

---

Task ID: 12
Agent: opencode
Task: Move hero video into a right-hand card on a white background; drop the nav brand icon

Work Log:
- Hero restructured to a two-column layout: copy on the left, video in a rounded card on the right (stacks under the copy below md)
- Hero background switched to white; section text, eyebrow chip, CTAs and contact row recoloured for the light theme (primary blue CTA + outline secondary)
- Nav switched to a permanent light treatment (no more transparent/dark state over the hero); logo icon + gold dot removed, wordmark kept at text-base
- Nav links return at md with tighter padding; CTA button shows from lg
- Discovered the source clip is a 1072x784 landscape render letterboxed inside a 1080x1920 canvas (cropdetect); re-encoded the video cropped to the real content (bars removed), poster regenerated
- Video card uses aspect-[1072/784] so no cropping is applied

Verification:
- No horizontal overflow at 390/414/768/820/1024/1280; card sits beside the copy from 768 up
- 0 console errors; lint + tsc clean

---

Task ID: 13
Agent: opencode
Task: Animate the "Trusted by enterprise clients" strip as a continuous marquee

Work Log:
- Replaced the static wrapped row with a two-copy marquee: the client list is rendered twice inside .marquee-track, the second copy marked aria-hidden so screen readers hear it once
- Added @keyframes marquee-scroll (translate3d 0 -> -50%) and .marquee-track (28s linear infinite, will-change: transform) to globals.css
- Label "Trusted by enterprise clients" stays pinned on the left (gold dot + eyelet); only the client names travel in the ticker. On phones the label sits on its own row above the ticker
- Ticker takes the remaining width with a soft 128px/96px gradient mask so names dissolve in and out instead of clipping mid-word
- Pauses on hover for fine pointers (hover: hover) only, so touch devices keep scrolling
- Reduced-motion handling: the ticker slows to 45s instead of stopping, keeping some life without fast motion

Verification:
- computed style: animationName marquee-scroll, animationDuration 45s (this environment reports prefers-reduced-motion: reduce; normal is 28s)
- track translateX moved 224 -> 199 over 1.5s, confirming continuous scroll; 16 <li> items (8 clients x 2 copies)
- 0 console errors

---

Task ID: 14
Agent: opencode
Task: Simplify "What We Do" into a flat 4-per-row grid of service info boxes

Work Log:
- Removed the domain tag bar (AI & Data / Cloud & Digital / Quantum & Security with their blurbs) and the hover-to-reorder interaction entirely
- Removed the card "design" embellishments: 16:9 gradient header, icon tile, domain badge, "Match" chip, #01 rank counter and dotted texture
- Removed the per-card "Read more" footer row + arrow button
- Cards now contain only the information: service title + its description, on a plain bordered card with a subtle hover border
- Grid is 4 per row from md up (1 column on phones, 2 from sm), so the 11 services lay out 4 + 4 + 3
- Updated the section description to drop the "hover a domain tag" instruction

Verification:
- 11 cards, per-row counts 4 / 4 / 3 at 768-1280px; no "AI & Data" / "Read more" text left in the section
- No horizontal overflow at 360/390/414/640/768/820/1024/1280; 0 console errors; lint + tsc clean

---

Task ID: 15
Agent: opencode
Task: Visual pass on the What We Do cards (colour, number, typography, hover) with gradient titles

Work Log:
- Card surface: white -> light tint gradient (from-card via-card to-secondary/60) with a soft border and rounded-2xl
- Accent: 3px gradient bar across the top edge keyed to the service group (blue/cyan for AI & Data, gold/amber for Cloud & Digital, rose for Quantum & Security), brightening on hover
- Index: mono 01-11 at the top of each card, tinted with the same accent
- Hover: -translate-y-1 lift, primary border, coloured soft shadow (shadow tint follows the accent group)
- Typography: titles are now 15px semibold with a blue -> sky -> cyan gradient via bg-clip-text (text-transparent); body 13px, leading 1.65, muted grey
- Section: two very faint primary/gold blur glows behind the grid, overflow-hidden added
- Grid unchanged: 1 / 2 / 4 columns, cards remain equal height so rows align

Verification:
- Gradients render (background-clip: text, color rgba(0,0,0,0)) on all 11 titles; 11 cards at every breakpoint
- No horizontal overflow at 360/390/414/768/912/1280; 0 console errors; lint + tsc clean

---

Task ID: 16
Agent: opencode
Task: Remove the card index numbers; colour service headings by group accent

Work Log:
- Removed the mono 01-11 index from every card (and the now-unused ACCENT_NUM map + map index parameter); card padding back to a uniform p-5
- Headings are now gradient text that matches each card's group instead of one blue gradient everywhere:
  - AI & Data -> primary to sky-600 (blue)
  - Cloud & Digital -> amber-700 to amber-600 (gold)
  - Quantum & Security -> rose-700 to rose-600 (rose)
- Deepened the gold/rose stops from the first attempt so 15px semibold text keeps readable contrast on white

Verification:
- No numeric index left in the card text; all 11 titles keep bg-clip-text + transparent fill
- 0 console errors; lint + tsc clean

---

Task ID: 17
Agent: opencode
Task: Strip the team-size calculator and the Trusted Technology Partner block from Why Choose Us

Work Log:
- Removed the "Scale your team up or down" card entirely: engineer count, tier blurb, range slider, tier tick marks + tooltips, tier chips, the "Start a rapid discovery" CTA and the inline .lsq-range <style> block
- Removed the whole "Your Trusted Technology Partner" block (heading + the TRUSTED_PARTNER 9-card grid) since it repeated other sections
- Why Choose Us now shows only the four reasons, laid out 1 / 2 / 4 across (4 in a row from lg)
- Component is now a plain Server Component — hooks, framer-motion, tooltip, Button, DELIVERY_TIERS/tierForSize/CONTACT imports and the MIN/MAX/STEP constants are all gone
- DELIVERY_TIERS and TRUSTED_PARTNER remain exported in content.ts but are no longer imported anywhere

Verification:
- Section DOM: no input[type=range], no "scale your team up or down", no "trusted technology partner" text, 4 reason cards
- Section height dropped from ~1300px to 813px at 912px wide; 2x2 there, 4-across at 1280
- No horizontal overflow at 360/390/414/768/912/1280; 0 console errors; lint + tsc clean

---

Task ID: 18
Agent: opencode
Task: Remove the "Read more" affordance from the blog cards

Work Log:
- Deleted the footer row on both blog cards: the "Read more" label, the divider line and the round arrow button
- Removed the now-unused ArrowRight import
- Excerpt keeps flex-1 so both cards stay equal height and the text fills the card

Verification:
- No "Read more" text and 0 arrow-right icons left in #blog; both post titles still render
- Card height 233px each; 0 console errors; lint + tsc clean

---

Task ID: 19
Agent: opencode
Task: Recolour the hero highlight and primary CTAs to the brand gold used by "Quantum" in the wordmark

Work Log:
- Hero H1: "AI-driven solutions" dropped the blue/cyan gradient and now uses text-gold — the exact same token as the "Quantum" in the nav wordmark; the hand-drawn underline stays gold
- "Explore Our Services" CTA: bg-primary/text-primary-foreground -> bg-gold/text-gold-foreground (hover gold/90)
- "Book Appointment" nav CTA (desktop, lg and up) and the same button inside the mobile menu: same gold treatment

Verification:
- Computed colour of the H1 highlight is byte-identical to the nav "Quantum" span (lab(74.5664 14.0937 69.2724))
- Both Book Appointment buttons and Explore Our Services share the same gold background
- 0 console errors; lint + tsc clean

Note: gold on white is a low-contrast pairing (~2:1) for the 48px heading — acceptable visually at that size but below WCAG AA; a deeper gold (gold-foreground/amber-600) can be swapped in if it looks faint on a certain monitor.

---

Task ID: 20
Agent: opencode
Task: Restrict the home page to three brand colours (blue + gold + rose) and recolour the hero underline

Work Log:
- Audited the rendered home page by sampling computed color/background/border and gradient stops: four hue families were present — blue (~255-285), gold (~60-90), rose (~15-30) and cyan/sky (~180-210)
- Removed cyan/sky everywhere it appeared so only the three brand colours remain:
  - experiences-section: AI & Data accent bar now primary -> blue-500 -> blue-400; title gradient now primary -> blue-600
  - quantum-promo-section: badge, heading gradient (blue-300 -> blue-200 -> white), CTA hover, rack borders/bars, particles, core border/glow, CPU icon, "Quantum core" and "LSAI Quantum Computing" labels all moved from cyan/sky to the blue family
  - quantum-promo-section: floating badge wordmark "Quantum" is now gold, matching the header logo
  - quantum-promo shadows: teal rgba(14,116,144) -> blue rgba(37,99,235)
  - globals.css: promo scene grid/orbit/satellite cyan rgba(103,232,249) and rgba(34,211,238) -> blue rgba(147,197,253) and rgba(59,130,246); cyan hex #67e8f9 -> #93c5fd
  - contact page CTA hover:bg-cyan-50 -> hover:bg-blue-50
- Hero underline under "AI-driven solutions": gold/80 -> text-primary (brand blue), so it reads as a separate stroke under the gold text

Verification:
- Computed palette scan after the change shows only hue clusters at ~75 (gold), ~24 (rose) and ~255-285 (blue); no cyan/sky remains
- Underline colour resolves to the --primary token (lab(33.1526 -0.866979 -40.6713))
- No horizontal overflow at 360/768/912/1280; 0 console errors; lint + tsc clean

---

Task ID: 21
Agent: opencode
Task: Remove the hero underline entirely and add a slow settle-in zoom on the hero video to mask the refresh first-frame glitch

Work Log:
- hero-section: deleted the inline-block wrapper and the hand-drawn <svg> underline under "AI-driven solutions"; the heading is now a plain <span className="text-gold"> so the H1 is a single text flow
- globals.css: added @keyframes hero-video-zoom (transform scale 1.12 -> 1) and .hero-video-zoom applying it at 1.8s with cubic-bezier(0.22, 1, 0.36, 1) and fill-mode both, transform-origin center, will-change transform
- hero-section: added the hero-video-zoom class to the hero <video> element (applied unconditionally, not gated on prefers-reduced-motion, so the entrance is always visible)
- Zoom starts slightly over-scaled and settles to exactly 1, so the first decoded frame pops in already cropped instead of snapping into place

Verification:
- #top h1 svg count is 0 — no underline markup remains
- Computed animation on #top video: name hero-video-zoom, duration 1.8s, timing cubic-bezier(0.22, 1, 0.36, 1); mid-animation transform matrix(1.03, 0, 0, 1.03, 0, 0) and after settle matrix(1, 0, 0, 1, 0, 0)
- 0 console errors; lint + tsc clean

---

Task ID: 22
Agent: opencode
Task: Replace the hero video with a still image and give the card a 3D entrance animation

Work Log:
- Context: the user reported the video "is not working out" (refresh glitch, paused in some browsers), so the hero visual is now a static photo; the 1.8s settle-in zoom from Task 21 was removed
- Copied the 1072x784 frame to public/images/hero-ai-core.jpg (104 KB) so the asset path matches its new role; the card keeps aspect-[1072/784] so the photo fits without cropping
- hero-section: <video> replaced with next/image <Image fill priority sizes="(min-width:1024px) 480px, (min-width:768px) 45vw, 460px"> using object-cover; alt="" + aria-hidden because the visual is decorative
- hero-section: removed the now-dead prefers-reduced-motion video pause effect and the useEffect import
- hero-section: card badge "00:10" timestamp replaced with a gold dot + "AI core" pill (a timestamp made no sense without a video)
- globals.css: removed @keyframes hero-video-zoom / .hero-video-zoom; added @keyframes hero-visual-3d-in (perspective 1400px, translate3d 0/30px/-120px, rotateX 9deg, rotateY -16deg, scale .94 -> identity) applied via .hero-visual-3d for 1.35s with cubic-bezier(0.16, 1, 0.3, 1), fill both, transform-style preserve-3d
- hero-section: added a live pointer-driven 3D tilt on top of the entrance — rotateY -7..7deg and rotateX 5..-5deg via framer-motion useTransform plus transformPerspective 1200, so the card keeps responding after it lands
- Entrance is not gated on prefers-reduced-motion so it is always visible in the review browser

Verification:
- #top now contains 0 <video> elements; the hero image is an optimized next/image asset (~42 KB at 640w) and reports complete with its 1072x784 source
- Computed animation: hero-visual-3d-in, 1.35s, cubic-bezier(0.16, 1, 0.3, 1); mid-flight transform is a non-identity matrix3d (rotation/skew present), settling to identity
- Pointer move produces a live matrix3d tilt on the card wrapper
- No horizontal overflow at 360/390/768/912/1280; image loads at every width; 0 console errors; lint + tsc clean

Note: public/videos/hero-portfolio.mp4 (2.0 MB) and hero-poster.jpg are now unreferenced; left in place so the video can be restored, can be deleted on request.

---

Task ID: 23
Agent: opencode
Task: Replace the hero photo with a hand-built "next-generation tech" visual (CSS + SVG, no image assets)

Work Log:
- Context: user did not want the photo in the hero and asked for a professional custom visual instead (or offered to supply a picture); built a custom one so nothing has to load
- Removed next/image from the hero and deleted public/images/hero-ai-core.jpg plus the public/images folder (the file was only introduced in Task 22)
- Added a local HeroTechVisual component (hero-section.tsx) rendered inside the existing 3D card:
  - perspective data floor drawn in SVG (converging verticals + increasing horizontal spacing + horizon glow) instead of a transformed CSS plane, so lines stay crisp at any card size
  - dot-matrix depth field via an SVG pattern
  - processing core: 84x84 chip with pin stubs and an "AI" glyph, radial glow that pulses
  - three dashed orbit ellipses with flowing stroke-dashoffset, gold node + rose node
  - two counter-rotating gold/blue HUD arcs
  - light cone from the core down to the floor (CSS clip-path + blur)
  - radar sweep (conic gradient, masked to a ring band, mix-blend-mode screen)
  - frame brackets + telemetry tick marks, five twinkling particles, edge vignette
- New tokens/styles in globals.css: .hero-tech-ambient, .hero-tech-beam, .hero-tech-sweep, .hero-tech-vignette, .hero-orbit-dash, .hero-orbit-slow, .hero-core-pulse, .hero-twinkle; keyframes hero-tech-spin, hero-orbit-flow, hero-core-pulse, hero-twinkle (the old video-zoom keyframes are already gone)
- Card got `isolate` so the blended sweep cannot leak onto the white page
- Kept the 1.35s 3D entrance and the pointer-driven rotateX/rotateY tilt on the card
- Tried letting the CTA row wrap to widen the visual column, but that stacked the two hero buttons at 912px, so it was reverted; layout is unchanged

Verification:
- #top now contains 0 <img> and 0 <video> elements; the visual is pure DOM/SVG
- Computed animations: card hero-visual-3d-in, sweep hero-tech-spin, rings hero-orbit-flow, gold arc hero-orbit-slow, core hero-core-pulse
- Rendered and inspected at 820px wide (temporary layout override) to confirm the floor, beam, orbits and chip read correctly before restoring
- No horizontal overflow at 360/390/768/912/1280; card 313/343/215/352/480 px; 0 console errors; eslint exit 0; tsc exit 0

---

Task ID: 24
Agent: opencode
Task: Reposition LSAI Quantum around seven frontier solution lines, add solution pages, wire real lead capture + admin console, and clean up performance

Work Log:
- Added src/lib/solutions.ts with 7 original verticals (no invented clients/metrics): quantum computing, enterprise AI agents, humanoid robotics, industrial AI, delivery drones, quantum shipping & SCM, medical AI / drug discovery. Each has eyebrow, tagline, overview, capabilities, use cases, industries, outcomes and related core services.
- Home: new #solutions "Frontier Solutions" section (src/components/site/solutions-section.tsx) — dark futuristic cards with accent glows, capability chips, index numbers and links; plus an "All frontier solutions" card. Placed after the quantum promo, before core capabilities.
- New routes: /solutions index (filter chips + rich cards) and /solutions/[slug] (static params, per-page metadata, dark hero with animated solution visual, outcomes strip, overview, capabilities, use cases, engagement steps, related core capabilities, cross-links, CTA). SiteNav + SiteFooter added to solution and contact pages.
- Nav reworked to absolute /#anchors + /contact so links work from subpages; added "Solutions"; Book Appointment points to /#quote everywhere.
- Content refresh: hero and quantum promo now speak to agents/robotics/quantum/medical AI; core services reframed as "Core Capabilities"; case studies cross-link to Medical AI; blog replaced financial posts with 3 frontier-tech insights linked to solution pages; footer restructured with a full Frontier Solutions column, clients moved into the brand block, added an Admin link.
- Backend: Prisma `Lead` model (type, name, email, company, phone, teamSize, interest, message, status, source, timestamps) pushed to SQLite; `POST /api/leads` with validation, honeypot, in-memory rate limit and 201/400/429/500 responses.
- Quote form now POSTs to the API (grouped Frontier solutions / Core capabilities select), shows submitting, error and success states, and emails the entered address in the confirmation. New contact form on /contact posts type=contact.
- Admin: /admin password login using ADMIN_PASSWORD + HMAC-signed httpOnly cookie (ADMIN_SESSION_SECRET, 8h), /admin/leads console with totals, new/handled filters, full submission table, mark handled/reopen server action and sign out; /admin and /api disallowed in robots.
- Performance/SEO/cleanup: sitemap.ts (home, solutions index, 7 pages, contact), robots.ts, removed unreferenced public/videos (2 MB) and public/robots.txt, removed ignoreBuildErrors and added serverExternalPackages for Prisma.

Verification:
- `npx prisma db push` synced; `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled and prerendered 15 pages including all 7 solution slugs.
- Production server restarted in background; `/`, `/solutions`, all 7 solution pages, `/contact`, `/sitemap.xml`, `/robots.txt` return 200.
- API: valid POST returns 201 and persists; invalid email returns 400; test rows verified in SQLite then deleted (0 leads remaining).
- Browser: home has #solutions + all 7 solution links + 5 nav links, 0 console errors, no horizontal overflow; Enterprise AI Agents page renders title, tagline, 6 sections and CTA.
- Admin: unauthenticated /admin/leads returns 307 to /admin; password login succeeds; seeded lead visible; "Mark handled" action flips status to HANDLED with 0 console errors. Seed/test leads removed.
- Quote form submitted through the real UI: slide-in "Request received" confirmation appeared, summary showed the email, row persisted, 0 console errors.


---

Task ID: 25
Agent: opencode
Task: Remove the animated 3D visual from the home page hero

Work Log:
- Rewrote src/components/site/hero-section.tsx as a single centered column: removed the right-hand `HeroTechVisual` card, the CSS/SVG quantum core, and all pointer parallax (useRef, useMotionValue, useSpring, useTransform, card/text transforms).
- Kept the eyebrow badge, headline, paragraph, CTAs, contact meta row and the trusted-client marquee; text entrance animations and background glows preserved.
- Cleaned unused hero-visual CSS from src/app/globals.css: removed .perspective-card, .hero-visual-3d, hero-visual-3d-in, .hero-tech-ambient/.hero-tech-vignette/.hero-tech-beam/.hero-tech-sweep, .hero-orbit-dash, .hero-core-pulse, .hero-twinkle and their keyframes.
- Kept .hero-orbit-slow and @keyframes hero-tech-spin because the solution detail visual still uses them.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled and prerendered 15 routes.
- Production server rebuilt and restarted on http://localhost:3000; `/` returns 200.
- Home HTML contains no hero visual classes. Browser check: no canvas, no hero SVG, no video, no `.hero-visual-3d` in #top; hero content centered; 0 console errors; no horizontal overflow.

---

Task ID: 26
Agent: opencode
Task: Rebuild the home page around the five requested verticals and remove the old generic sections

Work Log:
- Home page is now Hero -> Five Solutions -> Quote/contact -> Footer. Removed the quantum promo, core capabilities grid, pricing, customization, case studies, blog and team sections from the page and deleted their component files.
- Hero rewritten: "Five frontiers of applied AI, engineered to work in the real world." Badge reads Quantum / AI Agents / Humanoids / Industrial AI / Drones; sub-copy names quantum computing, enterprise AI agents, humanoid household robots, industrial AI for manufacturing and autonomous delivery drones.
- Solutions reduced from seven to five in src/lib/solutions.ts: removed Quantum Shipping & Supply Chain and Medical AI / Drug Discovery. Removed their icon keys and lucide imports.
- Rewrote the Humanoid Robotics copy around household work (cooking, cleaning, laundry, tidying, eldercare) and renamed Industrial AI to "Industrial AI - Manufacturing".
- Home solutions section now says "Five frontiers we build for", 3-column card grid, and "All five solutions" link card.
- Updated /solutions index copy ("Five ways..."), layout metadata/keywords/OpenGraph, contact page copy, footer brand copy and quick links, and nav links (Solutions / All Solutions / Contact) to match the new page structure.
- Solution detail pages no longer link to the removed #what-we-do anchor; related capability cards are now informational and the "View all solutions" link goes to /solutions.
- Refreshed the third unused blog data entry to point at delivery-drones instead of the deleted shipping slug.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 13 routes with 5 solution slugs.
- Production server rebuilt and restarted; `/`, `/solutions`, the 5 solution pages, `/contact`, `/admin`, `/sitemap.xml`, `/robots.txt` return 200; the two removed solution URLs return 404.
- Browser: home has only #top, #solutions, #quote; 5 solution cards; 0 console errors; no horizontal overflow; no old section copy. /solutions shows exactly 5 cards. Humanoid page shows household copy and no overflow.

---

Task ID: 27
Agent: opencode
Task: Add AI Transformation, Machine Learning, Cloud Engineering and Cyber Security to the home page

Work Log:
- Added src/components/site/capabilities-section.tsx: a "Core Capabilities" section (#capabilities) with four cards showing AI Transformation, Machine Learning, Cloud Engineering and Cyber Security.
- Card copy is pulled from the existing SERVICES data in src/lib/content.ts so the wording stays single-sourced; each card has an accent icon, body copy and a "Talk to us" link to /#quote.
- Home page is now Hero -> Five Solutions -> Core Capabilities -> Quote/contact -> Footer.
- Added a Capabilities nav link (/#capabilities) and a Capabilities quick link in the footer.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 13 routes.
- Production server rebuilt and restarted; `/` returns 200 with the #capabilities section and all four capability names.
- Browser: 4 capability cards render (2 columns at 912px, 4 at lg), nav shows Solutions/Capabilities/All Solutions/Contact, 0 console errors, no horizontal overflow.

---

Task ID: 28
Agent: opencode
Task: Drop the "five" framing and merge the four core capabilities into the main offerings grid

Work Log:
- Removed every "five"/"Five" reference from the site copy and metadata; the section is no longer presented as a five-item list.
- Merged AI Transformation, Machine Learning, Cloud Engineering and Cyber Security into the main #solutions grid (src/components/site/solutions-section.tsx), after the five solution cards, as dark cards tagged "Core capability" that link to the quote form. The grid now renders 9 offerings plus an "All solutions" card.
- Deleted the separate capabilities-section.tsx and removed it from the home page; the nav and footer now use a single "What We Build" link.
- Hero: "Frontier solutions, engineered to work in the real world."; sub-copy adds the four capabilities; badge includes Cloud and Security; CTA is "Explore what we build".
- Updated /solutions heading to "Ways to put frontier technology to work" and expanded the metadata descriptions to include the four capabilities. Layout title is now "LSAI Quantum - Frontier AI, Quantum, Robotics, Cloud & Security".

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 13 routes.
- Production server rebuilt and restarted; `/` returns 200 and no longer contains the word "five".
- Browser: #solutions renders 10 cards (5 solutions, 4 capabilities, 1 all-solutions), correct titles, 0 console errors, no horizontal overflow; sections are #top, #solutions, #quote.

---

Task ID: 29
Agent: opencode
Task: Restore Quantum Shipping & Supply Chain and Medical AI as frontier solution lines

Work Log:
- Added two solutions to src/lib/solutions.ts: quantum-shipping-scm and medical-ai-drug-discovery, bringing the portfolio to 7 solution verticals.
- Shipping covers weather/sea-state detection, shortest and safest route optimization, nearest harbour and docking recommendation, SCM optimization, ETA/fuel modelling and port congestion analytics.
- Medical AI covers target identification, molecular design and generative chemistry, protein structure prediction, omics/clinical analytics, lab automation and regulatory documentation support.
- Extended SolutionIconKey with shipping and medical; solution-icon.tsx maps them to Ship and Dna icons.
- Home grid now renders 12 cards: 7 solution lines, 4 core capabilities and the All solutions card.
- Hero badge, hero sub-copy, offerings description, footer blurb, /solutions copy and layout metadata were all expanded to mention shipping/SCM and medical AI, without any fixed-count wording.
- Quote-form solution select automatically picks up the two new entries because it reads from SOLUTIONS.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages with 7 solution slugs.
- Production server rebuilt and restarted at http://localhost:3000.
- HTTP 200 for /, /solutions, all 7 solution pages, /contact, /sitemap.xml; home contains "Quantum Shipping" and "Medical AI".
- Browser: home has 12 cards with correct titles; shipping page exposes weather, route, harbour and SCM capabilities; medical page exposes target, molecular, protein and regulatory capabilities; 0 console errors; no horizontal overflow.
---

Task ID: 30
Agent: opencode
Task: Replace the "All solutions" grid card with Supply Chain Management and Research & Development

Work Log:
- Removed the "All solutions" card from the home #solutions grid (src/components/site/solutions-section.tsx); the Boxes import went with it.
- Added two capability cards in its place: Supply Chain Management (Truck icon) and Research & Development (FlaskConical icon), both tagged "Core capability" and linking to /#quote.
- Added matching entries to SERVICES in src/lib/content.ts so the quote-form select includes both and the card copy stays single-sourced.
- Extended CAPABILITY_META and FALLBACK_BODY with the two new ids.
- Section description now lists supply chain management and R&D alongside the four earlier capabilities.
- Grid is now 13 cards: 7 solution lines + 6 core capabilities, with no All solutions card.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages with 7 solution slugs.
- Production server rebuilt and restarted at http://localhost:3000; `/` returns 200.
- Browser: 13 cards in the expected order; "All solutions" card absent; Supply Chain Management and Research & Development render with their copy; 0 console errors; no horizontal overflow.
---

Task ID: 31
Agent: opencode
Task: Restyle the home offerings cards as white boxes with shading and drop the top-right numbering

Work Log:
- Reworked every card in the home #solutions grid (7 solution lines + 6 capabilities) from dark navy to white: `bg-white`, slate-900 titles, slate-600 body text and slate-200 borders.
- Removed the decorative top-right glow, the top hairline and the "01"/"02" index numbers from every card, including the capability cards.
- Added a soft accent shade graphic at the bottom-left of each card plus a light top-to-bottom gradient at the card base, and a layered drop shadow that deepens on hover.
- Accent chips and links now use light-mode tones: blue-700, amber-700 and rose-700 with matching 50/200 surfaces.
- Section heading is now "Quantum solutions and the capabilities behind them", with the word "Quantum" rendered in the site's gold brand colour. SectionHeading now accepts ReactNode titles to support this.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted at http://localhost:3000; `/` returns 200.
- Browser: 13 white cards (rgb 255,255,255) with 24px radius and layered shadow; no numeric index text; no top-right decorative blobs; heading shows "Quantum" in the gold token; 0 console errors; no horizontal overflow.
---

Task ID: 32
Agent: opencode
Task: Strip in-card decoration and add a persistent light/dark theme toggle

Work Log:
- Removed the bottom-left accent glow and the base gradient from every home offerings card; cards are now plain bordered boxes with only a drop shadow, keeping the white surface and accent icon chip.
- Added `src/components/theme-provider.tsx` wrapping the app in next-themes (`attribute="class"`, `defaultTheme="light"`, `enableSystem={false}`).
- Added `src/components/site/theme-toggle.tsx`: a 40px round button showing a Moon icon in light mode and a Sun icon in dark mode, with accessible labels and hover state.
- Added the toggle to the site header, visible on all breakpoints next to Book Appointment / the mobile menu button.
- White cards adapt in dark mode (`dark:bg-slate-900`, slate-50 text, slate-800 borders, muted slate-400 body and dark-friendly accent chips), so the section remains legible in either theme.
- Replaced the hero's hardcoded `bg-white` surfaces with `bg-background` so the hero follows the selected theme.
- Theme choice persists in localStorage and is restored on reload.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted at http://localhost:3000; `/` returns 200.
- Browser: cards have zero absolutely positioned decoration children; light mode card is rgb(255,255,255) with Moon toggle; dark mode card turns dark slate with Sun toggle and light text; switching both ways works; theme persists after reload; 0 console errors; no horizontal overflow.
---

Task ID: 33
Agent: opencode
Task: Remove the top-left icon tile from every home offerings card while keeping all content

Work Log:
- Removed the coloured icon tile (and its wrapper) from all 13 boxes in the home #solutions grid.
- Cards now start directly with the solution/capability title, followed by the existing description, capability tags and Explore/Talk to us link.
- Cleaned up the now-unused card icon data: dropped the `icon` field from the ACCENT map, removed the icon map from CAPABILITY_META, and removed the unused lucide and SolutionIcon imports in solutions-section.tsx.
- Card surface, dark-mode variants, hover shadow and link colours are unchanged.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted at http://localhost:3000; `/` returns 200.
- Browser: 13 cards, none contains an icon tile or SVG icon; each keeps title, description, tags and link; 0 console errors; no horizontal overflow.
---

Task ID: 34
Agent: opencode
Task: Make solution detail pages follow the selected light/dark theme

Work Log:
- The solution detail hero was hardcoded to dark navy (`bg-[#070b18] text-white`), so it stayed dark while the rest of the site was light. It now uses theme tokens: `bg-secondary/50` with `text-foreground` in light mode, and keeps the original dark navy/white treatment under `dark:`.
- Replaced the hero's hardcoded white text/borders: breadcrumb, eyebrow badge, tagline, summary, secondary "All solutions" button and the outcomes strip now use foreground/muted/card/border tokens with dark-mode overrides.
- Made `SolutionVisual` theme-aware: light mode gets a card surface with soft shadow, lighter accent chips/nodes and dark text; dark mode keeps the original deep-navy orbit panel and glowing accents.
- Reduced the hero background glows in light mode and kept them stronger in dark mode.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted; `/solutions/quantum-computing` returns 200.
- Browser light mode: hero background is light secondary, text is dark, visual panel is light; dark mode: hero returns to rgb(7,11,24) with white text and the deep-navy visual; toggling both ways works; 0 console errors; no horizontal overflow.

---

Task ID: 35
Agent: opencode
Task: Replace the solution-page orbit visual with a 3D animated drone and "Book a discovery" CTA

Work Log:
- Removed the old orbit/dashboard visual from the right-hand column of the solution detail hero and deleted `src/components/site/solution-visual.tsx`.
- Added `src/components/site/drone-cta.tsx`: a layered 3D-style quadcopter built from perspective-transformed parts — metallic body with a depth layer, crossed arms, four rotor pods with conic-gradient spinning blades, gold hubs, camera lens and a moving ground shadow.
- The drone flies in from the right on load (x/rotateY spring), then floats with a continuous 3D rotateX/rotateY bob; a dashed flight trail reinforces the entry.
- Beneath it sits a "Book a discovery" card (free rapid discovery copy + Start the conversation button linking to /#quote) that fades up after the drone lands.
- Panel is responsive: fixed 430px minimum height on mobile with themed surfaces and glows for light and dark mode.
- Because the detail hero is shared, the new visual applies to all seven solution pages (Quantum, AI Agents, Humanoid, Industrial AI, Drones, Shipping & SCM, Medical AI).

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted; `/solutions/quantum-computing` returns 200.
- Browser light mode: drone + CTA card render at 430px height, rotor blur and float animation active, no overlap or horizontal overflow.
- Browser dark mode: drone panel switches to deep navy with visible rotors and trail; toggle works; no console errors.

---

Task ID: 36
Agent: opencode
Task: Angle the drone, add a robot that pulls the card and presses its button, remove duplicate hero CTAs

Work Log:
- Changed the drone's entry and idle pose to a lower, more dramatic 3D angle (rotateX ~46-54, rotateY -24 to -13, rotateZ -14 to -10) so the quadcopter banks toward the viewer instead of hovering flat.
- Added a cute robot to the scene: rounded head with blinking eyes and rosy cheeks, pulsing gold antenna, body with a gold core, animated arms and legs.
- The robot stands beside the CTA card, reaches over its left edge and rests its gold hand on the "Start the conversation" button, while the card gently tugs left and right as if being pulled. The button also keeps its pulsing ring.
- Restructured the scene into a robot + card flex row so the robot never covers card copy. The card is left-aligned and uses p-4 / sm:p-5 so its button sits exactly where the hand lands.
- Robot scales down to 50x64 (0.56) on mobile and returns to 88x112 from `sm` up; the pair fits the narrowest two-column hero (375px of 381px inner width at 1024px) with no clipping.
- Removed the duplicate "Book a discovery" and "All solutions" buttons from the left side of the solution detail hero. Only the header nav "All Solutions" link remains.
- Because the detail hero is shared, the angled drone + robot scene applies to all seven solution pages.

Verification:
- `npx tsc --noEmit` exit 0; `npm run lint` exit 0; `npm run build` compiled 15 pages.
- Production server rebuilt and restarted; `/solutions/quantum-computing` returns 200.
- Browser light mode: robot hand overlaps the button by 9px at button height, no card text overlap; no hero "Book a discovery"/"All solutions" links; no horizontal overflow.
- Browser dark mode: scene keeps the deep-navy panel with a readable card and visible robot; theme toggle works.
- Simulated the 1024px two-column hero column (429px panel): robot + card use 375px of 381px inner width, 25px clear on the right, no clipping.
- Fresh-load console: 0 errors.