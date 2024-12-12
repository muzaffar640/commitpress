// next.config.ts
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import type { NextConfig } from "next";

interface PrettyCodeNode {
  children: Array<{ type: string; value: string }>;
  properties?: { className?: string[] };
}

const prettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  onVisitLine(node: PrettyCodeNode) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: PrettyCodeNode) {
    if (node.properties?.className) {
      node.properties.className.push("highlighted");
    }
  },
  onVisitHighlightedWord(node: PrettyCodeNode) {
    if (node.properties) {
      node.properties.className = ["word"];
    }
  },
};

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      } as const,
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
