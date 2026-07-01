import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button, buttonVariants } from './Button';

describe('Button', () => {
  // === Rendering ===

  it('renders with base class and default styles', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('fx-btn');
    // Default variant="default" → contained → bg-primary, shadow, etc.
    expect(btn.className).toContain('bg-primary');
    expect(btn.className).toContain('text-primary-foreground');
    // Default size="default" → md → h-9, px-4
    expect(btn.className).toContain('h-9');
    expect(btn.className).toContain('px-4');
  });

  // === MUI Variants ===

  it('contained: has bg-primary and shadow', () => {
    render(<Button variant='contained'>Contained</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-primary');
    expect(btn.className).toContain('text-primary-foreground');
    expect(btn.className).toContain('shadow-sm');
  });

  it('outlined: has border and transparent bg', () => {
    render(<Button variant='outlined'>Outlined</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('bg-transparent');
  });

  it('text: has no border or background', () => {
    render(<Button variant='text'>Text</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('border-none');
    expect(btn.className).toContain('bg-transparent');
    expect(btn.className).toContain('shadow-none');
  });

  // === Backward-compatible shadcn/ui variants ===

  it('"default" variant → contained style', () => {
    render(<Button variant='default'>Default</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-primary');
    expect(btn.className).toContain('text-primary-foreground');
  });

  it('"outline" alias → outlined style', () => {
    render(<Button variant='outline'>Outline</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('bg-transparent');
  });

  it('destructive: has destructive bg', () => {
    render(<Button variant='destructive'>Delete</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-destructive');
    expect(btn.className).toContain('text-destructive-foreground');
  });

  it('secondary: has secondary bg', () => {
    render(<Button variant='secondary'>Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-secondary');
  });

  it('ghost: has no border or shadow', () => {
    render(<Button variant='ghost'>Ghost</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('border-none');
    expect(btn.className).toContain('shadow-none');
  });

  it('link: has underline-offset and hover:underline', () => {
    render(<Button variant='link'>Link</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('underline-offset-4');
    expect(btn.className).toContain('hover:underline');
  });

  // === Colors (MUI color system) ===

  it('color=success overrides to emerald', () => {
    render(
      <Button variant='contained' color='success'>
        Success
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-emerald-600');
    expect(btn.className).toContain('text-white');
  });

  it('color=error outlined has red border and text', () => {
    render(
      <Button variant='outlined' color='error'>
        Error
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('text-red-600');
    expect(btn.className).toContain('border-red-600/50');
  });

  it('color=warning text has amber text', () => {
    render(
      <Button variant='text' color='warning'>
        Warning
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('text-amber-600');
  });

  it('color=info contained has sky bg', () => {
    render(
      <Button variant='contained' color='info'>
        Info
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-sky-600');
  });

  // === Sizes ===

  it('sm: has h-7 and text-xs', () => {
    render(<Button size='sm'>Small</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('h-7');
    expect(btn.className).toContain('text-xs');
  });

  it('default size: md → h-9 and text-sm', () => {
    render(<Button>Default size</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('h-9');
    expect(btn.className).toContain('text-sm');
  });

  it('lg: has h-11 and text-base', () => {
    render(<Button size='lg'>Large</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('h-11');
    expect(btn.className).toContain('text-base');
  });

  it('icon: has w-9 and p-0', () => {
    render(<Button size='icon'>★</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('w-9');
    expect(btn.className).toContain('p-0');
  });

  // === Loading state ===

  it('adds loading class and disables when loading', () => {
    render(<Button loading>Saving</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('fx-btn-loading');
    expect(btn).toBeDisabled();
  });

  it('renders spinner when loading', () => {
    render(<Button loading>Please wait</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveTextContent('Please wait');
  });

  // === Icons ===

  it('renders startIcon before children', () => {
    render(<Button startIcon={<span data-testid='start-icon'>🔍</span>}>Search</Button>);
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('start-icon'));
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  });

  it('renders endIcon after children', () => {
    render(<Button endIcon={<span data-testid='end-icon'>→</span>}>Next</Button>);
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('end-icon'));
    expect(screen.getByRole('button')).toHaveTextContent('Next');
  });

  // === Disabled state ===

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Click
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', async () => {
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Click
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  // === Click events ===

  it('calls onClick handler', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // === className merging ===

  it('merges custom className', () => {
    render(<Button className='my-custom'>Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('my-custom');
    expect(screen.getByRole('button')).toHaveClass('fx-btn');
  });

  // === Ref forwarding ===

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // === Default type ===

  it('defaults type to "button"', () => {
    render(<Button>No Type</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  // === buttonVariants export ===

  it('exports buttonVariants for consumer extension', () => {
    expect(buttonVariants).toBeDefined();
    expect(typeof buttonVariants).toBe('function');
    const classes = buttonVariants({ variant: 'contained', size: 'lg' });
    expect(classes).toContain('fx-btn');
    expect(classes).toContain('bg-primary');
    expect(classes).toContain('h-11');
  });
});
