import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero, Reveal } from "@/components/site/primitives";
import { SUPERIOR_VALUE_CREATION_SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/superior-value-creation/")({
  head: () => ({
    meta: [
      { title: "Superior Value Creation - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation's extensive knowledge and decades of expertise combined with core values enable the company to provide best-in-class solutions to its clients.",
      },
    ],
  }),
  component: SuperiorValueCreationPage,
});

function SuperiorValueCreationPage() {
  return (
    <>
      {/* Standard Site-Wide Hero Banner for Consistency */}
      <PageHero
        eyebrow="Superior Value Creation"
        title="Guaranteeing Peace Of Mind And Maximum Return On Investments"
        lead="Extensive knowledge and decades of expertise combined with core values to provide best-in-class solutions."
        image="/client-media/superior-value-creation/main-hero.jpg"
        imageAlt="Superior Value Creation Background"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation" },
        ]}
      />

      {/* 
        Custom Split Content Section
      */}
      <section className="section-y bg-[#F8F9FA]">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="w-full">
              <Reveal>
                <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-navy sm:text-5xl lg:text-5xl mb-8">
                  Superior Value <span className="text-accent">Creation</span>
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                  <p>
                    Veetech Automation's extensive knowledge and decades of expertise combined with core values enable the company to provide best-in-class solutions to its clients in complex and challenging assignments. 
                  </p>
                  <p>
                    The highly talented engineers at Veetech offer innovative solutions meeting the specific needs of customers.
                  </p>
                  <p>
                    As a proficient equipment manufacturer, Veetech Automation supports and extends its value-added services to ensure reliable and long-lasting service of the products.
                  </p>
                </div>

                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 font-semibold text-navy transition-all hover:text-accent"
                  >
                    <span className="text-lg uppercase tracking-wide">Partner With Us</span>
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Right Image Column */}
            <div className="w-full">
              <Reveal delay={200}>
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6 -z-10" />
                  <img
                    src="/client-media/superior-value-creation/main-hero.jpg"
                    alt="Industrial Plant"
                    className="h-full w-full object-cover object-center transition-transform duration-[20s] ease-linear hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Premium Services Grid
        7 items + 1 anchor item to fill the 4-column grid.
      */}
      <section className="section-y bg-white relative z-20 -mt-8 pb-24">
        <div className="container-vt">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPERIOR_VALUE_CREATION_SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50}>
                <Link to={service.slug} className="group block h-full">
                  <div className="flex h-full flex-col bg-white border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-sm relative overflow-hidden">
                    {/* Top Accent Bar on Hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy group-hover:text-accent transition-colors mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-justify text-[0.95rem] leading-relaxed text-slate-600 mb-8 flex-1">
                        {service.short}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent transition-colors mt-auto">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* The 8th Slot: Checkmark Graphic / Anchor CTA */}
            <Reveal delay={350}>
              <div className="flex h-full flex-col items-center justify-center bg-navy text-white rounded-sm p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 bg-accent/20 bg-cover bg-center mix-blend-luminosity group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col items-center">
                  <CheckCircle2 className="h-16 w-16 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">
                    Quality Guaranteed
                  </h3>
                  <p className="text-sm text-slate-300">
                    Delivering best-in-class solutions for complex assignments.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

