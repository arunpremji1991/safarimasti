import { Baloo_2 } from "next/font/google";
import clsx from "clsx";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-baloo" });

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Faithful re-creation of the Safari Masti mark (torn-map + sun icon) as a
 * scalable SVG so it can sit on both dark hero sections and light nav bars.
 */
export function Logo({ variant = "light", className }: LogoProps) {
  const iconFill = "#eeaa4c";
  const iconStroke = variant === "light" ? "#34331f" : "#34331f";
  const textColor = variant === "light" ? "#f8f0e0" : "#4a0d14";

  return (
    <div className={clsx("flex items-center gap-2.5", baloo.variable, className)}>
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path
          d="M8 10 L58 6 L92 12 L88 46 L94 60 L90 92 L34 90 L6 86 L10 52 L4 40 Z"
          fill={iconFill}
        />
        <circle cx="50" cy="50" r="17" stroke={iconStroke} strokeWidth="5" fill="none" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const r1 = 27;
          const r2 = 36;
          const x1 = Number((50 + r1 * Math.cos(angle)).toFixed(2));
          const y1 = Number((50 + r1 * Math.sin(angle)).toFixed(2));
          const x2 = Number((50 + r2 * Math.cos(angle)).toFixed(2));
          const y2 = Number((50 + r2 * Math.sin(angle)).toFixed(2));
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={iconStroke}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <span
        className="leading-[0.85] text-[1.15rem] tracking-wide"
        style={{ fontFamily: "var(--font-baloo)", color: textColor }}
      >
        SAFARI
        <br />
        MASTI
      </span>
    </div>
  );
}
