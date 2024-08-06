import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  created: timestamp('created').notNull().defaultNow(),
});
