import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';
import './Button.css';

/**
 * Button component — MUI-inspired with shadcn/ui compatible API.
 *
 * Variants (MUI-style):
 *   - contained: filled with elevation shadow
 *   - outlined: bordered, transparent background
 *   - text:     no border or background (MUI default variant)
 *
 * Colors (MUI color system):
 *   - primary, secondary, success, error, warning, info
 *
 * Sizes:
 *   - sm (Small: 28px), md (Medium: 36px / default), lg (Large: 44px)
 *
 * Backward-compatible aliases:
 *   variant="default"  → contained
 *   variant="outline"  → outlined
 */

const buttonVariants = cva(
  [
    /* Base — inline-flex, centered, rounded, font */
    'fx-btn',
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-all duration-200 ease-in-out select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        /** MUI Contained — filled with elevation */
        contained:
          'bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:brightness-110 active:shadow-sm active:brightness-90',
        /** MUI Outlined — bordered, transparent bg */
        outlined:
          'border border-input bg-transparent text-primary shadow-none hover:bg-primary/10 active:brightness-95',
        /** MUI Text — no border, no fill */
        text: 'border-none bg-transparent text-primary shadow-none hover:bg-primary/10 active:brightness-95',
        /* --- shadcn/ui aliases --- */
        default:
          'bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:brightness-110 active:shadow-sm active:brightness-90',
        outline:
          'border border-input bg-transparent text-primary shadow-none hover:bg-primary/10 active:brightness-95',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:shadow-md hover:brightness-110 active:brightness-90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-none hover:brightness-95 active:brightness-90',
        ghost:
          'border-none shadow-none hover:bg-accent hover:text-accent-foreground active:brightness-95',
        link: 'border-none bg-transparent text-primary shadow-none underline-offset-4 hover:underline',
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        error: '',
        warning: '',
        info: '',
      },
      size: {
        sm: 'h-7 px-2.5 py-0.5 text-xs rounded-sm',
        md: 'h-9 px-4 py-1.5 text-sm',
        lg: 'h-11 px-6 py-2 text-base',
        icon: 'h-9 w-9 p-0',
        default: 'h-9 px-4 py-1.5 text-sm',
      },
    },
    compoundVariants: [
      /* ---- primary ---- */
      { color: 'primary', variant: 'contained', className: 'bg-primary text-primary-foreground' },
      { color: 'primary', variant: 'default', className: 'bg-primary text-primary-foreground' },
      { color: 'primary', variant: 'destructive', className: 'bg-primary text-primary-foreground' },
      { color: 'primary', variant: 'secondary', className: 'bg-primary text-primary-foreground' },
      {
        color: 'primary',
        variant: 'outlined',
        className: 'border-primary/50 text-primary hover:bg-primary/10',
      },
      {
        color: 'primary',
        variant: 'outline',
        className: 'border-primary/50 text-primary hover:bg-primary/10',
      },
      { color: 'primary', variant: 'text', className: 'text-primary hover:bg-primary/10' },
      { color: 'primary', variant: 'ghost', className: 'text-primary hover:bg-primary/10' },
      { color: 'primary', variant: 'link', className: 'text-primary' },

      /* ---- secondary ---- */
      {
        color: 'secondary',
        variant: 'contained',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        color: 'secondary',
        variant: 'default',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        color: 'secondary',
        variant: 'destructive',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        color: 'secondary',
        variant: 'secondary',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        color: 'secondary',
        variant: 'outlined',
        className: 'border-secondary/50 text-secondary-foreground hover:bg-secondary/40',
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: 'border-secondary/50 text-secondary-foreground hover:bg-secondary/40',
      },
      {
        color: 'secondary',
        variant: 'text',
        className: 'text-secondary-foreground hover:bg-secondary/40',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: 'text-secondary-foreground hover:bg-secondary/40',
      },
      { color: 'secondary', variant: 'link', className: 'text-secondary-foreground' },

      /* ---- success ---- */
      { color: 'success', variant: 'contained', className: 'bg-emerald-600 text-white' },
      { color: 'success', variant: 'default', className: 'bg-emerald-600 text-white' },
      { color: 'success', variant: 'destructive', className: 'bg-emerald-600 text-white' },
      { color: 'success', variant: 'secondary', className: 'bg-emerald-600 text-white' },
      {
        color: 'success',
        variant: 'outlined',
        className: 'border-emerald-600/50 text-emerald-600 hover:bg-emerald-50',
      },
      {
        color: 'success',
        variant: 'outline',
        className: 'border-emerald-600/50 text-emerald-600 hover:bg-emerald-50',
      },
      { color: 'success', variant: 'text', className: 'text-emerald-600 hover:bg-emerald-50' },
      { color: 'success', variant: 'ghost', className: 'text-emerald-600 hover:bg-emerald-50' },
      { color: 'success', variant: 'link', className: 'text-emerald-600' },

      /* ---- error ---- */
      { color: 'error', variant: 'contained', className: 'bg-red-600 text-white' },
      { color: 'error', variant: 'default', className: 'bg-red-600 text-white' },
      { color: 'error', variant: 'destructive', className: 'bg-red-600 text-white' },
      { color: 'error', variant: 'secondary', className: 'bg-red-600 text-white' },
      {
        color: 'error',
        variant: 'outlined',
        className: 'border-red-600/50 text-red-600 hover:bg-red-50',
      },
      {
        color: 'error',
        variant: 'outline',
        className: 'border-red-600/50 text-red-600 hover:bg-red-50',
      },
      { color: 'error', variant: 'text', className: 'text-red-600 hover:bg-red-50' },
      { color: 'error', variant: 'ghost', className: 'text-red-600 hover:bg-red-50' },
      { color: 'error', variant: 'link', className: 'text-red-600' },

      /* ---- warning ---- */
      { color: 'warning', variant: 'contained', className: 'bg-amber-500 text-black' },
      { color: 'warning', variant: 'default', className: 'bg-amber-500 text-black' },
      { color: 'warning', variant: 'destructive', className: 'bg-amber-500 text-black' },
      { color: 'warning', variant: 'secondary', className: 'bg-amber-500 text-black' },
      {
        color: 'warning',
        variant: 'outlined',
        className: 'border-amber-500/50 text-amber-600 hover:bg-amber-50',
      },
      {
        color: 'warning',
        variant: 'outline',
        className: 'border-amber-500/50 text-amber-600 hover:bg-amber-50',
      },
      { color: 'warning', variant: 'text', className: 'text-amber-600 hover:bg-amber-50' },
      { color: 'warning', variant: 'ghost', className: 'text-amber-600 hover:bg-amber-50' },
      { color: 'warning', variant: 'link', className: 'text-amber-600' },

      /* ---- info ---- */
      { color: 'info', variant: 'contained', className: 'bg-sky-600 text-white' },
      { color: 'info', variant: 'default', className: 'bg-sky-600 text-white' },
      { color: 'info', variant: 'destructive', className: 'bg-sky-600 text-white' },
      { color: 'info', variant: 'secondary', className: 'bg-sky-600 text-white' },
      {
        color: 'info',
        variant: 'outlined',
        className: 'border-sky-600/50 text-sky-600 hover:bg-sky-50',
      },
      {
        color: 'info',
        variant: 'outline',
        className: 'border-sky-600/50 text-sky-600 hover:bg-sky-50',
      },
      { color: 'info', variant: 'text', className: 'text-sky-600 hover:bg-sky-50' },
      { color: 'info', variant: 'ghost', className: 'text-sky-600 hover:bg-sky-50' },
      { color: 'info', variant: 'link', className: 'text-sky-600' },

      /* ---- icon size modifiers ---- */
      { size: 'icon', className: 'h-9 w-9 p-0' },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /** Show loading spinner and disable interactions */
  loading?: boolean;
  /** Start icon element */
  startIcon?: React.ReactNode;
  /** End icon element */
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      loading = false,
      startIcon,
      endIcon,
      type = 'button',
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, size, color, className }),
          loading && 'fx-btn-loading',
        )}
        {...props}
      >
        {loading ? (
          <>
            <span className='fx-btn-spinner' aria-hidden='true' />
            <span>{children}</span>
          </>
        ) : (
          <>
            {startIcon}
            {children}
            {endIcon}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
