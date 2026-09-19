export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
}

export const blogCategories = [
  "India Travel Guides",
  "Kerala Travel",
  "Adventure & Trekking",
  "Luxury Travel",
  "Honeymoon Travel",
  "Wildlife",
  "Spiritual Journeys",
  "Northeast India",
  "Senior Citizen Travel",
] as const;

// No articles have been published yet. Add entries here as real content is written —
// per the content policy, no placeholder articles are invented.
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
