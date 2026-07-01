import { useState } from 'react';
import { ThemeProvider, themes } from '@xuefx/ui-theme';
import { Button } from '@xuefx/ui';
import { Alert, AlertTitle, AlertDescription } from '@xuefx/ui';
import './App.css';

/* ── Theme palette data ── */
const palette = [
  { key: 'default', label: 'Navy', color: '222.2 47.4% 11.2%' },
  { key: 'cyan', label: 'Cyan', color: '187 85% 43%' },
  { key: 'green', label: 'Green', color: '152 82% 34%' },
  { key: 'red', label: 'Red', color: '0 72% 51%' },
  { key: 'purple', label: 'Purple', color: '267 83% 60%' },
  { key: 'orange', label: 'Orange', color: '22 89% 52%' },
  { key: 'dark', label: 'Dark', color: '215 16% 30%' },
];

/* ── Reusable CodeBlock ── */
function CodeBlock({ code }: { code: string }) {
  return (
    <div className='docs-preview-code'>
      <pre>
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

/* ── Reusable PropsTable ── */
interface PropRow {
  name: string;
  type: string;
  desc: string;
  default?: string;
  required?: boolean;
}

function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className='docs-props'>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td>
              {r.name}
              {r.required && (
                <span className='docs-tag required' style={{ marginLeft: 6 }}>
                  required
                </span>
              )}
            </td>
            <td>
              <span className='docs-tag'>{r.type}</span>
            </td>
            <td>{r.desc}</td>
            <td>{r.default || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── Main App ── */
export default function App() {
  const [themeKey, setThemeKey] = useState('default');

  const theme = themes[themeKey];

  const content = (
    <div className='docs-layout'>
      {/* ── Sidebar ── */}
      <aside className='docs-sidebar'>
        <div className='docs-sidebar-logo'>@xuefx/ui</div>
        <div className='docs-sidebar-version'>v1.0.5</div>

        <div className='docs-nav-section'>Getting Started</div>
        <a className='docs-nav-item active' href='#installation'>
          Installation
        </a>

        <div className='docs-nav-section'>Components</div>
        <a className='docs-nav-item' href='#button'>
          Button
        </a>
        <a className='docs-nav-item' href='#alert'>
          Alert
        </a>

        <div className='docs-nav-section'>Customization</div>
        <a className='docs-nav-item' href='#theming'>
          Theming
        </a>

        <div className='docs-nav-section' style={{ marginTop: '2.5rem' }}>
          <a
            className='docs-nav-item'
            href='https://www.npmjs.com/package/@xuefx/ui'
            target='_blank'
            rel='noopener'
            style={{ fontSize: '0.8125rem' }}
          >
            npm →
          </a>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className='docs-main'>
        {/* Hero */}
        <section className='docs-hero'>
          <h1>
            Build your interface,
            <br />
            not the boilerplate.
          </h1>
          <p>
            A React component library with built-in theming, semantic CSS classes, and zero-config
            dark mode. Install, import, and ship.
          </p>

          <div className='docs-theme-palette'>
            {palette.map((p) => (
              <button
                key={p.key}
                className={`docs-theme-dot${themeKey === p.key ? ' active' : ''}`}
                style={{ background: `hsl(${p.color})` }}
                onClick={() => setThemeKey(p.key)}
                title={p.label}
                aria-label={`Switch to ${p.label} theme`}
              />
            ))}
            <span className='docs-theme-label'>
              {palette.find((p) => p.key === themeKey)?.label}
            </span>
          </div>
        </section>

        {/* ── Installation ── */}
        <section className='docs-section' id='installation'>
          <h2>Installation</h2>
          <p>One command, then import the CSS and start using components.</p>
          <CodeBlock code={`npm install @xuefx/ui`} />

          <h3 style={SUBHEADING_STYLE}>Quick Start</h3>
          <div className='docs-preview'>
            <div className='docs-preview-frame'>
              <Button>Hello World</Button>
            </div>
            <CodeBlock
              code={`import '@xuefx/ui/style.css';
import { Button } from '@xuefx/ui';

<Button>Hello World</Button>`}
            />
          </div>
        </section>

        {/* ── Button ── */}
        <section className='docs-section' id='button'>
          <h2>
            <code>&lt;Button /&gt;</code>
          </h2>
          <p>
            A versatile button with 6 variants and 4 sizes. All styles are applied through semantic
            CSS classes — override with plain CSS.
          </p>

          <h3 style={SUBHEADING_STYLE}>Variants</h3>
          <div className='docs-preview'>
            <div className='docs-preview-frame'>
              <Button>Default</Button>
              <Button variant='secondary'>Secondary</Button>
              <Button variant='destructive'>Destructive</Button>
              <Button variant='outline'>Outline</Button>
              <Button variant='ghost'>Ghost</Button>
              <Button variant='link'>Link</Button>
            </div>
            <CodeBlock
              code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            />
          </div>

          <h3 style={{ ...SUBHEADING_STYLE, margin: '1.5rem 0 0.75rem' }}>Sizes</h3>
          <div className='docs-preview'>
            <div className='docs-preview-frame' style={{ alignItems: 'center' }}>
              <Button size='sm'>Small</Button>
              <Button size='default'>Default</Button>
              <Button size='lg'>Large</Button>
              <Button size='icon'>★</Button>
            </div>
            <CodeBlock
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">★</Button>`}
            />
          </div>

          <PropsTable
            rows={[
              { name: 'variant', type: 'string', desc: 'Visual style', default: '"default"' },
              { name: 'size', type: 'string', desc: 'Size preset', default: '"default"' },
              {
                name: 'className',
                type: 'string',
                desc: 'Override or extend styles',
                default: '—',
              },
              { name: 'disabled', type: 'boolean', desc: 'Disable the button', default: 'false' },
              { name: 'children', type: 'ReactNode', desc: 'Button content', required: true },
              {
                name: '...props',
                type: 'ButtonHTMLAttributes',
                desc: 'Forwarded to &lt;button&gt;',
                default: '—',
              },
            ]}
          />
        </section>

        {/* ── Alert ── */}
        <section className='docs-section' id='alert'>
          <h2>
            <code>&lt;Alert /&gt;</code>
          </h2>
          <p>
            A contextual message with optional title and description. Use for success, info,
            warning, or error feedback.
          </p>

          <h3 style={SUBHEADING_STYLE}>Variants</h3>
          <div className='docs-preview'>
            <div
              className='docs-preview-frame'
              style={{ flexDirection: 'column', alignItems: 'stretch', gap: '1rem', maxWidth: 480 }}
            >
              <Alert>
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>This is a neutral informational message.</AlertDescription>
              </Alert>
              <Alert variant='destructive'>
                <AlertTitle>Destructive</AlertTitle>
                <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
              </Alert>
            </div>
            <CodeBlock
              code={`<Alert>
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a neutral informational message.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Destructive</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>`}
            />
          </div>

          <PropsTable
            rows={[
              {
                name: 'variant',
                type: 'string',
                desc: '"default" | "destructive"',
                default: '"default"',
              },
              {
                name: 'className',
                type: 'string',
                desc: 'Override or extend styles',
                default: '—',
              },
              {
                name: 'children',
                type: 'ReactNode',
                desc: 'AlertTitle + AlertDescription',
                required: true,
              },
            ]}
          />
        </section>

        {/* ── Theming ── */}
        <section className='docs-section' id='theming'>
          <h2>Theming</h2>
          <p>
            Every color is a CSS custom property. Install the theme package, then use a preset or
            define your own brand palette.
          </p>

          <CodeBlock code={`npm install @xuefx/ui-theme`} />

          <h3 style={SUBHEADING_STYLE}>Use a preset</h3>

          <CodeBlock
            code={`import { ThemeProvider, themes } from '@xuefx/ui-theme';

<ThemeProvider theme={themes.green}>
  <App />
</ThemeProvider>`}
          />

          <p style={{ marginTop: '1.25rem' }}>Or build a custom theme:</p>

          <CodeBlock
            code={`import { ThemeProvider, createTheme } from '@xuefx/ui-theme';

const brand = createTheme({
  colors: {
    primary: '262 83% 58%',
    'primary-foreground': '0 0% 100%',
  },
  radius: '0.75rem',
});

<ThemeProvider theme={brand}>
  <App />
</ThemeProvider>`}
          />
        </section>
      </main>
    </div>
  );

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
}

const SUBHEADING_STYLE: React.CSSProperties = {
  fontSize: '0.9375rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: 'hsl(var(--foreground))',
};
