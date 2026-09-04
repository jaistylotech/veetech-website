import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/surge-relief-skids")({
  head: () => ({
    meta: [
      { title: "Surge Relief Skids â€” Veetech Automation FZE" },
      {
        name: "description",
        content: "A surge relief skid is a protection system designed to relieve transient pressure surges and safeguard pipelines and equipment.",
      },
    ],
  }),
  component: SurgeReliefSkidsPage,
});

const systemDetails = [
  "Surge relief valve for pressure relief during transient events",
  "Surge vessel or accumulator to absorb pressure fluctuations",
  "Pressure instrumentation to monitor system conditions",
  "Piping and manifolds for routing relieved fluid to a safe location / Vessels",
  "Isolation valves for maintenance and system control",
  "Surge Pumps to transfer Surge crude from Surge accumulation vessels"
];

const engineeringCapabilities = [
  "Protects pipelines and equipment from transient overpressure and hydraulic shocks",
  "Responds to events such as pump trips, rapid valve closures, or flow changes",
  "Reduces mechanical stress and extends system life",
  "Provides controlled handling of relieved fluid",
  "Liquid pipelines (hydrocarbon and water systems)",
  "Pumping and transfer stations",
  "Terminal and storage facilities",
  "Process plants with dynamic flow conditions",
  "Long-distance transmission systems"
];

function SurgeReliefSkidsPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/surge-relief-skids").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="Surge Relief Skids"
        lead="A surge relief skid is a protection system designed to relieve transient pressure surges and safeguard pipelines and equipment."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "Surge Relief Skids" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Pipeline & Equipment Protection"
              lead="A surge relief skid is a protection system designed to mitigate transient pressure surges in liquid systems by relieving excess pressure and limiting hydraulic disturbances."
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
                title="Engineered for Hydraulic Stability"
              />
              <ul className="mt-10 space-y-4">
                {engineeringCapabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                     <span className="font-mono text-accent">âœ“</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
               <div className="h-full border border-border bg-background p-8">
                 <h3 className="font-display text-xl font-semibold">Testing & Quality</h3>
                 <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                   Veetech Automation's surge relief skids are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every system is engineered and tested to meet international standards to ensure reliable, instantaneous response during critical pressure transient events.
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
        lead="Contact us to discuss customized surge relief solutions for your specific operational requirements."
      />
    </>
  );
}
