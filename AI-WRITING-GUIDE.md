# AI-Powered Writing Guide

## Overview

This blog system includes Cursor AI rules for automatic content formatting. Convert raw text into properly formatted, SEO-optimized blog posts.

## Getting Started

### Prerequisites

- [Cursor AI Editor](https://cursor.sh/) installed
- This project cloned locally

### Your First AI-Formatted Post

1. **Create file**: `src/app/content/my-post.mdx`
2. **Paste content**: Copy any blog-style text
3. **Trigger AI**: Ask Cursor to "format this as a blog post"
4. **Review and publish**: Commit and push to go live

## AI Rules Overview

### Content Formatting (.cursor/rules/blog-content.mdc)

- Converts raw text to MDX structure
- Generates frontmatter with metadata
- Adds proper heading hierarchy
- Formats code blocks with syntax highlighting

### Code Standards (.cursor/rules/coding-standard.mdc)

- Ensures TypeScript compliance
- Follows component patterns
- Maintains UI consistency

### Performance & Accessibility (.cursor/rules/performance-accessibility.mdc)

- Suggests performance improvements
- Ensures accessibility compliance
- Implements SEO best practices

## Content Migration

Paste content from any platform:

- Medium articles
- Dev.to posts
- WordPress content
- Google Docs
- Raw text files

## Custom Prompts

Use these prompts with Cursor AI:

```
"Format this as a technical blog post with proper frontmatter"
"Convert this to MDX with code highlighting"
"Add SEO optimization to this blog post"
"Structure this content following our blog standards"
```

## Best Practices

### Content Preparation

- Have a clear title
- Include code examples if relevant
- Add relevant tags
- Provide a brief description

### Quality Control

- Always preview posts with `npm run dev`
- Check responsive design
- Verify syntax highlighting
- Test social sharing metadata

## Troubleshooting

### Common Issues

- **AI not activating**: Ensure `.cursor/rules/` directory exists
- **Formatting incorrect**: Check frontmatter syntax
- **Images not loading**: Verify image paths
- **Code blocks broken**: Check language specifications

## Example Transformation

### Before (Raw Text)

```
Getting started with nextjs

Next.js is a React framework. Install with:
npm create next-app@latest

Then run:
npm run dev
```

### After (AI Formatted)

````mdx
---
title: "Getting Started with Next.js"
date: "2024-01-15"
author: "Your Name"
tags: ["nextjs", "react", "tutorial"]
excerpt: "Learn how to build applications with Next.js"
---

# Getting Started with Next.js

Next.js is a React framework for building web applications.

## Installation

```bash
npm create next-app@latest
```
````

## Development

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

```

## Contributing to AI Rules

Improve the AI formatting by editing files in `.cursor/rules/`:

1. Fork the repository
2. Edit rule files
3. Test with different content types
4. Submit pull request with examples
```
