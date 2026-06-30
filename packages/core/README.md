# @xuefx/ui

React UI component library. Powered by [Tailwind CSS](https://tailwindcss.com) + [CVA](https://cva.style).

## Install

```bash
npm install @xuefx/ui @xuefx/ui-theme
```

## Usage

```js
import '@xuefx/ui/style.css'; // component styles + design tokens
import { Button, Alert, AlertTitle, AlertDescription } from '@xuefx/ui';
```

## Components

### Button

```jsx
import { Button } from '@xuefx/ui';

<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">★</Button>
```

### Alert

```jsx
import { Alert, AlertTitle, AlertDescription } from '@xuefx/ui';

<Alert>
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is a message.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Styling

All components render semantic CSS classes (`fx-btn`, `fx-btn-primary`, `fx-alert`, etc.) — override them with plain CSS:

```css
.fx-btn {
  border-radius: 12px;
}
```

### Theming

```js
import { ThemeProvider, createTheme, themes } from '@xuefx/ui-theme';

<ThemeProvider theme={themes.green}>
  <App />
</ThemeProvider>;
```
