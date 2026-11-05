import clsx from "clsx";

interface LogoProps {
  /** "dark" = for light backgrounds (white, cream); "light" = for maroon / black backgrounds. */
  variant?: "light" | "dark";
  /** "oneLine" is the website-header lockup; "horizontal" is the default two-line lockup. */
  layout?: "oneLine" | "horizontal" | "stacked";
  className?: string;
}

const SOURCES = {
  oneLine: { dark: "/brand/logo-one-line-on-light.svg", light: "/brand/logo-one-line-on-dark.svg", ratio: 1950 / 421 },
  horizontal: { dark: "/brand/logo-horizontal-on-light.svg", light: "/brand/logo-horizontal-on-dark.svg", ratio: 1051 / 421 },
  stacked: { dark: "/brand/logo-stacked-on-light.svg", light: "/brand/logo-stacked-on-dark.svg", ratio: 510 / 860 },
} as const;

/**
 * The official Safari Masti logo (from the brand kit). The artwork is used unaltered: pick `variant`
 * by the background it sits on, and keep it at or above the brand minimum size (horizontal 140px wide,
 * stacked 90px wide). The default height gives a 148px-wide one-line lockup.
 */
export function Logo({ variant = "dark", layout = "oneLine", className }: LogoProps) {
  const src = SOURCES[layout];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src[variant]}
      alt="Safari Masti"
      width={Math.round(32 * src.ratio)}
      height={32}
      className={clsx("h-8 w-auto select-none", className)}
      draggable={false}
    />
  );
}
