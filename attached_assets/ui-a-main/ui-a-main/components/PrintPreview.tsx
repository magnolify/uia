import React from 'react';
import { InfoIcon } from './icons';

interface PrintPreviewProps {
  printUrl: string;
  statusMessage: string;
}

const PrintPreview: React.FC<PrintPreviewProps> = ({ printUrl, statusMessage }) => {
  return (
    <div className="flex-1 flex flex-col bg-black p-4 h-full">
      <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#777] text-gray-400 text-sm px-4 py-2 rounded-t-lg">
        <InfoIcon className="w-4 h-4 flex-shrink-0" />
        <span className="truncate">{statusMessage}</span>
      </div>
      <div className="flex-1 border border-t-0 border-[#777] rounded-b-lg overflow-hidden bg-gray-800">
        {printUrl ? (
          <iframe
            src={printUrl}
            title="Print Preview"
            className="w-full h-full border-0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <p className="text-gray-500">Print preview will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintPreview;