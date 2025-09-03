'use client';

// Simple loading component for theme initialization (if needed)
export function ThemeLoading() {
  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center bg-background/80
      backdrop-blur-sm
    `}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`
          h-8 w-8 animate-spin rounded-full border-b-2 border-primary
        `}
        >
        </div>
        <p className="text-sm text-muted-foreground">Loading theme...</p>
      </div>
    </div>
  );
}
