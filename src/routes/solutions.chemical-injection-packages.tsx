import { createFileRoute } from "@tanstack/react-router";

import chemicalSkid from "@/assets/chemical-skid.jpg";
import testing from "@/assets/testing.jpg";
import fieldService from "@/assets/field-service.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ImageSlider } from "@/components/site/image-slider";

export const Route = createFileRoute("/solutions/chemical-injection-packages")({
  head: () => ({
    meta: [
      { title: "Chemical Injection Packages — Chemical Injection Systems, Dubai UAE" },
      {
        name: "description",
        content:
          "Customized chemical injection skids for controlled chemical dosing: single and multi-point injection, IRCD, PLC/RTU & SCADA control and solar-powered skids.",
      },
      { property: "og:title", content: "Chemical Injection Packages — VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "Integrated chemical injection skids designed, engineered, assembled and tested to international standards and customer requirements.",
      },
      { property: "og:url", content: "/solutions/chemical-injection-packages" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/solutions/chemical-injection-packages" }],
  }),
  component: ChemicalInjectionPage,
});

const types = [
  "Single point injection",
  "Multi-point injection with multi-head pumps",
  "Multi-point injection with IRCD (Injection Rate Control Device)",
  "Injection of different chemicals using a single skid with compartmental tank",
  "Remote flow control with PLC/RTU & SCADA",
  "Standalone solar-powered chemical injection skids (green skids)",
  "Multi-deck design",
];

const applications = [
  "Corrosion inhibitors",
  "Methanol injection",
  "Scale inhibitors",
  "Biocide injection",
  "Wax inhibitors",
  "Demulsifiers",
  "Glycol",
  "Odorization",
  "Pour point depression",
];

const lifecycle = [
  {
    title: "Engineering approach",
    body: "Systems are designed and engineered around the chemical, the dosing rate and the process conditions, following international standards and the specific requirements of the customer.",
  },
  {
    title: "Customization",
    body: "Configurations range from single point injection to multi-deck skids with compartmental tanks for multiple chemicals, with remote flow control where required.",
  },
  {
    title: "Testing",
    body: "Packages are assembled and tested in the climate-controlled assembly and testing facility before despatch.",
  },
  {
    title: "Commissioning & support",
    body: "Onsite installation, commissioning and start-up support, followed by after-market services including spares, preventive maintenance and field repair.",
  },
];

function ChemicalInjectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Chemical Injection Packages"
        lead="Custom-engineered chemical injection packages for accurate and reliable dosing in critical upstream, midstream, and downstream applications."
        image={chemicalSkid}
        imageAlt="Chemical injection skid package at fabrication facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Chemical Injection Packages" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="What the system does" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The key function of a chemical injection package is to protect the process from
                corrosion, wax formation, foam, scales, hydrates and similar conditions by dosing
                the correct chemical at the correct rate.
              </p>
              <p>
                These systems are designed, engineered, assembled and tested according to
                international standards and the requirements of the customer.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Types of chemical injection skids
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {types.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-border pb-2.5 text-sm">
                    <span className="mt-2 block size-1 shrink-0 bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ImageSlider
              images={[
                { src: "/client-media/products/cis/chemical-injection-skid.jpg", alt: "Chemical injection package front view" },
                { src: "/client-media/products/cis/dsc-6103.jpg", alt: "Chemical injection skid details" },
                { src: "/client-media/products/cis/dsc-8567.jpg", alt: "Chemical injection skid alternative angle" }
              ]}
              aspectRatio="aspect-4/3"
            />
            <div className="mt-8 hairline-card p-8">
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Applications
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {applications.map((a) => (
                  <li
                    key={a}
                    className="border border-border px-3 py-1.5 font-mono text-[0.68rem] text-graphite"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Delivery" title="From engineering to after-market support" />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((l, i) => (
              <Reveal key={l.title} delay={i * 60}>
                <div className="h-full bg-background p-8">
                  <span className="font-mono text-[0.68rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <img
              src={testing}
              alt="Technician performing pressure testing on a control panel in the assembly bay"
              className="aspect-16/10 w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
            <img
              src={fieldService}
              alt="Service engineers commissioning equipment at a wellsite"
              className="aspect-16/10 w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Need a Chemical Injection Package for Your Application?"
        lead="Share your chemicals, dosing rates and process conditions with our engineering team."
      />
    </>
  );
}
