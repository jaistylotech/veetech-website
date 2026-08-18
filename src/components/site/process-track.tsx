import { useState } from "react";
import { CAPABILITIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProcessTrack() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-14">
      <div className="relative hidden md:block">
        <div className="absolute top-[0.6rem] right-0 left-0 h-px bg-border" aria-hidden="true" />
        <div
          className="absolute top-[0.6rem] left-0 h-px bg-accent transition-all duration-500"
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
              <span
                className={cn(
                  "absolute top-[0.35rem] left-0 block size-2.5 rounded-full border transition-colors duration-300",
                  i <= active
                    ? "border-accent bg-accent"
                    : "border-border bg-background group-hover:border-accent",
                )}
                aria-hidden="true"
              />
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">
                {c.no}
              </span>
              <h3
                className={cn(
                  "mt-2 font-display text-lg font-semibold transition-colors",
                  i === active ? "text-foreground" : "text-graphite",
                )}
              >
                {c.title}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-muted-foreground transition-all duration-300",
                  i === active ? "opacity-100" : "opacity-0 md:translate-y-1",
                )}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <ol className="space-y-6 md:hidden">
        {CAPABILITIES.map((c) => (
          <li key={c.no} className="border-l-2 border-accent/60 pl-5">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">
              {c.no}
            </span>
            <h3 className="mt-1 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
