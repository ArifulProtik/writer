'use client';

import { useTheme as useNextTheme } from 'next-themes';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';

export function useTheme() {
  const nextTheme = useNextTheme();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle localStorage errors gracefully
  const safeSetTheme = useCallback((newTheme: string) => {
    try {
      if (nextTheme.setTheme) {
        nextTheme.setTheme(newTheme);
        setError(null);
      } else {
        throw new Error('Theme setter not available');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.warn('Failed to save theme preference:', errorMessage);
      setError(`Failed to change theme: ${errorMessage}`);

      // Try to apply theme directly to document as fallback
      try {
        if (typeof document !== 'undefined') {
          document.documentElement.className = newTheme;
        }
      } catch (fallbackError) {
        console.warn('Fallback theme application failed:', fallbackError);
      }
    }
  }, [nextTheme]);

  // Simple return to prevent hydration issues
  return {
    theme: nextTheme.theme,
    setTheme: safeSetTheme,
    systemTheme: nextTheme.systemTheme,
    resolvedTheme: nextTheme.resolvedTheme,
    mounted,
    error,
    clearError: () => setError(null),
  };
}
