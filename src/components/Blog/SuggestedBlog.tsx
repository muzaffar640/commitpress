"use client";

import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { BlogPost } from "@/utils/mdx";

export default function SuggestedBlog() {
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
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Others Blogs you may like
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card
              key={post.slug}
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
