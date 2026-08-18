import { createFileRoute } from "@tanstack/react-router";

import jebelAli from "@/assets/jebel-ali.jpg";
import { CtaSection, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { ImageSlider } from "@/components/site/image-slider";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Recent Projects — VeeTech Automation" },
      {
        name: "description",
        content: "Explore some of our recent projects delivered to leading operators in the UAE and beyond.",
      },
      { property: "og:title", content: "Recent Projects — VeeTech Automation FZE" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    client: "ADNOC ONSHORE",
    project: "SPECTO",
    description: "Design, engineering, assembly, and testing of multiple Wellhead Control Panels (WHCP), Hydraulic Power Units (HPU), and PLC Panels for the SPECTO project.",
    images: [
      { src: "/client-media/projects/adnoc/16-x-slot-whcp-adnoc-onshore.jpg", alt: "16x Slot WHCP" },
      { src: "/client-media/projects/adnoc/hpu-for-16-x-slot-whcp.jpg", alt: "HPU for 16x Slot WHCP" },
      { src: "/client-media/projects/adnoc/plc-panel.jpg", alt: "PLC Panel" },
      { src: "/client-media/projects/adnoc/dsc-7917.jpg", alt: "Panel Detail" },
      { src: "/client-media/projects/adnoc/whcp-internal-pictures.jpg", alt: "WHCP Internals" },
      { src: "/client-media/projects/adnoc/hpu-internal-pictures.jpg", alt: "HPU Internals" },
    ],
  },
  {
    client: "ADNOC",
    project: "HAIL AND GASHA",
    description: "Delivery of custom-engineered Chemical Injection Skids (CIS) and Monoethylene Glycol (MEG) Injection Packages for the Hail & Ghasha offshore sour gas megaproject.",
    images: [
      { src: "/client-media/projects/hail-and-gasha-cis/dsc-6103.jpg", alt: "CIS Skid" },
      { src: "/client-media/projects/hail-and-gasha-cis/dsc-6149.jpg", alt: "CIS Skid Alternative View" },
      { src: "/client-media/projects/hail-and-gasha-cis/dsc-6226.jpg", alt: "CIS Skid Detail" },
      { src: "/client-media/projects/hail-and-gasha-meg/dsc-8465.jpg", alt: "MEG Injection Skid" },
      { src: "/client-media/projects/hail-and-gasha-meg/dsc-8567.jpg", alt: "MEG Skid Component" },
      { src: "/client-media/projects/hail-and-gasha-meg/dsc-8577.jpg", alt: "MEG Skid Overview" },
    ],
  },
  {
    client: "TOTAL ENERGIES",
    project: "AGUP-1",
    description: "Design and fabrication of critical control packages for TotalEnergies AGUP-1 development.",
    images: [
      { src: "/client-media/projects/total-energies/whatsapp-image-2026-02-03-at-6.34.22-pm.jpeg", alt: "TotalEnergies AGUP-1 Skid 1" },
      { src: "/client-media/projects/total-energies/whatsapp-image-2026-02-03-at-6.34.19-pm-1-.jpeg", alt: "TotalEnergies AGUP-1 Skid 2" },
      { src: "/client-media/projects/total-energies/whatsapp-image-2026-02-03-at-6.34.17-pm.jpeg", alt: "TotalEnergies AGUP-1 Control Panel" },
      { src: "/client-media/projects/total-energies/whatsapp-image-2026-02-03-at-6.34.25-pm.jpeg", alt: "TotalEnergies AGUP-1 Assembly" },
    ],
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Recent Projects"
        lead="Explore a selection of our recently delivered, custom-engineered packages for leading energy operators across the region."
        image={jebelAli}
        imageAlt="VeeTech Facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Recent Projects" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt">
          <div className="grid gap-20">
            {projects.map((project, index) => (
              <Reveal key={project.project} delay={index * 50}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 !== 0 ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]'}`}>
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                        {project.client}
                      </span>
                      <h2 className="font-display text-3xl font-semibold leading-tight text-navy lg:text-4xl">
                        {project.project}
                      </h2>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className={`hairline-card overflow-hidden bg-background p-1 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                     <ImageSlider images={project.images} aspectRatio="aspect-4/3" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Have a project in mind?"
        lead="Contact our engineering team to discuss your bespoke requirements."
      />
    </>
  );
}
