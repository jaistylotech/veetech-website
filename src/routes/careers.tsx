import { createFileRoute } from "@tanstack/react-router";

import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers â€” Engineering Roles at Veetech Automation, Dubai" },
      {
        name: "description",
        content:
          "Join a Dubai-based engineering team building wellhead control systems, chemical injection packages and modular skids for the energy sector.",
      },
      { property: "og:title", content: "Careers â€” Veetech Automation FZE" },
      {
        property: "og:description",
        content: "Engineering, fabrication and service careers at our Jebel Ali Free Zone facility.",
      },
      { property: "og:url", content: "/careers" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const values = [
  { title: "Engineering ownership", body: "Engineers stay with a package from design basis through to testing and commissioning." },
  { title: "Hands-on facility", body: "Design and build happen in the same place, so feedback between drawing and shop floor is immediate." },
  { title: "International standards", body: "Work to API, ASME and client specifications on safety-critical energy-sector systems." },
];

const disciplines = [
  "Mechanical / Piping Engineering",
  "Instrumentation & Control Engineering",
  "Electrical Engineering",
  "Project Management",
  "QA / QC Inspection",
  "Fabrication & Welding",
  "Assembly Technicians",
  "Field Service Engineering",
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of energy infrastructure with us"
        lead="Join a team of dedicated engineers, technicians, and professionals delivering mission-critical control systems and automation packages to the world's leading energy companies."
        image={engineeringImg}
        imageAlt="Veetech engineering team collaborating"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Careers" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Working here" title="What the work looks like" />
            <div className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-accent/70 pl-5">
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="hairline-card p-8">
              <h3 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                Disciplines we recruit
              </h3>
              <ul className="mt-6 grid gap-2.5">
                {disciplines.map((d) => (
                  <li key={d} className="flex gap-3 border-b border-border pb-2.5 text-sm">
                    <span className="mt-2 block size-1 shrink-0 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                No open role that matches your profile? Send your CV and a short note about the work
                you want to do to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-accent underline-offset-4 hover:underline">
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Send Us Your CV"
        lead="We review every application from engineers and technicians with energy-sector experience."
      />
    </>
  );
}
