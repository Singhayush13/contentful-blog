import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/contentful";
// Correct
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default async function BlogPage() {
  const posts = await getPosts();
  
  // Calculate category counts for the sidebar/filter (Optional logic)
  const categories = Array.from(new Set(posts.map(p => p.category || "General")));

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* 1. Page Header */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              The Archive
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In-depth articles, technical tutorials, and strategic insights from our engineering and design teams.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 2. Sidebar / Filters (Professional layout) */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Search Bar Placeholder */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Search</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <Separator />

              {/* Categories */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Categories</h4>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  <button className="flex items-center justify-between text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-md">
                    All Posts
                    <span className="text-xs opacity-60">{posts.length}</span>
                  </button>
                  {categories.map((cat) => (
                    <button key={cat} className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* 3. Main Content Feed */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Showing {posts.length} Articles
              </h2>
              {/* This could be a Sort Dropdown in the future */}
              <div className="text-sm text-muted-foreground">
                Sorted by: <span className="text-foreground font-medium">Latest</span>
              </div>
            </div>

            <BlogList posts={posts} />
          </div>
        </div>
      </div>
    </main>
  );
}