import { createFileRoute } from "@tanstack/react-router";

import wellheadPanel from "@/assets/wellhead-panel.jpg";
import hpu from "@/assets/hpu.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ImageSlider } from "@/components/site/image-slider";

export const Route = createFileRoute("/solutions/wellhead-control-systems")({
  head: () => ({
    meta: [
      { title: "Wellhead Control Systems & Hydraulic Power Units â€” Veetech Automation" },
      {
        name: "description",
        content:
          "Wellhead control panels, valve control systems and hydraulic power units for sequential valve operation, emergency shutdown and safety-critical applications.",
      },
      { property: "og:title", content: "Wellhead Control Systems for Safety-Critical Operations" },
      {
        property: "og:description",
        content:
          "Single and multi-slot WHCPs, RTU/PLC based systems, ESD, HIPPS/IPF panels, HPUs and topside umbilical termination units.",
      },
      { property: "og:url", content: "/solutions/wellhead-control-systems" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/solutions/wellhead-control-systems" }],
  }),
  component: WellheadPage,
});

const types = [
  "Single wellhead control panels",
  "Multi-slot wellhead control panels",
  "RTU/PLC based wellhead control panels",
  "Stand-alone solar powered wellhead control panels",
  "Self-contained valve control panels",
  "Emergency shutdown systems",
  "Choke valve control systems",
  "HIPPS systems / IPF valve control panels",
  "Hydraulic power units",
  "Topside Umbilical Termination Unit (TUTU)",
];

const applications = [
  "Christmas tree valve control (SCSSV, SSV, WV, etc.)",
  "Emergency shutdown of wells",
  "Valve automation & control (Choke, IPF, HIPPS, ESD)",
  "HPUs for hydraulic valves and wellhead control systems",
];

function WellheadPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Wellhead Control Panels"
        lead="High-integrity Wellhead Control Panels (WHCP) for safe, reliable control and shutdown of surface and subsurface safety valves in onshore and offshore fields."
        image={wellheadPanel}
        imageAlt="Technician inspecting a wellhead control panel"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Wellhead Control Panels" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="Single well modules, multi-well panels" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Multi-well control panels are inherently single well panels, referred to as modules,
                set together in a single panel to control multiple wells.
              </p>
              <p>
                The modules can be isolated or removed without disrupting the functionality of the
                other modules of the panel â€” keeping production running while maintenance is carried
                out on an individual well.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Applications
              </h3>
              <ul className="mt-5 space-y-2.5">
                {applications.map((a) => (
                  <li key={a} className="flex gap-3 border-b border-border pb-2.5 text-sm">
                    <span className="mt-2 block size-1 shrink-0 bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ImageSlider
              images={[
                { src: "/client-media/products/wellhead/wellhead-control-panel.jpg", alt: "Wellhead Control Panel" },
                { src: "/client-media/products/wellhead/wellhead-control-panel-1.jpeg", alt: "Wellhead Control Panel Alternative View" },
                { src: "/client-media/products/wellhead/dsc-7917.jpg", alt: "Wellhead Panel details" },
                { src: "/client-media/products/wellhead/dsc-8108.jpg", alt: "Wellhead Panel internals" }
              ]}
              aspectRatio="aspect-4/3"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden surface-dark">
        <div className="absolute inset-0 -z-10 tech-grid opacity-40" aria-hidden="true" />
        <div className="container-vt section-y">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="System Types"
              title="Ten configurations, one engineering discipline"
            />
          </Reveal>
          <ol className="mt-12 grid gap-px border border-hairline bg-[oklch(1_0_0/8%)] sm:grid-cols-2 lg:grid-cols-5">
            {types.map((t, i) => (
              <Reveal key={t} delay={i * 30}>
                <div className="flex h-full flex-col bg-navy-deep p-6">
                  <span className="font-mono text-[0.65rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-on-navy">{t}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Specifying a Wellhead Control Panel?"
        lead="Send us your valve schedule, control media and shutdown philosophy â€” our engineers will take it from there."
      />
    </>
  );
}
