import { eq } from 'drizzle-orm';
import { db } from './index';
import { posts, users } from './schema/index';

export async function createUser(name: string, email: string) {
  return await db.insert(users).values({ name, email }).returning();
}

export async function getUserById(id: number) {
  return await db.select().from(users).where(eq(users.id, id)).limit(1);
}

export async function getUserByEmail(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).limit(1);
}

export async function getAllUsers() {
  return await db.select().from(users);
}

export async function createPost(title: string, content: string, authorId: number) {
  return await db.insert(posts).values({ title, content, authorId }).returning();
}

export async function getPostsByAuthor(authorId: number) {
  return await db.select().from(posts).where(eq(posts.authorId, authorId));
}
