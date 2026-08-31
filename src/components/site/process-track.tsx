import { CAPABILITIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

export function ProcessTrack() {
  return (
    <div className="mt-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((c, i) => (
          <div
            key={c.no}
            className="group relative overflow-hidden rounded-2xl border border-border bg-background/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-background hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 -z-10 size-32 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-150" />
            
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-semibold tracking-wider text-accent">
                {c.no}
              </span>
              <MoveRight className="size-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent group-hover:opacity-100" />
            </div>
            
            <h3 className="mt-6 font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              {c.title}
            </h3>
            
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>

            {/* Bottom highlight line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
