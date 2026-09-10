import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Box, Maximize } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Manufacturing - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation operates from a world-class manufacturing facility in Jebel Ali Free Zone, Dubai, equipped with modern technology.",
      },
    ],
  }),
  component: InfrastructurePage,
});

// A custom animated number counter component
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic function for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="State-of-the-art Manufacturing Facility"
        lead="Ultra-modern technology in the heart of Jebel Ali Free Zone."
        image="/client-media/infra/hero.jpg"
        imageAlt="Infrastructure Hero Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Infrastructure" },
        ]}
      />

      {/* Main Intro Section (Smaller, Sleeker Texts and Buttons) */}
      <section className="section-y bg-white relative overflow-hidden">
        <div className="container-vt">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Text (Spans 5 cols) */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">
                  <span className="text-navy">World Class</span>{" "}
                  <span className="text-accent">Facility</span>
                </h2>
                
                <div className="prose max-w-none text-slate-600 leading-relaxed text-[0.95rem] md:text-base mb-8">
                  <p className="mb-4">
                    Veetech Automation is proud of its state-of-the-art manufacturing facility and office in the world's largest free zone - Jebel Ali Free Zone, Dubai, UAE.
                  </p>
                  <p>
                    The facility is well-equipped with most-modern technology for manufacturing hydraulic and pneumatic control panels, large HPUs, Multi-well control panels, Chemical Injection systems and large skid mounted packages. It is one of the best manufacturing facilities in the region.
                  </p>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-white bg-navy hover:bg-accent px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-accent/30 group text-sm"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            {/* Right Column: Wide Image Showcase (Spans 7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                  <img
                    src="/client-media/infra/main.jpg"
                    alt="Wide view of manufacturing facility"
                    className="w-full h-auto min-h-[300px] max-h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = manufacturing;
                    }}
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-navy/5 mix-blend-multiply z-10 pointer-events-none" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Sleek Animated Counter Section with Parallax Background */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        
        {/* Background Image (Standard Scrolling) */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('/client-media/infra/bg.jpg')` }}
        >
          {/* Dark Overlay to make text pop */}
          <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
        </div>

        <div className="container-vt relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left text intro */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <Reveal>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Built for Infinite Scale
                </h3>
                <p className="text-slate-300 text-[0.95rem] md:text-base leading-relaxed">
                  Our facility features dedicated, climate-controlled zones for fabrication, assembly, and rigorous testing, ensuring rapid capacity augmentation for projects of any magnitude.
                </p>
              </Reveal>
            </div>

            {/* Right Animated Counters (Grid with items-stretch for equal heights) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              
              {/* Counter 1: Fabrication */}
              <Reveal delay={100} className="h-full">
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-accent text-navy rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tabular-nums tracking-tight">
                    <AnimatedCounter end={95000} suffix="+" />
                  </div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wider mb-3">
                    Sq. Ft. Fabrication
                  </div>
                  <p className="text-slate-300 text-[0.85rem] leading-relaxed">
                    Massive scalable fabrication area ready for immediate capacity augmentation.
                  </p>
                </div>
              </Reveal>

              {/* Counter 2: Storage & Assembly */}
              <Reveal delay={200} className="h-full">
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-accent text-navy rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <Box className="w-5 h-5" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tabular-nums tracking-tight">
                    <AnimatedCounter end={30000} suffix="+" />
                  </div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wider mb-3">
                    Sq. Ft. Storage
                  </div>
                  <p className="text-slate-300 text-[0.85rem] leading-relaxed">
                    Fully climate-controlled precision assembly and testing facility.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Experience our capabilities"
        lead="Visit our world-class facility or partner with us for your next major project."
      />
    </>
  );
}

