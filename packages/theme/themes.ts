import { createTheme } from './create-theme.js';
import type { ThemeConfig } from './create-theme.js';

/**
 * Pre-built theme presets.
 *
 * Usage:
 *   import { themes } from '@xuefx/ui-theme';
 *   <ThemeProvider theme={themes.green}>
 *     <App />
 *   </ThemeProvider>
 */
export const themes: Record<string, ThemeConfig> = {
  /** Default navy — matches :root variables, explicitly wraps with ThemeProvider */
  default: createTheme({}),

  /** Sky blue brand — 清新科技感 */
  cyan: createTheme({
    colors: {
      primary: '187 85% 43%',
      'primary-foreground': '0 0% 100%',
      ring: '187 85% 43%',
    },
  }),

  /** Emerald green brand — 自然、健康、金融 */
  green: createTheme({
    colors: {
      primary: '152 82% 34%',
      'primary-foreground': '0 0% 100%',
      ring: '152 82% 34%',
    },
  }),

  /** Warm red brand — 热情、电商、活动 */
  red: createTheme({
    colors: {
      primary: '0 72% 51%',
      'primary-foreground': '0 0% 100%',
      ring: '0 72% 51%',
    },
  }),

  /** Purple brand — 创意、教育、高端 */
  purple: createTheme({
    colors: {
      primary: '267 83% 60%',
      'primary-foreground': '0 0% 100%',
      ring: '267 83% 60%',
    },
  }),

  /** Orange brand — 活力、运动、食品 */
  orange: createTheme({
    colors: {
      primary: '22 89% 52%',
      'primary-foreground': '0 0% 100%',
      ring: '22 89% 52%',
    },
  }),

  /** Slate dark — 极简高级灰 */
  dark: createTheme({
    colors: {
      primary: '215 16% 30%',
      'primary-foreground': '210 40% 98%',
      ring: '215 16% 30%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '217.2 32.6% 17.5%',
      'card-foreground': '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      muted: '217.2 32.6% 17.5%',
      'muted-foreground': '215 20.2% 65.1%',
    },
  }),
};
