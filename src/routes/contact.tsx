import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Youtube, Globe } from "lucide-react";

import jebelAli from "@/assets/jebel-ali.jpg";
import diversityTeam from "@/assets/diversity-team.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { COMPANY, REGIONAL_OFFICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VeeTech Automation FZE, Jebel Ali Free Zone, Dubai" },
      {
        name: "description",
        content:
          "Contact VeeTech Automation FZE in Jebel Ali Free Zone, Dubai for wellhead control systems, chemical injection packages, modular skids and after-market services.",
      },
      { property: "og:title", content: "Contact VeeTech Automation FZE" },
      {
        property: "og:description",
        content: "Talk to our Dubai engineering team about your control system or skid package.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
        imageAlt="VeeTech headquarters and manufacturing facility"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Contact Us" }
        ]}
      />

      <section className="section-y bg-surface">
        <div className="container-vt grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Reach Out" title="VeeTech Automation FZE" />
            <div className="mt-10 space-y-6">
              <a 
                href="#"
                className="group flex items-start gap-5 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md border border-border/50 hover:border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase font-semibold">Address</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    Jebel Ali Free Zone, Dubai,<br />United Arab Emirates
                  </p>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-5 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md border border-border/50 hover:border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase font-semibold">Email</h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-accent transition-colors font-medium">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <a 
                href={`tel:${COMPANY.phoneHref}`}
                className="group flex items-start gap-5 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md border border-border/50 hover:border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase font-semibold">Phone</h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-accent transition-colors font-medium">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.linkedin.com/company/versatech-automation-fze/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border/50 text-navy shadow-sm transition-all hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UC91UVr6sU91Du1s8zRsDQ2w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border/50 text-navy shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:shadow-md"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="h-full min-h-[400px]">
            <div className="h-full w-full overflow-hidden rounded-2xl shadow-lift border border-border/50 bg-card relative group">
              <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              <iframe
                title="VeeTech Automation Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115622.76673551528!2d54.9806456!3d24.9604106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0e3400000001%3A0xa9457635fb88b3!2sJebel%20Ali%20Free%20Zone%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REGIONAL OFFICES & DIVERSITY */}
      <section className="border-t border-border bg-background section-y">
        <div className="container-vt grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <Reveal>
            <img
              src={diversityTeam}
              alt="Diverse global team at VeeTech Automation"
              className="w-full aspect-4/3 object-cover shadow-lift rounded-2xl"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading 
              eyebrow="Global Reach" 
              title="Regional Offices" 
              lead="We support our customers globally through our widespread network of regional offices and dedicated sales teams." 
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4">
              {REGIONAL_OFFICES.map((office) => (
                <li key={office} className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                     <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {office}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
