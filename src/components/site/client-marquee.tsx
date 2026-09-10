import { cn } from "@/lib/utils";

export function ClientMarquee() {
  const allLogos = [
    "1.png", "2.png", "3.jpg", "4.png", "5.png", "6.jpg", "7.png", "8.png", "9.jpg", "10.png",
    "11.png", "12.png", "13.png", "14.png", "15.jpg", "16.png", "17.png", "18.png", "19.jpg", "20.jpg",
    "21.png", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.png", "27.jpg", "28.jpg", "29.png", "30.png",
    "31.png", "32.png", "33.jpg", "34.jpg", "35.png", "36.jpg", "37.png", "38.jpg", "39.jpg", "40.png",
    "41.jpg", "42.png", "43.png", "44.png", "45.png"
  ];
  
  // Split into two rows for a denser, more premium look
  const topRow = allLogos.slice(0, 23);
  const bottomRow = allLogos.slice(23);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-border/50">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

      <div className="container-vt relative z-10 mb-12 flex flex-col items-center text-center">
        {/* Premium Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-navy font-bold uppercase">
            Our Major Customers
          </span>
        </div>
        
        {/* Main Prominent Heading */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-navy mb-5 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        
        {/* Lead Text */}
        <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
          We are proud to support the world's most innovative companies in the global energy sector with our engineered automation solutions.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <LogoTrack items={topRow} direction="normal" />
        <LogoTrack items={bottomRow} direction="reverse" />
      </div>
    </section>
  );
}

function LogoTrack({ items, direction }: { items: string[]; direction: "normal" | "reverse" }) {
  return (
    <div className="relative w-full overflow-hidden flex group">
      {/* Fade Gradients for smooth entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div 
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          direction === "normal" 
            ? "animate-[marquee_150s_linear_infinite]" 
            : "animate-[marquee_150s_linear_infinite_reverse]"
        )}
      >
        {/* First Set */}
        {items.map((filename) => (
          <div 
            key={`set1-${filename}`} 
            className="w-[180px] md:w-[220px] h-[90px] md:h-[110px] mx-3 md:mx-4 bg-white border border-slate-200/60 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all duration-300"
          >
            <img 
              src={`/client-media/logos/${filename}`} 
              alt="Client Logo"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
          </div>
        ))}

        {/* Second Set (Duplicated for seamless loop) */}
        {items.map((filename) => (
          <div 
            key={`set2-${filename}`} 
            className="w-[180px] md:w-[220px] h-[90px] md:h-[110px] mx-3 md:mx-4 bg-white border border-slate-200/60 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all duration-300"
          >
            <img 
              src={`/client-media/logos/${filename}`} 
              alt="Client Logo"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
