import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Users, Award, Wrench } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/refurbishments-recertification",
)({
  head: () => ({
    meta: [
      { title: "Refurbishments & Recertification - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "The refurbishment and recertification program helps in extending the life of the product while meeting operational and safety requirements.",
      },
    ],
  }),
  component: RefurbishmentsPage,
});

const CONTENT_BLOCKS = [
  {
    title: "Refurbishment and Recertification Program",
    content: "The refurbishment and recertification program helps in extending the life of the product while meeting the operational and safety requirements of the customers, thus helping customers to gain maximum returns from their capital investments.",
    icon: BadgeCheck,
  },
  {
    title: "Team of Experts",
    content: "With a team of experts on board, Veetech Automation specializes in engineering and project management, highly efficient in hand holding the entire project right from planning, detailed design, engineering, fabrication to installation / commissioning of the system.",
    icon: Users,
  },
  {
    title: "Superior Quality",
    content: "Veetech Automation is focused on completing the projects within the stipulated budget and timeframes while not compromising on superior quality which the company is known for.",
    icon: Award,
  },
  {
    title: "Refurbishing and Recertifying Service",
    content: "Veetech Automation renders the refurbishing and recertifying service either at its own facility or at customer sites adding to the convenience of the customers.",
    icon: Wrench,
  },
] as const;

function RefurbishmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Refurbishments & Recertification"
        lead="Extending the life of your products while meeting operational and safety requirements."
        image="/client-media/superior-value-creation/sub-pages/refurbishment-hero.jpg"
        imageAlt="Refurbishments Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Refurbishments & Recertification" },
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
                      src="/client-media/superior-value-creation/sub-pages/refurbishment-1.jpg"
                      alt="Refurbishment in progress"
                      className="w-full max-h-[400px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
                
                <Reveal delay={250}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 bg-white flex items-center justify-center">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/refurbishment-2.jpg"
                      alt="Refurbished skid equipment"
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
        title="Ready to Extend Equipment Life?"
        lead="Contact our expert team today to discuss your refurbishment and recertification needs."
      />
    </>
  );
}

