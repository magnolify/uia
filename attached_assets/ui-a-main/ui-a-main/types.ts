

export interface LineItemProperty {
  name: string;
  value: string;
}

export interface ShopifyLineItem {
  id: number;
  // Fix: Added missing property from sample data to resolve type errors.
  admin_graphql_api_id: string;
  // Fix: Added missing property from sample data to resolve type errors.
  attributed_staffs: any[];
  title: string;
  quantity: number;
  sku: string;
  variant_title: string | null;
  product_exists: boolean;
  name: string;
  // Fix: Added missing property 'current_quantity' from sample data to resolve type errors in constants.ts.
  current_quantity: number;
  // FIX: Add missing property 'fulfillable_quantity' to resolve type error in constants.ts.
  fulfillable_quantity: number;
  // Fix: Added missing property 'fulfillment_service' to resolve type error in constants.ts.
  fulfillment_service: string;
  // Fix: Added missing property `fulfillment_status` from sample data to resolve type errors.
  fulfillment_status: string | null;
  properties: LineItemProperty[];
  // Fix: Added missing property 'gift_card' to resolve type errors in constants.ts.
  gift_card: boolean;
  // FIX: Add missing property 'grams' to resolve type error in constants.ts.
  grams: number;
  // Fix: Add index signature to handle properties like 'pre_tax_price' and prevent similar type errors.
  [key: string]: any;
}

export interface ShippingAddress {
  name: string;
  company: string | null;
  first_name: string | null;
  last_name: string | null;
  // Fix: Added missing properties from sample data to resolve type errors.
  address1: string;
  address2: string | null;
  // Fix: Update `phone` property to allow null to match sample data.
  phone: string | null;
  city: string;
  zip: string;
  province: string;
  country: string;
  latitude: number;
  longitude: number;
  country_code: string;
  province_code: string;
}

export interface Customer {
  // Fix: Added missing property from sample data to resolve type errors.
  id: number;
  first_name: string | null;
  last_name: string | null;
  // Fix: Added missing property from sample data to resolve type errors.
  created_at: string;
  // Fix: Added missing property 'updated_at' from sample data to resolve type error in constants.ts.
  updated_at: string;
  // FIX: Add missing property 'state' to resolve type error in constants.ts.
  state: string;
  // Fix: Added missing property 'note' to resolve type error in constants.ts.
  // Fix: Update `note` property to allow null to match sample data.
  note: string | null;
  // Fix: Added missing property `verified_email` from sample data to resolve type errors.
  verified_email: boolean;
  // Fix: Added missing property `multipass_identifier` to resolve type error in constants.ts.
  multipass_identifier: string | null;
  // FIX: Add missing property 'tax_exempt' to resolve type error in constants.ts.
  tax_exempt: boolean;
  // Fix: Add index signature to handle properties like 'email_marketing_consent' and prevent similar type errors.
  [key: string]: any;
}

export interface ShopifyOrder {
  id: number;
  name: string; // e.g., "#1629"
  // Fix: Added missing property 'order_number' to resolve type error in App.tsx.
  order_number: number;
  line_items: ShopifyLineItem[];
  shipping_address: ShippingAddress | null;
  customer: Customer | null;
  created_at: string;
  // Add a catch-all for other properties from the API to avoid type errors
  [key: string]: any;
}

export enum RenderMode {
    DATA_URL = 'data',
    SERVER = 'server'
}