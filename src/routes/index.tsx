import { createFileRoute, Link } from "@tanstack/react-router";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

import heroFacility from "@/assets/hero-facility.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import chemicalSkid from "@/assets/chemical-skid.jpg";
import wellheadPanel from "@/assets/wellhead-panel.jpg";
import modularSkid from "@/assets/modular-skid.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import whoWeAreImg from "@/assets/veetech_who_we_are.jpg";
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
import { HeroScroller } from "@/components/site/hero-scroller";
import { CERTIFICATIONS, MARKETS, SERVICES } from "@/lib/site-data";
import { ClientMarquee } from "@/components/site/client-marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veetech Automation FZE â€” Industrial Control Automation, Dubai UAE" },
      {
        name: "description",
        content:
          "Veetech Automation FZE engineers chemical injection systems, wellhead control systems and modular skid packages for the energy sector, from Jebel Ali Free Zone, Dubai.",
      },
      { property: "og:title", content: "Veetech Automation FZE â€” Engineering Control. Powering Energy." },
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
    image: "/client-media/products/wellhead/dsc-7917.jpg",
    alt: "Stainless steel hydraulic wellhead control panel with pressure gauges and tubing manifold",
    body: "Pneumatic, hydraulic and electric valve controls for sequential valve operation, manual override, emergency and safety shutdown - including multi-well modular panels.",
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
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.playbackRate = 1.0;
    }
  }, [isMuted]);

  return (
    <>
      {/* HERO */}
      <section className="group relative isolate flex min-h-svh flex-col justify-end overflow-hidden surface-dark">
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

        <div className="container-vt w-full pt-24 pb-6 md:pt-32 md:pb-8 mt-auto">
          <Reveal>
            <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,6.2vw,5rem)] leading-[1.02] font-semibold text-on-navy">
              Engineering Excellence.
              <br />
              Trusted Performance for Energy
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-on-navy-muted md:text-lg">
              Delivering integrated engineered packages, automation and control solutions for the global energy sector.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn to="/contact" variant="accent">
                Talk to Our Experts
              </Btn>
            </div>
          </Reveal>
        </div>
        <HeroScroller />
      </section>

      {/* INTRODUCTION */}
      <section className="section-y">
        <div className="container-vt flex flex-col gap-12 lg:gap-16">
          <Reveal delay={80} className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                eyebrowClassName="text-[0.85rem] md:text-[0.95rem] font-bold"
                title="Engineering Expertise Built Over Four Decades"
                lead="Veetech Automation FZE (formerly Versatech Automation FZE) has proven expertise over four decades of experience in delivering complex projects, right from concept to successful implementation."
              />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Located in Jebel Ali Free Zone, Dubai, UAE, the company offers specialized and reliable
                solutions for the industry. Backed by a team of experienced professionals and a
                world-class manufacturing facility, its capabilities in industrial control automation
                and packaged solutions to the energy industry.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-3 lg:grid-cols-1 border-y border-border py-8 lg:border-y-0 lg:border-l lg:border-border/50 lg:py-4 lg:pl-10">
              <Stat value={<Counter value={40} suffix="+" />} label="Years of experience" />
              <Stat value={<Counter value={2000} suffix="+" />} label="Projects" />
              <Stat 
                value={
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span>2009</span>
                  </div>
                } 
                label="COE Middle East" 
              />
            </div>
          </Reveal>
          
          <Reveal className="w-full">
            <img
              src={whoWeAreImg}
              alt="Veetech Automation Team and Facility"
              className="w-full h-auto aspect-video md:aspect-[21/9] object-cover rounded-2xl shadow-xl"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="From Design to Deployment"
              lead="At Veetech, Engineering excellence drives everything we do. From design and manufacturing to site installation and commissioning, we deliver reliable solutions for the energy sector."
            />
          </Reveal>
          <Reveal delay={80}>
            <ProcessTrack />
          </Reveal>
        </div>
      </section>



      {/* SUPERIOR VALUE CREATION */}
      <section className="relative isolate overflow-hidden section-y border-y border-border/50">
        <div className="absolute inset-0 -z-10">
          <img
            src={fieldService}
            alt="Superior Value Creation Background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-transparent" />
        </div>

        <div className="container-vt relative z-10">
          <Reveal className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative accent glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">SUPERIOR VALUE CREATION</h2>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                VeeTech Automation FZE's (formerly VersaTech Automation FZE) extensive knowledge and decades of expertise combined with core values enable the company to provide best-in-class solutions to its clients in complex and challenging assignments.
              </p>
              <Btn to="/superior-value-creation" variant="solid" className="!bg-navy-deep !text-accent hover:!bg-accent hover:!text-navy-deep transition-colors duration-300 font-medium border-none">
                Read More
              </Btn>
            </div>
            {/* Empty column to allow the background image to show clearly on the right */}
            <div className="hidden lg:block"></div>
          </Reveal>
        </div>
      </section>

      {/* AFTER-MARKET */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-vt">
          <Reveal>
            <SectionHeading
              eyebrow="After-Market Services"
              title="Engineering Support Beyond Delivery"
              lead="Veetech Automation's extensive field service along with a dedicated after-market team ensures comprehensive support for onsite installation, commissioning, start-up, and maintenance of the equipment supplied worldwide."
            />
          </Reveal>
          
          <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="relative h-[450px] overflow-hidden rounded-xl group shadow-md border border-border/50">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end h-full">
                  <h3 className="text-white text-center font-semibold text-lg md:text-[1.15rem] leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                    {s.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Btn to="/after-market-services" variant="solid" className="!bg-navy-deep !text-accent hover:!bg-accent hover:!text-navy-deep transition-colors duration-300 font-medium">
              Explore All Services
            </Btn>
          </Reveal>
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
              lead="Veetech Automation FZE's clientele includes reputed names in the energy sector across the Middle East, Asia, Africa, the CIS region and Europe."
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


      {/* Client Logos Marquee */}
      <ClientMarquee />

      <CtaSection image={ctaPlant} />
    </>
  );
}

