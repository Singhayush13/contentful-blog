"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/types";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group h-full overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/20">
      {/* 1. Image Placeholder/Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        {/* If you have images in Contentful, use <Image /> here */}
        <div className="w-full h-full bg-secondary/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-muted-foreground/40 text-xs font-mono">
          {post.category || "CONCEPT"}
        </div>
      </div>

      <CardHeader className="space-y-3 pb-4">
        {/* 2. Top Metadata */}
        <div className="flex items-center gap-3">
          <Badge variant="subtle" className="font-medium">
            {post.category || "Article"}
          </Badge>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {post.publishedDate}
          </span>
        </div>

        {/* 3. Title with Hover Effect */}
        <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>

      {/* 4. Footer Action */}
      <CardFooter className="pt-0 border-t bg-muted/5 mt-4 py-4">
        <Link 
          href={`/blog/${post.slug}`} 
          className="inline-flex items-center text-sm font-bold text-primary group/link"
        >
          Read full story
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}