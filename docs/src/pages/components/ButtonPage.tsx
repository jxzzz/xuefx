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

export function ButtonPage() {
  return (
    <>
      <section className='docs-hero'>
        <p className='docs-hero-eyebrow'>Component</p>
        <h1>
          <code>&lt;Button /&gt;</code>
        </h1>
        <p>
          Three MUI-inspired variants, six semantic color palettes, four sizes. Every style is a
          design token — no hardcoded values.
        </p>
      </section>

      <section className='docs-section'>
        <h3>Variants — Contained, Outlined, Text</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='text'>Text</Button>
          </div>
          <CodeBlock
            code={`<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>`}
          />
        </div>

        <h3>Colors — Six semantic palettes</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button variant='contained' color='primary'>
              Primary
            </Button>
            <Button variant='contained' color='secondary'>
              Secondary
            </Button>
            <Button variant='contained' color='success'>
              Success
            </Button>
            <Button variant='contained' color='error'>
              Error
            </Button>
            <Button variant='contained' color='warning'>
              Warning
            </Button>
            <Button variant='contained' color='info'>
              Info
            </Button>
          </div>
          <CodeBlock
            code={`<Button variant="contained" color="success">Success</Button>
<Button variant="contained" color="error">Error</Button>`}
          />
        </div>

        <h3>Outlined with Colors</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button variant='outlined' color='primary'>
              Primary
            </Button>
            <Button variant='outlined' color='success'>
              Success
            </Button>
            <Button variant='outlined' color='error'>
              Error
            </Button>
            <Button variant='outlined' color='warning'>
              Warning
            </Button>
            <Button variant='outlined' color='info'>
              Info
            </Button>
          </div>
          <CodeBlock
            code={`<Button variant="outlined" color="success">Success</Button>
<Button variant="outlined" color="error">Error</Button>`}
          />
        </div>

        <h3>Sizes — Small, Medium, Large, Icon</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
            <Button size='icon'>★</Button>
          </div>
          <CodeBlock
            code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">★</Button>`}
          />
        </div>

        <h3>States — Disabled &amp; Loading</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button variant='contained' disabled>
              Disabled
            </Button>
            <Button variant='outlined' disabled>
              Disabled
            </Button>
            <Button variant='contained' loading>
              Loading
            </Button>
          </div>
          <CodeBlock
            code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
          />
        </div>

        <h3>With Icons</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage'>
            <Button startIcon={<span>🔍</span>}>Search</Button>
            <Button endIcon={<span>→</span>}>Next Step</Button>
          </div>
          <CodeBlock
            code={`<Button startIcon={<SearchIcon />}>Search</Button>
<Button endIcon={<ArrowIcon />}>Next Step</Button>`}
          />
        </div>
      </section>

      <section className='docs-section'>
        <div className='docs-section-header'>
          <h2>API Reference</h2>
        </div>
        <PropsTable
          rows={[
            {
              name: 'variant',
              type: 'string',
              desc: 'contained | outlined | text (plus backward-compat aliases)',
              default: '"contained"',
            },
            {
              name: 'color',
              type: 'string',
              desc: 'primary | secondary | success | error | warning | info',
              default: '—',
            },
            { name: 'size', type: 'string', desc: 'sm | md | lg | icon', default: '"md"' },
            {
              name: 'loading',
              type: 'boolean',
              desc: 'Show spinner and disable interaction',
              default: 'false',
            },
            { name: 'startIcon', type: 'ReactNode', desc: 'Icon before children', default: '—' },
            { name: 'endIcon', type: 'ReactNode', desc: 'Icon after children', default: '—' },
            { name: 'disabled', type: 'boolean', desc: 'Disable the button', default: 'false' },
            { name: 'className', type: 'string', desc: 'Override or extend styles', default: '—' },
            { name: 'children', type: 'ReactNode', desc: 'Button content', required: true },
            {
              name: '...props',
              type: 'ButtonHTMLAttributes',
              desc: 'Forwarded to <button>',
              default: '—',
            },
          ]}
        />
      </section>
    </>
  );
}
