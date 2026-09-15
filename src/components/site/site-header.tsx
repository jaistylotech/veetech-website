import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SubMenuItem({ child, setOpen }: { child: any, setOpen: (v: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasSubChildren = "children" in child && Boolean(child.children);

  if (!hasSubChildren) {
    return (
      <Link
        to={child.to as any}
        onClick={() => setOpen(false)}
        className="block py-2 text-sm font-medium text-navy hover:text-accent transition-colors border-b border-border/40 last:border-0"
      >
        {child.label}
      </Link>
    );
  }

  return (
    <div className="relative flex flex-col">
      <div className="flex w-full items-center justify-between py-2 border-b border-border/40">
        <Link
          to={child.to as any}
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-navy hover:text-accent transition-colors flex-1 text-left"
        >
          {child.label}
        </Link>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); setExpanded(!expanded); }}
          className="p-1 -mr-1 text-navy hover:text-accent transition-colors flex-shrink-0"
        >
          <ChevronRight className={cn("size-3 transition-transform duration-300", expanded && "rotate-90 md:rotate-0")} />
        </button>
      </div>

      {/* Desktop side-flyout */}
      <div className={cn(
        "hidden md:block absolute left-[100%] top-0 pl-1 z-50 transition-all duration-300",
        expanded ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-4 pointer-events-none"
      )}>
        <div
          className="flex min-w-[260px] flex-col gap-2 bg-white border border-border/50 p-4 shadow-2xl rounded-lg"
        >
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
          <div className="ml-4 flex flex-col gap-2 border-l-2 border-border pl-4 py-2">
            {child.children!.map((subChild: any) => (
              <SubMenuItem key={subChild.label} child={subChild} setOpen={setOpen} />
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
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
    if (!open) {
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // If menu is open, or if we've scrolled, make it solid dark. Otherwise transparent.
  const isSolid = scrolled || open || !isHome;

  return (
    <>
      <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid ? "bg-navy-deep/95 backdrop-blur-md shadow-lg text-white" : "bg-transparent text-white"
      )}
    >
      <div className="container-vt flex items-center justify-between transition-all duration-300 h-[4.5rem] md:h-20">
        <Link to="/" className="group flex items-center transition-transform hover:scale-105 bg-white p-2 md:p-3 rounded-lg shadow-sm" onClick={() => setOpen(false)}>
          <img
            src="/veetech-logo.png"
            alt="Veetech Automation FZE Logo"
            className="h-10 md:h-14 w-auto object-contain transition-opacity hover:opacity-100"
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
    </header>

      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] md:top-20 bottom-0 z-40 overflow-y-auto bg-white text-navy transition-all">
          <nav className="container-vt flex flex-col py-10" aria-label="Main Menu">
            <div className="w-full max-w-[280px]">
              <div className="flex flex-col gap-3">
                {NAV.map((item) => {
                  const hasChildren = "children" in item && Boolean(item.children);
                  const isExpanded = expandedItem === item.label;

                  return (
                    <div key={item.label} className="relative flex flex-col">
                      {hasChildren ? (
                        <>
                          <div className="flex w-full items-center justify-between py-3 border-b border-border/10">
                            <Link
                              to={item.to as any}
                              onClick={() => setOpen(false)}
                              className="text-[0.95rem] font-semibold text-navy hover:text-accent transition-colors duration-200 flex-1 text-left"
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              onClick={(e) => { e.preventDefault(); setExpandedItem(isExpanded ? null : item.label); }}
                              className="p-2 -mr-2 text-navy hover:text-accent transition-colors flex-shrink-0"
                            >
                              <ChevronRight className={cn("size-4 transition-transform duration-300", isExpanded && "rotate-90 md:rotate-0")} />
                            </button>
                          </div>

                          {/* Desktop side-flyout */}
                          <div className={cn(
                            "hidden md:block absolute left-[100%] top-0 pl-1 z-50 transition-all duration-300",
                            isExpanded ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-4 pointer-events-none"
                          )}>
                            <div
                              className="flex min-w-[280px] flex-col gap-2 bg-white border border-border/50 p-5 shadow-2xl rounded-lg"
                            >
                              {item.children!.map((child) => (
                                <SubMenuItem key={child.label} child={child} setOpen={setOpen} />
                              ))}
                            </div>
                          </div>

                          {/* Mobile accordion */}
                          <div
                            className={cn(
                              "md:hidden grid transition-all duration-300 ease-in-out",
                              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="ml-4 flex flex-col gap-2 border-l-2 border-border pl-4 py-2">
                                {item.children!.map((child) => (
                                  <SubMenuItem key={child.label} child={child} setOpen={setOpen} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.to as any}
                          onClick={() => setOpen(false)}
                          className="group flex w-full items-center justify-between py-3 text-[0.95rem] font-semibold text-navy hover:text-accent transition-colors duration-200"
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

