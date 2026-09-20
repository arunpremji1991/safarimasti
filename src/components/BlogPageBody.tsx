"use client";

import { blogCategories, blogPosts } from "@/data/blog";
import { useLanguage } from "@/i18n/LanguageContext";

export function BlogPageBody() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((cat) => (
            <span
              key={cat.en}
              className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900"
            >
              {pick(cat.en, cat.ar)}
            </span>
          ))}
        </div>

        {blogPosts.length === 0 ? (
          <div className="mt-16 rounded-2xl bg-cream-100 p-12 text-center">
            <h2 className="font-display text-2xl text-charcoal-950">{t("blogPage.comingTitle")}</h2>
            <p className="mx-auto mt-3 max-w-md text-charcoal-800/70">{t("blogPage.comingBody")}</p>
          </div>
        ) : (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Rendered once posts exist in src/data/blog.ts */}
          </div>
        )}
      </div>
    </section>
  );
}
