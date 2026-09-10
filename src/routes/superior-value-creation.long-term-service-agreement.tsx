import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/long-term-service-agreement",
)({
  head: () => ({
    meta: [
      { title: "Long Term Service Agreement (LTSA) - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation's LTSA helps prevent system malfunctioning, increasing reliability through systematic monitoring and regular maintenance.",
      },
    ],
  }),
  component: LTSAPage,
});

const LIST_COLUMN_1 = [
  "Reduction in Operating Expenses",
  "Availability Guarantee",
  "Planned Maintenance Program",
  "Predictive Maintenance",
  "24/7 Emergency Technical Support",
];

const LIST_COLUMN_2 = [
  "Solutions to Emergency Situations",
  "Technical Advice, Support, and Consultations",
  "Spare Parts In-Stock Management",
  "Emergency Spare Parts Management",
];

function LTSAPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Long Term Service Agreement"
        lead="Systematic monitoring and regular maintenance to increase reliability and reduce unplanned repairs."
        image="/client-media/superior-value-creation/sub-pages/ltsa-hero.jpg"
        imageAlt="Long Term Service Agreement Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Long Term Service Agreement" },
        ]}
      />

      <section className="section-y bg-white relative">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Content (Spans 7 columns) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="prose max-w-none text-slate-600 leading-relaxed text-lg mb-12">
                  <p>
                    Veetech Automation's Long Term Service Agreements (LTSA) helps to prevent or eliminate the malfunctioning of the system and to increase its reliability. LTSA includes systematic monitoring, equipment supervision and regular maintenance inspections which translates to reduction in time spent on unplanned repairs. LTSA has proven to be highly beneficial to the customers.
                  </p>
                </div>
                
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-navy mb-8">
                  LTSA Contains
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {/* Column 1 */}
                  <div>
                    {LIST_COLUMN_1.map((item, idx) => (
                      <div key={`col1-${idx}`}>
                        <div className="flex gap-4 items-center py-4 group">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-[0.95rem] text-slate-700 uppercase group-hover:text-navy transition-colors">
                            {item}
                          </span>
                        </div>
                        <hr className="border-border/50" />
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div>
                    {LIST_COLUMN_2.map((item, idx) => (
                      <div key={`col2-${idx}`}>
                        <div className="flex gap-4 items-center py-4 group">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-[0.95rem] text-slate-700 uppercase group-hover:text-navy transition-colors">
                            {item}
                          </span>
                        </div>
                        <hr className="border-border/50" />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Images Overlap Layout (Spans 5 columns) */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <Reveal delay={200}>
                {/* 
                  Overlapping images layout for a premium wow look.
                  The container needs enough height for the absolute positioning. 
                */}
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[500px] xl:h-[600px]">
                  
                  {/* Bottom/Left Image (Larger) */}
                  <div className="absolute bottom-0 left-0 w-4/5 h-[75%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-white flex items-center justify-center group">
                    <img
                      src="/client-media/superior-value-creation/sub-pages/ltsa-1.jpg"
                      alt="LTSA Workshop view"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Top/Right Image (Smaller overlapping) */}
                  <div className="absolute top-0 right-0 w-3/5 h-[55%] rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 bg-white flex items-center justify-center group">
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src="/client-media/superior-value-creation/sub-pages/ltsa-2.jpg"
                      alt="LTSA Equipment close-up"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Decorative Dots Pattern behind */}
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] -z-10 rounded-full opacity-70" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Maximize Your Plant's Reliability"
        lead="Get in touch to establish a Long Term Service Agreement that fits your operational needs."
      />
    </>
  );
}

