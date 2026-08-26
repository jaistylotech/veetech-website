import { useState } from "react";
import { CAPABILITIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProcessTrack() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-14">
      {/* Desktop View */}
      <div className="relative hidden md:block">
        <div className="absolute top-[0.6rem] right-0 left-0 h-px bg-border" aria-hidden="true" />
        <div
          className="absolute top-[0.6rem] left-0 h-px bg-accent transition-all duration-700 ease-out"
          style={{ width: `${((active + 1) / CAPABILITIES.length) * 100}%` }}
          aria-hidden="true"
        />
        <ol className="grid grid-cols-3 gap-x-6 gap-y-10 lg:grid-cols-6">
          {CAPABILITIES.map((c, i) => (
            <li
              key={c.no}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="group relative cursor-default pt-8 outline-none"
            >
              {/* Animated Dot */}
              <span
                className={cn(
                  "absolute top-[0.35rem] left-0 block size-2.5 rounded-full border transition-all duration-500",
                  i === active
                    ? "border-accent bg-accent scale-150 shadow-[0_0_15px_rgba(255,140,0,0.6)] animate-pulse"
                    : i < active
                    ? "border-accent bg-accent scale-110"
                    : "border-border bg-background group-hover:border-accent group-hover:scale-125",
                )}
                aria-hidden="true"
              />
              
              <h3
                className={cn(
                  "mt-2 font-display text-lg font-semibold transition-all duration-500",
                  i === active ? "text-foreground translate-x-1" : "text-graphite",
                )}
              >
                {c.title}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-muted-foreground transition-all duration-500",
                  i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
                )}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile View */}
      <ol className="space-y-8 md:hidden">
        {CAPABILITIES.map((c) => (
          <li key={c.no} className="relative border-l-2 border-accent/60 pl-6 pt-1 group">
            {/* Animated pulsing dot on the line */}
            <span
              className="absolute -left-[6px] top-2.5 block size-2.5 rounded-full border border-accent bg-accent shadow-[0_0_10px_rgba(255,140,0,0.4)] animate-pulse"
              aria-hidden="true"
            />
            <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
