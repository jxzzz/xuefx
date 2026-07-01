import { Button } from '@xuefx/ui';

function CodeBlock({ code }: { code: string }) {
  return (
    <div className='docs-specimen-source'>
      <pre>
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export function Guide() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className='docs-hero'>
        <p className='docs-hero-eyebrow'>Guide</p>
        <h1>
          From zero to <em>shipping</em>.
        </h1>
        <p>
          Install, theme, toggle dark mode, and reference every design token — all in one place.
        </p>
      </section>

      {/* ════════════ Step 1: Install ════════════ */}
      <section className='docs-section'>
        <div className='docs-section-header'>
          <h2>Install the library</h2>
          <p>One command gets you the core package with all components.</p>
        </div>

        <div className='docs-install-cmd'>npm install @xuefx/ui</div>

        <h3>Quick Start</h3>
        <p>Import the CSS once, then use any component anywhere.</p>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button>Hello World</Button>
          </div>
          <CodeBlock
            code={`import '@xuefx/ui/style.css';
import { Button } from '@xuefx/ui';

function App() {
  return <Button>Hello World</Button>;
}`}
          />
        </div>
      </section>

      {/* ════════════ Step 2: Theme ════════════ */}
      <section className='docs-section'>
        <div className='docs-section-header'>
          <h2>Set your theme</h2>
          <p>
            Every color, radius, and spacing is a CSS custom property. Pick a preset or bring your
            own brand palette.
          </p>
        </div>

        <div className='docs-install-cmd'>npm install @xuefx/ui-theme</div>

        {/* Presets */}
        <div className='docs-guide-block'>
          <h3>Presets — pick one, ship it</h3>
          <CodeBlock
            code={`import { ThemeProvider, themes } from '@xuefx/ui-theme';

// themes.navy, themes.cyan, themes.green,
// themes.red, themes.purple, themes.orange, themes.dark

<ThemeProvider theme={themes.green}>
  <App />
</ThemeProvider>`}
          />
          <div className='docs-preset-swatches'>
            {[
              '222.2 47.4% 11.2%',
              '187 85% 43%',
              '152 82% 34%',
              '0 72% 51%',
              '267 83% 60%',
              '22 89% 52%',
              '215 16% 30%',
            ].map((color) => (
              <span
                key={color}
                className='docs-preset-swatch'
                style={{ background: `hsl(${color})` }}
              />
            ))}
            <span className='docs-preset-label'>+ more presets</span>
          </div>
        </div>

        {/* Custom */}
        <div className='docs-guide-block'>
          <h3>Custom theme — your brand, your values</h3>
          <p>Override just the tokens you need. Everything else falls back to the default.</p>
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
        </div>
      </section>

      {/* ════════════ Step 3: Dark Mode ════════════ */}
      <section className='docs-section'>
        <div className='docs-section-header'>
          <h2>Add dark mode</h2>
          <p>
            Light and dark palettes ship together. Add <code>.dark</code> to any parent — the entire
            tree switches instantly.
          </p>
        </div>

        <CodeBlock
          code={`<!-- Static: add .dark to <html> -->
<html class="dark">
  <!-- All children use the dark palette -->
</html>

// Dynamic: toggle with React
function DarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return <button onClick={() => setDark(!dark)}>Toggle theme</button>;
}`}
        />
      </section>

      {/* ════════════ Step 4: Tokens ════════════ */}
      <section className='docs-section'>
        <div className='docs-section-header'>
          <h2>Design tokens reference</h2>
          <p>
            Every visual attribute is a CSS custom property. Override globally on <code>:root</code>{' '}
            or scope to a container.
          </p>
        </div>

        <table className='docs-props'>
          <thead>
            <tr>
              <th>Token</th>
              <th>CSS Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary</td>
              <td>
                <span className='docs-tag'>--primary</span>
              </td>
              <td>Main brand color</td>
            </tr>
            <tr>
              <td>Primary Foreground</td>
              <td>
                <span className='docs-tag'>--primary-foreground</span>
              </td>
              <td>Text on primary</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td>
                <span className='docs-tag'>--secondary</span>
              </td>
              <td>Muted surface</td>
            </tr>
            <tr>
              <td>Background</td>
              <td>
                <span className='docs-tag'>--background</span>
              </td>
              <td>Page background</td>
            </tr>
            <tr>
              <td>Foreground</td>
              <td>
                <span className='docs-tag'>--foreground</span>
              </td>
              <td>Primary text</td>
            </tr>
            <tr>
              <td>Muted</td>
              <td>
                <span className='docs-tag'>--muted</span>
              </td>
              <td>Subtle surface</td>
            </tr>
            <tr>
              <td>Accent</td>
              <td>
                <span className='docs-tag'>--accent</span>
              </td>
              <td>Hover / active states</td>
            </tr>
            <tr>
              <td>Destructive</td>
              <td>
                <span className='docs-tag'>--destructive</span>
              </td>
              <td>Error / danger color</td>
            </tr>
            <tr>
              <td>Border</td>
              <td>
                <span className='docs-tag'>--border</span>
              </td>
              <td>Borders and dividers</td>
            </tr>
            <tr>
              <td>Input</td>
              <td>
                <span className='docs-tag'>--input</span>
              </td>
              <td>Form input border</td>
            </tr>
            <tr>
              <td>Ring</td>
              <td>
                <span className='docs-tag'>--ring</span>
              </td>
              <td>Focus ring</td>
            </tr>
            <tr>
              <td>Radius</td>
              <td>
                <span className='docs-tag'>--radius</span>
              </td>
              <td>Default border radius</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
