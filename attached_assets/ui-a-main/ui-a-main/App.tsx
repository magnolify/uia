import React, { useState, useEffect } from 'react';
import type { ShopifyOrder, RenderMode } from './types';
import { RenderMode as RenderModeEnum } from './types';
import { SAMPLE_ORDER } from './constants';
import { generateReportCardHTML } from './utils/htmlGenerator';
import Header from './components/Header';
import PrintPreview from './components/PrintPreview';
import SettingsPanel from './components/SettingsPanel';
import OrderInput from './components/OrderInput';

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

const App: React.FC = () => {
  const [order, setOrder] = useState<ShopifyOrder | null>(null);
  const [printUrl, setPrintUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('Initializing...');
  const [isDevMode, setIsDevMode] = useState<boolean>(false);

  // --- Dev Mode State ---
  const [orderJson, setOrderJson] = useState<string>(JSON.stringify({ order: SAMPLE_ORDER }, null, 2));
  const [renderMode, setRenderMode] = useState<RenderMode>(RenderModeEnum.DATA_URL);
  const [serverUrl, setServerUrl] = useState<string>('');


  // 1. Check for Dev Mode on initial render
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const devModeEnabled = params.get('dev') === 'true';
    setIsDevMode(devModeEnabled);

    if (devModeEnabled) {
      setStatusMessage('Developer mode active. Paste order JSON and click Generate.');
    } else {
      setStatusMessage('Loading order data...');
    }
  }, []);

  // 2. Load data in Live Mode
  useEffect(() => {
    if (isDevMode) return; // Don't run in dev mode

    try {
      const selectedItems = window.shopify?.data?.selected;
      if (!selectedItems || selectedItems.length === 0) {
        throw new Error('No order selected in Shopify Admin.');
      }
      const orderId = selectedItems[0].id;
      
      if (orderId === SAMPLE_ORDER.id) {
        setOrder(SAMPLE_ORDER);
        setStatusMessage(`Loaded data for order #${SAMPLE_ORDER.order_number}.`);
      } else {
        throw new Error(`Order with ID ${orderId} not found. Only sample order ${SAMPLE_ORDER.id} is supported.`);
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      setOrder(null);
      setStatusMessage('Failed to load order data.');
    }
  }, [isDevMode]);

  // 3. Generate printable HTML when order data is available (used by both modes)
  useEffect(() => {
    if (order) {
      setStatusMessage('Generating print preview...');
      try {
        const htmlContent = generateReportCardHTML(order);
        const dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
        setPrintUrl(dataUrl);
        setStatusMessage(`Successfully generated report cards for order ${order.name}.`);
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Failed to generate HTML.';
        setError(errorMessage);
        setPrintUrl('');
        setStatusMessage('HTML generation failed.');
      }
    } else {
        // Clear preview if order is cleared
        setPrintUrl('');
    }
  }, [order]);

  // 4. Handle report card generation in Dev Mode
  const handleGenerate = () => {
    setError(null);
    setOrder(null);

    if (!orderJson.trim()) {
      setError('JSON input cannot be empty.');
      setStatusMessage('Error: JSON input is empty.');
      return;
    }

    try {
      let parsedJson = JSON.parse(orderJson);
      let orderData: ShopifyOrder;

      // Check if the pasted JSON is wrapped in an "order" key
      if (parsedJson.hasOwnProperty('order') && typeof parsedJson.order === 'object' && parsedJson.order !== null) {
        orderData = parsedJson.order as ShopifyOrder;
      } else {
        orderData = parsedJson as ShopifyOrder;
      }
      
      // Basic validation
      if (!orderData.id || !orderData.line_items) {
        throw new Error('Invalid or incomplete order JSON. Missing required fields like "id" or "line_items".');
      }
      setOrder(orderData);
    } catch (e) {
      const errorMessage = e instanceof Error ? `JSON Parse Error: ${e.message}` : 'An unknown error occurred while parsing JSON.';
      setError(errorMessage);
      setStatusMessage('Error: Failed to parse JSON.');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100 font-['Vazirmatn',_sans_serif]">
      <Header isDevMode={isDevMode} />
      <main className="flex-1 flex overflow-hidden">
        {isDevMode ? (
          <>
            <aside className="w-full md:w-1/3 flex flex-col border-r border-[#777] overflow-y-auto">
              <SettingsPanel 
                renderMode={renderMode}
                setRenderMode={setRenderMode}
                serverUrl={serverUrl}
                setServerUrl={setServerUrl}
              />
              <OrderInput 
                orderJson={orderJson}
                setOrderJson={setOrderJson}
                onGenerate={handleGenerate}
                error={error}
              />
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
};

export default App;