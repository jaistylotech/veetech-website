import { createFileRoute } from "@tanstack/react-router";
import { Droplets, AlertTriangle, Hammer } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/flushing",
)({
  head: () => ({
    meta: [
      { title: "Flushing - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Power flushing hydraulic systems to eliminate sludge, varnish, debris, and contaminated or degraded fluid.",
      },
    ],
  }),
  component: FlushingPage,
});

const REASONS = [
  {
    title: "Fluid Degradation",
    content: "Resulting in sludge, varnish, or microbial deposits.",
    icon: Droplets,
  },
  {
    title: "Major Failure",
    content: "Combined with filter overload disperses debris throughout the system.",
    icon: AlertTriangle,
  },
  {
    title: "To Purge Debris",
    content: "Effectively purge 'built-in' debris from the system.",
    icon: Hammer,
  },
];

function FlushingPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Flushing"
        lead="Contamination Control NAS1638 & ISO 4406"
        image="/client-media/superior-value-creation/sub-pages/flushing-hero.jpg"
        imageAlt="Flushing Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Flushing" },
        ]}
      />

      {/* Block 1: Introduction (Text Left, Image Right) */}
      <section className="section-y bg-white">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="prose max-w-none text-slate-600 leading-relaxed text-lg">
                  <p className="mb-6">
                    The main objective of Veetech Automation's power flushing hydraulic system is to eliminate sludge, varnish, debris, and contaminated or degraded fluid from conductor walls, other internal surfaces as well as system's dead spots.
                  </p>
                  <p>
                    Analysis of the flushing fluid is performed regularly during the power flushing operation to determine the point at which the system has been cleaned completely to achieve the optimum level of cleanliness.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal delay={150}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white p-2">
                  <div className="rounded-xl overflow-hidden bg-slate-50">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/flushing-1.jpg"
                      alt="Flushing Workshop"
                      className="w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Block 2: Reasons (Image Left, Cards Right) */}
      <section className="section-y bg-slate-50 border-t border-border/50">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-1">
              <Reveal>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white p-2">
                  <div className="rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/flushing-2.jpg"
                      alt="Flushing Operations"
                      className="w-full max-h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="order-2">
              <Reveal delay={150}>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-navy mb-10">
                  Reasons For Performing A System Flush Includes
                </h3>

                <div className="flex flex-col gap-6">
                  {REASONS.map((reason, idx) => {
                    const Icon = reason.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white p-6 rounded-xl shadow-sm border border-border/60 hover:shadow-md transition-shadow group flex items-start gap-5"
                      >
                        <div className="bg-slate-50 p-3 rounded-lg group-hover:bg-accent/10 transition-colors">
                          <Icon className="w-6 h-6 text-navy group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-bold text-slate-800 uppercase mb-2">
                            {reason.title}
                          </h4>
                          <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                            {reason.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Ensure Optimum Cleanliness"
        lead="Our flushing services eliminate contamination and extend the life of your systems."
      />
    </>
  );
}

