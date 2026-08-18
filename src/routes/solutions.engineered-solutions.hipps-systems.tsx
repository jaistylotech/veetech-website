import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/hipps-systems")({
  head: () => ({
    meta: [
      { title: "HIPPS Systems — VeeTech Automation FZE" },
      {
        name: "description",
        content: "HIPPS is a safety system engineered to prevent overpressure in pipelines by rapidly isolating the source using high-integrity instrumentation and shutdown valves.",
      },
    ],
  }),
  component: HIPPSSystemsPage,
});

const systemDetails = [
  "Hydraulic Power Unit (HPU)",
  "Logic solver (SIL-rated PLC) to process signals and execute shutdown logic",
  "Pressure sensing elements (redundant transmitters) for continuous monitoring of process conditions",
  "Final elements (fast-acting shutdown valves) to isolate the source of overpressure",
  "Hydraulic or pneumatic actuator for reliable valve operation",
  "Partial stroke testing system for online verification of valve functionality",
  "Bypass and isolation valves for maintenance and testing",
  "Control and instrumentation panels for system operation, diagnostics and communication"
];

const engineeringCapabilities = [
  "Designed to meet functional safety requirements (SIL 2 / SIL 3)",
  "Provides an independent protection layer for overpressure scenarios",
  "Ensures rapid and reliable isolation of upstream sources",
  "Incorporates redundancy (e.g., voting logic) to enhance system availability",
  "Allows periodic testing without interrupting process operation",
  "High-pressure gas pipelines and transmission systems",
  "Offshore platforms and subsea systems",
  "Gas processing and compression facilities",
  "Upstream production and wellhead systems"
];

function HIPPSSystemsPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/hipps-systems").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="HIPPS Systems"
        lead="HIPPS is a safety system engineered to prevent overpressure in pipelines by rapidly isolating the source using high-integrity instrumentation and shutdown valves."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "HIPPS Systems" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="High Integrity Pressure Protection"
              lead="High Integrity Pressure Protection System (HIPPS) is a safety-critical, integrated system designed to protect downstream equipment from overpressure in pipelines by isolating the source through rapid and reliable shut-off in upstream and midstream facilities."
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
                title="Engineered for Ultimate Safety"
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
                   VeeTech Automation's HIPPS are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every safety-critical system is engineered and tested to meet international functional safety standards (SIL 2/3) to ensure complete reliability when protecting critical infrastructure.
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
        lead="Contact us to discuss customized HIPPS solutions for your specific operational requirements."
      />
    </>
  );
}
