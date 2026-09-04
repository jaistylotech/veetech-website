import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/metering-skids")({
  head: () => ({
    meta: [
      { title: "Metering Skids â€” Veetech Automation FZE" },
      {
        name: "description",
        content: "Condensate Metering skid is a high-accuracy, redundant measurement package engineered to quantify stabilized condensate flow reliably under single-phase conditions for fiscal metering and operational control.",
      },
    ],
  }),
  component: MeteringSkidsPage,
});

const systemDetails = [
  "Meter runs (often dual 100% or 2 Ã— 110%) equipped with high-accuracy Coriolis flow meters for direct mass measurement",
  "Pressure & Temperature transmitters to Monitor Process parameters",
  "Flow computers to calculate standardized flow, totalization, and diagnostics in compliance with industry standards (e.g., API MPMS)",
  "Inlet filtration (basket filters/strainers) to protect meters and ensure measurement integrity",
  "Piping configuration (often Z-type or parallel streams) to allow continuous operation and meter proving/checking",
  "Sampling system (manual or automatic) for product quality verification",
  "Control and instrumentation panels for data acquisition, communication (Modbus/SCADA), and audit logging"
];

const engineeringCapabilities = [
  "Designed for single-phase liquid hydrocarbons, ensuring operation above bubble point to avoid flashing",
  "Handles light hydrocarbons with potential gas breakout, incorporating venting and safeguards against two-phase flow",
  "Achieves high accuracy (â‰ˆ Â±0.15%) and repeatability, suitable for fiscal metering systems",
  "Supports redundancy and verification through parallel meter runs (duty + check stream)",
  "Integrates with facility systems for real-time monitoring, reporting, and fiscal metering compliance"
];

function MeteringSkidsPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/metering-skids").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="Metering Skids"
        lead="Condensate Metering skid is a high-accuracy, redundant measurement package engineered to quantify stabilized condensate flow reliably under single-phase conditions for fiscal metering and operational control."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "Metering Skids" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Accurate Measurement and Process Monitoring"
              lead="Condensate metering skid is an integrated fiscal metering system designed to accurately measure the flow and quality of stabilized condensate for fiscal metering or process monitoring in upstream and midstream facilities."
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
                eyebrow="Engineering & Customization"
                title="Engineered for Precision and Reliability"
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
                   Veetech Automation's metering skids are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every system is engineered and tested to meet international standards (including API MPMS) to ensure fiscal metering compliance, measurement integrity, and reliable integration with facility systems.
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
        lead="Contact us to discuss customized metering solutions for your specific operational requirements."
      />
    </>
  );
}
