import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SubMenuItem({ child, setOpen }: { child: any; setOpen: (v: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasSubChildren = "children" in child && Boolean(child.children);

  if (!hasSubChildren) {
    return (
      <Link
        to={child.to as any}
        onClick={() => setOpen(false)}
        className="block py-2 px-3 text-sm font-medium text-white/90 hover:text-accent hover:bg-white/[0.08] rounded-lg transition-colors border-b border-white/10 last:border-0"
      >
        {child.label}
      </Link>
    );
  }

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex w-full items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.08] transition-colors border-b border-white/10 group">
        <Link
          to={child.to as any}
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-white group-hover:text-accent transition-colors flex-1 text-left"
        >
          {child.label}
        </Link>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          className="p-1 -mr-1 text-accent transition-colors flex-shrink-0"
          aria-label={`Toggle ${child.label}`}
        >
          <ChevronRight
            className={cn("size-3.5 transition-transform duration-300", expanded ? "rotate-90 md:rotate-0" : "")}
          />
        </button>
      </div>

      {/* Desktop side-flyout */}
      <div
        className={cn(
          "hidden md:block absolute left-full top-0 pl-1.5 z-50 transition-all duration-200",
          expanded
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-2 pointer-events-none"
        )}
      >
        <div className="flex min-w-[260px] flex-col gap-1 bg-[#1a2656] border border-white/20 p-3 shadow-2xl rounded-xl backdrop-blur-xl">
          {child.children!.map((subChild: any) => (
            <SubMenuItem key={subChild.label} child={subChild} setOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* Mobile accordion */}
      <div
        className={cn(
          "md:hidden grid transition-all duration-300 ease-in-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="ml-4 flex flex-col gap-1 border-l-2 border-white/20 pl-3 py-1">
            {child.children!.map((subChild: any) => (
              <SubMenuItem key={subChild.label} child={subChild} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MainMenuItem({ item, setOpen }: { item: any; setOpen: (v: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = "children" in item && Boolean(item.children);

  if (!hasChildren) {
    return (
      <Link
        to={item.to as any}
        onClick={() => setOpen(false)}
        className="group flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-[0.95rem] md:text-base font-semibold text-white hover:text-accent hover:bg-white/[0.08] transition-all"
      >
        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white/[0.08] transition-colors border-b border-white/10 group">
        <Link
          to={item.to as any}
          onClick={() => setOpen(false)}
          className="text-[0.95rem] md:text-base font-semibold text-white group-hover:text-accent transition-colors flex-1 text-left"
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          className="p-1 -mr-1 text-accent transition-colors flex-shrink-0"
          aria-label={`Toggle ${item.label}`}
        >
          <ChevronRight
            className={cn("size-4 transition-transform duration-300", expanded ? "rotate-90 md:rotate-0" : "")}
          />
        </button>
      </div>

      {/* Desktop side-flyout */}
      <div
        className={cn(
          "hidden md:block absolute left-full top-0 pl-1.5 z-50 transition-all duration-200",
          expanded
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-2 pointer-events-none"
        )}
      >
        <div className="flex min-w-[280px] flex-col gap-1 bg-[#18234d] border border-white/20 p-3 shadow-2xl rounded-xl backdrop-blur-xl">
          {item.children!.map((child: any) => (
            <SubMenuItem key={child.label} child={child} setOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* Mobile accordion */}
      <div
        className={cn(
          "md:hidden grid transition-all duration-300 ease-in-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="ml-4 flex flex-col gap-1 border-l-2 border-white/20 pl-3 py-1">
            {item.children!.map((child: any) => (
              <SubMenuItem key={child.label} child={child} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <style>{`
        @keyframes phone-ring {
          0%, 80%, 100% { transform: rotate(0deg) scale(1); }
          85% { transform: rotate(10deg) scale(1.1); }
          90% { transform: rotate(-10deg) scale(1.1); }
          95% { transform: rotate(10deg) scale(1.1); }
        }
        .animate-phone-ring {
          animation: phone-ring 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
      <header
        className="sticky inset-x-0 top-0 z-50 transition-all duration-300 bg-accent/95 backdrop-blur-md shadow-lg text-[#212C5F]"
      >
        <div className="container-vt flex items-center justify-between transition-all duration-300 h-16 md:h-20">
          <Link to="/" className="flex items-center h-full" onClick={() => setOpen(false)}>
            <img
              src="/veetech-logo.png"
              alt="Veetech Automation FZE Logo"
              className="h-[3.5rem] md:h-[4.5rem] w-auto object-contain scale-[1.15] md:scale-[1.2] origin-left"
            />
          </Link>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-75"
              aria-label="Contact Us"
            >
              <Phone className="size-5 animate-phone-ring" strokeWidth={1.5} />
              <span className="hidden md:inline-block">Contact</span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2.5 font-bold tracking-wide transition-opacity hover:opacity-75 text-sm"
            >
              <span className="hidden sm:inline-block">{open ? "Close" : "Menu"}</span>
              {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-40 overflow-y-auto bg-gradient-to-b from-[#121a38] via-[#17234d] to-[#0f1733] text-white transition-all border-t-2 border-accent shadow-2xl animate-in fade-in duration-300">
          <nav className="container-vt flex flex-col py-10" aria-label="Main Navigation">
            <div className="w-full max-w-[280px]">
              <div className="flex flex-col gap-1.5">
                {NAV.map((item) => (
                  <MainMenuItem key={item.label} item={item} setOpen={setOpen} />
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
