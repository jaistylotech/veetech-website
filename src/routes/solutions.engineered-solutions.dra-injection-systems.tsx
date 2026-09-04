import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/engineered-solutions/dra-injection-systems")({
  head: () => ({
    meta: [
      { title: "DRA Injection Systems â€” Veetech Automation FZE" },
      {
        name: "description",
        content: "A DRA injection system is a chemical injection package designed to inject drag-reducing additives into pipelines to improve flow efficiency.",
      },
    ],
  }),
  component: DRAInjectionSystemsPage,
});

const systemDetails = [
  "Storage tank or container system for handling of DRA chemicals",
  "Metering pumps for controlled injection into the pipeline",
  "Flow measurement and control devices to regulate dosing rate",
  "Heating system (if required) to maintain suitable fluid properties",
  "Control panel for operation, monitoring, and system integration"
];

const engineeringCapabilities = [
  "Reduces frictional pressure losses in pipelines",
  "Enables increased throughput or reduced pumping energy",
  "Supports operational flexibility in pipeline performance",
  "Crude oil and refined product pipelines",
  "Long-distance transmission systems",
  "Pumping stations and terminals",
  "Pipeline capacity enhancement projects",
  "Offshore and onshore export systems"
];

function DRAInjectionSystemsPage() {
  const relatedSolutions = ENGINEERED_SOLUTIONS.filter((s) => s.slug !== "/solutions/engineered-solutions/dra-injection-systems").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="DRA Injection Systems"
        lead="A DRA injection system is a chemical injection package designed to inject drag-reducing additives into pipelines to improve flow efficiency."
        image={engineeringImg}
        imageAlt="Engineering facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
          { label: "DRA Injection Systems" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Reduce Frictional Losses & Improve Flow"
              lead="A Drag Reducing Agent (DRA) injection system is an injection package designed to introduce polymer-based additives into hydrocarbon pipelines to reduce frictional losses and improve flow efficiency."
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
                title="Engineered for Pipeline Performance"
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
                   Veetech Automation's DRA systems are subjected to rigorous testing in a climate-controlled assembly and testing facility before dispatch. Every system is engineered and tested to meet international standards to ensure reliable operation, accurate dosing, and long-term durability in demanding environments.
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
        lead="Contact us to discuss customized DRA injection solutions for your specific operational requirements."
      />
    </>
  );
}
