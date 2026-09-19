import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 text-maroon-950 hover:bg-amber-400 focus-visible:outline-amber-600",
  secondary:
    "bg-maroon-900 text-cream-50 hover:bg-maroon-800 focus-visible:outline-maroon-700",
  outline:
    "border border-current bg-transparent hover:bg-white/10 focus-visible:outline-current",
  ghost: "bg-transparent hover:bg-black/5 focus-visible:outline-current",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

export function Button({
  children,
  variant = "primary",
  className,
  arrow,
  href,
  onClick,
  type,
}: BaseProps & { href?: string; onClick?: () => void; type?: "button" | "submit" }) {
  const classes = clsx(base, variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={clsx(classes, "group")}>
      {content}
    </button>
  );
}
