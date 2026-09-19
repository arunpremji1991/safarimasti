import Image from "next/image";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
  compact?: boolean;
}

export function PageHero({ eyebrow, title, description, image, crumbs, compact }: PageHeroProps) {
  return (
    <section
      className={`relative flex ${compact ? "h-[50vh] min-h-[380px]" : "h-[65vh] min-h-[480px]"} w-full items-end overflow-hidden bg-charcoal-950`}
    >
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/20" />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-cream-100/70">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-amber-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-amber-300">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
        )}
        <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl leading-tight text-cream-50 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-cream-100/85">{description}</p>
        )}
      </div>
    </section>
  );
}
