import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import wellheadPanel from "@/assets/wellhead-panel.jpg";
import modularSkid from "@/assets/modular-skid.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions/engineered-solutions")({
  head: () => ({
    meta: [
      { title: "Engineered Solutions — Customized Engineering for Upstream Energy" },
      {
        name: "description",
        content:
          "Bespoke engineered solutions for upstream energy-sector applications: design to customer specification, detailed engineering, manufacturing, testing and commissioning.",
      },
      { property: "og:title", content: "Engineered Solutions — VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "When standard solutions aren't enough: customized engineered systems for demanding upstream energy applications.",
      },
      { property: "og:url", content: "/solutions/engineered-solutions" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/solutions/engineered-solutions" }],
  }),
  component: EngineeredPage,
});

const steps = [
  { title: "Requirement study", body: "The application, process conditions and customer specification define the design basis." },
  { title: "Detailed engineering", body: "Hydraulic, pneumatic and electrical control engineering to international standards." },
  { title: "Manufacturing", body: "Fabrication and assembly at the company's own facility in Jebel Ali Free Zone, Dubai." },
  { title: "Testing & commissioning", body: "Testing before despatch, followed by onsite installation, commissioning and start-up support." },
];

import { Link } from "@tanstack/react-router";
import { ENGINEERED_SOLUTIONS } from "@/lib/site-data";

function EngineeredPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title="When Standard Solutions Aren't Enough."
        lead="Decades of experience, intense knowledge of the field and the availability of the right resources make VeeTech the predominant choice for upstream energy-sector markets."
        image={engineeringImg}
        imageAlt="Engineers reviewing 3D piping models and technical drawings"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Engineered Solutions" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Capability"
              title="Customized systems, engineered around the requirement"
              lead="VeeTech Automation develops customized engineered solutions for demanding upstream energy applications, designed, engineered, assembled and tested according to international standards and the requirements of the customer."
            />
            <ol className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="border-l-2 border-accent/70 pl-5">
                  <span className="font-mono text-[0.65rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-2 gap-4">
            <img src={manufacturing} alt="Fabrication workshop with steel skid frames" className="col-span-2 aspect-16/9 w-full object-cover" loading="lazy" width={1600} height={1008} />
            <img src={wellheadPanel} alt="Control panel assembled at the facility" className="aspect-square w-full object-cover" loading="lazy" width={1600} height={1104} />
            <img src={modularSkid} alt="Skid package ready for despatch" className="aspect-square w-full object-cover" loading="lazy" width={1600} height={1104} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Our Solutions"
              title="Specialized Engineered Systems"
              lead="Explore our range of custom-built engineered solutions designed to meet the rigorous demands of the energy sector."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ENGINEERED_SOLUTIONS.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 50}>
                <Link to={solution.slug} className="group block h-full">
                  <div className="hairline-card flex h-full flex-col p-8 transition-colors group-hover:border-accent/50 group-hover:bg-accent/5">
                    <h3 className="font-display text-xl font-semibold text-on-navy transition-colors group-hover:text-accent">
                      {solution.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {solution.short}
                    </p>
                    <div className="mt-6 font-mono text-[0.68rem] tracking-wide text-accent">
                      Explore Solution &rarr;
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Discuss Your Requirement"
        lead="Bring us the application — our engineering team will develop the solution around it."
      />
    </>
  );
}
