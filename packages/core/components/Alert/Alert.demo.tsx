import React from 'react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

export function AlertDemo() {
  return (
    <div className='flex flex-col gap-4 p-8 max-w-lg'>
      <Alert>
        <AlertTitle>Default alert</AlertTitle>
        <AlertDescription>This is a default alert with a title and description.</AlertDescription>
      </Alert>
      <Alert variant='destructive'>
        <AlertTitle>Destructive alert</AlertTitle>
        <AlertDescription>This is a destructive alert for error messages.</AlertDescription>
      </Alert>
    </div>
  );
}
