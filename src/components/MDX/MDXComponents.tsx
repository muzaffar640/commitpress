"use client";
import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

// Define proper types for Next.js Image component
interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ReactElementWithProps extends ReactElement {
  props: {
    children?: ReactNode;
    [key: string]: any;
  };
}

const H1: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-3xl font-bold mt-8 mb-4 text-white">{children}</h1>
);

const H2: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h2>
);

const H3: FC<PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl font-semibold mt-6 mb-3 text-white">{children}</h3>
);

const P: FC<PropsWithChildren> = ({ children }) => (
  <p className="leading-7 mb-4 text-gray-200">{children}</p>
);

const UL: FC<PropsWithChildren> = ({ children }) => (
  <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
    {children}
  </ul>
);

const OL: FC<PropsWithChildren> = ({ children }) => (
  <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-200">
    {children}
  </ol>
);

const LI: FC<PropsWithChildren> = ({ children }) => (
  <li className="leading-7">{children}</li>
);

const InlineCode: FC<PropsWithChildren> = ({ children }) => (
  <code className="bg-gray-700 text-cyan-400 px-1.5 py-0.5 rounded-md text-sm">
    {children}
  </code>
);

const extractTextContent = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractTextContent).join("");
  if (React.isValidElement(node)) {
    const element = node as ReactElementWithProps;
    return extractTextContent(element.props.children || "");
  }
  return "";
};

const Pre: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const rawCode = extractTextContent(children);
  const language = className?.replace("language-", "") || "plaintext";

  return (
    <div className="relative group">
      <div className="absolute right-4 top-4 z-10">
        <button
          onClick={() => onCopy(rawCode)}
          className={cn(
            "p-2 rounded-lg transition-all",
            "bg-gray-800 hover:bg-gray-700",
            "focus:outline-none focus:ring-2 focus:ring-cyan-500"
          )}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
      <div className="absolute left-4 top-3 text-sm text-gray-500">
        {language}
      </div>
      <pre
        className={cn(
          "mt-6 relative rounded-lg bg-gray-900 p-4",
          "overflow-x-auto text-sm leading-6",
          className
        )}
      >
        {children}
      </pre>
    </div>
  );
};

const BlockQuote: FC<PropsWithChildren> = ({ children }) => (
  <blockquote className="border-l-4 border-cyan-400 pl-4 mb-4 italic text-gray-300">
    {children}
  </blockquote>
);

const A: FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <a
    href={href}
    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const MDXImage: FC<MDXImageProps> = ({
  src,
  alt,
  width = 800,
  height = 400,
}) => (
  <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover"
    />
  </div>
);

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  code: InlineCode,
  pre: Pre,
  blockquote: BlockQuote,
  a: A,
  img: MDXImage,
};
