import { createFileRoute } from "@tanstack/react-router";
import { useState, lazy, Suspense } from "react";
import { X, Eye } from "lucide-react";

const PdfViewer = lazy(() => import('@/components/PdfViewer'));

import heroFacility from "@/assets/hero-facility.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
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
      { title: "About Veetech Automation FZE â€” Four Decades in the Energy Sector" },
      {
        name: "description",
        content:
          "Veetech Automation FZE, formerly Versatech Automation FZE, has over four decades of energy-sector experience, a COE Middle East presence from 2009 and 2000+ projects delivered.",
      },
      { property: "og:title", content: "About Veetech Automation FZE" },
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
    title: "Rebranded as Veetech Automation FZE",
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
    body: "Veetech Automation takes pride in ethical business conduct in all aspects of its operations.",
  },
];

function AboutPage() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow=""
        title="Engineering dependable control systems for critical energy operations"
        lead="Veetech Automation FZE designs, manufactures, tests and supports wellhead control, chemical injection and modular automation packages from our facility in the UAE."
        image={heroFacility}
        imageAlt="Veetech industrial fabrication facility"
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
                Veetech Automation FZE has proven expertise over four decades of experience in
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
                Veetech Automation FZE offers capabilities in industrial control automation and packaged
                solutions to the energy industry. A proven track record of 2000+ projects is a
                testimony to the company's success.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="relative h-full min-h-[300px]">
            <img
              src="/client-media/about/about-banner.jpg"
              alt="Veetech Automation FZE Company Overview"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </Reveal>
        </div>
      </section>



      <section className="border-y border-border section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading eyebrow="Our History" title="From Versatech to Veetech" />
          </Reveal>
          
          <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <Reveal className="relative h-full min-h-[300px] lg:min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
               <img 
                 src="/client-media/about/factory_building.jpg" 
                 alt="Veetech History" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />
            </Reveal>

            {/* Right Timeline Column */}
            <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 h-full">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.marker} delay={i * 60}>
                  <div className="h-full bg-background p-8 hover:bg-accent/5 transition-colors">
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
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Quality & Certifications"
              title="Strong systems, superior standards"
              lead="Veetech Automation FZE has established strong systems and processes to maintain superior standards in quality management systems, environmental management, health and occupational safety, among others."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <div 
                key={c.title} 
                className="group relative bg-background p-8 cursor-pointer hover:bg-accent/5 transition-colors overflow-hidden"
                onClick={() => setActiveCert(c.link)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                  <div className="size-10 rounded-full bg-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-navy-deep transition-all duration-300 transform group-hover:scale-110">
                    <Eye className="size-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {activeCert && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-navy-deep/90 backdrop-blur-sm animate-in fade-in duration-300 print:hidden"
              onClick={() => setActiveCert(null)}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
                  e.preventDefault();
                  alert("Screenshots and printing are disabled for security reasons.");
                }
              }}
              tabIndex={0}
              ref={(el) => el?.focus()}
            >
              <div 
                className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col bg-surface rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-border"
                onClick={(e) => e.stopPropagation()}
                style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
              >
                <div className="flex items-center justify-between p-4 border-b border-border bg-background relative z-20">
                  <h3 className="font-display font-semibold text-lg">Certificate Viewer</h3>
                  <button 
                    onClick={() => setActiveCert(null)}
                    className="size-10 flex items-center justify-center rounded-full bg-surface text-foreground hover:bg-accent hover:text-navy-deep transition-colors"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                
                <div className="flex-1 w-full h-full bg-muted/20 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
                  {/* Watermark Overlay for anti-screenshot */}
                  <div className="absolute inset-0 z-10 pointer-events-none flex flex-wrap items-center justify-center overflow-hidden opacity-[0.03] select-none">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <span key={i} className="text-3xl font-bold text-navy-deep -rotate-45 p-6 whitespace-nowrap">VEETECH CONFIDENTIAL</span>
                    ))}
                  </div>

                  {/* Secure Viewer (Pointer events disabled to prevent long press save on mobile) */}
                  <div className="relative z-0 max-w-full max-h-full overflow-auto pointer-events-none flex items-center justify-center">
                    {activeCert.toLowerCase().endsWith(".pdf") ? (
                      <Suspense fallback={<div className="animate-pulse flex space-x-4"><div className="h-4 w-48 bg-slate-300 rounded"></div></div>}>
                        <PdfViewer url={activeCert} />
                      </Suspense>
                    ) : (
                      <img 
                        src={activeCert} 
                        alt="Certificate" 
                        className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-sm"
                        draggable="false"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
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
