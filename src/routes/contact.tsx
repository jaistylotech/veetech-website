import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Send, Globe2 } from "lucide-react";

import jebelAli from "@/assets/jebel-ali.jpg";
import diversityTeam from "@/assets/diversity-team.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { COMPANY, REGIONAL_OFFICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Veetech Automation FZE, Jebel Ali Free Zone, Dubai" },
      {
        name: "description",
        content:
          "Contact Veetech Automation FZE in Jebel Ali Free Zone, Dubai for wellhead control systems, chemical injection packages, modular skids and after-market services.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with our engineering team"
        lead="Whether you need a custom engineered package, lifecycle services, or technical support, our team is ready to assist you from our headquarters in the UAE."
        image={jebelAli}
        imageAlt="Veetech headquarters and manufacturing facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Contact Us" }
        ]}
      />

      {/* Main Contact Section (Info + Map) */}
      <section className="section-y bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
        <div className="container-vt relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal>
                <h2 className="font-display text-3xl font-bold text-navy mb-4">
                  We're Here to Help
                </h2>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Have a project in mind or need assistance with your existing control systems? Reach out to us directly through the contact information below.
                </p>

                <div className="space-y-5">
                  <a 
                    href="#"
                    className="group flex items-start gap-5 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 border border-slate-100"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy group-hover:bg-accent group-hover:text-navy transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-1">Headquarters</h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        Jebel Ali Free Zone, Dubai,<br />United Arab Emirates
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 border border-slate-100"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy group-hover:bg-accent group-hover:text-navy transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-1">Email Us</h3>
                      <p className="text-sm font-medium text-slate-500 group-hover:text-navy transition-colors">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${COMPANY.phoneHref}`}
                    className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 border border-slate-100"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy group-hover:bg-accent group-hover:text-navy transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-lg mb-1">Call Us</h3>
                      <p className="text-sm font-medium text-slate-500 group-hover:text-navy transition-colors">
                        {COMPANY.phone}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/versatech-automation-fze/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-navy shadow-sm transition-all hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-md"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: Google Map replacing the form */}
            <div className="lg:col-span-7 h-full">
              <Reveal delay={150} className="h-full">
                <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white bg-slate-100 relative group">
                  <iframe
                    title="Veetech Automation Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115622.76673551528!2d54.9806456!3d24.9604106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0e3400000001%3A0xa9457635fb88b3!2sJebel%20Ali%20Free%20Zone%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-y bg-white">
        <div className="container-vt">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50">
                <img
                  src={diversityTeam}
                  alt="Diverse global team at Veetech Automation"
                  className="w-full aspect-4/3 object-cover shadow-lift rounded-2xl"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHeading 
                eyebrow="Global Reach" 
                title="Our Regional Offices" 
                lead="We support our customers globally through our widespread network of regional offices and dedicated sales teams." 
              />
              
              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4">
                {REGIONAL_OFFICES.map((office) => (
                  <li key={office} className="flex items-center gap-3 text-slate-600 text-[15px] font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                       <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    {office}
                  </li>
                ))}
              </ul>
            </Reveal>
            
          </div>
        </div>
      </section>
    </>
  );
}

