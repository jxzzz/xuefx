import { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { ThemeProvider, themes } from '@xuefx/ui-theme';
import { Home } from './pages/Home';
import { Components } from './pages/Components';
import { Guide } from './pages/Guide';
import { ButtonPage } from './pages/components/ButtonPage';
import { AlertPage } from './pages/components/AlertPage';
import './App.css';

type ThemeKey = keyof typeof themes;

/* ── Component sub-nav data ── */
const componentSubItems = [
  { to: '/components/button', label: 'Button' },
  { to: '/components/alert', label: 'Alert' },
];

/* ── DocsLayout — sidebar + content for inner pages ── */
function DocsLayout() {
  return (
    <div className='docs-layout'>
      <aside className='docs-sidebar'>
        <div className='docs-sidebar-header'>
          <NavLink to='/' className='docs-sidebar-logo'>
            @xuefx/ui
          </NavLink>
          <span className='docs-sidebar-version'>v1.0.7</span>
        </div>

        <div className='docs-nav-section'>Navigation</div>

        <NavLink
          to='/guide'
          className={({ isActive }) => `docs-nav-item${isActive ? ' active' : ''}`}
        >
          Guide
        </NavLink>

        <div className='docs-nav-section'>Components</div>

        {componentSubItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `docs-nav-item${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}

        <div className='docs-sidebar-footer'>
          <div className='docs-nav-section'>Links</div>
          <a
            className='docs-nav-item'
            href='https://www.npmjs.com/package/@xuefx/ui'
            target='_blank'
            rel='noopener'
          >
            npm ↗
          </a>
        </div>
      </aside>

      <main className='docs-main'>
        <Outlet />
      </main>
    </div>
  );
}

/* ── App ── */
export default function App() {
  const [themeKey, setThemeKey] = useState<ThemeKey>('default');
  const theme = themes[themeKey];

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          {/* Fullscreen home */}
          <Route
            path='/'
            element={<Home themeKey={themeKey} onThemeChange={(k) => setThemeKey(k as ThemeKey)} />}
          />

          {/* Inner pages with DocsLayout sidebar */}
          <Route element={<DocsLayout />}>
            <Route path='/guide' element={<Guide />} />
            <Route path='/components' element={<Components />} />
            <Route path='/components/button' element={<ButtonPage />} />
            <Route path='/components/alert' element={<AlertPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
