# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React UI component library using a pnpm monorepo. Currently has `Button` and `Alert` components, with a theme/design-token system.

**Versions:** React 19.1, Vite 6.3, Tailwind CSS 3.4, pnpm 10.11, ESLint 9 (flat config). All source is JavaScript/JSX (no TypeScript).

## Commands

```bash
# Install dependencies
pnpm install

# Start docs/dev app (Vite dev server on the docs package)
pnpm dev

# Build the core component library (output to packages/core/dist/)
pnpm build

# Watch-build the core library (rebuilds on file changes)
pnpm -F core dev

# Lint (ESLint 9 flat config)
pnpm lint        # NOTE: runs `eslint .` at root, but only docs/ has an eslint.config.js.
                 # This will miss core package files until an ESLint config is added there.
pnpm -F docs lint  # Lint the docs package explicitly

# Preview built docs
pnpm preview
```

## Architecture

```
react-ui/
├── packages/core/         # The component library (publishable)
│   ├── components/        # One directory per component
│   │   ├── Button/        #   Button.jsx + Button.test.jsx + Button.demo.jsx + index.js
│   │   ├── Alert/         #   Alert.jsx + Alert.test.jsx + Alert.demo.jsx + index.js
│   │   └── index.js       #   Barrel re-export of all components
│   ├── lib/               # Shared utilities
│   │   ├── cn.js          #   clsx + tailwind-merge helper
│   │   └── index.js
│   ├── index.js           # Library entry — exports components + cn, imports styles
│   └── styles.css         # Tailwind directives
├── packages/theme/        # Design tokens & Tailwind preset
│   ├── tokens.js          #   JS constants (colors, spacing, borderRadius, fontSize)
│   ├── tailwind-preset.js #   Maps CSS variables → Tailwind utility classes
│   ├── styles.css         #   CSS custom properties (:root + .dark)
│   └── index.js           #   Barrel export
├── docs/                  # Showcase/demo SPA — consumes `core` and `theme` via workspace protocol
├── pnpm-workspace.yaml    # Defines workspace: packages/* and docs
└── package.json           # Root workspace — scripts delegate via `pnpm -F <package>`
```

## Key Patterns

### Theme / Design Tokens

Design tokens live in `packages/theme/` and flow into components through two channels:

1. **CSS custom properties** (`theme/styles.css`) — imported by `core/index.js` and `docs/src/main.jsx`. Vite handles JS-imported CSS natively. Color values are HSL channels (no `hsl()` wrapper) so Tailwind opacity modifiers work: `bg-primary/50`.

2. **Tailwind preset** (`theme/tailwind-preset.js`) — maps each CSS variable into Tailwind's `theme.colors`, e.g. `primary: 'hsl(var(--primary))'`. Both `core` and `docs` tailwind configs include this preset.

This means components write `bg-primary` / `text-primary-foreground` and get semantic colors that respect light/dark mode.

### Component Pattern (CVA + forwardRef)

Every component follows the same pattern, borrowed from shadcn/ui:

```jsx
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';

// 1. Define variants with cva — exported so consumers can extend them
const buttonVariants = cva('base classes...', {
  variants: {
    variant: { ... },
    size: { ... },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

// 2. Forward ref, merge className via cn()
const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});

export { Button, buttonVariants };
```

Key points:

- `cn()` = `twMerge(clsx(...))` — resolves conflicting Tailwind classes (later wins).
- Variants are **exported** so consumers can inspect/extend them.
- Base classes use **semantic tokens** (`bg-primary`, not `bg-blue-500`).
- `React.forwardRef` is used on every component that wraps a DOM element.

### Component Directory Standard

```
components/Button/
├── Button.jsx          # Implementation (CVA variants, forwardRef)
├── Button.test.jsx     # Test skeleton — patterns for vitest + @testing-library/react
├── Button.demo.jsx     # Demo component — renders all variant × size combos
└── index.js            # Barrel re-export
```

### Core Build

Vite library mode — outputs ESM (`my-lib.es.js`) and UMD (`my-lib.umd.js`) plus a separate CSS file (`my-lib-style.css`). The `"main"` field in core's `package.json` points to `dist/index.js`.

### Development Mode vs Production

- **Development**: `docs/vite.config.js` aliases `core` to `../packages/core` (the source directory). The docs app imports directly from source, so component changes hot-reload instantly without rebuilding. Subpath imports like `core/components/Button/Button.demo` also work because the alias points to a directory.
- **Production build**: `docs/package.json` depends on `core` via `"core": "workspace:^"`. The built `packages/core/dist/` is used, resolved through the `"main"` field.

### pnpm Workspace

Defined in `pnpm-workspace.yaml`. `docs` depends on both `core` and `theme` via `workspace:^`. Package scripts delegate through the root: `pnpm dev` → `pnpm -F docs dev`, `pnpm build` → `pnpm -F core build`.

### Linting

ESLint 9 flat config exists **only** in `docs/`. The root `"lint": "eslint ."` script runs at root level but has no root config — it will miss files in `packages/core/`. To properly lint core, add an `eslint.config.js` there.

### Testing

No test framework is configured yet. Each component has a `*.test.jsx` skeleton documenting the intended test patterns (vitest + @testing-library/react conventions). These are documentation-only for now.
