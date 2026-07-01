import { useNavigate } from 'react-router-dom';

const componentList = [
  {
    path: '/components/button',
    name: 'Button',
    tag: '<Button />',
    desc: 'Three MUI-inspired variants, six semantic color palettes, four sizes. Includes loading state and icon support.',
    features: ['contained · outlined · text', '6 colors', '4 sizes', 'loading'],
  },
  {
    path: '/components/alert',
    name: 'Alert',
    tag: '<Alert />',
    desc: 'Contextual feedback with title and description. Default and destructive variants for information and error states.',
    features: ['default · destructive', 'title + description', 'icon support'],
  },
];

export function Components() {
  const navigate = useNavigate();

  return (
    <>
      <section className='docs-hero'>
        <p className='docs-hero-eyebrow'>Components</p>
        <h1>
          The <em>building blocks</em>.
        </h1>
        <p>
          Every component exposes a consistent API — variant, size, color — all driven by design
          tokens. Click a component to see its full specification.
        </p>
      </section>

      <section className='docs-section'>
        <div className='docs-component-grid'>
          {componentList.map((c) => (
            <button key={c.path} className='docs-component-card' onClick={() => navigate(c.path)}>
              <div className='docs-component-card-tag'>{c.tag}</div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <div className='docs-component-card-features'>
                {c.features.map((f) => (
                  <span key={f} className='docs-tag'>
                    {f}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
