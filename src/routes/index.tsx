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
import { ImageSlider } from "@/components/site/image-slider";
import { CERTIFICATIONS, MARKETS, SERVICES } from "@/lib/site-data";

const HOME_ABOUT_SLIDER_IMAGES = [
  { src: "/client-media/infra/infra-1.webp", alt: "Veetech Automation Facility Main View" },
  { src: "/client-media/infra/infra-2.webp", alt: "Manufacturing Facility Storage Tanks and Chemical Skids" },
  { src: "/client-media/infra/infra-3.webp", alt: "Control Panel Assembly Yard and Skid Systems" },
  { src: "/client-media/infra/infra-4.webp", alt: "Assembly and Testing Area for Industrial Control Packages" },
  { src: "/client-media/infra/infra-5.webp", alt: "State-of-the-Art Manufacturing Facility Jebel Ali Free Zone" },
  { src: "/client-media/infra/infra-6.webp", alt: "Integrated Modular Skid Systems Production Facility" },
];
import { ClientMarquee } from "@/components/site/client-marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veetech Automation FZE — Industrial Control Automation, Dubai UAE" },
      {
        name: "description",
        content:
          "Veetech Automation FZE engineers chemical injection systems, wellhead control systems and modular skid packages for the energy sector, from Jebel Ali Free Zone, Dubai.",
      },
      { property: "og:title", content: "Veetech Automation FZE — Engineering Control. Powering Energy." },
      {
        property: "og:description",
        content:
          "Industrial control automation and packaged solutions for oil & gas: design, engineering, manufacturing, testing, commissioning and after-market support in Dubai, UAE.",
      },
      { property: "og:url", content: "https://www.veetech.ae/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.veetech.ae/client-media/infra/infra-1.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Veetech Automation FZE — Industrial Control Automation, Dubai UAE" },
      { name: "twitter:description", content: "Chemical injection systems, wellhead control systems and modular skid packages engineered in Jebel Ali Free Zone, Dubai." },
      { name: "twitter:image", content: "https://www.veetech.ae/client-media/infra/infra-1.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.veetech.ae/" }],
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
      <section className="group relative isolate flex min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex-col justify-end overflow-hidden surface-dark">
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

        <div className="container-vt w-full pt-12 pb-6 md:pt-16 md:pb-8 mt-auto">
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
                solutions for the Energy Industry. Backed by a team of experienced professionals and a
                world-class manufacturing facility, its capabilities in hydraulic, electric & automation based control systems
                and Skid packaged solutions to the energy industry.
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
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <ImageSlider 
                images={HOME_ABOUT_SLIDER_IMAGES} 
                aspectRatio="aspect-video md:aspect-[2.35/1]" 
              />
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
              title="From Design to Deployment"
              lead="At Veetech, Engineering excellence drives everything we do. From Design and Manufacturing to Site Installation and Commissioning, we deliver reliable solutions for the energy sector."
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
              lead="Veetech Automation's extensive field service along with a dedicated after-market team ensures comprehensive support for onsite installation, commissioning, start-up and maintenance of the equipment supplied worldwide."
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

      {/* OUR STORY */}
      <section className="relative isolate overflow-hidden surface-dark">
        <div className="absolute inset-0 -z-10 tech-grid opacity-40" aria-hidden="true" />
        <div className="container-vt section-y">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Our Story"
              title="Supporting Energy Operations Across Global Markets"
              lead="Veetech Automation FZE's clientele includes reputed names in the energy sector across the Middle East, Asia, Africa, the CIS region and Europe."
            />
          </Reveal>

          <Reveal className="mt-10">
            <WorldMap />
          </Reveal>

          <Reveal delay={80} className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-sm text-on-navy-muted text-center sm:text-left">
              Head office and manufacturing facility: <span className="text-white font-medium">Jebel Ali Free Zone, Dubai, UAE.</span>
            </p>
            <ArrowLink to="/about">Read our story</ArrowLink>
          </Reveal>
        </div>
      </section>


      {/* Client Logos Marquee */}
      <ClientMarquee />

      <CtaSection image={ctaPlant} />
    </>
  );
}

/* Stylised world map focused on UAE, Middle East, Europe, Africa, CIS & Asia with premium radar pin markers */
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

