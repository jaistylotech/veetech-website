import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Type ---------- */

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string | undefined;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "light" ? "text-navy font-semibold" : "text-accent font-medium",
        className,
      )}
    >
      <span className={cn("rule-x", tone === "light" ? "text-navy" : "text-accent")} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
  eyebrowClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  eyebrowClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={eyebrowClassName}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "mt-5 text-[clamp(1.85rem,3.6vw,3rem)] leading-[1.08] font-semibold",
          tone === "dark" ? "text-on-navy" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-[1.0625rem]",
            tone === "dark" ? "text-on-navy-muted" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Buttons & links ---------- */

type BtnProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "accent" | "solid" | "outlineDark" | "outlineLight";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantClass: Record<NonNullable<BtnProps["variant"]>, string> = {
  accent: "btn-accent hover:brightness-110",
  solid: "btn-solid hover:bg-navy-deep",
  outlineDark: "btn-outline-dark hover:bg-[oklch(1_0_0/10%)]",
  outlineLight: "btn-outline-light hover:border-accent hover:text-accent",
};

export function Btn({
  to,
  href,
  children,
  variant = "accent",
  className,
  type = "button",
  onClick,
}: BtnProps) {
  const classes = cn("btn-base group", variantClass[variant], "hover:-translate-y-px", className);
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}

export function ArrowLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn("link-arrow group", className)}>
      {children}
      <span className="relative block h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
    </Link>
  );
}

/* ---------- Counter ---------- */

export function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ---------- Stat ---------- */

export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: ReactNode;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("flex flex-col h-full border-l border-border pl-6", tone === "dark" ? "border-hairline" : "border-border")}>
      <div
        className={cn(
          "flex flex-col justify-end min-h-[4rem]",
          "font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-bold tracking-tight",
          tone === "dark" ? "text-on-navy" : "text-navy",
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-3 font-mono text-[0.7rem] md:text-[0.75rem] tracking-[0.18em] uppercase font-semibold",
          tone === "dark" ? "text-on-navy-muted" : "text-muted-foreground",
        )}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------- Page hero ---------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden surface-dark">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 size-full object-cover opacity-30"
        loading="eager"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="absolute inset-0 -z-10 tech-grid opacity-40" aria-hidden="true" />
      <div className="container-vt pt-28 pb-16 md:pt-40 md:pb-24">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-on-navy-muted">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={idx} className="flex items-center gap-2">
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="transition-colors hover:text-on-navy focus:text-on-navy focus:outline-none focus-visible:underline rounded-sm"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-on-navy">{crumb.label}</span>
                  )}
                  {!isLast && <span className="text-on-navy-muted/50 select-none">&gt;</span>}
                </div>
              );
            })}
          </nav>
        ) : null}
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.04] font-semibold text-on-navy">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-navy-muted md:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- Closing CTA ---------- */

export function CtaSection({
  image,
  title = "Have a Complex Engineering Requirement?",
  lead = "Talk to our engineering team about your next energy-sector project.",
}: {
  image: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden surface-dark">
      <img
        src={image}
        alt="Industrial gas processing plant illuminated at night"
        className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        loading="lazy"
        width={1920}
        height={912}
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/70" />
      <div className="container-vt section-y">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="dark">Get in touch</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.06] font-semibold text-on-navy">
            {title}
          </h2>
          <p className="mt-5 text-base text-on-navy-muted md:text-lg">{lead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Btn to="/contact" variant="accent">
              Request a Consultation
            </Btn>
            <Btn to="/contact" variant="outlineDark">
              Contact VeeTech
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
