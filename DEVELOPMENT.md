# Centennial Hills Homes - Development Setup

## 🚀 Quick Start

### Prerequisites
- Node.js >= 15.0.0
- pnpm (recommended package manager)
- VS Code with recommended extensions

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# or use VS Code task: Ctrl+Shift+P > "Tasks: Run Task" > "Dev Server"
```

## 🛠️ Development Commands

### Core Commands
- `pnpm dev` - Start development server with SSR
- `pnpm build` - Build for production (uses Vercel CLI)
- `pnpm preview` - Preview production build locally
- `pnpm deploy` - Deploy to Vercel

### Code Quality
- `pnpm fmt` - Format code with Biome
- `pnpm lint` - Lint code with Biome
- `pnpm build.types` - Type check with TypeScript

## 🔧 VS Code Integration

### Recommended Extensions
All extensions are configured in `.vscode/extensions.json`:
- **Biome** - Fast linter and formatter
- **GitHub Pull Requests** - Manage PRs in VS Code
- **GitHub Copilot** - AI code completion
- **Vercel** - Deploy and manage Vercel projects
- **Tailwind CSS** - CSS framework support
- **TypeScript** - Latest TypeScript features

### VS Code Tasks
Access via `Ctrl+Shift+P` > "Tasks: Run Task":
- **Dev Server** - Start development server
- **Vercel Build** - Build with Vercel CLI
- **Vercel Deploy** - Deploy to Vercel
- **Format Code** - Format with Biome
- **Lint Code** - Lint with Biome
- **Type Check** - TypeScript validation
- **Preview Build** - Preview production build

### Debugging
- **Debug Qwik Dev Server** - Debug development server
- **Debug Vercel Build** - Debug Vercel build process

## 🎯 Project Structure

```
src/
├── components/          # Reusable components
│   ├── router-head/     # Document head component
│   └── starter/         # Example components
├── routes/              # File-based routing
│   ├── demo/            # Demo pages
│   ├── index.tsx        # Home page
│   └── layout.tsx       # Root layout
├── global.css           # Global styles
└── root.tsx             # Root component
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
pnpm deploy

# Or use VS Code task: Ctrl+Shift+P > "Tasks: Run Task" > "Vercel Deploy"
```

### Manual Build
```bash
# Build for production
vercel build

# Preview locally
pnpm preview
```

## 🎨 Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styles
- **PostCSS** - CSS processing with autoprefixer

## 📦 Package Management

- **pnpm** - Fast, disk space efficient package manager
- **Biome** - Fast linter and formatter (replaces ESLint/Prettier)
- **TypeScript** - Type-safe JavaScript

## 🔗 Useful Links

- [Qwik Documentation](https://qwik.builder.io/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev/)

## 🐛 Troubleshooting

### Common Issues
1. **Build fails** - Use `vercel build` instead of `pnpm build`
2. **Type errors** - Run `pnpm build.types` to check types
3. **Format issues** - Run `pnpm fmt` to format code
4. **Lint errors** - Run `pnpm lint` to check code quality

### VS Code Issues
1. **Extensions not working** - Reload VS Code window
2. **Tasks not found** - Check `.vscode/tasks.json` exists
3. **Debug not working** - Check `.vscode/launch.json` exists
