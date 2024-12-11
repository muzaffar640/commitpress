import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/utils/mdx";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

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

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            {/* Cover Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
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

            {/* Content */}
            <div className="prose prose-invert max-w-none">{post.content}</div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
