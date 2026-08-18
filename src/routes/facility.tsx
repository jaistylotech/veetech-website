import { createFileRoute } from "@tanstack/react-router";

import jebelAli from "@/assets/jebel-ali.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import testingImg from "@/assets/testing.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading, Stat } from "@/components/site/primitives";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Facility — 95,000 sq. ft. Facility in Jebel Ali Free Zone, Dubai" },
      {
        name: "description",
        content:
          "A 95,000 sq. ft. manufacturing, assembly and testing facility in Jebel Ali Free Zone, Dubai, with fabrication, climate-controlled assembly bays and in-house testing.",
      },
      { property: "og:title", content: "Facility — VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "Purpose-built facility in Jebel Ali Free Zone supporting engineering, fabrication, assembly and testing under one roof.",
      },
      { property: "og:url", content: "/facility" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/facility" }],
  }),
  component: FacilityPage,
});

const areas = [
  { title: "Engineering Office", body: "In-house design and detailed engineering for hydraulic, pneumatic, electrical and control systems.", image: engineeringImg, alt: "Engineering office with design workstations" },
  { title: "Fabrication Shop", body: "Structural fabrication of skid frames, supports and enclosures, with welding and surface preparation.", image: manufacturing, alt: "Fabrication shop with skid frames under construction" },
  { title: "Assembly & Testing Bays", body: "Climate-controlled assembly and testing areas where packages are fully built up and function-tested before despatch.", image: testingImg, alt: "Climate-controlled assembly and testing bay" },
];

function FacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Facility"
        title="A Purpose-Built Facility in Jebel Ali Free Zone"
        lead="Engineering, fabrication, assembly and testing under one roof in Dubai — giving us direct control over quality, schedule and cost."
        image={jebelAli}
        imageAlt="VeeTech manufacturing facility in Jebel Ali Free Zone, Dubai"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Facility" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="95,000 sq.ft" label="Facility area" />
            <Stat value="40+" label="Years of experience" />
            <Stat value="1000+" label="Projects delivered" />
            <Stat value="2009" label="Established in UAE" />
          </div>

          <div className="mt-20 grid gap-12">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="m-0">
                    <img
                      src={a.image}
                      alt={a.alt}
                      className="aspect-16/10 w-full object-cover"
                      loading="lazy"
                      width={1600}
                      height={1008}
                    />
                  </figure>
                  <div>
                    <SectionHeading eyebrow={`0${i + 1}`} title={a.title} />
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Visit Our Facility"
        lead="Arrange a walkthrough of our Jebel Ali engineering, assembly and testing operation."
      />
    </>
  );
}
