import { createFileRoute } from "@tanstack/react-router";

import offshore from "@/assets/offshore.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served â€” Upstream Oil & Gas, Petrochemical, Power & Water" },
      {
        name: "description",
        content:
          "Veetech Automation serves upstream oil and gas, offshore, petrochemical, power generation, water and industrial process markets across the UAE and wider region.",
      },
      { property: "og:title", content: "Industries Served â€” Veetech Automation FZE" },
      {
        property: "og:description",
        content:
          "Control systems and skid packages engineered for the energy sector: onshore and offshore upstream, petrochemical, power and water.",
      },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { title: "Upstream Oil & Gas", body: "Wellhead control, chemical injection and modular wellsite packages for producing and injection wells." },
  { title: "Offshore", body: "Topside umbilical termination units, hydraulic power units and valve control systems for offshore platforms." },
  { title: "Petrochemical & Refining", body: "Dry gas seal panels, lube oil systems and pressure reduction stations for rotating and process equipment." },
  { title: "Power Generation", body: "Lube oil systems and control packages engineered to API standards for turbines and compressors." },
  { title: "Gas Transmission & Distribution", body: "Pressure reduction stations, odorization and metering-related control packages for pipeline networks." },
  { title: "Water & Industrial Process", body: "Dosing and injection systems, N2 generation and utility skids for industrial process plants." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Delivering excellence across the energy value chain"
        lead="Our custom-engineered packages and control systems support critical operations in upstream, midstream, and downstream sectors worldwide."
        image={offshore}
        imageAlt="Offshore oil platform and industrial facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Industries" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Markets" title="Where our equipment operates" />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {industries.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="h-full bg-background p-8">
                  <span className="font-mono text-[0.68rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Talk to Us About Your Sector"
        lead="Every application has its own standards, conditions and constraints. Ours is engineered around yours."
      />
    </>
  );
}
