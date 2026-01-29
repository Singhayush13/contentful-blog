import { getPostBySlug } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Contentful Blog`,
    description: post.excerpt
  };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pb-20">
      {/* 1. Navigation & Header Area */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-8 group">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>
        </Button>

        <header className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="subtle" className="mb-4">
            {post.category || "Insight"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{post.publishedDate || "Jan 24, 2024"}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime || "6 min"} read</span>
            </div>
          </div>
        </header>
      </div>

      {/* 2. Hero Image Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border shadow-lg">
          {post.coverImage ? (
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority 
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center" />
          )}
        </div>
      </div>

      {/* 3. Content Area */}
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl shadow-none">
            {documentToReactComponents(post.content)}
          </div>

          {/* 4. Footer / Share Section */}
          <hr className="my-12" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-semibold">Written by Editorial Team</p>
                <p className="text-xs text-muted-foreground">Expert insights on Next.js & Contentful</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}