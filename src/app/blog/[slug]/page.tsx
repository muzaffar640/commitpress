import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { getPostBySlug } from "@/utils/mdx";
import { MDXContent } from "@/components/MDX/MDXContent";
import Header from "@/components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <article className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">{post.title}</h1>

            <div className="flex items-center justify-center gap-4 mb-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags?.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-gray-700 text-cyan-400"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <MDXContent source={post.content} />
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </>
  );
}
