import { ShopifyOrder, ShopifyLineItem, ShopifyLineItemProperty } from "@shared/schema";

// Helper function to find a property value by name (case-insensitive, trimmed)
function findPropertyValue(properties: ShopifyLineItemProperty[], name: string): string {
  const prop = properties.find(p => 
    p.name.trim().toLowerCase() === name.trim().toLowerCase()
  );
  return prop?.value?.trim() || '';
}

// Helper to parse title for additional label info
function parseTitleForLabel(title: string): string {
  return title.trim();
}

// Helper to clean dimension values (remove "ft", "in" suffixes)
function cleanDimension(value: string): string {
  return value.replace(/\s*(ft|in|inch|inches|feet)\.?$/i, '').trim();
}

// Generate the order header/summary card
function generateOrderHeaderHTML(order: ShopifyOrder): string {
  const customerName = order.customer 
    ? `${order.customer.first_name || ''} ${order.customer.last_name || ''}`.trim() 
    : 'N/A';
  
  const shippingAddr = order.shipping_address;
  const shippingAddress = shippingAddr
    ? `
        ${shippingAddr.company ? `<div><strong>${shippingAddr.company}</strong></div>` : ''}
        <div>${shippingAddr.first_name || ''} ${shippingAddr.last_name || ''}</div>
        <div>${shippingAddr.address1 || ''}</div>
        ${shippingAddr.address2 ? `<div>${shippingAddr.address2}</div>` : ''}
        <div>${shippingAddr.city || ''}, ${shippingAddr.province || ''} ${shippingAddr.zip || ''}</div>
        <div>${shippingAddr.country || ''}</div>
        ${shippingAddr.phone ? `<div>Phone: ${shippingAddr.phone}</div>` : ''}
      `
    : '<div>No shipping address</div>';

  const totalItems = order.line_items.reduce((sum, item) => sum + item.quantity, 0);

  return `
    <div class="card header-card">
      <div class="header-title">Order Summary</div>
      <div class="header-grid">
        <div class="header-section">
          <div class="section-title">Order Details</div>
          <div class="detail-row"><span class="label">Order:</span> <span class="value">${order.name}</span></div>
          <div class="detail-row"><span class="label">Order #:</span> <span class="value">${order.order_number}</span></div>
          <div class="detail-row"><span class="label">Date:</span> <span class="value">${new Date(order.created_at).toLocaleDateString()}</span></div>
          <div class="detail-row"><span class="label">Customer:</span> <span class="value">${customerName}</span></div>
          ${order.customer?.email ? `<div class="detail-row"><span class="label">Email:</span> <span class="value">${order.customer.email}</span></div>` : ''}
          <div class="detail-row"><span class="label">Total:</span> <span class="value">$${order.total_price}</span></div>
          <div class="detail-row"><span class="label">Items:</span> <span class="value">${totalItems}</span></div>
        </div>
        <div class="header-section">
          <div class="section-title">Shipping Address</div>
          ${shippingAddress}
        </div>
      </div>
      ${order.note ? `
        <div class="order-note">
          <div class="section-title">Order Notes</div>
          <div>${order.note}</div>
        </div>
      ` : ''}
    </div>
  `;
}

// Generate individual report card for a line item unit
function generateItemCardHTML(
  item: ShopifyLineItem,
  unitNumber: number,
  totalUnits: number,
  orderName: string
): string {
  const projectName = findPropertyValue(item.properties, 'Project Name');
  const rugShape = findPropertyValue(item.properties, 'Choose Rug Shape');
  const installLocation = findPropertyValue(item.properties, 'Install Location');
  const customNotes = findPropertyValue(item.properties, 'Custom Notes') || 
                      findPropertyValue(item.properties, 'Special Instructions');
  
  // Get dimensions
  const width = cleanDimension(findPropertyValue(item.properties, 'Width'));
  const length = cleanDimension(findPropertyValue(item.properties, 'Length'));
  const diameter = cleanDimension(findPropertyValue(item.properties, 'Diameter'));
  
  let dimensionText = '';
  if (diameter) {
    dimensionText = `${diameter} diameter`;
  } else if (width && length) {
    dimensionText = `${width} × ${length}`;
  } else if (width) {
    dimensionText = `Width: ${width}`;
  } else if (length) {
    dimensionText = `Length: ${length}`;
  }

  return `
    <div class="card item-card">
      <div class="card-header">
        <div class="order-info">${orderName}</div>
        <div class="unit-badge">${unitNumber} of ${totalUnits}</div>
      </div>
      
      ${projectName ? `<div class="project-name">${projectName}</div>` : ''}
      
      <div class="product-title">${parseTitleForLabel(item.title)}</div>
      
      ${item.variant_title ? `<div class="variant-title">${item.variant_title}</div>` : ''}
      ${item.sku ? `<div class="sku">SKU: ${item.sku}</div>` : ''}
      
      <div class="properties-grid">
        ${rugShape ? `
          <div class="property">
            <div class="property-label">Shape</div>
            <div class="property-value">${rugShape}</div>
          </div>
        ` : ''}
        ${dimensionText ? `
          <div class="property">
            <div class="property-label">Dimensions</div>
            <div class="property-value">${dimensionText}</div>
          </div>
        ` : ''}
      </div>
      
      ${installLocation ? `
        <div class="install-location">
          <div class="install-label">Install Location:</div>
          <div class="install-value">${installLocation}</div>
        </div>
      ` : ''}
      
      ${customNotes ? `
        <div class="custom-notes">
          <div class="notes-label">Notes:</div>
          <div class="notes-value">${customNotes}</div>
        </div>
      ` : ''}
      
      <div class="card-footer">
        <div class="price">$${item.price}</div>
      </div>
    </div>
  `;
}

