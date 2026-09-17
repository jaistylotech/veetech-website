import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QUICK_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // Delay check scroll to let animation finish
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="z-20 flex w-full justify-end self-end lg:w-auto max-w-full">
      <div className="flex w-full lg:w-auto items-stretch bg-navy-deep/90 backdrop-blur-md shadow-2xl text-on-navy border-t-2 border-accent md:rounded-tl-2xl overflow-hidden">
        {/* Scroller Container */}
        <div className="relative flex min-w-0 flex-1 items-center">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 z-10 flex h-full w-12 items-center justify-center bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent transition-opacity",
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-6 text-accent" />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="hero-scroll-container flex w-full lg:w-auto items-center gap-8 overflow-x-auto px-6 py-3 scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style>{`
              .hero-scroll-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {!isHomePage && (
              <Link
                to="/"
                activeProps={{ className: "text-accent scale-105" }}
                inactiveProps={{ className: "text-on-navy-muted hover:text-accent" }}
                className="shrink-0 text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap uppercase transform hover:scale-110 hover:-translate-y-0.5"
              >
                HOME
              </Link>
            )}
            
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                activeProps={{ className: "text-accent scale-105" }}
                inactiveProps={{ className: "text-on-navy-muted hover:text-accent" }}
                className="shrink-0 text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap uppercase transform hover:scale-110 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 z-10 flex h-full w-12 items-center justify-center bg-gradient-to-l from-navy-deep via-navy-deep/80 to-transparent transition-opacity",
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="size-6 text-accent" />
          </button>
        </div>
      </div>
    </div>
  );
}
