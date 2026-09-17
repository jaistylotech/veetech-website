import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, PlayCircle, Star, Users } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import engineeringImg from "@/assets/engineering.jpg";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Engineering Roles at Veetech Automation, Dubai" },
      {
        name: "description",
        content:
          "Join a Dubai-based engineering team building wellhead control systems, chemical injection packages and modular skids for the energy sector.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Achieving Greater Heights Through Innovation"
        lead="Join a team of dedicated professionals delivering mission-critical control systems to the world's leading energy companies."
        image="/client-media/banners/hero-careers.webp"
        imageAlt="Veetech engineering team collaborating"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Careers" }
        ]}
      />

      {/* Intro Section (Culture & Values) */}
      <section className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white relative overflow-hidden">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Text (Spans 6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 leading-tight">
                  <span className="text-navy">Inclusive & Growth</span>{" "}
                  <span className="text-accent">Oriented</span>
                </h2>
                
                <div className="prose max-w-none text-slate-600 leading-relaxed text-[0.95rem] md:text-base mb-8 space-y-4">
                  <p>
                    Veetech Automation offers a conducive environment for its workforce to deliver their best and grow professionally as well as personally. The company promotes an inclusive culture where each one of the employees is treated as equal and there is no discrimination based on gender, origin, or beliefs.
                  </p>
                  <p>
                    At Veetech Automation, employees are given ample guidance and opportunities to upgrade their knowledge and unleash their full potential. Also, the company encourages its employees to have an active social life and a good work-life balance.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Worker Thumbs Up Image (Spans 6 cols) */}
            <div className="lg:col-span-6 relative">
              <Reveal delay={150}>
                {/* Decorative background shapes */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-[60px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-navy/10 rounded-full blur-[60px] -z-10" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 group">
                  <img
                    src="/client-media/careers/thumbs-up.jpg"
                    alt="Engineer giving thumbs up"
                    className="w-full h-auto object-cover max-h-[500px] transition-all duration-700"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = engineeringImg;
                    }}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-overlay"></div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* "What Veetech thinks?" - Clean Modern Showcase */}
      <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
        <div className="container-vt">
          
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-100 shadow-xl shadow-navy/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Heading & Quote */}
              <div>
                <Reveal>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                    What Veetech Automation <span className="text-accent">thinks?</span>
                  </h2>
                  
                  <div className="relative">
                    {/* Decorative quote mark */}
                    <span className="absolute -top-8 -left-6 text-8xl text-accent/20 font-serif leading-none select-none">"</span>
                    
                    <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed relative z-10">
                      We believe that true innovation stems from empowering our people, providing them with the right tools, and trusting their expertise on the field.
                    </p>
                    
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-1 bg-accent rounded-full"></div>
                      <span className="text-sm font-semibold tracking-wider text-navy uppercase">Our Core Philosophy</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Clean Worker Image */}
              <div>
                <Reveal delay={150}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                    <img
                      src="/client-media/careers/worker-panel.jpg"
                      alt="Engineer working on electrical panel"
                      className="w-full h-auto max-h-[400px] object-cover transition-all duration-700 hover:shadow-inner hover:brightness-110"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = engineeringImg;
                      }}
                    />
                  </div>
                </Reveal>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container-vt">
          
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-navy mb-4">
              Current <span className="text-accent">Openings</span>
            </h2>
            <p className="text-slate-600 text-[0.95rem] md:text-base">
              Explore exciting career opportunities and become a part of our growing engineering and sales teams.
            </p>
          </Reveal>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <Reveal delay={100} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-navy/5 border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-4 leading-snug">
                  Senior Project Engineer – WHCP
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Lead mission-critical Wellhead Control Panel projects from design basis through commissioning.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:text-accent transition-colors mt-auto"
                >
                  More Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={200} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-navy/5 border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-4 leading-snug">
                  Project Engineer CIS
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Manage Chemical Injection Systems projects, ensuring compliance with international API and ASME standards.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:text-accent transition-colors mt-auto"
                >
                  More Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={300} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-navy/5 border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-4 leading-snug">
                  Sales Coordinators
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">
                  Support the commercial team in bidding, client coordination, and business development for packaged solutions.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:text-accent transition-colors mt-auto"
                >
                  More Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <img
          src={ctaPlant}
          alt="Engineering plant"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy/80 mix-blend-multiply" />
        
        <div className="container-vt text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Send Us Your CV
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Don't see a role that fits? We review every application from engineers and technicians with energy-sector experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:careers@veetech.ae"
                className="rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-navy shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
              >
                Email careers@veetech.ae
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

