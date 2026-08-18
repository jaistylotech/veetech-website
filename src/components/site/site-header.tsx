import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-[height,box-shadow] duration-300 border-b border-border",
        scrolled ? "shadow-sm" : ""
      )}
    >
      <div
        className={cn(
          "container-vt flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Link to="/" className="group flex items-center transition-transform hover:scale-105" onClick={() => setOpen(false)}>
          <img 
            src="/veetech-logo.png" 
            alt="VeeTech Automation FZE Logo" 
            className="h-12 w-auto object-contain md:h-16 lg:h-[4.5rem]"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative py-1 text-[0.8125rem] font-semibold text-navy transition-colors"
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-[#fcee21] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} 
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="hidden items-center gap-2 font-mono text-xs tracking-wider text-foreground/70 transition-colors hover:text-accent lg:flex"
          >
            <Phone className="size-3.5" />
            {COMPANY.phone}
          </a>
          <Link to="/contact" className="btn-base btn-accent hidden hover:brightness-110 sm:inline-flex">
            Request a Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center border border-border text-navy xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white xl:hidden">
          <nav className="container-vt flex flex-col py-6" aria-label="Mobile">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-border py-4 font-display text-xl font-semibold text-navy hover:text-accent transition-colors"
              >
                <span className="font-mono text-[0.65rem] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-accent mt-7 w-full"
            >
              Request a Consultation
            </Link>
            <div className="mt-6 space-y-1 font-mono text-xs text-foreground/70">
              <a className="block hover:text-accent transition-colors" href={`tel:${COMPANY.phoneHref}`}>
                {COMPANY.phone}
              </a>
              <a className="block hover:text-accent transition-colors" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              <p>{COMPANY.city}</p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
