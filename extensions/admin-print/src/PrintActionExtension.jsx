
import { useEffect, useState } from "preact/hooks";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const { i18n, data } = shopify;
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const orderId = data.selected[0]?.id;
    
    if (!orderId) {
      setSrc(null);
      return;
    }

    setLoading(true);

    // Extract order number from Shopify admin ID format
    const orderNumber = orderId.split('/').pop();
    
    // Fetch order data from your backend
    fetch(`/api/orders/${orderNumber}`)
      .then(response => response.json())
      .then(orderData => {
        // Generate HTML using your existing htmlGenerator
        return fetch('/api/preview-html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            html: generateReportCardHTML(orderData.order, true) // true = hide header
          })
        });
      })
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        setSrc(blobUrl);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load print preview:', err);
        setLoading(false);
      });
  }, [data.selected]);

  return (
    <s-admin-print-action src={src}>
      <s-stack direction="vertical" gap="medium">
        <s-text variant="headingMd">Report Card Print Preview</s-text>
        {loading ? (
          <s-text>Loading report cards...</s-text>
        ) : !src ? (
          <s-text variant="bodySm" tone="subdued">
            Select an order to generate report cards
          </s-text>
        ) : null}
      </s-stack>
    </s-admin-print-action>
  );
}

// Simplified version that strips the header - we'll import from your existing generator
function generateReportCardHTML(order, hideHeader = false) {
  // This will use your existing htmlGenerator but with header stripped
  // For now, returning a placeholder - we'll connect to your real generator
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Report Cards</title>
      </head>
      <body>
        <div>Report cards for order ${order.name} will appear here</div>
      </body>
    </html>
  `;
}
