'use client';

import { env, getAppUrl, isDev, isProd } from '@/lib/env';

export function EnvExample() {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="mb-2 text-lg font-semibold">Environment Info</h3>
      <div className="space-y-1 text-sm">
        <p>
          Environment:
          <code className="rounded bg-muted px-1">{env.NODE_ENV}</code>
        </p>
        <p>
          Is Development:
          <code className="rounded bg-muted px-1">{isDev.toString()}</code>
        </p>
        <p>
          Is Production:
          <code className="rounded bg-muted px-1">{isProd.toString()}</code>
        </p>
        <p>
          App URL:
          <code className="rounded bg-muted px-1">{getAppUrl()}</code>
        </p>
      </div>
    </div>
  );
}
