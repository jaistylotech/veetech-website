import { createFileRoute } from "@tanstack/react-router";

import fieldService from "@/assets/field-service.jpg";
import testing from "@/assets/testing.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "After-Market Services — Commissioning, Maintenance & Spares" },
      {
        name: "description",
        content:
          "Installation and commissioning, preventive and corrective maintenance, field repair, spare parts, refurbishment and technical support for control systems and skid packages.",
      },
      { property: "og:title", content: "After-Market Services — VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "Lifecycle support for wellhead control systems, chemical injection packages and modular skids across the UAE and wider region.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Installation & Commissioning", body: "Onsite installation, commissioning and start-up support for control panels, injection skids and modular packages." },
  { title: "Preventive Maintenance", body: "Planned maintenance programmes that keep safety-critical control systems available and within specification." },
  { title: "Corrective Maintenance & Field Repair", body: "Troubleshooting and repair of hydraulic, pneumatic and electrical control systems at site." },
  { title: "Spare Parts Supply", body: "Supply of genuine spares and consumables for supplied packages and third-party equipment." },
  { title: "Refurbishment & Upgrades", body: "Refurbishment of existing panels and skids, including control upgrades to PLC/RTU and SCADA." },
  { title: "Testing & Certification Support", body: "Functional and pressure testing in the climate-controlled test facility, with documentation packages." },
  { title: "Technical Support & Training", body: "Operator and maintenance training, plus ongoing technical support from our Dubai engineering team." },
  { title: "Site Surveys", body: "Assessment of installed systems to define scope for repair, upgrade or replacement." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive lifecycle support for critical assets"
        lead="From installation and commissioning to refurbishments and Long Term Service Agreements (LTSA), we ensure your equipment operates at peak performance."
        image={fieldService}
        imageAlt="Field service engineer inspecting equipment"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Capabilities" title="What we support" />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="h-full bg-background p-8">
                  <span className="font-mono text-[0.68rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={60}>
            <img
              src={testing}
              alt="Functional testing of a control panel before despatch"
              className="mt-12 aspect-21/9 w-full object-cover"
              loading="lazy"
              width={1600}
              height={686}
            />
          </Reveal>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Need Support on Installed Equipment?"
        lead="Our service team covers commissioning, maintenance, repair and spares."
      />
    </>
  );
}
