import React from 'react';
import { Button } from './Button';

/**
 * Demo component showcasing MUI-inspired Button variants, colors, and sizes.
 */
export function ButtonDemo() {
  const variants = ['contained', 'outlined', 'text'] as const;
  const colors = [
    undefined,
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
  ] as const;
  const sizes = ['sm', 'md', 'lg'] as const;

  return (
    <div className='flex flex-col gap-10 p-8'>
      {/* MUI Variants × Sizes */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Variants × Sizes (Primary)</h2>
        <div className='flex flex-col gap-4'>
          {variants.map((variant) => (
            <div key={variant} className='flex items-center gap-4'>
              <span className='w-24 text-sm font-medium text-muted-foreground capitalize'>
                {variant}
              </span>
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Colors (Contained) */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Colors — Contained</h2>
        <div className='flex flex-wrap items-center gap-3'>
          {colors.map((color) => (
            <Button key={color ?? 'default'} variant='contained' color={color}>
              {color ?? 'default'}
            </Button>
          ))}
        </div>
      </section>

      {/* Colors (Outlined) */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Colors — Outlined</h2>
        <div className='flex flex-wrap items-center gap-3'>
          {colors.map((color) => (
            <Button key={color ?? 'default'} variant='outlined' color={color}>
              {color ?? 'default'}
            </Button>
          ))}
        </div>
      </section>

      {/* Colors (Text) */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Colors — Text</h2>
        <div className='flex flex-wrap items-center gap-3'>
          {colors.map((color) => (
            <Button key={color ?? 'default'} variant='text' color={color}>
              {color ?? 'default'}
            </Button>
          ))}
        </div>
      </section>

      {/* Icon buttons */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Icon Buttons</h2>
        <div className='flex items-center gap-3'>
          {sizes.map((size) => (
            <Button
              key={size}
              variant='contained'
              size='icon'
              className={size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-11 w-11' : ''}
            >
              ★
            </Button>
          ))}
          {sizes.map((size) => (
            <Button
              key={`outlined-${size}`}
              variant='outlined'
              size='icon'
              className={size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-11 w-11' : ''}
            >
              ♥
            </Button>
          ))}
        </div>
      </section>

      {/* With icons */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>With Start/End Icons</h2>
        <div className='flex flex-wrap items-center gap-3'>
          <Button variant='contained' startIcon={<span>🔍</span>}>
            Search
          </Button>
          <Button variant='outlined' endIcon={<span>→</span>}>
            Next
          </Button>
          <Button variant='text' startIcon={<span>＋</span>}>
            Add Item
          </Button>
        </div>
      </section>

      {/* Loading */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Loading</h2>
        <div className='flex flex-wrap items-center gap-3'>
          <Button variant='contained' loading>
            Saving...
          </Button>
          <Button variant='outlined' loading>
            Loading
          </Button>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Disabled</h2>
        <div className='flex flex-wrap items-center gap-3'>
          <Button variant='contained' disabled>
            Contained
          </Button>
          <Button variant='outlined' disabled>
            Outlined
          </Button>
          <Button variant='text' disabled>
            Text
          </Button>
        </div>
      </section>

      {/* Backward-compatible variants */}
      <section>
        <h2 className='mb-4 text-lg font-semibold'>Backward Compatible (shadcn/ui aliases)</h2>
        <div className='flex flex-wrap items-center gap-3'>
          <Button variant='default'>default → contained</Button>
          <Button variant='destructive'>destructive</Button>
          <Button variant='outline'>outline → outlined</Button>
          <Button variant='secondary'>secondary</Button>
          <Button variant='ghost'>ghost</Button>
          <Button variant='link'>link</Button>
        </div>
      </section>
    </div>
  );
}
