import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/nitrogen-generator-packages")({
  head: () => ({
    meta: [
      { title: "Nitrogen Generator Packages — VeeTech Automation FZE" },
      {
        name: "description",
        content: "A membrane nitrogen generator package is a compact, non-cyclic gas separation system engineered to reliably produce moderate purity nitrogen from compressed air.",
      },
    ],
  }),
  component: NitrogenGeneratorPackagesPage,
});

const systemDetails = [
  "Feed air filtration system to remove contaminants and protect downstream equipment",
  "Air drying system to ensure suitable moisture levels for reliable operation",
  "Membrane module banks arranged to achieve the required nitrogen capacity through Membrane Separation",
  "Pressure control system to regulate and maintain the required operating conditions",
  "Nitrogen receiver (buffer vessel) to stabilize flow and pressure (where applicable)",
  "Instrumentation for monitoring nitrogen purity and system performance",
  "Flow measurement and control devices for regulating production rate",
  "Control panel for system operation, alarms, and integration with plant systems"
];

const engineeringCapabilities = [
  "Designed for continuous, non-cyclic operation, providing steady nitrogen flow without regeneration or switching sequences",
  "Produces nitrogen by selective permeation, with oxygen, moisture, and trace gases removed as permeate stream",
  "Operates with 95–99% nitrogen purity for industrial applications",
  "Requires high-quality compressed air (clean, dry, oil-free) to maintain membrane integrity and long-term performance",
  "Compact, modular skid design suitable for space-constrained installations (e.g., offshore or packaged units)",
  "Low maintenance due to absence of moving parts within the separation process"
];

function NitrogenGeneratorPackagesPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/nitrogen-generator-packages").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="Nitrogen Generator Packages"
        lead="A membrane nitrogen generator package is a compact, non-cyclic gas separation system engineered to reliably produce moderate purity nitrogen from compressed air for continuous blanketing and utility applications."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "Nitrogen Generator Packages" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Reliable On-Site Nitrogen Production"
              lead="Membrane nitrogen generator package is an integrated system designed to produce nitrogen gas on-site from compressed air for blanketing and utility applications in industrial and oil & gas facilities."
            />
            <div className="mt-8 flex flex-col gap-4">
               <Link to="/contact" className="btn-base btn-accent w-fit hover:brightness-110">
                Discuss Your Requirement
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={80}>
            <div className="hairline-card bg-surface p-8">
              <h3 className="font-display text-xl font-semibold">System & Equipment Details</h3>
              <ul className="mt-6 space-y-4">
                {systemDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
         <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Applications & Capabilities"
                title="Engineered for Continuous Operations"
              />
              <ul className="mt-10 space-y-4">
                {engineeringCapabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                     <span className="font-mono text-accent">✓</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
               <div className="h-full border border-border bg-background p-8">
                 <h3 className="font-display text-xl font-semibold">Testing & Quality</h3>
                 <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                   VeeTech Automation's nitrogen generator packages are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every system is engineered and tested to meet international standards ensuring consistent purity, reliable flow rates, and long-term durability.
                 </p>
               </div>
            </Reveal>
         </div>
      </section>

      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Related" title="Explore Other Engineered Solutions" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedSolutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 50}>
                <Link to={solution.slug} className="group block h-full">
                  <div className="hairline-card flex h-full flex-col p-8 transition-colors group-hover:border-accent/50 group-hover:bg-accent/5">
                    <h3 className="font-display text-lg font-semibold text-on-navy transition-colors group-hover:text-accent">
                      {solution.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {solution.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Talk to Our Engineers"
        lead="Contact us to discuss customized nitrogen generator solutions for your specific operational requirements."
      />
    </>
  );
}
