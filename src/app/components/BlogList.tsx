import Link from "next/link";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    date: "2024-03-01",
    excerpt:
      "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    slug: "building-scalable-react-applications",
  },
  {
    title: "Optimizing NextJS Performance",
    date: "2024-02-15",
    excerpt:
      "Discover techniques to boost your NextJS application's performance and improve user experience.",
    slug: "optimizing-nextjs-performance",
  },
  {
    title: "Advanced TypeScript Techniques",
    date: "2024-01-30",
    excerpt:
      "Explore advanced TypeScript features and patterns to write more robust and type-safe code.",
    slug: "advanced-typescript-techniques",
  },
  {
    title: "Mastering CSS Grid Layout",
    date: "2024-01-15",
    excerpt:
      "Deep dive into CSS Grid Layout and learn how to create complex, responsive layouts with ease.",
    slug: "mastering-css-grid-layout",
  },
];

export default function BlogList() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center animate-fade-in">
          Blog Posts
        </h1>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
