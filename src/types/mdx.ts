// src/types/mdx.ts
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface SerializedMDX {
  compiledSource: string;
  scope?: Record<string, unknown>;
}

export interface MDXContentProps {
  source: MDXRemoteSerializeResult | React.ReactNode;
}
