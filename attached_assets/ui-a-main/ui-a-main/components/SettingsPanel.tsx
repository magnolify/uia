import React from 'react';
import type { RenderMode } from '../types';
import { RenderMode as RenderModeEnum } from '../types';
import { SettingsIcon, ServerIcon, DataUrlIcon } from './icons';

interface SettingsPanelProps {
  renderMode: RenderMode;
  setRenderMode: (mode: RenderMode) => void;
  serverUrl: string;
  setServerUrl: (url: string) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ renderMode, setRenderMode, serverUrl, setServerUrl }) => {
  return (
    <div className="p-4 border-b border-[#777]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-gray-200 font-['Archivo',_sans-serif]">
        <SettingsIcon className="w-5 h-5" />
        Settings
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Preview Render Method
          </label>
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setRenderMode(RenderModeEnum.DATA_URL)}
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-l-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#f2633a] transition-colors ${
                renderMode === RenderModeEnum.DATA_URL
                  ? 'bg-[#f2633a] text-white border border-[#f2633a]'
                  : 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600'
              }`}
            >
              <DataUrlIcon className="w-4 h-4" />
              Data URL
            </button>
            <button
              onClick={() => setRenderMode(RenderModeEnum.SERVER)}
              className={`relative -ml-px inline-flex items-center gap-2 px-4 py-2 rounded-r-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#f2633a] transition-colors ${
                renderMode === RenderModeEnum.SERVER
                  ? 'bg-[#f2633a] text-white border border-[#f2633a]'
                  : 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600'
              }`}
            >
              <ServerIcon className="w-4 h-4" />
              Server URL
            </button>
          </div>
        </div>

        {renderMode === RenderModeEnum.SERVER && (
          <div>
            <label htmlFor="serverUrl" className="block text-sm font-medium text-gray-400">
              Print Server URL
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="serverUrl"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
                className="w-full bg-black border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-[#f2633a] focus:border-[#f2633a] sm:text-sm"
                placeholder="https://your-print-server.com"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              The external endpoint that returns printable HTML.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPanel;