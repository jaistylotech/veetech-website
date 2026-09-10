import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/pressure-testing",
)({
  head: () => ({
    meta: [
      { title: "Pressure Testing - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Pressure testing activities for the field tubing of wellhead control panel to wellhead valves are carried out at the site by experienced technicians.",
      },
    ],
  }),
  component: PressureTestingPage,
});

function PressureTestingPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Pressure Testing"
        lead="On-site pressure testing activities for field tubing and control panels."
        image="/client-media/superior-value-creation/sub-pages/pressure-testing-hero.jpg"
        imageAlt="Pressure Testing Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Pressure Testing" },
        ]}
      />

      {/* Edge-to-Edge 50/50 Split Screen Layout */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side: Content with soft background */}
          <div className="bg-white flex flex-col justify-center px-8 py-20 lg:px-24 xl:px-32">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-navy mb-8">
                Pressure Testing Operations
              </h2>
              
              <div className="w-16 h-1 bg-accent mb-8"></div>
              
              <div className="prose max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Pressure testing activities for the field tubing of wellhead control panel to wellhead valves are carried out at the site.
                </p>
                <div className="flex items-start gap-4 mt-8 bg-slate-50 p-6 rounded-xl shadow-sm border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed m-0 font-medium text-[0.95rem]">
                    Veetech Automation shall provide pressure testing equipment and experienced technicians for performing these services.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Edge-to-Edge Image */}
          <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden group">
            <Reveal delay={150} className="w-full h-full">
              <img
                src="/client-media/superior-value-creation/sub-pages/pressure-testing-1.jpg"
                alt="Technician performing pressure testing"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </Reveal>
          </div>

        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Verify System Integrity"
        lead="Our experienced technicians ensure your systems are thoroughly tested and compliant."
      />
    </>
  );
}

