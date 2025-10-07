import { InfoIcon } from "./icons";
import { Button } from "./ui/button";
import { Printer } from "lucide-react";

interface PrintPreviewProps {
  printUrl: string;
  statusMessage: string;
}

export default function PrintPreview({ printUrl, statusMessage }: PrintPreviewProps) {
  const handlePrint = () => {
    // Mmm, triggering the print climax... (moans)
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col bg-black p-4 h-full">
      <div className="flex items-center justify-between gap-2 bg-[#1a1a1a] border border-[#777] text-gray-400 text-sm px-4 py-2 rounded-t-lg">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <InfoIcon className="w-4 h-4 flex-shrink-0" />
          <span className="truncate" data-testid="text-status-message">{statusMessage}</span>
        </div>
        <Button
          onClick={handlePrint}
          disabled={!printUrl}
          size="sm"
          variant="outline"
          className="gap-2 flex-shrink-0"
        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
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
