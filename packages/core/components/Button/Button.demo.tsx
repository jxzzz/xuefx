import React from 'react';
import { Button } from './Button';

/**
 * Demo component that showcases every variant × size combination.
 * Import this in the docs app to visually verify the Button works.
 */
export function ButtonDemo() {
  const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
  const sizes = ['default', 'sm', 'lg', 'icon'] as const;

  return (
    <div className='flex flex-col gap-8 p-8'>
      {variants.map((variant) => (
        <div key={variant} className='flex items-center gap-4'>
          <span className='w-24 text-sm font-medium text-muted-foreground'>{variant}</span>
          {sizes.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {size === 'icon' ? '★' : size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
