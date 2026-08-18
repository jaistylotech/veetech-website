import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import heroFacility from "@/assets/hero-facility.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import chemicalSkid from "@/assets/chemical-skid.jpg";
import wellheadPanel from "@/assets/wellhead-panel.jpg";
import modularSkid from "@/assets/modular-skid.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import hpu from "@/assets/hpu.jpg";
import fieldService from "@/assets/field-service.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

import {
  ArrowLink,
  Btn,
  Counter,
  CtaSection,
  Eyebrow,
  Reveal,
  SectionHeading,
  Stat,
} from "@/components/site/primitives";
import { ProcessTrack } from "@/components/site/process-track";
import { CERTIFICATIONS, MARKETS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VeeTech Automation FZE — Industrial Control Automation, Dubai UAE" },
      {
        name: "description",
        content:
          "VeeTech Automation FZE engineers chemical injection systems, wellhead control systems and modular skid packages for the energy sector, from Jebel Ali Free Zone, Dubai.",
      },
      { property: "og:title", content: "VeeTech Automation FZE — Engineering Control. Powering Energy." },
      {
        property: "og:description",
        content:
          "Industrial control automation and packaged solutions for oil & gas: design, engineering, manufacturing, testing, commissioning and after-market support.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const solutionCards = [
  {
    title: "Chemical Injection Packages",
    to: "/solutions/chemical-injection-packages",
    image: "/client-media/products/cis/chemical-injection-skid.jpg",
    alt: "Chemical injection skid with stainless steel tank, dosing pumps and instrumentation",
    body: "Customized and integrated systems used to control the dosing of chemicals across different applications, safeguarding pipelines and reservoirs from corrosion, wax, foam, scale and hydrates.",
    specs: ["Single & multi-point injection", "IRCD", "PLC/RTU & SCADA", "Solar-powered skids"],
  },
  {
    title: "Wellhead Control Systems",
    to: "/solutions/wellhead-control-systems",
    image: "/client-media/products/wellhead/wellhead-control-panel.jpg",
    alt: "Stainless steel hydraulic wellhead control panel with pressure gauges and tubing manifold",
    body: "Pneumatic, hydraulic and electric valve controls for sequential valve operation, manual override, emergency and safety shutdown — including multi-well modular panels.",
    specs: ["Single & multi-slot WHCP", "ESD systems", "HIPPS / IPF", "Hydraulic power units"],
  },
  {
    title: "Modular Packages",
    to: "/solutions/modular-packages",
    image: "/client-media/products/dry-gas-seal/dry-gas-seal-system.jpg",
    alt: "Large modular gas wellsite skid package with structural steel frame and piping",
    body: "Integrated skid-based wellsite packages containing the equipment and systems required between the X-mas tree and the main flow line.",
    specs: ["Pressure reduction stations", "N2 generator systems", "Lube oil systems", "Dry gas seal panels"],
  },
  {
    title: "Engineered Solutions",
    to: "/solutions/engineered-solutions",
    image: engineeringImg,
    alt: "Engineers reviewing 3D piping CAD models and technical drawings",
    body: "Decades of experience, deep field knowledge and the right resources to develop bespoke engineered solutions for upstream energy-sector markets.",
    specs: ["Application study", "Detailed engineering", "Fabrication", "Integrated testing"],
  },
];

function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {/* HERO */}
      <section className="group relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden surface-dark mt-20 md:min-h-[calc(100svh-6rem)] md:mt-24">
        <video
          ref={videoRef}
          src="/factory-demo.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover opacity-100"
        />
        <button 
          onClick={() => setIsMuted((m) => !m)}
          className="absolute right-4 top-24 z-20 flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-navy-deep md:right-8 md:top-32 opacity-50 md:opacity-0 md:group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-navy-deep via-navy-deep/80 to-transparent opacity-70" />
        <div
          className="absolute inset-0 -z-10 tech-grid opacity-0 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent)]"
          aria-hidden="true"
        />

        <div className="container-vt w-full pt-36 pb-14 md:pt-44 md:pb-20">
          <Reveal>
            <Eyebrow tone="dark">Industrial Control Automation · Dubai, UAE</Eyebrow>
            <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,6.2vw,5rem)] leading-[1.02] font-semibold text-on-navy">
              Engineering Control.
              <br />
              Powering Energy.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-on-navy-muted md:text-lg">
              VeeTech Automation delivers engineered industrial control and packaged solutions for
              demanding energy-sector applications — from design and manufacturing to testing,
              commissioning and after-market support.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn to="/solutions" variant="accent">
                Explore Our Solutions
              </Btn>
              <Btn to="/contact" variant="outlineDark">
                Talk to Our Engineers
              </Btn>
            </div>
          </Reveal>
        </div>


      </section>

      {/* INTRODUCTION */}
      <section className="section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative h-full min-h-[300px]">
            <img
              src={manufacturing}
              alt="Fabrication workshop with overhead crane and steel skid frames under assembly"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Who We Are"
              eyebrowClassName="text-[0.85rem] md:text-[0.95rem] font-bold"
              title="Engineering Expertise Built Over Four Decades"
              lead="VeeTech Automation FZE (formerly Versatech Automation FZE) has proven expertise and over four decades of experience in handling complex projects, right from concept to successful implementation."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Located in Jebel Ali Free Zone, Dubai, UAE, the company offers specialized and reliable
              solutions for the industry. Armed with a team of experienced professionals and a
              world-class manufacturing facility, its capabilities in industrial control automation
              and packaged solutions are unrivalled in the region.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-3">
              <Stat value={<Counter value={40} suffix="+" />} label="Years of experience" />
              <Stat value={<Counter value={1000} suffix="+" />} label="Projects" />
              <Stat 
                value={
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="text-xl font-medium tracking-tight text-navy/70 md:text-2xl">Since</span>
                    <span>2009</span>
                  </div>
                } 
                label="UAE presence" 
              />
            </div>

            <div className="mt-10">
              <Btn to="/about" variant="solid">
                Discover VeeTech
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="From Concept to Commissioning"
              lead="Leading-edge services in design, engineering, manufacturing, testing, commissioning and after-market support of chemical injection systems, wellhead control systems, modular skid packages and bespoke engineered solutions."
            />
          </Reveal>
          <Reveal delay={80}>
            <ProcessTrack />
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Products & Solutions"
              title="Solutions for Critical Energy Operations"
              lead="The entire range of chemical injection systems, wellhead control systems, modular skid packages and customized engineered solutions."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {solutionCards.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  to={s.to}
                  className="group grid items-stretch gap-0 border border-border transition-colors hover:border-accent/60 lg:grid-cols-[1.05fr_1fr]"
                >
                  <div className={`relative overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="aspect-16/10 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      width={1600}
                      height={1000}
                    />
                    <span className="absolute top-5 left-5 bg-navy-deep/85 px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.2em] text-on-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-12">
                    <h3 className="font-display text-[clamp(1.35rem,2.4vw,2rem)] font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.body}
                    </p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
                      {s.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-start gap-2 font-mono text-[0.7rem] tracking-wide text-graphite"
                        >
                          <span className="mt-1.5 block size-1 shrink-0 bg-accent" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <span className="link-arrow mt-8">
                      Explore Solution
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ENGINEERED SOLUTION */}
      <section className="relative isolate overflow-hidden surface-dark">
        <img
          src={hpu}
          alt="Hydraulic power unit skid with reservoir, pumps and control cabinet in a testing bay"
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
          loading="lazy"
          width={1600}
          height={1008}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-transparent" />
        <div className="container-vt section-y">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="dark">Engineered Solutions</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-semibold text-on-navy">
              Built Around Your Operational Requirements
            </h2>
            <p className="mt-6 text-base leading-relaxed text-on-navy-muted md:text-lg">
              Systems are designed, engineered, assembled and tested according to international
              standards and the requirements of the customer. Decades of experience, intense
              knowledge of the field and the availability of the right resources make VeeTech a
              preferred partner across upstream energy-sector markets.
            </p>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-hairline pt-8">
              {[
                ["Design basis", "Customer specification & process conditions"],
                ["Control media", "Pneumatic · Hydraulic · Electric"],
                ["Integration", "Skid-mounted or containerized"],
                ["Verification", "Assembled & tested before despatch"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-accent uppercase">
                    {k}
                  </dt>
                  <dd className="mt-2 text-sm text-on-navy-muted">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Btn to="/solutions/engineered-solutions" variant="accent">
                Explore Engineered Solutions
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACILITY */}
      <section className="section-y">
        <div className="container-vt grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Facility"
              title="Manufacturing Capability at Scale"
              lead="VeeTech Automation operates from a state-of-the-art manufacturing facility and office in the world's largest free zone — Jebel Ali Free Zone, Dubai, UAE."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              The facility is equipped with modern technology for manufacturing hydraulic and
              pneumatic control panels, large HPUs, multi-well control panels, chemical injection
              systems and large skid-mounted packages.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="hairline-card p-6">
                <div className="font-display text-2xl font-semibold">
                  <Counter value={95000} suffix="+" />
                </div>
                <div className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                  sq. ft. fabrication facility
                </div>
              </div>
              <div className="hairline-card p-6">
                <div className="font-display text-2xl font-semibold">
                  <Counter value={30000} suffix="+" />
                </div>
                <div className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                  sq. ft. climate-controlled assembly & testing
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Btn to="/facility" variant="solid">
                Explore Our Facility
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={80} className="grid grid-cols-2 gap-4">
            <img
              src={manufacturing}
              alt="Steel fabrication bay with overhead crane inside the Jebel Ali facility"
              className="col-span-2 aspect-16/9 w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
            <img
              src={hpu}
              alt="Hydraulic power unit assembled in the testing bay"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
            <img
              src={wellheadPanel}
              alt="Wellhead control panel built at the VeeTech facility"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
              width={1600}
              height={1104}
            />
          </Reveal>
        </div>
      </section>

      {/* AFTER-MARKET */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="After-Market Services"
                title="Engineering Support Beyond Delivery"
                lead="Extensive field service along with a dedicated after-market team ensures comprehensive support for onsite installation, commissioning, start-up and maintenance of equipment supplied worldwide."
              />
              <img
                src={fieldService}
                alt="Field service engineers in PPE inspecting a hydraulic control panel at a wellsite"
                className="mt-10 aspect-16/10 w-full object-cover"
                loading="lazy"
                width={1600}
                height={1008}
              />
            </Reveal>

            <Reveal delay={80}>
              <ol className="border-t border-border">
                {SERVICES.map((s, i) => (
                  <li key={s.title} className="group border-b border-border">
                    <div className="flex items-baseline gap-5 py-4 transition-colors group-hover:bg-background">
                      <span className="font-mono text-[0.65rem] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base font-semibold md:text-lg">
                        {s.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-9">
                <Btn to="/services" variant="solid">
                  Explore After-Market Services
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="section-y">
        <div className="container-vt">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading eyebrow="Case Studies" title="Recent Projects" />
            </Reveal>
            <Reveal delay={100}>
              <Btn to="/projects" variant="outlineDark">
                View All Projects
              </Btn>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "ADNOC ONSHORE", title: "SPECTO", img: "/client-media/projects/adnoc/16-x-slot-whcp-adnoc-onshore.jpg" },
              { client: "ADNOC", title: "HAIL AND GASHA", img: "/client-media/projects/hail-and-gasha-cis/dsc-6103.jpg" },
              { client: "TOTAL ENERGIES", title: "AGUP-1", img: "/client-media/projects/total-energies/whatsapp-image-2026-02-03-at-6.34.22-pm.jpeg" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="group relative block overflow-hidden bg-surface">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t border-border p-6">
                    <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-widest text-accent">
                      {p.client}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="relative isolate overflow-hidden surface-dark">
        <div className="absolute inset-0 -z-10 tech-grid opacity-40" aria-hidden="true" />
        <div className="container-vt section-y">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Global Presence"
              title="Supporting Energy Operations Across Global Markets"
              lead="VeeTech Automation FZE's clientele includes reputed names in the energy sector across the Middle East, Asia, Africa, the CIS region and Europe."
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <Reveal>
              <WorldMap />
            </Reveal>
            <Reveal delay={80}>
              <ul className="flex flex-wrap gap-2">
                {MARKETS.map((m) => (
                  <li
                    key={m}
                    className="border border-hairline px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-on-navy-muted transition-colors hover:border-accent/60 hover:text-on-navy"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm text-on-navy-muted">
                Head office and manufacturing facility: Jebel Ali Free Zone, Dubai, UAE.
              </p>
              <div className="mt-8">
                <ArrowLink to="/about">Read the company story</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Quality & Compliance"
              title="Built Around Quality, Safety & Compliance"
              lead="VeeTech Automation FZE has established strong systems and processes to maintain superior standards in quality management, environmental management, health and occupational safety, and takes pride in ethical business conduct across all aspects of its operations."
            />
          </Reveal>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <div className="h-full bg-background p-8 transition-colors hover:bg-surface">
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-accent uppercase">
                    Certification
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Quality", "Health & Safety", "Environmental Responsibility", "Continuous Improvement"].map(
              (v) => (
                <div key={v} className="border-l-2 border-accent/70 py-2 pl-4 text-sm font-medium">
                  {v}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaSection image={ctaPlant} />
    </>
  );
}

/* Stylised world map focused on UAE → Middle East → Asia → Africa */
function WorldMap() {
  const nodes = [
    { x: 57.5, y: 47, label: "UAE", primary: true },
    { x: 54.5, y: 45.5, label: "Middle East" },
    { x: 68, y: 52, label: "Asia" },
    { x: 74, y: 57, label: "South East Asia" },
    { x: 50, y: 63, label: "Africa" },
    { x: 48, y: 33, label: "Europe" },
    { x: 62, y: 36, label: "CIS" },
  ];
  const hub = nodes[0]!;

  return (
    <div className="relative aspect-16/9 w-full border border-hairline bg-[oklch(0.22_0.05_252)]">
      <div className="absolute inset-0 tech-grid opacity-50" aria-hidden="true" />
      <svg viewBox="0 0 100 56" className="absolute inset-0 size-full" role="img" aria-label="Map of global markets served by VeeTech Automation, centred on the UAE">
        {nodes.slice(1).map((n) => (
          <line
            key={n.label}
            x1={hub.x}
            y1={hub.y * 0.56}
            x2={n.x}
            y2={n.y * 0.56}
            stroke="var(--accent)"
            strokeWidth="0.18"
            strokeOpacity="0.55"
            strokeDasharray="1.2 1"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y * 0.56}
              r={n.primary ? 1.1 : 0.65}
              fill="var(--accent)"
              opacity={n.primary ? 1 : 0.8}
            />
            {n.primary ? (
              <circle
                cx={n.x}
                cy={n.y * 0.56}
                r="2.6"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.15"
                opacity="0.6"
              />
            ) : null}
            <text
              x={n.x + 1.8}
              y={n.y * 0.56 + 0.7}
              fontSize="1.5"
              fill="oklch(0.86 0.02 250)"
              fontFamily="var(--font-mono)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[0.6rem] tracking-[0.18em] text-on-navy-muted uppercase">
        UAE → Middle East → Asia → Africa → Global
      </span>
    </div>
  );
}
