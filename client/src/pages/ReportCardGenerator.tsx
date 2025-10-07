import { useState, useEffect } from "react";
import { ShopifyOrder } from "@shared/schema";
import { generateReportCardHTML } from "@/lib/htmlGenerator";
import Header from "@/components/Header";
import PrintPreview from "@/components/PrintPreview";

// Define the shape of the mock Shopify global
declare global {
  interface Window {
    shopify: {
      data: {
        selected: { id: number }[];
      };
      i18n: {
        translate: (key: string, replacements?: Record<string, string | number>) => string;
      };
    };
  }
}

export default function ReportCardGenerator() {
  const [order, setOrder] = useState<ShopifyOrder | null>(null);
  const [printUrl, setPrintUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("Initializing...");
  const [isDevMode, setIsDevMode] = useState<boolean>(false);

  // Dev Mode State
  const [orderNumber, setOrderNumber] = useState<string>("");

  // 1. Check for Dev Mode on initial render - default to dev mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const devModeEnabled = params.get("dev") !== "false"; // Default to true unless explicitly set to false
    setIsDevMode(devModeEnabled);

    // Check if we have an order number in the URL path
    const pathParts = window.location.pathname.split('/');
    const orderNumberFromPath = pathParts[pathParts.length - 1];

    if (orderNumberFromPath && /^\d+$/.test(orderNumberFromPath)) {
      setOrderNumber(orderNumberFromPath);
      if (devModeEnabled) {
        setStatusMessage(`Auto-loading order #${orderNumberFromPath}...`);
      } else {
        setStatusMessage("Loading order data...");
      }
    } else {
      if (devModeEnabled) {
        setStatusMessage("Enter an order number to load from Shopify.");
      } else {
        setStatusMessage("Loading order data...");
      }
    }
  }, []);

  // 2. Load data in Live Mode or auto-load from URL
  useEffect(() => {
    // Check if we have an order number in the URL path
    const pathParts = window.location.pathname.split('/');
    const orderNumberFromPath = pathParts[pathParts.length - 1];

    if (orderNumberFromPath && /^\d+$/.test(orderNumberFromPath)) {
      // Auto-load order from URL path
      setStatusMessage(`Fetching order #${orderNumberFromPath}...`);
      fetch(`/api/orders/${orderNumberFromPath}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch order: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setOrder(data.order);
          setStatusMessage(`Loaded data for order #${orderNumberFromPath}.`);
        })
        .catch(e => {
          const errorMessage = e instanceof Error ? e.message : "Failed to fetch order.";
          setError(errorMessage);
          setOrder(null);
          setStatusMessage("Failed to load order data.");
        });
    } else if (!isDevMode) {
      // Fallback to Shopify admin selection (non-dev mode only)
      try {
        const selectedItems = window.shopify?.data?.selected;
        if (!selectedItems || selectedItems.length === 0) {
          throw new Error("No order selected in Shopify Admin.");
        }
        const orderId = selectedItems[0].id;
        // In production, this would fetch the order from Shopify
        throw new Error(`Shopify Admin integration not fully implemented for order ${orderId}.`);
      } catch (e) {
        // No Shopify context - this is expected in dev mode
        setStatusMessage("Enter an order number to load from Shopify.");
      }
    }
  }, [isDevMode]);

  // 3. Generate printable HTML when order data is available
  useEffect(() => {
    if (order) {
      setStatusMessage("Generating print preview...");
      try {
        const htmlContent = generateReportCardHTML(order);
        
        // Post HTML to server and get a same-origin URL
        fetch('/api/preview-html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ html: htmlContent })
        })
          .then(response => response.blob())
          .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            setPrintUrl(blobUrl);
            setStatusMessage(`Successfully generated report cards for order ${order.name}.`);
          })
          .catch(err => {
            setError(`Preview generation failed: ${err.message}`);
            setPrintUrl("");
            setStatusMessage("HTML generation failed.");
          });
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Failed to generate HTML.";
        setError(errorMessage);
        setPrintUrl("");
        setStatusMessage("HTML generation failed.");
      }
    } else {
      // Clear preview if order is cleared
      setPrintUrl("");
    }
  }, [order]);

  // 4. Handle order number submission
  const handleLoadOrder = () => {
    setError(null);
    setOrder(null);

    if (!orderNumber.trim()) {
      setError("Please enter an order number.");
      setStatusMessage("Error: Order number is empty.");
      return;
    }

    if (!/^\d+$/.test(orderNumber.trim())) {
      setError("Order number must be numeric.");
      setStatusMessage("Error: Invalid order number format.");
      return;
    }

    setStatusMessage(`Fetching order #${orderNumber}...`);
    fetch(`/api/orders/${orderNumber}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch order: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setOrder(data.order);
        setStatusMessage(`Loaded data for order #${orderNumber}.`);
      })
      .catch(e => {
        const errorMessage = e instanceof Error ? e.message : "Failed to fetch order.";
        setError(errorMessage);
        setOrder(null);
        setStatusMessage("Failed to load order data.");
      });
  };

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100 font-['Vazirmatn',_sans-serif]">
      <Header isDevMode={isDevMode} />
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          {error && !isDevMode ? (
            <div className="m-4 p-4 bg-red-900/50 text-red-300 rounded-lg flex items-center justify-center text-center h-full">
              <p>{error}</p>
            </div>
          ) : (
            <PrintPreview 
              printUrl={printUrl} 
              statusMessage={statusMessage}
              isDevMode={isDevMode}
              orderNumber={orderNumber}
              onOrderNumberChange={setOrderNumber}
              onLoadOrder={handleLoadOrder}
              error={error}
            />
          )}
        </div>
      </main>
    </div>
  );
}
