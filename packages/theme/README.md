# @xuefx/ui-theme

Design tokens, Tailwind preset, and theming tools for [@xuefx/ui](https://www.npmjs.com/package/@xuefx/ui).

## Usage

```js
// 1. Import design tokens (CSS custom properties)
import '@xuefx/ui-theme/styles.css';

// 2. Build your own theme
import { ThemeProvider, createTheme, themes } from '@xuefx/ui-theme';

const myTheme = createTheme({
  colors: { primary: '142 76% 36%', 'primary-foreground': '0 0% 100%' },
});

// 3. Or use a preset
<ThemeProvider theme={themes.green}>
  <App />
</ThemeProvider>;
```

## Presets

| Preset          |               |
| --------------- | ------------- |
| `themes.green`  | Emerald green |
| `themes.cyan`   | Sky blue      |
| `themes.red`    | Warm red      |
| `themes.purple` | Purple        |
| `themes.orange` | Orange        |
| `themes.dark`   | Dark mode     |
