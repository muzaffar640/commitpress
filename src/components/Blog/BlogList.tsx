// src/components/Blog/BlogList.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/utils/mdx";

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center animate-fade-in">
          Blog Posts
        </h1>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              className="bg-gray-800 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-300 mb-4">{post.excerpt}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag, i) => (
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
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                  >
                    Read more
                    <ArrowRight
                      size={16}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
