import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/types";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) {
    return (
      <p className="text-center text-muted-foreground">
        No blogs available.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="flex flex-col justify-between">
          <CardHeader>
            <h3 className="text-lg font-semibold">
              {post.title || "Untitled"}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {post.excerpt || "No description available."}
            </p>

            <Link href={`/blog/${post.slug}`}>
              <Button variant="outline" size="sm">
                Read more
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
