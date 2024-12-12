// next.config.ts
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

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

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["localhost"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
