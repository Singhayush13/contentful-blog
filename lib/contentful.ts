import { BlogPost } from "./types";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const CONTENT_TYPE = "blogPost"; // 🔁 MUST match API Identifier
const ENVIRONMENT = "master";

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error("❌ Missing Contentful environment variables");
}

const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

async function fetchContentful(query: string) {
  try {
    const url = `${BASE_URL}${query}&access_token=${ACCESS_TOKEN}`;

    const res = await fetch(url, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error("❌ Contentful API error:", {
        status: res.status,
        body: await res.text()
      });
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("❌ Contentful fetch exception:", error);
    return null;
  }
}

function mapPost(item: any): BlogPost {
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt ?? "",
    content: item.fields.content,
    coverImage: item.fields.coverImage?.fields?.file?.url
      ? `https:${item.fields.coverImage.fields.file.url}`
      : undefined,
    publishedDate: item.fields.publishedDate ?? ""
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const data = await fetchContentful(
    `/entries?content_type=${CONTENT_TYPE}&order=-fields.publishedDate`
  );

  if (!data?.items) {
    return []; // ✅ graceful empty state
  }

  return data.items.map(mapPost);
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const data = await fetchContentful(
    `/entries?content_type=${CONTENT_TYPE}&fields.slug=${slug}`
  );

  if (!data?.items || data.items.length === 0) {
    return null;
  }

  return mapPost(data.items[0]);
}
