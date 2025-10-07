import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Shopify Order Types
export interface ShopifyLineItemProperty {
  name: string;
  value: string;
}

export interface ShopifyLineItem {
  id: number;
  title: string;
  quantity: number;
  price: string;
  properties: ShopifyLineItemProperty[];
  variant_title?: string;
  sku?: string;
}

export interface ShopifyAddress {
  first_name?: string;
  last_name?: string;
  name?: string;
  company?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  province_code?: string;
  country?: string;
  country_code?: string;
  zip?: string;
  phone?: string;
}

export interface ShopifyOrder {
  id: number;
  name: string;
  order_number: number;
  created_at: string;
  total_price: string;
  customer?: {
    first_name?: string;
    last_name?: string;
    email?: string;
  };
  shipping_address?: ShopifyAddress;
  billing_address?: ShopifyAddress;
  line_items: ShopifyLineItem[];
  note?: string;
}

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