/* Exact 29 countries from the client box image */
const COUNTRY_MARKERS = [
  // Middle East & GCC (9)
  { name: "UAE", coordinates: [54.37, 24.45] as [number, number], primary: true, dy: 14, dx: 22 },
  { name: "Saudi Arabia", coordinates: [44.20, 23.88] as [number, number], dy: 14, dx: -26 },
  { name: "Qatar", coordinates: [51.18, 25.35] as [number, number], dy: 14, dx: -12 },
  { name: "Oman", coordinates: [57.00, 20.50] as [number, number], dy: 14, dx: 14 },
  { name: "Kuwait", coordinates: [47.48, 29.31] as [number, number], dy: -28, dx: -18 },
  { name: "Bahrain", coordinates: [50.55, 26.07] as [number, number], dy: -28, dx: -4 },
  { name: "Iraq", coordinates: [43.68, 33.22] as [number, number], dy: -28, dx: -14 },
  { name: "Kurdistan", coordinates: [44.50, 36.50] as [number, number], dy: -28, dx: 12 },
  { name: "Egypt", coordinates: [30.80, 26.82] as [number, number], dy: 14, dx: 0 },

  // CIS & Central Asia (5)
  { name: "Turkmenistan", coordinates: [59.55, 38.96] as [number, number], dy: 14, dx: 22 },
  { name: "Azerbaijan", coordinates: [47.57, 40.14] as [number, number], dy: -28, dx: 22 },
  { name: "Kazakhstan", coordinates: [66.92, 48.01] as [number, number], dy: -28, dx: 0 },
  { name: "Russia", coordinates: [55.00, 56.00] as [number, number], dy: -28, dx: 0 },
  { name: "India", coordinates: [78.96, 20.59] as [number, number], dy: 14, dx: 0 },

  // Asia & SEA (2)
  { name: "Malaysia", coordinates: [101.97, 4.21] as [number, number], dy: -28, dx: 0 },
  { name: "Singapore", coordinates: [103.81, 1.35] as [number, number], dy: 14, dx: 12 },

  // Europe (5)
  { name: "Greece", coordinates: [21.82, 39.07] as [number, number], dy: 14, dx: 0 },
  { name: "Albania", coordinates: [20.17, 41.15] as [number, number], dy: -28, dx: -22 },
  { name: "Romania", coordinates: [24.96, 45.94] as [number, number], dy: -28, dx: 0 },
  { name: "Spain", coordinates: [-3.70, 40.41] as [number, number], dy: 14, dx: 0 },
  { name: "France", coordinates: [2.21, 46.22] as [number, number], dy: 14, dx: 0 },

  // Africa (8)
  { name: "Algeria", coordinates: [3.05, 28.03] as [number, number], dy: 14, dx: 0 },
  { name: "Libya", coordinates: [17.23, 26.33] as [number, number], dy: 14, dx: 0 },
  { name: "Sudan", coordinates: [30.22, 12.86] as [number, number], dy: 14, dx: 0 },
  { name: "Nigeria", coordinates: [8.67, 9.08] as [number, number], dy: 14, dx: 0 },
  { name: "Ghana", coordinates: [-1.02, 7.94] as [number, number], dy: 14, dx: -18 },
  { name: "Angola", coordinates: [17.87, -11.20] as [number, number], dy: 14, dx: 0 },
  { name: "Uganda", coordinates: [32.29, 1.37] as [number, number], dy: 14, dx: 18 },
  { name: "Mozambique", coordinates: [35.53, -18.66] as [number, number], dy: -28, dx: 0 },
];

function WorldMap() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-[#041638] shadow-2xl aspect-[16/10] md:aspect-[21/9]">
      <style>{`
        @keyframes radarPulse {
          0% {
            r: 3px;
            opacity: 0.95;
            stroke-width: 1.5px;
          }
          60% {
            opacity: 0.35;
          }
          100% {
            r: 18px;
            opacity: 0;
            stroke-width: 0.2px;
          }
        }
        .radar-ring {
          animation: radarPulse 3.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      {/* Tech grid texture & ambient glow */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Legend */}
      <div className="absolute top-4 left-6 z-10 hidden sm:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[0.72rem] text-slate-300 font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <span>29 Active Global Energy Markets</span>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 330,
          center: [48, 14]
        }}
        className="absolute inset-0 size-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#e2e8f0" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Location Markers */}
        {COUNTRY_MARKERS.map((m, idx) => {
          const textWidth = Math.max(m.name.length * 6.2 + 16, 36);
          const rectX = m.dx - textWidth / 2;
          const rectY = m.dy - 13;
          const delayStr = `${(idx * 0.11) % 3.2}s`;

          return (
            <Marker key={m.name} coordinates={m.coordinates}>
              <g className="group cursor-pointer">
                {/* Premium Staggered Radar Pulse Ring */}
                <circle
                  r={3}
                  fill="none"
                  stroke={m.primary ? "#f59e0b" : "#f43f5e"}
                  className="radar-ring origin-center pointer-events-none"
                  style={{ animationDelay: delayStr }}
                />

                {/* Red Pin Icon */}
                <path
                  d="M 0 0 C -3 -5 -7 -9 -7 -14 C -7 -18 -4 -21 0 -21 C 4 -21 7 -18 7 -14 C 7 -9 3 -5 0 0 Z"
                  fill={m.primary ? "#b91c1c" : "#dc2626"}
                  stroke="#ffffff"
                  strokeWidth={1.2}
                />
                <circle cx={0} cy={-14} r={2.8} fill="#ffffff" />

                {/* White Badge Pill */}
                <g>
                  <rect
                    x={rectX}
                    y={rectY}
                    width={textWidth}
                    height={17}
                    rx={8.5}
                    fill="#ffffff"
                    stroke={m.primary ? "#dc2626" : "#e2e8f0"}
                    strokeWidth={m.primary ? 1.5 : 1}
                    className="drop-shadow-md"
                  />
                  <text
                    x={m.dx}
                    y={rectY + 11.5}
                    textAnchor="middle"
                    fill={m.primary ? "#b91c1c" : "#0f172a"}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.2px"
                    }}
                  >
                    {m.name}
                  </text>
                </g>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}

