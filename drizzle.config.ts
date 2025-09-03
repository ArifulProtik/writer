import { defineConfig } from 'drizzle-kit';
import { env } from '@/lib/env';

export default defineConfig({
  schema: './src/lib/db/schema/index.ts',
  out: './src/lib/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
  casing: 'snake_case',
});
