import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // If we are not on the homepage, we might want a solid background immediately,
  // but let's assume we want the transparent effect universally or it falls back gracefully.
  const isHome = location.pathname === "/";

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

  // If menu is open, or if we've scrolled, make it solid dark. Otherwise transparent.
  const isSolid = scrolled || open || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid ? "bg-[#1f232a] text-white shadow-md" : "bg-transparent text-white"
      )}
    >
      <div
        className={cn(
          "container-vt flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-[4.5rem] md:h-20",
        )}
      >
        <Link to="/" className="group flex items-center transition-transform hover:scale-105 bg-white p-1.5 md:p-2 rounded-lg shadow-sm" onClick={() => setOpen(false)}>
          <img 
            src="/veetech-logo.png" 
            alt="Veetech Automation FZE Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-opacity hover:opacity-100"
          />
        </Link>

        {/* Removed inline desktop navigation, now relies entirely on the Menu button */}

        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
            aria-label="Contact Us"
          >
            <Phone className="size-5" strokeWidth={1.5} />
            <span className="hidden md:inline-block">Contact</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 font-medium tracking-wide transition-opacity hover:opacity-75 text-sm"
          >
            <span className="hidden sm:inline-block">Menu</span>
            {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] md:top-20 bottom-0 z-40 overflow-y-auto bg-white text-navy transition-all">
          <nav className="container-vt flex flex-col py-10" aria-label="Main Menu">
            <div className="w-full max-w-[280px]">
              <div className="flex flex-col gap-3">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="group flex w-full items-center justify-between py-3 text-[0.95rem] font-semibold text-navy hover:text-accent transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

