'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import PopStateControl from './pop-state-control';

// TODO: Getting this error in browser. goes away when i remove Theme Provider
//! Warning: Prop `className` did not match. Server: "__variable_0ec1f4 __variable_95396e light" Client: "__variable_0ec1f4 __variable_95396e"
//!     at html
//!     at RedirectErrorBoundary (

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <PopStateControl>
        <>
          {children}
        </>
      </PopStateControl>
    </ThemeProvider>
  );
}
