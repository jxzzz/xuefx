import { type ReactNode, createContext, useContext, useMemo } from 'react';
import type { ThemeConfig } from './create-theme.js';

const ThemeContext = createContext<ThemeConfig | null>(null);

/**
 * Access the current theme object provided by the nearest ThemeProvider.
 * Returns `null` when no ThemeProvider is mounted (i.e. using default :root styles).
 */
export function useTheme(): ThemeConfig | null {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  theme: ThemeConfig | null;
  children: ReactNode;
}

/**
 * Inject a custom theme into a component subtree.
 *
 * CSS custom properties are set as inline styles on a wrapper <div>,
 * scoping them to the subtree. When no ThemeProvider is used, the global
 * `:root` variables from `theme/styles.css` serve as the default.
 */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const style = useMemo(() => {
    const vars: Record<string, string> = {};
    if (!theme) return vars;
    if (theme.colors) {
      for (const [key, value] of Object.entries(theme.colors)) {
        vars[`--${key}`] = value;
      }
    }
    if (theme.radius) {
      vars['--radius'] = theme.radius;
    }
    return vars;
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={style} data-theme>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
