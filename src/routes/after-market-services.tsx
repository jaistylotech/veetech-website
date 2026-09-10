import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, Wrench, ShieldCheck, Activity, RefreshCw } from "lucide-react";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";
import fieldService from "@/assets/field-service.jpg";
import testing from "@/assets/testing.jpg";

export const Route = createFileRoute("/after-market-services")({
  head: () => ({
    meta: [
      { title: "After Market Services - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Comprehensive support for onsite installation, commissioning, start-up, and maintenance of equipment supplied worldwide.",
      },
    ],
  }),
  component: AfterMarketServicesPage,
});

const TABS_DATA = [
  {
    id: "installation",
    title: "Installation & Commissioning",
    icon: Settings,
    image: "/client-media/after-market/installation.jpg",
    mainText: "Veetech Automation has the in-house capabilities to provide its valued customers with all the necessary services related to onsite installation, pre-commissioning, and commissioning activities for the entire range of products and solution packages.",
    highlightText: "Veetech Automation's dedicated team is highly proficient and has all the necessary skills and expertise to manage all the project activities at the site competently and at the same time working in a safe and efficient manner.",
    bgNumber: "01",
  },
  {
    id: "spares",
    title: "Spare Parts Management",
    icon: Wrench,
    image: "/client-media/after-market/spare-parts.jpg",
    mainText: "Veetech Automation specializes in supporting all the customers in every part of the world by providing the required spares at competitive prices and with minimum lead time possible.",
    highlightText: "Spare parts are highly critical for the necessary maintenance and safe operation of all equipment. The company also stocks some special spares for easy availability for its customers. Customized spare parts management solutions can be offered on request.",
    bgNumber: "02",
  },
  {
    id: "preventive",
    title: "Preventive Maintenance",
    icon: ShieldCheck,
    image: "/client-media/after-market/preventive-maintenance.jpg",
    mainText: "Planned maintenance programs are essential to keep safety-critical control systems available and functioning strictly within specification.",
    highlightText: "Our preventive maintenance services minimize downtime and extend the lifespan of your mission-critical assets through systematic inspections and timely interventions.",
    bgNumber: "03",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting & Field Repairing",
    icon: Activity,
    image: "/client-media/after-market/troubleshooting.jpg",
    mainText: "Veetech Automation provides rapid troubleshooting and repair services for hydraulic, pneumatic, and electrical control systems directly at the client site.",
    highlightText: "Our field engineers are equipped with the expertise and tools necessary to diagnose complex issues quickly, ensuring swift restoration of your operations.",
    bgNumber: "04",
  },
  {
    id: "refurbishment",
    title: "Refurbishment & Recertification",
    icon: RefreshCw,
    image: "/client-media/after-market/refurbishment.jpg",
    mainText: "We offer complete refurbishment of existing panels and skids, including control upgrades to modern PLC/RTU and SCADA systems.",
    highlightText: "Revitalize your legacy equipment with our recertification programs, ensuring compliance with current industry standards while maximizing return on investment.",
    bgNumber: "05",
  },
];

function AfterMarketServicesPage() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);

  const currentTabData = TABS_DATA.find((t) => t.id === activeTab) || TABS_DATA[0];

  return (
    <>
      <PageHero
        eyebrow="After Market Services"
        title="Delivering Operational Excellence"
        lead="Dedicated support for installation, commissioning, and lifecycle maintenance worldwide."
        image="/client-media/after-market/hero.jpg"
        imageAlt="After Market Services Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "After Market Services" },
        ]}
      />

      {/* Intro Section */}
      <section className="section-y bg-white relative overflow-hidden">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8">
                  <span className="text-navy">After Market</span>{" "}
                  <span className="text-accent">Services</span>
                </h2>
                
                <div className="prose max-w-none text-slate-600 leading-relaxed text-lg mb-10">
                  <p className="mb-6">
                    Veetech Automation's extensive field service along with a dedicated after-market team ensures comprehensive support for onsite installation, commissioning, start-up, and maintenance of the equipment supplied worldwide.
                  </p>
                  <p>
                    Veetech Automation is a one-stop solution provider for commissioning, troubleshooting & repair, refurbishment, and preventive maintenance services for its loyal customers.
                  </p>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors group"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal delay={150}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                  <img
                    src="/client-media/after-market/intro.jpg"
                    alt="Technician working on electrical panel"
                    className="w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent mix-blend-overlay"></div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="section-y bg-slate-50 border-t border-border/50">
        <div className="container-vt">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-bold text-navy uppercase tracking-wide">
                Explore Our Services
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
            </div>
          </Reveal>

          {/* Interactive Component Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-border/40 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left: Tab Menu */}
            <div className="w-full lg:w-1/3 bg-slate-100/50 border-b lg:border-b-0 lg:border-r border-border/50 p-4 lg:p-8 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 snap-x hide-scrollbar">
              {TABS_DATA.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 text-left p-4 rounded-xl transition-all duration-300 snap-center min-w-[280px] lg:min-w-0 flex-shrink-0 ${
                      isActive 
                        ? "bg-white shadow-md border-l-4 border-l-accent" 
                        : "hover:bg-slate-200/50 text-slate-500 border-l-4 border-l-transparent"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-accent/10 text-accent' : 'bg-slate-200 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold uppercase tracking-wide text-[0.85rem] ${isActive ? 'text-navy' : 'text-slate-500'}`}>
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Tab Content with Dynamic Image Background */}
            <div className="w-full lg:w-2/3 relative flex items-center bg-navy overflow-hidden">
              
              {/* Dynamic Image Background */}
              <div 
                key={`img-${activeTab}`}
                className="absolute inset-0 z-0 animate-in fade-in duration-700"
              >
                <img 
                  src={currentTabData.image} 
                  alt={currentTabData.title}
                  className="w-full h-full object-cover opacity-45 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px] opacity-10 z-0"></div>

              {/* Content Wrapper */}
              <div 
                key={activeTab} // Forces re-render animation when tab changes
                className="relative z-10 w-full p-8 lg:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="mb-8 max-w-2xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl shadow-lg mb-6">
                    <currentTabData.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
                    {currentTabData.title}
                  </h3>
                  <p className="text-base md:text-[1.05rem] text-slate-300 leading-relaxed">
                    {currentTabData.mainText}
                  </p>
                </div>

                {/* Overlapping Highlight Box */}
                <div className="mt-10 lg:ml-auto lg:-mr-8 max-w-xl bg-white text-navy p-6 lg:p-8 rounded-2xl shadow-2xl relative overflow-hidden group border border-border/50">
                  <div className="relative z-10 flex gap-4 items-start">
                    <div className="w-1 h-full absolute left-0 top-0 bg-accent rounded-full"></div>
                    <p className="text-[0.95rem] md:text-base leading-relaxed text-slate-700 pl-4 font-medium italic">
                      "{currentTabData.highlightText}"
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Ready to partner with us?"
        lead="Contact our after-market team for comprehensive support and service."
      />
    </>
  );
}

