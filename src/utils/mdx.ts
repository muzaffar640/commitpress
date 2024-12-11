import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const POSTS_PATH = path.join(process.cwd(), "src/app/content");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tags: string[];
  content: React.ReactElement;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
}

// Ensure the blog directory exists
function ensureBlogDirectory() {
  if (!fs.existsSync(POSTS_PATH)) {
    fs.mkdirSync(POSTS_PATH, { recursive: true });
    console.log("Created blog directory at:", POSTS_PATH);
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    ensureBlogDirectory();
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.log(`Post not found: ${slug}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true },
    });

    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      content: mdxContent,
      readingTime,
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    ensureBlogDirectory();

    const files = fs.readdirSync(POSTS_PATH);
    if (!files.length) {
      console.log("No blog posts found. Directory:", POSTS_PATH);
      return [];
    }

    const posts = await Promise.all(
      files
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map(async (fileName) => {
          const slug = fileName.replace(".mdx", "");
          const post = await getPostBySlug(slug);
          return post;
        })
    );

    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}
