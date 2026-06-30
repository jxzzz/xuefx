import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';
import './Button.css';

const buttonVariants = cva('fx-btn', {
  variants: {
    variant: {
      default: 'fx-btn-primary',
      destructive: 'fx-btn-destructive',
      outline: 'fx-btn-outline',
      secondary: 'fx-btn-secondary',
      ghost: 'fx-btn-ghost',
      link: 'fx-btn-link',
    },
    size: {
      default: 'fx-btn-md',
      sm: 'fx-btn-sm',
      lg: 'fx-btn-lg',
      icon: 'fx-btn-icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
