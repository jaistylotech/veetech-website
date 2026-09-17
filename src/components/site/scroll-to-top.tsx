import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalScrollableDistance = documentHeight - windowHeight;
      
      if (totalScrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const progress = (scrollPosition / totalScrollableDistance) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      
      if (scrollPosition > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-navy shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95"
        aria-label="Scroll to top"
      >
        {/* Background track circle */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
          width="48"
          height="48"
        >
          <circle
            stroke="rgba(255, 255, 255, 0.15)"
            fill="transparent"
            strokeWidth="2.5"
            r={radius}
            cx="24"
            cy="24"
          />
          {/* Progress circle */}
          <circle
            className="text-accent transition-all duration-200 ease-out"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={radius}
            cx="24"
            cy="24"
          />
        </svg>
        {/* Up Arrow Icon */}
        <div className="text-white group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300 relative z-10">
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </div>
      </button>
    </div>
  );
}
