import Link from "next/link";
import { Logo } from "./ui/Logo";
import { site, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs font-display text-lg text-cream-200">{site.tagline}</p>
            <p className="mt-6 max-w-sm text-sm text-cream-100/70">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-100/80 hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/build-your-journey" className="text-cream-100/80 hover:text-amber-300">
                  Build Your Journey
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream-100/80 hover:text-amber-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="text-cream-100/80 hover:text-amber-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="text-cream-100/80 hover:text-amber-300">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/80 hover:text-amber-300"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Safari Masti. {site.base} · {site.scope}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
