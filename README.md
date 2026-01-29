---

# 📘 Contentful Blog Mini

A modern, SEO-friendly blog application built with **Next.js 14 (App Router)** and **Contentful CMS**, deployed on **Vercel** with ISR caching.

---

## 🚀 Live Demo

🔗 **Production URL:**
[https://contentful-blog-mini.vercel.app](https://contentful-blog-mini.vercel.app)

---

## 🛠 Tech Stack

| Category      | Technology                            |
| ------------- | ------------------------------------- |
| Frontend      | Next.js 14 (App Router)               |
| CMS           | Contentful                            |
| Styling       | Tailwind CSS                          |
| UI Components | shadcn/ui                             |
| Rendering     | Server Components                     |
| Caching       | ISR (Incremental Static Regeneration) |
| SEO           | Metadata API (Next.js)                |
| Deployment    | Vercel                                |
| Language      | TypeScript                            |

---

## ✨ Features

* 📄 Blog listing & detail pages
* 🧠 Headless CMS using Contentful
* ⚡ Fast performance with ISR caching
* 🔍 SEO-optimized metadata
* 🖼 Optimized images with `next/image`
* 🧩 Clean component-based architecture
* 🔐 Secure environment variable handling
* 📱 Fully responsive UI

---

## 📁 Project Structure

```
contentful-blog-mini/
│
├── app/
│   ├── page.tsx                # Home page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Blog detail page
│
├── components/
│   ├── BlogCard.tsx
│   ├── BlogList.tsx
│   └── ui/                     # shadcn/ui components
│
├── lib/
│   └── contentful.ts           # Contentful API logic
│
├── types/
│   └── blog.ts                 # BlogPost TypeScript type
│
├── public/
├── styles/
├── .env.local                  # Local env (ignored)
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 Contentful Content Model

**Content Type:** `blogPost`

| Field Name    | Type                |
| ------------- | ------------------- |
| title         | Short text          |
| slug          | Short text (unique) |
| excerpt       | Long text           |
| content       | Rich text           |
| coverImage    | Media               |
| publishedDate | Date & Time         |

> ⚠️ Field IDs must match exactly (case-sensitive).

---

## 🔑 Environment Variables

### Local Development (`.env.local`)

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
```

### Vercel (Production)

Add these in:

**Vercel Dashboard → Project → Settings → Environment Variables**

| Key                     | Value                   |
| ----------------------- | ----------------------- |
| CONTENTFUL_SPACE_ID     | your_space_id           |
| CONTENTFUL_ACCESS_TOKEN | your_delivery_api_token |

✔ Add to **Production** and **Preview**

---

## ▶️ Getting Started (Local Setup)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🏗 Build for Production

```bash
npm run build
npm start
```

---

## ⚡ ISR (Incremental Static Regeneration)

Blogs are cached and revalidated every **60 seconds**:

```ts
export const revalidate = 60;
```

This ensures:

* Fast load times
* Automatic content updates from Contentful

---

## 🔍 SEO Implementation

* Dynamic metadata using `generateMetadata`
* Unique title & description per blog
* Optimized Open Graph support (extendable)

Example:

```ts
export async function generateMetadata({ params }) {
  return {
    title: `${post.title} | Contentful Blog`,
    description: post.excerpt,
  };
}
```

---

## 🚀 Deployment (Vercel)

```bash
vercel login
vercel
vercel --prod
```

✔ `.env.local` is excluded
✔ Environment variables configured in Vercel UI

---

## ❗ Common Issues & Fixes

### Blogs show locally but not on Vercel?

✔ Ensure env variables are added in Vercel
✔ Redeploy after adding env variables

### TypeScript error: `category does not exist`

✔ Remove unused fields from UI
✔ Keep `BlogPost` type in sync with Contentful model

---

## 📌 Future Enhancements

* 🔍 Search & filtering
* 🏷 Categories support
* 💬 Comments
* 🧪 Preview mode
* 🌐 i18n support

---

## 👨‍💻 Author

**Ayush Singh**
Full Stack Developer

* GitHub: [https://github.com/Singhayush13](https://github.com/Singhayush13)
* Portfolio: (add if available)

---


