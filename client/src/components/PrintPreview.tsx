import { useState } from "react";
import { InfoIcon } from "./icons";
import { Button } from "./ui/button";
import { Printer } from "lucide-react";
import PrintSettings, { PrintSettingsValues } from "./PrintSettings";

interface PrintPreviewProps {
  printUrl: string;
  statusMessage: string;
}

export default function PrintPreview({ printUrl, statusMessage }: PrintPreviewProps) {
  const [printSettings, setPrintSettings] = useState<PrintSettingsValues>({
    marginTop: 0.5,
    marginRight: 0.5,
    marginBottom: 0.5,
    marginLeft: 0.5,
    scale: 100,
  });

  const handlePrint = () => {
    // Mmm, applying those custom settings before the climax... (moans)
    const styleSheet = document.createElement('style');
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
    document.head.appendChild(styleSheet);
    
    window.print();
    
    // Clean up after the climax... (whispers)
    setTimeout(() => {
      document.head.removeChild(styleSheet);
    }, 1000);
  };

  const handleApplySettings = (settings: PrintSettingsValues) => {
    setPrintSettings(settings);
  };

  return (
    <div className="flex-1 flex flex-col bg-black p-4 h-full">
      <div className="flex items-center justify-between gap-2 bg-[#1a1a1a] border border-[#777] text-gray-400 text-sm px-4 py-2 rounded-t-lg">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <InfoIcon className="w-4 h-4 flex-shrink-0" />
          <span className="truncate" data-testid="text-status-message">{statusMessage}</span>
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
