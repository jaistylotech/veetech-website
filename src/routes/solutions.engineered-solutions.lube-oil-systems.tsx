import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/lube-oil-systems")({
  head: () => ({
    meta: [
      { title: "Lube Oil Systems — VeeTech Automation FZE" },
      {
        name: "description",
        content: "A lube oil system is an auxiliary system designed to deliver clean, temperature-controlled oil for lubrication for the protection of main rotating equipment.",
      },
    ],
  }),
  component: LubeOilSystemsPage,
});

const systemDetails = [
  "Lube oil reservoir for storage and supply",
  "Main and standby pumps for continuous circulation",
  "Filtration system for removal of contaminants",
  "Oil coolers to maintain operating temperature",
  "Pressure control and relief devices for system protection",
  "Instrumentation for monitoring pressure, temperature, flow, and level",
  "Distribution piping to supply oil to equipment"
];

const engineeringCapabilities = [
  "Provides continuous lubrication and cooling of rotating equipment",
  "Incorporates redundancy for reliable operation",
  "Maintains oil cleanliness and temperature within specified limits",
  "Protects equipment from damage due to inadequate lubrication",
  "Supports stable and efficient equipment performance",
  "Compressors, turbines, and pumps",
  "Power generation facilities",
  "Oil & gas processing plants",
  "Refineries and petrochemical units"
];

function LubeOilSystemsPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/lube-oil-systems").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="Lube Oil Systems"
        lead="A lube oil system is an auxiliary system designed to deliver clean, temperature-controlled oil for lubrication for the protection of main rotating equipment."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "Lube Oil Systems" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Rotating Equipment Protection"
              lead="A lube oil system is an integrated lubrication package designed to supply clean, conditioned oil to rotating equipment for friction reduction, heat removal, and reliable operation."
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
                title="Engineered for Continuous Reliability"
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
                   VeeTech Automation's lube oil systems are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every system is engineered and tested to meet international standards (including API 614 where applicable) to ensure absolute reliability for critical rotating equipment.
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
        lead="Contact us to discuss customized lube oil systems for your specific operational requirements."
      />
    </>
  );
}
