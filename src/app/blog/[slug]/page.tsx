import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="font-display text-4xl text-charcoal-950">{post.title}</h1>
      <p className="mt-4 text-charcoal-800/80">{post.excerpt}</p>
    </article>
  );
}
