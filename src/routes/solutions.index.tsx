import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import chemicalSkid from "@/assets/chemical-skid.jpg";
import wellheadPanel from "@/assets/wellhead-panel.jpg";
import modularSkid from "@/assets/modular-skid.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import offshore from "@/assets/offshore.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Products & Solutions â€” Chemical Injection, Wellhead Control & Skids" },
      {
        name: "description",
        content:
          "Chemical injection packages, wellhead control panels and HPUs, modular wellsite packages and engineered solutions for the energy sector, built in Dubai, UAE.",
      },
      { property: "og:title", content: "Solutions Engineered for the Energy Sector" },
      {
        property: "og:description",
        content:
          "The full Veetech Automation range: chemical injection, wellhead control systems, modular skid packages and bespoke engineered solutions.",
      },
      { property: "og:url", content: "/solutions" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    to: "/solutions/chemical-injection-packages",
    title: "Chemical Injection Packages",
    image: "/client-media/products/cis/chemical-injection-skid.jpg",
    alt: "Chemical injection skid with tank, dosing pumps and instrumentation",
    overview:
      "A chemical injection skid is a customized and integrated solution used to control the dosing of chemicals used for different applications. Its key function is safeguarding process pipelines and reservoirs from corrosion, wax formation, foam, scales, hydrates and similar issues.",
    applications: ["Corrosion inhibitors", "Methanol injection", "Scale inhibitors", "Biocide injection", "Wax inhibitors", "Demulsifiers"],
    capabilities: [
      "Single point injection",
      "Multi-point injection with multi-head pumps",
      "Multi-point injection with IRCD",
      "Remote flow control with PLC/RTU & SCADA",
    ],
  },
  {
    to: "/solutions/wellhead-control-systems",
    title: "Wellhead Control Panels, Valve Control Systems & HPUs",
    image: "/client-media/products/wellhead/dsc-7917.jpg",
    alt: "Stainless steel hydraulic wellhead control panel",
    overview:
      "A typical wellhead control panel incorporates pneumatic, hydraulic and/or electric valve controls for sequential valve operation, manual override, emergency and safety shutdown. Multi-well control panels are single well modules set together in a single panel to control multiple wells.",
    applications: [
      "Christmas tree valve control (SCSSV, SSV, WV)",
      "Emergency shutdown of wells",
      "Valve automation & control (Choke, IPF, HIPPS, ESD)",
      "HPUs for hydraulic valves",
    ],
    capabilities: [
      "Single & multi-slot wellhead control panels",
      "RTU/PLC based panels",
      "Stand-alone solar powered panels",
      "HIPPS systems / IPF valve control panels",
    ],
  },
  {
    to: "/solutions/modular-packages",
    title: "Modular Packages",
    image: "/client-media/products/dry-gas-seal/dry-gas-seal-system.jpg",
    alt: "Modular wellsite skid package with structural steel frame and piping",
    overview:
      "A modular wellsite package is an integrated skid-based unit containing all wellsite equipment and components required between the X-mas tree and the main flow line, configured to the customer's requirements.",
    applications: ["Oil wells", "Gas wells", "Injection wells", "Pipeline applications"],
    capabilities: [
      "Pressure reduction stations",
      "N2 generator systems",
      "Lube oil systems",
      "Dry gas seal panels",
    ],
  },
  {
    to: "/solutions/engineered-solutions",
    title: "Engineered Solutions",
    image: engineeringImg,
    alt: "Engineers reviewing 3D piping models and technical drawings",
    overview:
      "Decades of experience, intense knowledge of the field and the availability of the right resources make Veetech the predominant choice for upstream energy-sector markets requiring customized engineered solutions.",
    applications: ["Upstream energy-sector applications", "Non-standard control requirements", "Retrofit & upgrade scopes"],
    capabilities: [
      "Design to customer specification",
      "Detailed engineering",
      "Manufacturing & assembly",
      "Testing & commissioning",
    ],
  },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Solutions"
        title="Solutions Engineered for the Energy Sector"
        lead="The entire range of chemical injection systems, wellhead control systems, modular skid packages and customized engineered solutions â€” designed, engineered, manufactured and tested to international standards."
        image={offshore}
        imageAlt="Offshore oil and gas platform at sunset"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Products & Solutions" }
        ]}
      />

      <div className="section-y">
        <div className="container-vt space-y-20 md:space-y-28">
          {solutions.map((s, i) => (
            <Reveal as="section" key={s.title}>
              <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="aspect-4/3 w-full object-cover rounded-2xl shadow-sm"
                    loading="lazy"
                    width={1600}
                    height={1104}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <SectionHeading eyebrow="Solution" title={s.title} lead={s.overview} />
                  <div className="mt-9 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                        Applications
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {s.applications.map((a) => (
                          <li key={a} className="flex gap-2.5">
                            <span className="mt-2 block size-1 shrink-0 bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                        Key capabilities
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {s.capabilities.map((a) => (
                          <li key={a} className="flex gap-2.5">
                            <span className="mt-2 block size-1 shrink-0 bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to={s.to} className="link-arrow group mt-9">
                    View full details
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaSection image={ctaPlant} />
    </>
  );
}
