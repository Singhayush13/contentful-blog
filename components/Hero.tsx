import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react"; // Optional: Add an icon for flair

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle background glow for depth */}
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[120px] bg-primary" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge/Tagline */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <span>Powered by Contentful & Next.js 15</span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Modern Content <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Engineered for Speed
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Experience the seamless integration of a headless CMS and the power of 
            the App Router. Scalable, type-safe, and lightning-fast.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-8 h-12 text-md">
              <Link href="/blog">
                Explore Articles <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 h-12 text-md">
              <Link href="https://github.com" target="_blank">
                View Source
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}