import { useNavigate } from 'react-router-dom';
import { Button } from '@xuefx/ui';

interface HomeProps {
  themeKey: string;
  onThemeChange: (key: string) => void;
}

const palette = [
  { key: 'default', label: 'Navy', color: '222.2 47.4% 11.2%' },
  { key: 'cyan', label: 'Cyan', color: '187 85% 43%' },
  { key: 'green', label: 'Green', color: '152 82% 34%' },
  { key: 'red', label: 'Red', color: '0 72% 51%' },
  { key: 'purple', label: 'Purple', color: '267 83% 60%' },
  { key: 'orange', label: 'Orange', color: '22 89% 52%' },
  { key: 'dark', label: 'Dark', color: '215 16% 30%' },
];

export function Home({ themeKey, onThemeChange }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className='home-fullscreen'>
      {/* Subtle background ornament */}
      <div className='home-bg-ornament' />

      <div className='home-content'>
        {/* Eyebrow */}
        <p className='home-eyebrow'>React Component Library</p>

        {/* Headline */}
        <h1 className='home-headline'>
          Components
          <br />
          with <em>precision</em>.
        </h1>

        {/* Subtext */}
        <p className='home-sub'>
          A design-engineered React library with semantic theming and first-class dark mode.
          Install, import, ship.
        </p>

        {/* Theme palette */}
        <div className='home-palette'>
          {palette.map((p) => (
            <button
              key={p.key}
              className={`home-palette-dot${themeKey === p.key ? ' active' : ''}`}
              style={{ background: `hsl(${p.color})` }}
              onClick={() => onThemeChange(p.key)}
              title={p.label}
              aria-label={`Switch to ${p.label} theme`}
            />
          ))}
          <span className='home-palette-label'>
            {palette.find((p) => p.key === themeKey)?.label}
          </span>
        </div>

        {/* CTA */}
        <div className='home-cta'>
          <Button variant='contained' size='lg' onClick={() => navigate('/components')}>
            Explore Components →
          </Button>
          <span className='home-cta-hint'>or press Enter</span>
        </div>
      </div>

      {/* Footer hint */}
      <p className='home-footer-hint'>
        <code>npm install @xuefx/ui</code>
      </p>
    </div>
  );
}
