import { betterAuth } from 'better-auth';

import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';
import { env } from './env';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  socialProviders: {
    github: {
      clientId: env.GIT_CLIENT_ID,
      clientSecret: env.GIT_CLIENT_SECRET,
    },
  },
});
