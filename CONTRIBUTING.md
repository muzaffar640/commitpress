# Contributing to DB-Free Blog Portfolio

Thank you for your interest in contributing to DB-Free Blog Portfolio! This document provides guidelines and information for contributors.

## 🎯 Project Vision

We're building the **simplest blog system possible** - one that works like code, using Git as the content management system. Every contribution should align with this core principle of simplicity.

## 🚀 Quick Start for Contributors

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install** dependencies: `npm install`
4. **Run** development server: `npm run dev`
5. Make your changes
6. **Test** your changes thoroughly
7. **Submit** a pull request

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/db-free-blog-portfolio.git
cd db-free-blog-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 Types of Contributions

### 🐛 Bug Reports

- Use the GitHub issue template
- Include steps to reproduce
- Provide system information
- Add screenshots if applicable

### ✨ Feature Requests

- Check existing issues first
- Explain the use case clearly
- Keep features simple and focused
- Consider if it aligns with "database-free" philosophy

### 🔧 Code Contributions

- Follow existing code style
- Add TypeScript types where needed
- Write clear commit messages
- Update documentation if needed

### 📚 Documentation

- Fix typos and clarity issues
- Add examples and use cases
- Improve setup instructions
- Update FAQ section

## 🎨 Code Style Guidelines

### TypeScript/React

- Use functional components with hooks
- Prefer `const` over `let`
- Use TypeScript interfaces for props
- Follow existing naming conventions

### File Structure

```
src/
├── app/
│   ├── content/     # MDX blog posts
│   ├── blog/        # Blog-related pages
│   └── api/         # API routes (if any)
├── components/      # Reusable components
│   ├── ui/         # Basic UI components
│   ├── Blog/       # Blog-specific components
│   └── MDX/        # MDX-related components
├── utils/          # Utility functions
├── lib/            # External library configurations
└── types/          # TypeScript type definitions
```

### Commit Message Format

```
type: short description

Longer description if needed

- Bullet points for details
- Reference issues with #123
```

**Types:**

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/updates
- `chore:` Build process or auxiliary tool changes

## 🧪 Testing Guidelines

### Before Submitting

- [ ] Test your changes locally
- [ ] Verify blog posts render correctly
- [ ] Check responsive design
- [ ] Test with different MDX content
- [ ] Ensure TypeScript compiles without errors
- [ ] Run `npm run build` successfully

### Testing Areas

- MDX file processing
- Blog post listing page
- Individual blog post pages
- Navigation and routing
- SEO meta tags
- Reading time calculation
- Tag functionality

## 📋 Pull Request Process

### Before Creating a PR

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Commit with clear messages

### PR Guidelines

- **Title**: Clear, descriptive title
- **Description**: Explain what and why
- **Screenshots**: For UI changes
- **Testing**: Describe testing done
- **Breaking Changes**: Highlight any breaking changes

### PR Template

```markdown
## What does this PR do?

Brief description of changes

## Why is this needed?

Explain the motivation

## How to test?

Step-by-step testing instructions

## Screenshots (if applicable)

Before/after screenshots

## Checklist

- [ ] I have tested this locally
- [ ] Documentation is updated
- [ ] No breaking changes (or they are documented)
- [ ] TypeScript types are updated
```

## 🚫 What We Don't Want

To keep the project simple and focused:

- **Database dependencies** (defeats the purpose!)
- **Complex CMS features** (admin panels, user management)
- **Heavy frameworks** or unnecessary dependencies
- **Over-engineered solutions** to simple problems
- **Features that break the "two-commit workflow"**

## 🎖️ Recognition

Contributors will be:

- Listed in the README
- Mentioned in release notes
- Given credit in blog posts about the project

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and ideas
- **Twitter/X**: Share your experience using the project

## 🌟 Code of Conduct

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone.

### Our Standards

- Be respectful and inclusive
- Focus on constructive criticism
- Help newcomers learn
- Assume good intentions

### Enforcement

Instances of abusive behavior may be reported to project maintainers. All complaints will be reviewed and investigated.

---

**Thank you for helping make blogging simpler for developers! 🚀**