/* Stylised world map focused on UAE â†’ Middle East â†’ Asia â†’ Africa */
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

function WorldMap() {
  const nodes = [
    { coordinates: [55.2708, 25.2048] as [number, number], label: "UAE", primary: true, dy: 45, dx: 0 },
    { coordinates: [42.0, 25.0] as [number, number], label: "Middle East", dy: -25, dx: -35 },
    { coordinates: [90.0, 30.0] as [number, number], label: "Asia", dy: -25, dx: 35 },
    { coordinates: [115.0, 0.0] as [number, number], label: "South East Asia", dy: 35, dx: 0 },
    { coordinates: [20.0, 5.0] as [number, number], label: "Africa", dy: 35, dx: 0 },
    { coordinates: [15.0, 50.0] as [number, number], label: "Europe", dy: -35, dx: 0 },
    { coordinates: [65.0, 55.0] as [number, number], label: "CIS", dy: -35, dx: 0 },
  ];
  const hub = nodes[0]!;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-border/50 bg-navy-deep shadow-2xl aspect-square md:aspect-[16/10] xl:aspect-[21/9]">
      <div className="absolute inset-0 tech-grid opacity-20" aria-hidden="true" />
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [60, 30]
        }}
        className="absolute inset-0 size-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(255,255,255,0.1)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Connections */}
        {nodes.slice(1).map((n) => (
          <Line
            key={`line-${n.label}`}
            from={hub.coordinates}
            to={n.coordinates}
            stroke="var(--accent)"
            strokeWidth={4}
            strokeOpacity={0.8}
            strokeDasharray="8 8"
            className="animate-[dash_3s_linear_infinite]"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <Marker key={n.label} coordinates={n.coordinates}>
            {/* Ping animation for primary */}
            {n.primary && (
              <circle r={36} fill="var(--accent)" opacity={0.3} className="animate-ping" />
            )}
            {/* Main Dot */}
            <circle
              r={n.primary ? 12 : 8}
              fill={n.primary ? "var(--accent)" : "rgba(255, 140, 0, 1)"}
              stroke={n.primary ? "rgba(255, 140, 0, 0.3)" : "none"}
              strokeWidth={8}
              className="transition-all duration-300 hover:scale-125 cursor-pointer"
            />
            {/* Label Outline */}
            <text
              textAnchor="middle"
              y={n.dy}
              x={n.dx}
              stroke="rgba(10,20,40,0.95)"
              strokeWidth={8}
              strokeLinejoin="round"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: n.primary ? "24px" : "18px",
                fontWeight: 800,
                letterSpacing: "0.5px"
              }}
            >
              {n.label}
            </text>
            {/* Label Fill */}
            <text
              textAnchor="middle"
              y={n.dy}
              x={n.dx}
              fill={n.primary ? "var(--accent)" : "#ffffff"}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: n.primary ? "24px" : "18px",
                fontWeight: 800,
                letterSpacing: "0.5px"
              }}
            >
              {n.label}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </div>
  );
}

