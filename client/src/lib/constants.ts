import { ShopifyOrder } from "@shared/schema";

export const SAMPLE_ORDER: ShopifyOrder = {
  id: 5678901234,
  name: "#1234",
  order_number: 1234,
  created_at: "2024-01-15T10:30:00Z",
  total_price: "2850.00",
  customer: {
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.johnson@example.com"
  },
  shipping_address: {
    first_name: "Sarah",
    last_name: "Johnson",
    company: "Modern Interiors LLC",
    address1: "456 Oak Avenue",
    address2: "Suite 200",
    city: "Portland",
    province: "OR",
    country: "United States",
    zip: "97201",
    phone: "(503) 555-0123"
  },
  billing_address: {
    first_name: "Sarah",
    last_name: "Johnson",
    address1: "456 Oak Avenue",
    city: "Portland",
    province: "OR",
    country: "United States",
    zip: "97201"
  },
  line_items: [
    {
      id: 11111,
      title: "Custom Area Rug - Geometric Pattern",
      quantity: 2,
      price: "850.00",
      sku: "RUG-GEO-001",
      variant_title: "8x10 ft",
      properties: [
        { name: "Project Name", value: "Living Room Renovation" },
        { name: "Choose Rug Shape", value: "Rectangle" },
        { name: "Width", value: "8 ft" },
        { name: "Length", value: "10 ft" },
        { name: "Install Location", value: "Main Living Room - North Wall" },
        { name: "Custom Notes", value: "Place under coffee table, align with sofa" }
      ]
    },
    {
      id: 22222,
      title: "Hand-Tufted Wool Runner",
      quantity: 1,
      price: "425.00",
      sku: "RUG-RUN-002",
      variant_title: "2.5x8 ft",
      properties: [
        { name: "Project Name", value: "Hallway Update" },
        { name: "Choose Rug Shape", value: "Runner" },
        { name: "Width", value: "2.5 ft" },
        { name: "Length", value: "8 ft" },
        { name: "Install Location", value: "Main Hallway - Entrance" }
      ]
    },
    {
      id: 33333,
      title: "Round Accent Rug - Medallion",
      quantity: 3,
      price: "575.00",
      sku: "RUG-RND-003",
      variant_title: "6 ft diameter",
      properties: [
        { name: "Project Name", value: "Bedroom Suite" },
        { name: "Choose Rug Shape", value: "Round" },
        { name: "Diameter", value: "6 ft" },
        { name: "Install Location", value: "Master Bedroom - Center" },
        { name: "Special Instructions", value: "Center under bed frame" }
      ]
    }
  ],
  note: "Rush order - client wants delivery by end of week for open house event"
};
