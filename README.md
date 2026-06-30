# Fable UI

A React component library with built-in theming, semantic CSS classes, and zero-config dark mode.

## Packages

| Package           | npm                                                                                                   | Description                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `@xuefx/ui`       | [![npm](https://img.shields.io/npm/v/@xuefx/ui)](https://www.npmjs.com/package/@xuefx/ui)             | Component library (Button, Alert, …)          |
| `@xuefx/ui-theme` | [![npm](https://img.shields.io/npm/v/@xuefx/ui-theme)](https://www.npmjs.com/package/@xuefx/ui-theme) | Design tokens, Tailwind preset, theming tools |

## Quick Start

```bash
npm install @xuefx/ui
```

```jsx
import '@xuefx/ui/style.css';
import { Button } from '@xuefx/ui';

function App() {
  return <Button>Hello World</Button>;
}
```

## Theming

```bash
npm install @xuefx/ui-theme
```

```jsx
import { ThemeProvider, themes } from '@xuefx/ui-theme';

<ThemeProvider theme={themes.green}>
  <App />
</ThemeProvider>;
```

Or define your own:

```jsx
import { ThemeProvider, createTheme } from '@xuefx/ui-theme';

const brand = createTheme({
  colors: {
    primary: '262 83% 58%',
    'primary-foreground': '0 0% 100%',
  },
});

<ThemeProvider theme={brand}>
  <App />
</ThemeProvider>;
```

## Development

```bash
pnpm install          # install dependencies
pnpm dev              # start docs dev server
pnpm build            # build core library
pnpm -F docs build    # build docs site
```

## License

ISC
