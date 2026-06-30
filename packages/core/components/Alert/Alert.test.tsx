import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, AlertTitle, AlertDescription, alertVariants } from './Alert';

describe('Alert', () => {
  it('renders with default variant', () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>,
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveClass('fx-alert-default');
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders destructive variant with assertive role', () => {
    render(
      <Alert variant='destructive'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something broke</AlertDescription>
      </Alert>,
    );
    const el = screen.getByRole('alert');
    expect(el).toHaveClass('fx-alert-destructive');
  });

  it('merges className on Alert', () => {
    render(<Alert className='my-alert'>Test</Alert>);
    expect(screen.getByRole('status')).toHaveClass('my-alert');
    expect(screen.getByRole('status')).toHaveClass('fx-alert');
  });

  it('merges className on AlertTitle', () => {
    render(<AlertTitle className='my-title'>Title</AlertTitle>);
    const el = screen.getByText('Title');
    expect(el).toHaveClass('my-title');
    expect(el).toHaveClass('fx-alert-title');
  });

  it('exports alertVariants for consumer extension', () => {
    expect(alertVariants).toBeDefined();
    expect(typeof alertVariants).toBe('function');
  });
});
