## 🤖 AI-Assisted Development with Cursor

This project includes Cursor rules that help maintain code quality and consistency.

### Using Cursor for Contributions

1. **Install Cursor**: [Download Cursor](https://cursor.sh/)
2. **Open project** in Cursor
3. **AI rules activate automatically**
4. **Write code** with AI assistance following project standards

### What the AI Rules Provide

- **Automatic code formatting** following project standards
- **Component structure guidance** with TypeScript patterns
- **Performance optimization** suggestions
- **Accessibility compliance** checks
- **Blog content formatting** from raw text to MDX

### Contributing Blog Content

Easy way to contribute example content:

1. Find blog content (with permission)
2. Paste raw text into new `.mdx` file
3. Let Cursor AI format it
4. Submit PR with properly formatted content

## 📝 Content Contribution Workflow

### Traditional vs AI-Powered

**Traditional:**

```
1. Research content guidelines
2. Manually format in MDX
3. Add frontmatter fields
4. Format code blocks
5. Optimize for SEO
6. Submit PR
```

**AI-Powered:**

```
1. Paste raw content
2. Ask AI to "format as blog post"
3. Review and commit
4. Submit PR
```

### AI Prompts for Contributors

**For Blog Posts:**

```
"Format this as a technical blog post following our MDX standards"
"Add proper frontmatter and SEO optimization"
```

**For Code:**

```
"Follow the project's TypeScript patterns"
"Ensure this component meets accessibility standards"
```

## 🔧 Development Environment Setup

### Cursor Configuration

1. **Install Cursor**: Download from [cursor.sh](https://cursor.sh/)
2. **Open project**: AI rules activate automatically
3. **Test**: Create a test `.mdx` file and ask Cursor to format content

### Troubleshooting AI Integration

**AI not providing suggestions?**

- Ensure `.cursor/rules/` directory exists
- Check that Cursor has proper project context
- Try restarting Cursor

**Suggestions not following standards?**

- Update to latest Cursor version
- Check rule files for syntax errors
- Submit issue if rules need improvement

## 🌟 Contributing to AI Rules

Help improve our AI rules:

### Rule Files

- `.cursor/rules/blog-content.mdc` - Content formatting
- `.cursor/rules/coding-standard.mdc` - Code standards
- `.cursor/rules/performance-accessibility.mdc` - Performance & accessibility
- `.cursor/rules/ui-components.mdc` - Component patterns

### How to Contribute Rules

1. **Identify improvement area**
2. **Test with various content types**
3. **Update rule files**
4. **Submit PR with examples**

### Testing Rule Changes

Before submitting rule updates:

1. Test with different content types
2. Verify AI suggestions are helpful
3. Ensure no conflicts with existing rules
4. Document any breaking changes
