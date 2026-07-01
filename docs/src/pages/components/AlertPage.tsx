import { Alert, AlertTitle, AlertDescription } from '@xuefx/ui';

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

export function AlertPage() {
  return (
    <>
      <section className='docs-hero'>
        <p className='docs-hero-eyebrow'>Component</p>
        <h1>
          <code>&lt;Alert /&gt;</code>
        </h1>
        <p>
          Contextual feedback with title and description. Use for success, warning, error, or
          neutral information messages.
        </p>
      </section>

      <section className='docs-section'>
        <h3>Variants</h3>
        <div className='docs-specimen'>
          <div className='docs-specimen-stage column' style={{ gap: '1rem' }}>
            <Alert>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                A new version of the library is available. <code>npm update @xuefx/ui</code>
              </AlertDescription>
            </Alert>
            <Alert variant='destructive'>
              <AlertTitle>Session Expired</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again to continue.
              </AlertDescription>
            </Alert>
          </div>
          <CodeBlock
            code={`import { Alert, AlertTitle, AlertDescription } from '@xuefx/ui';

<Alert>
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>A new version is available.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Session Expired</AlertTitle>
  <AlertDescription>Please log in again.</AlertDescription>
</Alert>`}
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
              desc: '"default" | "destructive"',
              default: '"default"',
            },
            { name: 'className', type: 'string', desc: 'Override or extend styles', default: '—' },
            {
              name: 'children',
              type: 'ReactNode',
              desc: 'AlertTitle + AlertDescription',
              required: true,
            },
          ]}
        />
      </section>
    </>
  );
}
