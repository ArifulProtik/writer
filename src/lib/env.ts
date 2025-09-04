import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string(),
  DATABASE_URL: z.string('missing database URL'),
  GIT_CLIENT_ID: z.string('missing GitHub client ID'),
  GIT_CLIENT_SECRET: z.string('missing GitHub client secret'),
});

function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((err) => {
        const path = err.path.join('.');
        return `  - ${path}: ${err.message}`;
      }).join('\n');

      console.error('❌ Invalid environment variables:');
      console.error(missingVars);
      console.error('\nPlease check your .env file and ensure all required variables are set.');

      if (process.env.NODE_ENV === 'production' || process.env.npm_lifecycle_event === 'build') {
        process.exit(1);
      }

      throw new Error('Invalid environment variables');
    }
    throw error;
  }
}

export const env = validateEnv();

export type Env = z.infer<typeof envSchema>;
export const getEnv = () => env;
export const isDev = env.NODE_ENV === 'development';
export const isProd = env.NODE_ENV === 'production';
export function getAppUrl() {
  return env.NEXT_PUBLIC_APP_URL
    || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
}
