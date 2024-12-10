"use client";

import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    date: "2024-03-01",
    excerpt:
      "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    slug: "building-scalable-react-applications",
    tags: ["React", "Architecture", "Performance"],
  },
  {
    title: "Optimizing NextJS Performance",
    date: "2024-02-15",
    excerpt:
      "Discover techniques to boost your NextJS application's performance and improve user experience.",
    slug: "optimizing-nextjs-performance",
    tags: ["NextJS", "Performance", "Optimization"],
  },
  {
    title: "Advanced TypeScript Techniques",
    date: "2024-01-30",
    excerpt:
      "Explore advanced TypeScript features and patterns to write more robust and type-safe code.",
    slug: "advanced-typescript-techniques",
    tags: ["TypeScript", "Development", "Best Practices"],
  },
  {
    title: "Mastering CSS Grid Layout",
    date: "2024-01-15",
    excerpt:
      "Deep dive into CSS Grid Layout and learn how to create complex, responsive layouts with ease.",
    slug: "mastering-css-grid-layout",
    tags: ["CSS", "Layout", "Responsive Design"],
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Latest Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the latest in web development, architecture, and best
            practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 2).map((post, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group">
                  <CardTitle className="text-xl mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </Link>

                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-700 text-cyan-400 hover:bg-gray-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                  >
                    Read article
                    <ArrowRight
                      size={16}
                      className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-400 text-gray-900 hover:bg-cyan-300 transition-colors duration-300"
          >
            View all posts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
