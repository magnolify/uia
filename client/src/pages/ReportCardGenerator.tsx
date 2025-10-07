import { useState, useEffect } from "react";
import { ShopifyOrder } from "@shared/schema";
import { SAMPLE_ORDER } from "@/lib/constants";
import { generateReportCardHTML } from "@/lib/htmlGenerator";
import Header from "@/components/Header";
import OrderInput from "@/components/OrderInput";
import PrintPreview from "@/components/PrintPreview";

export default function ReportCardGenerator() {
  const [order, setOrder] = useState<ShopifyOrder | null>(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [isDevMode, setIsDevMode] = useState(false);

  // Check for dev mode on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const devMode = params.get("dev") === "true";
    setIsDevMode(devMode);

    // In live mode, try to load order from Shopify (mock for now)
    if (!devMode) {
      // TODO: Replace with actual Shopify API integration
      // For now, load sample order in live mode
      console.log("Live mode: Loading order from Shopify...");
      setOrder(SAMPLE_ORDER);
    }
  }, []);

  // Generate HTML when order changes
  useEffect(() => {
    if (order) {
      const html = generateReportCardHTML(order);
      setHtmlContent(html);
    }
  }, [order]);

  const handleGenerate = (generatedOrder: ShopifyOrder) => {
    setOrder(generatedOrder);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header isDevMode={isDevMode} />
      
      {isDevMode ? (
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - JSON Input */}
          <div className="w-2/5 border-r">
            <OrderInput
              onGenerate={handleGenerate}
              initialValue={JSON.stringify(SAMPLE_ORDER, null, 2)}
            />
          </div>
          
          {/* Right Panel - Preview */}
          <div className="flex-1">
            <PrintPreview htmlContent={htmlContent} />
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <PrintPreview htmlContent={htmlContent} />
        </div>
      )}
    </div>
  );
}
