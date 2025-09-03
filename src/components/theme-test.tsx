'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ThemeTest() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold">Component Theme Test</h2>
        <ThemeToggle />
      </div>

      <div className={`
        grid grid-cols-1 gap-6
        md:grid-cols-2
      `}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Sample Card</CardTitle>
            <CardDescription>
              This card demonstrates how shadcn/ui components adapt to our theme.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-2">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Typography Test</CardTitle>
            <CardDescription>
              Testing our custom fonts and color system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-serif text-lg font-semibold">Lora Heading</h3>
              <p className="font-sans text-muted-foreground">
                This paragraph uses Inter font for body text, providing excellent readability.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                Muted background with proper contrast ratios for accessibility.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg bg-primary p-4 text-primary-foreground">
        <h3 className="mb-2 font-serif font-semibold">Medium Green Accent</h3>
        <p>This demonstrates our Medium-inspired green color in action.</p>
      </div>
    </div>
  );
}
