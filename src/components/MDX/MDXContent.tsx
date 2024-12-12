"use client";

interface MDXContentProps {
  source: React.ReactNode;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="mdx-content prose prose-invert prose-lg max-w-none">
      {source}
    </div>
  );
}
