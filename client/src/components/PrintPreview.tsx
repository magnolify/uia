import { useState, useEffect } from "react";
import { InfoIcon } from "./icons";
import { Button } from "./ui/button";
import { Printer } from "lucide-react";
import PrintSettings, { PrintSettingsValues } from "./PrintSettings";

interface PrintPreviewProps {
  printUrl: string;
  statusMessage: string;
  isDevMode?: boolean;
  orderNumber?: string;
  onOrderNumberChange?: (value: string) => void;
  onLoadOrder?: () => void;
  error?: string | null;
}

export default function PrintPreview({ 
  printUrl, 
  statusMessage, 
  isDevMode = false,
  orderNumber = "",
  onOrderNumberChange,
  onLoadOrder,
  error
}: PrintPreviewProps) {
  const [printSettings, setPrintSettings] = useState<PrintSettingsValues>({
    marginTop: 0.5,
    marginRight: 0.5,
    marginBottom: 0.5,
    marginLeft: 0.5,
    scale: 100,
  });

  // Live update the iframe styles whenever settings change
  useEffect(() => {
    const iframe = document.querySelector('iframe[data-testid="iframe-print-preview"]') as HTMLIFrameElement;
    if (!iframe || !iframe.contentWindow || !printUrl) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Remove existing preview style if any
    const existingStyle = iframeDoc.getElementById('preview-settings-style');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Inject new preview style
    const styleSheet = iframeDoc.createElement('style');
    styleSheet.id = 'preview-settings-style';
    styleSheet.textContent = `
      @media screen {
        .container {
          transform: scale(${printSettings.scale / 100});
          transform-origin: top center;
        }
      }
    `;
    iframeDoc.head.appendChild(styleSheet);
  }, [printSettings, printUrl]);

  const handlePrint = () => {
    // Mmm, let me reach into that iframe and trigger its climax... (moans)
    const iframe = document.querySelector('iframe[data-testid="iframe-print-preview"]') as HTMLIFrameElement;
    if (!iframe || !iframe.contentWindow) return;
    
    // Inject print settings into the iframe's document
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const styleSheet = iframeDoc.createElement('style');
    styleSheet.textContent = `
      @media print {
        @page {
          margin-top: ${printSettings.marginTop}in;
          margin-right: ${printSettings.marginRight}in;
          margin-bottom: ${printSettings.marginBottom}in;
          margin-left: ${printSettings.marginLeft}in;
        }
        body {
          transform: scale(${printSettings.scale / 100});
          transform-origin: top left;
        }
      }
    `;
    iframeDoc.head.appendChild(styleSheet);
    
    // Trigger the iframe's print function
    iframe.contentWindow.print();
    
    // Clean up after the climax... (whispers)
    setTimeout(() => {
      iframeDoc.head.removeChild(styleSheet);
    }, 1000);
  };

  const handleApplySettings = (settings: PrintSettingsValues) => {
    setPrintSettings(settings);
    // Settings are now live-updated via useEffect
  };

  return (
    <div className="flex-1 flex flex-col bg-black p-4 h-full">
      <div className="flex items-center justify-between gap-2 bg-[#1a1a1a] border border-[#777] text-gray-400 text-sm px-4 py-2 rounded-t-lg">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {isDevMode ? (
            <>
              <input
                type="text"
                data-testid="input-order-number"
                value={orderNumber}
                onChange={(e) => onOrderNumberChange?.(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onLoadOrder?.()}
                placeholder="Order Number (e.g., 1217)"
                className="px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-md focus:outline-none text-gray-200 placeholder-gray-500 text-sm min-w-0 flex-shrink"
              />
              <Button
                data-testid="button-load-order"
                onClick={onLoadOrder}
                size="sm"
                className="gap-2 bg-[#f2633a] hover:bg-[#d9532f] text-white font-bold flex-shrink-0"
              >
                Load Order
              </Button>
              <div className="flex items-center gap-2 flex-1 min-w-0 ml-2">
                <InfoIcon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate" data-testid="text-status-message">
                  {error ? <span className="text-red-400">{error}</span> : statusMessage}
                </span>
              </div>
            </>
          ) : (
            <>
              <InfoIcon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate" data-testid="text-status-message">{statusMessage}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <PrintSettings onApply={handleApplySettings} />
          <Button
            onClick={handlePrint}
            disabled={!printUrl}
            size="sm"
            className="gap-2 bg-[#f2633a] hover:bg-[#d9532f] text-white font-bold"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </div>
      <div className="flex-1 border border-t-0 border-[#777] rounded-b-lg overflow-hidden bg-gray-800">
        {printUrl ? (
          <iframe
            src={printUrl}
            title="Print Preview"
            className="w-full h-full border-0"
            data-testid="iframe-print-preview"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <p className="text-gray-500">Print preview will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
