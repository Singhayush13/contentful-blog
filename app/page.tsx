import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section - Now wrapped for full-width background potential */}
      <div className="border-b bg-slate-50/30 dark:bg-slate-950/20">
        <Hero />
      </div>

      <section className="container mx-auto px-4 py-20 lg:py-24">
        {/* 2. Section Header with "Action Area" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Fresh Content</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest from the Blog
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Discover our most recent insights, tutorials, and industry updates.
            </p>
          </div>

          <Button asChild variant="ghost" className="hidden md:flex group hover:bg-transparent p-0">
            <Link href="/blog" className="flex items-center gap-2">
              View all posts 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* 3. The Grid - Pass a subset of posts */}
        <BlogList posts={posts.slice(0, 3)} />

        {/* 4. Mobile-only "View All" Button */}
        <div className="mt-12 flex md:hidden justify-center">
          <Button asChild size="lg" className="w-full">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>

      {/* 5. Simple Newsletter/CTA Section */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-bold mb-2">Never miss an update</h3>
          <p className="text-muted-foreground mb-6">Join our newsletter to receive the latest articles directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
             {/* Note: Standard input styling for demonstration */}
             <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
             />
             <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}