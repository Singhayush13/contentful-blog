import { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  coverImage?: string;
  publishedDate?: string;
}
