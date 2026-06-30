import { colors, borderRadius, spacing, fontSize } from './tokens.js';
import type { TokenColors } from './tokens.js';

export interface ThemeConfig {
  colors: Partial<TokenColors>;
  borderRadius: Record<string, string>;
  spacing: Record<string, string>;
  fontSize: Record<string, [string, { lineHeight: string }]>;
  radius: string;
}

const defaultTokens: ThemeConfig = { colors, borderRadius, spacing, fontSize, radius: '0.5rem' };

/**
 * Create a theme object by merging user overrides with the default design tokens.
 *
 * @example
 * const brandTheme = createTheme({
 *   colors: { primary: '142 76% 36%', 'primary-foreground': '0 0% 100%' },
 *   radius: '0.75rem',
 * });
 */
export function createTheme(userConfig: Partial<ThemeConfig> = {}): ThemeConfig {
  return {
    colors: { ...defaultTokens.colors, ...userConfig.colors },
    borderRadius: { ...defaultTokens.borderRadius, ...userConfig.borderRadius },
    spacing: { ...defaultTokens.spacing, ...userConfig.spacing },
    fontSize: { ...defaultTokens.fontSize, ...userConfig.fontSize },
    radius: userConfig.radius ?? defaultTokens.radius,
  };
}
