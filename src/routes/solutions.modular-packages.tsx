import { createFileRoute } from "@tanstack/react-router";

import modularSkid from "@/assets/modular-skid.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ImageSlider } from "@/components/site/image-slider";

export const Route = createFileRoute("/solutions/modular-packages")({
  head: () => ({
    meta: [
      { title: "Modular Skid Packages — Wellsite Packages & Pressure Reduction Stations" },
      {
        name: "description",
        content:
          "Modular wellsite packages for oil, gas and injection wells, plus pressure reduction stations, N2 generator systems, lube oil systems and dry gas seal panels.",
      },
      { property: "og:title", content: "Modular Wellsite Packages — VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "Integrated skid-based units containing the wellsite equipment required between the X-mas tree and the main flow line.",
      },
      { property: "og:url", content: "/solutions/modular-packages" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/solutions/modular-packages" }],
  }),
  component: ModularPage,
});

const scope = [
  {
    title: "Modular Wellsite Packages",
    body: "Integrated skid-based units containing all wellsite equipment and components required between the X-mas tree and the main flow line. Depending on customer requirements this could include choke valve, HIPPS system, flowline and associated instruments, chemical injection system, wellhead control panels, PLC/SCADA systems, communication systems, sampling units, fire & gas control system and solar power system.",
  },
  {
    title: "Pressure Reduction Stations",
    body: "Modular packages used to reduce pressure in multiple stages, designed, assembled and fully tested for a wide range of pipeline applications. The system comprises piping, pressure-reducing valves, local control panel, instruments, tubing and filtration integrated in a single skid.",
  },
  {
    title: "N2 Generator Systems",
    body: "Nitrogen generator systems using innovative and highly efficient nitrogen membranes that require 10–40% less compressed air than other systems available in the market. A purity of 99% or more can be achieved with membrane technology, in a skid-mounted or containerized installation — lightweight, portable, completely piped and wired, offered as a turn-key solution.",
  },
  {
    title: "Lube Oil Systems",
    body: "Custom designed and engineered to meet the lubrication needs of turbines, compressors and oil engines, complying with API 614, API 611, API 610 and API 618 standards and the standards of the manufacturer.",
  },
  {
    title: "Dry Gas Seal Panels",
    body: "Dry gas seals are an integral part of modern centrifugal compressors. The dry gas seal panel supplies sealing gas to the seal as a sealing and working fluid for the running gap. It is designed and engineered in line with API 692 and assembled and tested according to inputs from the compressor OEMs.",
  },
  {
    title: "Chemical Injection & Wellhead Control",
    body: "Chemical injection packages and wellhead control panels can be integrated into the modular package, alongside bespoke engineered solutions.",
  },
];

const build = ["Engineer", "Fabricate", "Assemble", "Test", "Commission"];

function ModularPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Modular Packages"
        lead="Fully integrated, plug-and-play modular process and utility packages that minimize onsite construction and accelerate project delivery."
        image={modularSkid}
        imageAlt="Large modular skid package ready for shipment"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Solutions", to: "/solutions" },
          { label: "Modular Packages" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Scope" title="What a modular package can include" />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {scope.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="h-full bg-background p-8">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="How We Build" title="Engineer → Fabricate → Assemble → Test → Commission" />
            <ol className="mt-10 space-y-4">
              {build.map((b, i) => (
                <li key={b} className="flex items-center gap-5 border-b border-border pb-4">
                  <span className="font-mono text-[0.7rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold">{b}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80}>
            <ImageSlider
              images={[
                { src: manufacturing, alt: "Skid frames being fabricated inside the Jebel Ali workshop" },
                { src: modularSkid, alt: "Large modular skid package" },
                { src: "/client-media/products/dry-gas-seal/dry-gas-seal-system.jpg", alt: "Dry Gas Seal System Panel" }
              ]}
              aspectRatio="aspect-4/3"
            />
          </Reveal>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Planning a Modular Wellsite Package?"
        lead="Talk to our engineering team about integrating your wellsite scope onto a single skid."
      />
    </>
  );
}
