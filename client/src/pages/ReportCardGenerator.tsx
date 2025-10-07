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

    if (devModeEnabled) {
      setStatusMessage("Enter an order number to load from Shopify.");
    } else {
      setStatusMessage("Loading order data...");
    }
  }, []);

  // 2. Load data in Live Mode
  useEffect(() => {
    if (isDevMode) return; // Don't run in dev mode

    // Check if we have an order number in the URL path
    const pathParts = window.location.pathname.split('/');
    const orderNumber = pathParts[pathParts.length - 1];

    if (orderNumber && /^\d+$/.test(orderNumber)) {
      // Fetch order from Shopify API
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
    } else {
      // Fallback to Shopify admin selection
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
        {isDevMode ? (
          <>
            <aside className="w-full md:w-1/3 flex flex-col border-r border-[#777] overflow-y-auto p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Load Order</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="order-number" className="block text-sm font-medium mb-2">
                      Order Number
                    </label>
                    <input
                      id="order-number"
                      type="text"
                      data-testid="input-order-number"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleLoadOrder()}
                      placeholder="e.g., 1217"
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    data-testid="button-load-order"
                    onClick={handleLoadOrder}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                  >
                    Load Order
                  </button>
                  {error && (
                    <div className="p-3 bg-red-900/50 text-red-300 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </aside>
            <div className="hidden md:flex md:w-2/3 flex-col">
              <PrintPreview printUrl={printUrl} statusMessage={statusMessage} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {error ? (
              <div className="m-4 p-4 bg-red-900/50 text-red-300 rounded-lg flex items-center justify-center text-center h-full">
                <p>{error}</p>
              </div>
            ) : (
              <PrintPreview printUrl={printUrl} statusMessage={statusMessage} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
