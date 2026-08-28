import { createFileRoute } from "@tanstack/react-router";

import heroFacility from "@/assets/hero-facility.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import jebelAli from "@/assets/jebel-ali.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import {
  Counter,
  CtaSection,
  PageHero,
  Reveal,
  SectionHeading,
  Stat,
} from "@/components/site/primitives";
import { CERTIFICATIONS, MARKETS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VeeTech Automation FZE — Four Decades in the Energy Sector" },
      {
        name: "description",
        content:
          "VeeTech Automation FZE, formerly Versatech Automation FZE, has over four decades of energy-sector experience, a COE Middle East presence from 2009 and 2000+ projects delivered.",
      },
      { property: "og:title", content: "About VeeTech Automation FZE" },
      {
        property: "og:description",
        content:
          "Over four decades of experience in industrial control automation and packaged solutions, from Jebel Ali Free Zone, Dubai.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  {
    marker: "40+ Years",
    title: "Experience in the energy sector",
    body: "Over four decades of experience handling complex projects, right from concept to successful implementation.",
  },
  {
    marker: "2009",
    title: "UAE presence established",
    body: "Presence in the UAE since 2009, focusing on the Middle East, African and Asian markets.",
  },
  {
    marker: "2021",
    title: "Rebranded as VeeTech Automation FZE",
    body: "Versatech Automation FZE was rebranded as Veetech Automation FZE.",
  },
  {
    marker: "Today",
    title: "A leading solution provider",
    body: "With the vast knowledge of its people, world-class manufacturing and quality systems, and a track record of successful projects, the company has emerged as a leading solution provider in the energy industry.",
  },
];

const values = [
  { title: "Responsive", body: "Being responsive to customer needs is a core value of the company." },
  { title: "Flexible", body: "Flexibility in engineering and delivery to suit project requirements." },
  {
    title: "Customer-focused",
    body: "Focus on the customer's needs has helped the company become prominent in the energy sector.",
  },
  {
    title: "Ethical conduct",
    body: "VeeTech Automation takes pride in ethical business conduct in all aspects of its operations.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VeeTech"
        title="Engineering dependable control systems for critical energy operations"
        lead="VeeTech Automation FZE designs, manufactures, tests and supports wellhead control, chemical injection and modular automation packages from our facility in the UAE."
        image={heroFacility}
        imageAlt="VeeTech industrial fabrication facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About Us" }
        ]}
      />

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Company Overview" title="Specialized and reliable solutions for the industry" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                VeeTech Automation FZE has proven expertise over four decades of experience in
                delivering complex projects, right from concept to successful implementation. Located
                in Jebel Ali Free Zone, Dubai, UAE, the company offers specialized and reliable
                solutions for the industry.
              </p>
              <p>
                Armed with a team of experienced professionals and a world-class manufacturing
                facility, the company has carved a niche in the market. Being responsive, flexible
                and focused on customer needs are the core values of the company, and have helped it
                become prominent in the energy sector.
              </p>
              <p>
                VeeTech Automation FZE offers capabilities in industrial control automation and packaged
                solutions to the energy industry. A proven track record of 2000+ projects is a
                testimony to the company's success.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="relative h-full min-h-[300px]">
            <img
              src={manufacturing}
              alt="Interior of the VeeTech fabrication workshop with steel skid frames"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </Reveal>
        </div>
      </section>

      <section id="value-creation" className="border-t border-border bg-surface section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Superior Value Creation"
              title="Best-in-class solutions for complex assignments"
              lead="VeeTech Automation's extensive knowledge and decades of expertise combined with core values enable the company to provide best-in-class solutions to its clients in complex and challenging assignments."
            />
            <div className="mt-8 text-base leading-relaxed text-muted-foreground">
              <p>
                The highly talented engineers at VeeTech offer innovative solutions meeting the
                specific needs of customers. As a proficient equipment manufacturer, VeeTech
                Automation supports and extends its value-added services to ensure reliable and
                long-lasting service of the products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
             <div className="grid grid-cols-2 gap-6">
              <div className="hairline-card p-6">
                <h4 className="font-display font-semibold">Engineering</h4>
                <p className="mt-2 text-sm text-muted-foreground">Innovative solutions meeting specific customer needs.</p>
              </div>
              <div className="hairline-card p-6">
                <h4 className="font-display font-semibold">Manufacturing</h4>
                <p className="mt-2 text-sm text-muted-foreground">Proficient equipment manufacturing ensuring reliability.</p>
              </div>
              <div className="hairline-card p-6">
                <h4 className="font-display font-semibold">Quality</h4>
                <p className="mt-2 text-sm text-muted-foreground">Decades of expertise and strict adherence to core values.</p>
              </div>
              <div className="hairline-card p-6">
                <h4 className="font-display font-semibold">Support</h4>
                <p className="mt-2 text-sm text-muted-foreground">Value-added services for long-lasting product lifecycle.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Our History" title="From Versatech to VeeTech" />
          </Reveal>
          <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.marker} delay={i * 60}>
                <div className="h-full bg-background p-8">
                  <div className="flex items-center gap-3">
                    <span className="block size-2 bg-accent" aria-hidden="true" />
                    <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent uppercase">
                      {t.marker}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative h-full min-h-[300px]">
            <img
              src={jebelAli}
              alt="Aerial view of the Jebel Ali Free Zone industrial area in Dubai"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Manufacturing"
              title="A world-class facility in Jebel Ali Free Zone"
              lead="The facility is equipped with modern technology for manufacturing hydraulic and pneumatic control panels, large HPUs, multi-well control panels, chemical injection systems and large skid-mounted packages."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="hairline-card p-6">
                <div className="font-display text-2xl font-semibold">95,000+ sq. ft.</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fabrication area, with arrangements in place for capacity augmentation as needed.
                </p>
              </div>
              <div className="hairline-card p-6">
                <div className="font-display text-2xl font-semibold">30,000+ sq. ft.</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fully climate-controlled assembly and testing facility.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Quality & Certifications"
              title="Strong systems, superior standards"
              lead="VeeTech Automation FZE has established strong systems and processes to maintain superior standards in quality management systems, environmental management, health and occupational safety, among others."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="bg-background p-8">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Global Presence"
              title="Clients across the Middle East, Asia, Africa and Europe"
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-accent/70 pl-4">
                  <h3 className="font-display text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-2">
              {MARKETS.map((m) => (
                <li
                  key={m}
                  className="border border-border px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-graphite"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection image={ctaPlant} />
    </>
  );
}
