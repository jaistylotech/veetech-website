import { createFileRoute } from "@tanstack/react-router";

import ctaPlant from "@/assets/cta-plant.jpg";
import engineeringImg from "@/assets/engineering.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/metering-skids")({
  head: () => ({
    meta: [
      { title: "Metering Skids Ã¢â‚¬â€ Veetech Automation FZE" },
      {
        name: "description",
        content: "Condensate Metering skid is a high-accuracy, redundant measurement package engineered to quantify stabilized condensate flow reliably under single-phase conditions for fiscal metering and operational control.",
      },
    ],
  }),
  component: MeteringSkidsPage,
});

const systemDetails = [
  "Meter runs (often dual 100% or 2 Ãƒâ€” 110%) equipped with high-accuracy Coriolis flow meters for direct mass measurement",
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
  "Achieves high accuracy (Ã¢â€°Ë† Ã‚Â±0.15%) and repeatability, suitable for fiscal metering systems",
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
        lead="High-accuracy fiscal metering and process monitoring systems for upstream and midstream facilities."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "Metering Skids" }
        ]}
      />

      <section className="section-y bg-background">
        <div className="container-vt">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image Column */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
                <img 
                  src="/client-media/products/engineered-solutions/metering.jpg" 
                  alt="Metering Skids" 
                  className="w-full h-auto object-contain p-8 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Text Column */}
            <Reveal delay={80} className="order-1 lg:order-2">
              <div className="flex flex-col">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-deep uppercase tracking-tight">
                  METERING SKIDS
                </h2>
                <div className="mt-6 w-16 h-1 bg-accent rounded-full" />
                <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
                  Condensate metering skid is an integrated fiscal metering system designed to accurately measure the flow and quality of stabilized condensate for fiscal metering or process monitoring in upstream and midstream facilities.
                </p>
                
                <div className="mt-10 flex">
                  <Link to="/contact" className="btn-base btn-solid w-fit !bg-navy hover:!bg-accent hover:!text-navy-deep !text-white text-base font-medium transition-all shadow-lg hover:shadow-xl">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

            <section className="border-t border-border bg-surface section-y relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 rounded-bl-[100px] pointer-events-none" />
        
         <div className="container-vt relative z-10">
            <Reveal>
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2 className="font-display text-3xl font-semibold text-navy-deep uppercase tracking-wide">
                  TECHNICAL DESCRIPTION
                </h2>
                <div className="mt-4 w-12 h-1 bg-accent rounded-full" />
              </div>
            </Reveal>
            
            <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Components Card */}
              <Reveal delay={100}>
                <div className="h-full bg-white rounded-2xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-navy p-6">
                    <h3 className="font-display text-xl font-medium text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="block w-3 h-3 rounded-full bg-accent animate-pulse" />
                      </div>
                      System Components
                    </h3>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-5">
                      {systemDetails.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4 text-[0.95rem] text-muted-foreground leading-relaxed group-hover:text-navy transition-colors">
                          <span className="mt-1 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Capabilities Card */}
              <Reveal delay={200}>
                <div className="h-full bg-white rounded-2xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-navy p-6">
                    <h3 className="font-display text-xl font-medium text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Engineering Capabilities
                    </h3>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-5">
                      {engineeringCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-4 text-[0.95rem] text-muted-foreground leading-relaxed group-hover:text-navy transition-colors">
                          <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
         </div>
      </section>

      <section className="border-t border-border section-y">
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

