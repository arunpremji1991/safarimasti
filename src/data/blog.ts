export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
}

export const blogCategories = [
  { en: "India Travel Guides", ar: "أدلة السفر إلى الهند" },
  { en: "Kerala Travel", ar: "السفر إلى كيرالا" },
  { en: "Adventure & Trekking", ar: "المغامرة والتسلق" },
  { en: "Luxury Travel", ar: "السفر الفاخر" },
  { en: "Honeymoon Travel", ar: "رحلات شهر العسل" },
  { en: "Wildlife", ar: "الحياة البرية" },
  { en: "Spiritual Journeys", ar: "الرحلات الروحانية" },
  { en: "Northeast India", ar: "شمال شرق الهند" },
  { en: "Senior Citizen Travel", ar: "سفر كبار السن" },
] as const;

// No articles have been published yet. Add entries here as real content is written —
// per the content policy, no placeholder articles are invented.
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
