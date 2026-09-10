import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Gauge, Wind } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/equipment-rental",
)({
  head: () => ({
    meta: [
      { title: "Equipment Rental - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation offers mission critical equipment like Flushing equipment, pressure testing equipment, and nitrogen booster units on a rental basis.",
      },
    ],
  }),
  component: EquipmentRentalPage,
});

const EQUIPMENT_LIST = [
  {
    name: "Flushing Equipment",
    icon: Droplets,
  },
  {
    name: "Pressure Testing Equipment",
    icon: Gauge,
  },
  {
    name: "Nitrogen Booster Units",
    icon: Wind,
  },
];

function EquipmentRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Equipment Rental"
        lead="Mission critical equipment for pre-commissioning and commissioning activities."
        image="/client-media/superior-value-creation/sub-pages/equipment-rental-hero.jpg"
        imageAlt="Equipment Rental Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Equipment Rental" },
        ]}
      />

      <section className="section-y bg-white relative">
        <div className="container-vt">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Content & Equipment Cards (Spans 6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-navy mb-8">
                  Mission Critical Equipment
                </h2>
                
                <div className="prose max-w-none mb-12">
                  <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                    Veetech Automation offers mission critical equipment on a rental basis. These are required for pre-commissioning and commissioning related activities.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[1.05rem] mt-4">
                    We also provide quality service and operational support through our team of experts to ensure seamless integration at your site.
                  </p>
                </div>

                {/* Enhanced Feature Extraction */}
                <h3 className="font-display text-lg font-bold text-slate-800 uppercase mb-6">
                  Key Equipment Available
                </h3>
                
                <div className="flex flex-col gap-4">
                  {EQUIPMENT_LIST.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-border/60 hover:bg-white hover:shadow-md hover:border-accent/30 transition-all group"
                      >
                        <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-accent/10 transition-colors">
                          <Icon className="w-6 h-6 text-navy group-hover:text-accent transition-colors" />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-navy transition-colors text-[0.95rem]">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Wide Image Showcase (Spans 6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-50">
                  <div className="absolute inset-0 bg-navy/5 mix-blend-multiply z-10" />
                  <img
                    src="/client-media/superior-value-creation/sub-pages/equipment-rental-1.jpg"
                    alt="Industrial valve and piping equipment"
                    className="w-full h-full min-h-[400px] object-cover transition-transform duration-1000 hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] -z-10 rounded-full opacity-70" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Rent Quality Equipment"
        lead="Get in touch to check availability and book equipment for your next project."
      />
    </>
  );
}

