import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Fetch Shopify order by order number
  app.get("/:orderNumber", async (req, res) => {
    const orderNumber = req.params.orderNumber;
    const adminToken = process.env.SHOPIFY_ADMIN_TOKEN;
    const shopDomain = process.env.SHOPIFY_SHOP_DOMAIN;

    if (!adminToken || !shopDomain) {
      return res.status(500).json({ 
        error: "Missing Shopify credentials. Set SHOPIFY_ADMIN_TOKEN and SHOPIFY_SHOP_DOMAIN in Secrets." 
      });
    }

    try {
      // GraphQL query to fetch order by name (order number)
      const query = `
        query getOrder($query: String!) {
          orders(first: 1, query: $query) {
            edges {
              node {
                id
                name
                createdAt
                email
                phone
                lineItems(first: 50) {
                  edges {
                    node {
                      id
                      title
                      quantity
                      sku
                      variantTitle
                      name
                      customAttributes {
                        key
                        value
                      }
                    }
                  }
                }
                shippingAddress {
                  firstName
                  lastName
                  company
                  address1
                  address2
                  city
                  province
                  provinceCode
                  zip
                  country
                  countryCode
                  phone
                  name
                }
                customer {
                  firstName
                  lastName
                  email
                }
              }
            }
          }
        }
      `;

      const response = await fetch(`https://${shopDomain}/admin/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': adminToken
        },
        body: JSON.stringify({
          query,
          variables: {
            query: `name:#${orderNumber}`
          }
        })
      });

      const result = await response.json();

      if (result.errors) {
        return res.status(400).json({ error: result.errors });
      }

      const edges = result.data?.orders?.edges;
      if (!edges || edges.length === 0) {
        return res.status(404).json({ error: `Order #${orderNumber} not found` });
      }

      const order = edges[0].node;

      // Transform GraphQL response to match our schema
      const transformedOrder = {
        id: parseInt(order.id.split('/').pop() || '0'),
        name: order.name,
        order_number: parseInt(orderNumber),
        created_at: order.createdAt,
        email: order.email,
        phone: order.phone,
        line_items: order.lineItems.edges.map((item: any) => ({
          id: parseInt(item.node.id.split('/').pop() || '0'),
          title: item.node.title,
          quantity: item.node.quantity,
          sku: item.node.sku || '',
          variant_title: item.node.variantTitle,
          name: item.node.name,
          properties: item.node.customAttributes?.map((attr: any) => ({
            name: attr.key,
            value: attr.value
          })) || []
        })),
        shipping_address: order.shippingAddress ? {
          first_name: order.shippingAddress.firstName,
          last_name: order.shippingAddress.lastName,
          company: order.shippingAddress.company,
          address1: order.shippingAddress.address1,
          address2: order.shippingAddress.address2,
          city: order.shippingAddress.city,
          province: order.shippingAddress.province,
          province_code: order.shippingAddress.provinceCode,
          zip: order.shippingAddress.zip,
          country: order.shippingAddress.country,
          country_code: order.shippingAddress.countryCode,
          phone: order.shippingAddress.phone,
          name: order.shippingAddress.name
        } : null,
        customer: order.customer ? {
          first_name: order.customer.firstName,
          last_name: order.customer.lastName,
          email: order.customer.email
        } : null
      };

      res.json({ order: transformedOrder });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Serve HTML preview for printing
  app.post("/api/preview-html", express.json({ limit: '10mb' }), (req, res) => {
    const { html } = req.body;
    if (!html) {
      return res.status(400).send("Missing HTML content");
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  const httpServer = createServer(app);

  return httpServer;
}