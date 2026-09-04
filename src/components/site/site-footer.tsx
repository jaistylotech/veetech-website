import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Youtube } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Facility", to: "/facility" },
      { label: "Projects", to: "/projects" },
      { label: "Industries", to: "/industries" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Chemical Injection Packages", to: "/solutions/chemical-injection-packages" },
      { label: "Wellhead Control Systems", to: "/solutions/wellhead-control-systems" },
      { label: "Modular Packages", to: "/solutions/modular-packages" },
      { label: "Engineered Solutions", to: "/solutions/engineered-solutions" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "After-Market Services", to: "/services" },
      { label: "Preventive Maintenance", to: "/services" },
      { label: "Refurbishment & Recertification", to: "/services" },
      { label: "Pressure Testing", to: "/services" },
      { label: "Product Training", to: "/services" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="surface-dark mt-16 md:mt-24">
      <div className="container-vt border-b border-hairline py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <Link to="/" className="inline-block rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-1">
              <img src="/veetech-logo.png" alt="Veetech Automation FZE Logo" className="h-10 w-auto md:h-14" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-navy-muted">
              Industrial control automation and packaged solutions for the energy sector â€” designed,
              engineered, manufactured and tested in Jebel Ali Free Zone, Dubai.
            </p>
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.linkedin.com/company/versatech-automation-fze/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://www.youtube.com/channel/UC91UVr6sU91Du1s8zRsDQ2w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-on-navy-muted transition-colors hover:text-on-navy"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-on-navy-muted">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-steel" />
                  <span>
                    {COMPANY.poBox}
                    <br />
                    {COMPANY.plot}
                    <br />
                    {COMPANY.city}
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-steel" />
                  <a className="transition-colors hover:text-on-navy" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-steel" />
                  <a
                    className="transition-colors hover:text-on-navy"
                    href={`tel:${COMPANY.phoneHref}`}
                  >
                    {COMPANY.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-vt flex flex-col gap-4 py-6 text-xs text-on-navy-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="flex-1">Â© {new Date().getFullYear()} Veetech Automation FZE. All rights reserved.</p>
        <div className="flex flex-1 gap-6 sm:justify-center">
          <Link to="/privacy-policy" className="transition-colors hover:text-on-navy">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-on-navy">
            Terms & Conditions
          </Link>
        </div>
        <p className="flex-1 sm:text-right">
          Designed and developed by{" "}
          <a
            href="https://stylotech.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
            style={{ color: "#ed2424" }}
          >
            Stylotech
          </a>
        </p>
      </div>
    </footer>
  );
}
