import {
  mysqlTable,
  varchar,
  int,
  timestamp,
  boolean,
  text,
} from 'drizzle-orm/mysql-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const submissions = mysqlTable('submissions', {
  id: int('id').primaryKey().autoincrement(),
  createdAt: timestamp('created_at').defaultNow(),

  // Step 1: Address fields
  postcode: varchar('postcode', { length: 10 }).notNull(),
  huisnummer: varchar('huisnummer', { length: 10 }).notNull(),
  straat: varchar('straat', { length: 255 }).notNull(),
  plaatsnaam: varchar('plaatsnaam', { length: 255 }).notNull(),
  toevoeging: varchar('toevoeging', { length: 10 }),

  // Step 2: Solar panels
  hasSolarPanels: boolean('has_solar_panels').notNull(),

  // Step 3: Energy consumption
  yearlyConsumption: varchar('yearly_consumption', { length: 10 }).notNull(),

  // Step 4: Daytime usage
  daytimeUsage: varchar('daytime_usage', { length: 20 }).notNull(),

  // Step 5: Personal details
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),

  // Additional metadata
  userAgent: text('user_agent'),
  ipHash: varchar('ip_hash', { length: 64 }),
});

// TypeScript types for type safety
export type Submission = InferSelectModel<typeof submissions>;
export type NewSubmission = InferInsertModel<typeof submissions>;
