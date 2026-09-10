import { createFileRoute } from "@tanstack/react-router";
import { FileSignature, FileSearch, Wrench, Users, LifeBuoy } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/maintenance-contracts",
)({
  head: () => ({
    meta: [
      { title: "Maintenance Contracts - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation provides comprehensive maintenance contracts for equipment supplied by Veetech or OEMs, including regular checks and emergency assistance.",
      },
    ],
  }),
  component: MaintenanceContractsPage,
});

const CONTENT_BLOCKS = [
  {
    title: "Maintenance Contracts For Equipment",
    content: "Veetech Automation provides maintenance contracts for equipment that are supplied to the clients by Veetech Automation or any other OEMs.",
    icon: FileSignature,
  },
  {
    title: "Regular Checks And Periodic Inspections",
    content: "These contracts are not only limited to regular checks and periodic inspections but also other maintenance services like troubleshooting and parts replacement.",
    icon: FileSearch,
  },
  {
    title: "Preventive Maintenance",
    content: "These services may also include preventive maintenance to ensure that the equipment is in good working condition throughout the contract period.",
    icon: Wrench,
  },
  {
    title: "Professional Team",
    content: "As per the request of clients, Veetech Automation will assign a professional team to resolve any concerns on any possible day.",
    icon: Users,
  },
  {
    title: "Emergency Assistance",
    content: "Clients are given complete emergency assistance when needed.",
    icon: LifeBuoy,
  },
] as const;

function MaintenanceContractsPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Maintenance Contracts"
        lead="Comprehensive maintenance contracts for equipment supplied by Veetech or OEMs."
        image="/client-media/superior-value-creation/sub-pages/maintenance-hero.jpg"
        imageAlt="Maintenance Contracts Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Maintenance Contracts" },
        ]}
      />

      <section className="section-y bg-white relative">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Content (Spans 7 columns) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-col gap-10">
                  {CONTENT_BLOCKS.map((block, index) => {
                    const Icon = block.icon;
                    return (
                      <Reveal key={index} delay={index * 50}>
                        <div className="group flex gap-6 md:gap-8 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <Icon 
                              className="w-8 h-8 text-navy/70 group-hover:text-accent group-hover:scale-110 transition-all duration-300" 
                              strokeWidth={1.5}
                            />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-slate-800 group-hover:text-navy transition-colors mb-4">
                              {block.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                              {block.content}
                            </p>
                          </div>
                        </div>
                        {/* Divider after each item except the last one */}
                        {index !== CONTENT_BLOCKS.length - 1 && (
                          <hr className="border-border/40 mt-10" />
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Images (Spans 5 columns) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32 flex flex-col gap-8">
                <Reveal delay={150}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 bg-white flex items-center justify-center">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/maintenance-1.jpg"
                      alt="Maintenance team member inspecting skid"
                      className="w-full max-h-[400px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
                
                <Reveal delay={250}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 bg-white flex items-center justify-center">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/maintenance-2.jpg"
                      alt="Maintenance equipment skid"
                      className="w-full max-h-[400px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Secure Your Operations"
        lead="Contact us today to discuss a tailored maintenance contract for your facility."
      />
    </>
  );
}