// Main function to generate the complete HTML document
export function generateReportCardHTML(order: ShopifyOrder): string {
  const headerCard = generateOrderHeaderHTML(order);
  
  const itemCards = order.line_items.flatMap(item => 
    Array.from({ length: item.quantity }, (_, index) => 
      generateItemCardHTML(item, index + 1, item.quantity, order.name)
    )
  ).join('\n');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Report Cards - Order ${order.name}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #1f2937;
      padding: 20px;
      color: #1f2937;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      margin: 20px auto;
      max-width: 800px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    /* Header Card Styles */
    .header-card {
      background: white;
    }
    
    .header-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 24px;
      color: #059669;
      text-align: center;
    }
    
    .header-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 20px;
    }
    
    .header-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .section-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #374151;
      border-bottom: 2px solid #059669;
      padding-bottom: 4px;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 14px;
    }
    
    .detail-row .label {
      font-weight: 500;
      color: #6b7280;
    }
    
    .detail-row .value {
      font-weight: 600;
      color: #1f2937;
    }
    
    .order-note {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }
    
    .order-note > div:last-child {
      margin-top: 8px;
      font-size: 14px;
      color: #4b5563;
      font-style: italic;
    }
    
    /* Item Card Styles */
    .item-card {
      background: white;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #059669;
    }
    
    .order-info {
      font-size: 18px;
      font-weight: 600;
      color: #059669;
    }
    
    .unit-badge {
      background: #059669;
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
    }
    
    .project-name {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    
    .product-title {
      font-size: 24px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    .variant-title {
      font-size: 16px;
      color: #6b7280;
      margin-bottom: 4px;
    }
    
    .sku {
      font-size: 14px;
      color: #9ca3af;
      font-family: 'Courier New', monospace;
      margin-bottom: 16px;
    }
    
    .properties-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 20px 0;
      padding: 16px;
      background: #f9fafb;
      border-radius: 6px;
    }
    
    .property {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .property-label {
      font-size: 12px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .property-value {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }
    
    .install-location {
      margin: 16px 0;
      padding: 16px;
      background: #ecfdf5;
      border-left: 4px solid #059669;
      border-radius: 4px;
    }
    
    .install-label {
      font-size: 12px;
      font-weight: 600;
      color: #047857;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    
    .install-value {
      font-size: 18px;
      font-weight: 600;
      color: #065f46;
      font-style: italic;
    }
    
    .custom-notes {
      margin: 16px 0;
      padding: 12px;
      background: #fef3c7;
      border-radius: 4px;
    }
    
    .notes-label {
      font-size: 12px;
      font-weight: 600;
      color: #92400e;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    
    .notes-value {
      font-size: 14px;
      color: #78350f;
    }
    
    .card-footer {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      text-align: right;
    }
    
    .price {
      font-size: 24px;
      font-weight: 700;
      color: #059669;
    }
    
    .print-button-container {
      text-align: center;
      margin: 40px 0;
    }
    
    .print-button {
      background: #059669;
      color: white;
      border: none;
      padding: 16px 48px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background 0.2s;
    }
    
    .print-button:hover {
      background: #047857;
    }
    
    /* Print Styles */
    @media print {
      body {
        background: white;
        padding: 0;
      }
      
      .card {
        width: 8.5in;
        height: 5.5in;
        max-width: none;
        margin: 0;
        padding: 0.5in;
        box-shadow: none;
        page-break-after: always;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .header-card {
        height: 100vh;
      }
      
      .item-card {
        height: 100vh;
      }
      
      .print-button-container {
        display: none;
      }
      
      * {
        color: black !important;
      }
      
      .header-title {
        color: #059669 !important;
      }
      
      .order-info,
      .unit-badge {
        color: white !important;
        background: #059669 !important;
      }
      
      .price {
        color: #059669 !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-button-container">
    <button class="print-button" onclick="window.print()">Print Labels</button>
  </div>
  
  ${headerCard}
  ${itemCards}
  
  <div class="print-button-container">
    <button class="print-button" onclick="window.print()">Print Labels</button>
  </div>
</body>
</html>
  `.trim();
}
