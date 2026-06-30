import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button, buttonVariants } from './Button';

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('fx-btn');
    expect(btn).toHaveClass('fx-btn-primary');
    expect(btn).toHaveClass('fx-btn-md');
  });

  it('applies variant classes', () => {
    render(<Button variant='destructive'>Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('fx-btn-destructive');
    expect(screen.getByRole('button')).not.toHaveClass('fx-btn-primary');
  });

  it('applies size classes', () => {
    render(<Button size='lg'>Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('fx-btn-lg');
  });

  it('merges className prop', () => {
    render(<Button className='my-custom'>Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('my-custom');
    expect(screen.getByRole('button')).toHaveClass('fx-btn');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('defaults type to "button"', () => {
    render(<Button>No Type</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('calls onClick handler', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('exports buttonVariants for consumer extension', () => {
    expect(buttonVariants).toBeDefined();
    expect(typeof buttonVariants).toBe('function');
  });
});
